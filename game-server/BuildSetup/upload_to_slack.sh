#!/bin/bash

# WebGL Multi-Game Unified Slack Upload Script
# Usage: ./upload_to_slack.sh <success_games> <failed_games> <upload_files> <channel_type>
# Example: ./upload_to_slack.sh "SpinWheel BalloonBuster" "MemoryGame" "file1.zip file2.zip" "shs"

set -e

SUCCESS_GAMES="$1"
FAILED_GAMES="$2"
UPLOAD_FILES="$3"
CHANNEL_TYPE="$4"  # "shs" or "mr"

if [ -z "$CHANNEL_TYPE" ]; then
    echo "Usage: $0 <success_games> <failed_games> <upload_files> <channel_type>"
    echo "Example: $0 'SpinWheel BalloonBuster' 'MemoryGame' 'file1.zip file2.zip' 'shs'"
    exit 1
fi

if [ -z "$SLACK_CHANNEL_ID" ]; then
    echo "Warning :: SLACK_CHANNEL_ID is not set. Returning safely."
    exit 0
fi

if [ -z "$SLACK_BOT_TOKEN" ]; then
    echo "Error: SLACK_BOT_TOKEN must be set"
    exit 1
fi

# Get workflow variables from environment
BUILD_MESSAGE="${BUILD_MESSAGE:-}"
RUN_NUMBER="${RUN_NUMBER:-unknown}"

# Get git information
BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo 'unknown')
COMMIT_FULL=$(git rev-parse HEAD 2>/dev/null || echo 'unknown')
COMMIT_SHORT=$(git rev-parse --short HEAD 2>/dev/null || echo 'unknown')
COMMIT_MESSAGE=$(git log -1 --pretty=format:'%s' 2>/dev/null || echo 'unknown')

# Count successful and failed builds
SUCCESS_COUNT=0
FAILURE_COUNT=0
SUCCESSFUL_BUILDS=""
FAILED_BUILDS=""

# Game emoji mapping
declare -A GAME_EMOJIS=(
    ["DiceRoll"]="🎲"
    ["Wordo"]="📝"
    ["BalloonBuster"]="🎈"
    ["MemoryGame"]="🧠"
    ["SpinWheel"]="🎯"
    ["Wordle"]="🔤"
    ["SuperChef"]="👨‍🍳"
)

# Process successful games
if [ -n "$SUCCESS_GAMES" ]; then
    for game in $SUCCESS_GAMES; do
        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
        emoji="${GAME_EMOJIS[$game]:-🎮}"
        SUCCESSFUL_BUILDS="$SUCCESSFUL_BUILDS- $emoji $game (WebGL)"$'\n'
    done
fi

# Process failed games
if [ -n "$FAILED_GAMES" ]; then
    for game in $FAILED_GAMES; do
        FAILURE_COUNT=$((FAILURE_COUNT + 1))
        emoji="${GAME_EMOJIS[$game]:-🎮}"
        FAILED_BUILDS="$FAILED_BUILDS- $emoji $game build failed"$'\n'
    done
fi

# Determine message header based on results
if [ $SUCCESS_COUNT -eq 0 ] && [ $FAILURE_COUNT -gt 0 ]; then
    # All failed
    MESSAGE_HEADER="<@U03RKEVNWS2> ❌ WebGL Multi-Game Build Failed! 💥"
elif [ $SUCCESS_COUNT -gt 0 ] && [ $FAILURE_COUNT -eq 0 ]; then
    # All successful
    MESSAGE_HEADER="<@U03RKEVNWS2> ✅ WebGL Multi-Game Build Successful! 🚀"
else
    # Mixed results
    MESSAGE_HEADER="<@U03RKEVNWS2> 🚀 WebGL Multi-Game Build Summary"
fi

# Build the main message
MESSAGE="$MESSAGE_HEADER

*Platform:* 🌐 WebGL
*Branch:* <https://github.com/XarpieLabs/game-platform-games-webgl-export/tree/$BRANCH_NAME|$BRANCH_NAME>
*Commit ID:* <https://github.com/XarpieLabs/game-platform-games-webgl-export/commit/$COMMIT_FULL|$COMMIT_SHORT>
*Commit Message:* $COMMIT_MESSAGE
*Run:* $RUN_NUMBER
*Build Time:* $(TZ='Asia/Kolkata' date '+%Y-%m-%d %H:%M:%S IST')
*Message:* $BUILD_MESSAGE"

# Only add Build Results section if there are failures
if [ $FAILURE_COUNT -gt 0 ]; then
    MESSAGE="$MESSAGE

*Build Results:* $SUCCESS_COUNT successful ✅, $FAILURE_COUNT failed ❌"
fi

# Only show success/failed sections if there are failures
if [ $FAILURE_COUNT -gt 0 ]; then
    # Add successful builds section if any (only when there are failures)
    if [ $SUCCESS_COUNT -gt 0 ]; then
        MESSAGE="$MESSAGE

*✅ Successful Builds:*
$SUCCESSFUL_BUILDS"
    fi

    # Add failed builds section
    if [ $SUCCESS_COUNT -eq 0 ]; then
        MESSAGE="$MESSAGE

*❌ All Builds Failed:*
$FAILED_BUILDS"
    else
        MESSAGE="$MESSAGE

*❌ Failed Builds:*
$FAILED_BUILDS"
    fi
fi

# Add games info for successful builds (only if all succeeded)
if [ $SUCCESS_COUNT -gt 0 ] && [ $FAILURE_COUNT -eq 0 ]; then
    MESSAGE="$MESSAGE

*🎮 Games Built:*
$SUCCESSFUL_BUILDS"
fi

# Add additional info for complete failure
if [ $SUCCESS_COUNT -eq 0 ] && [ $FAILURE_COUNT -gt 0 ]; then
    MESSAGE="$MESSAGE

*No build artifacts generated.*

Please check the workflow logs for detailed error information."
fi

# Function to get file size (cross-platform)
get_file_size() {
    if [[ "$OSTYPE" == "darwin"* ]]; then
        stat -f%z "$1"
    else
        stat -c%s "$1"
    fi
}

# Function to upload files with new API
upload_files_to_slack() {
    local message="$1"
    local files="$2"
    
    # If no files to upload, send text message only
    if [ -z "$files" ]; then
        local response=$(curl -s -X POST \
            -H "Authorization: Bearer $SLACK_BOT_TOKEN" \
            -H "Content-Type: application/json" \
            -d "{\"channel\": \"$SLACK_CHANNEL_ID\", \"text\": \"$message\"}" \
            "https://slack.com/api/chat.postMessage")
        
        if echo "$response" | grep -q '"ok":true'; then
            echo "✅ Sent WebGL build report (text only)"
        else
            echo "❌ Failed to send WebGL build report"
        fi
        return
    fi
    
    # Convert files string to array
    local file_array=($files)
    local files_json="["
    local upload_successful=false
    
    for file_path in "${file_array[@]}"; do
        if [ -f "$file_path" ]; then
            local file_name=$(basename "$file_path")
            local file_size=$(get_file_size "$file_path")
            
            echo "Uploading $file_name (size: $file_size bytes)..."
            
            # Get upload URL
            local upload_url_response=$(curl -s -X POST \
                -H "Authorization: Bearer $SLACK_BOT_TOKEN" \
                -H "Content-Type: application/x-www-form-urlencoded" \
                -d "filename=$file_name" \
                -d "length=$file_size" \
                "https://slack.com/api/files.getUploadURLExternal")
            
            if echo "$upload_url_response" | grep -q '"ok":true'; then
                local upload_url=$(echo "$upload_url_response" | python3 -c "
import sys, json
try:
    data = json.load(sys.stdin)
    print(data.get('upload_url', ''))
except:
    pass
")
                local file_id=$(echo "$upload_url_response" | python3 -c "
import sys, json
try:
    data = json.load(sys.stdin)
    print(data.get('file_id', ''))
except:
    pass
")
                
                if [ -n "$upload_url" ] && [ -n "$file_id" ]; then
                    # Upload file content
                    local upload_response=$(curl -s -X POST -F "file=@$file_path" "$upload_url")
                    
                    # Add to files JSON
                    if [ "$files_json" != "[" ]; then
                        files_json="$files_json,"
                    fi
                    files_json="$files_json{\"id\":\"$file_id\",\"title\":\"$file_name\"}"
                    upload_successful=true
                    
                    echo "✅ Uploaded $file_name"
                else
                    echo "❌ Failed to get upload URL for $file_name"
                fi
            else
                echo "❌ Failed to get upload URL for $file_name"
            fi
        else
            echo "⚠️  File not found: $file_path"
        fi
    done
    
    files_json="$files_json]"
    
    if [ "$upload_successful" = true ]; then
        # Complete upload with message
        local complete_data="{
            \"files\": $files_json,
            \"channel_id\": \"$SLACK_CHANNEL_ID\",
            \"initial_comment\": \"$message\"
        }"
        
        local complete_response=$(curl -s -X POST \
            -H "Authorization: Bearer $SLACK_BOT_TOKEN" \
            -H "Content-Type: application/json" \
            -d "$complete_data" \
            "https://slack.com/api/files.completeUploadExternal")
        
        if echo "$complete_response" | grep -q '"ok":true'; then
            echo "✅ Sent WebGL build report with attachments"
        else
            echo "❌ Failed to complete file upload"
            # Fallback to text message
            curl -s -X POST \
                -H "Authorization: Bearer $SLACK_BOT_TOKEN" \
                -H "Content-Type: application/json" \
                -d "{\"channel\": \"$SLACK_CHANNEL_ID\", \"text\": \"$message\"}" \
                "https://slack.com/api/chat.postMessage"
        fi
    else
        # No files uploaded successfully, send text message
        curl -s -X POST \
            -H "Authorization: Bearer $SLACK_BOT_TOKEN" \
            -H "Content-Type: application/json" \
            -d "{\"channel\": \"$SLACK_CHANNEL_ID\", \"text\": \"$message\"}" \
            "https://slack.com/api/chat.postMessage"
        echo "✅ Sent WebGL build report (text only - file uploads failed)"
    fi
}

# Send the unified message
echo "📤 Sending WebGL multi-game build report to Slack ($CHANNEL_TYPE channel)..."
echo "Success games: $SUCCESS_GAMES"
echo "Failed games: $FAILED_GAMES"
echo "Upload files: $UPLOAD_FILES"

upload_files_to_slack "$MESSAGE" "$UPLOAD_FILES"
echo "✅ WebGL build report sent successfully!"