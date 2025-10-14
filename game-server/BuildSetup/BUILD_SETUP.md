# WebGL Multi-Game Build Setup Guide

Unity WebGL CI/CD pipeline for multiple mini-games with Slack integration.

**Features:** Automated WebGL builds for multiple Unity games via GitHub Actions with detailed progress tracking.

## System Requirements

- **Unity 2022.3.62f1** (M4 Mac runners only)
- **GitHub Actions** with matrix strategy for parallel builds

## Supported Games

| Game          | Repository                                                         | Branch     | Emoji |
| ------------- | ------------------------------------------------------------------ | ---------- | ----- |
| DiceRoll      | [p-mini-dice-roll](https://github.com/XarpieLabs/p-mini-dice-roll) | main       | 🎲    |
| Wordo         | [p-mini-wordo](https://github.com/XarpieLabs/p-mini-wordo)         | main       | 📝    |
| BalloonBuster | [p-mini-balloon](https://github.com/XarpieLabs/p-mini-balloon)     | main       | 🎈    |
| MemoryGame    | [p-mini-memory](https://github.com/XarpieLabs/p-mini-memory)       | main       | 🧠    |
| SpinWheel     | [p-mini-spin](https://github.com/XarpieLabs/p-mini-spin)           | main       | 🎯    |
| Wordle        | [p-mini-wordle](https://github.com/XarpieLabs/p-mini-wordle)       | main       | 🔤    |
| SuperChef     | [superchef](https://github.com/XarpieLabs/superchef)               | webgl-port | 👨‍🍳    |

## Quick Setup

### 1. Slack Bot Setup

1. Create bot at [Slack API](https://api.slack.com/apps)
2. Add scopes: `chat:write`, `files:write`, `channels:read`, `search:read`
3. Copy bot token (starts with `xoxb-`)
4. Get channel ID: Right-click channel → View details → Copy ID

### 2. GitHub Secrets

Add to `Settings → Secrets and variables → Actions`:

- **SLACK_BOT_TOKEN**: Your bot token
- **SLACK_CHANNEL_ID**: The Slack channel ID for build uploads

## How to Use

### Running WebGL Multi-Game Builds

1. Go to **GitHub Actions** → **Build WebGL (Multi-Game)**
2. Click **"Run workflow"**
3. Configure the build:
   - **Games**: Choose which games to build
     - `"all"` - Build all supported games
     - `"SpinWheel BalloonBuster"` - Build specific games (space-separated)
     - `"SuperChef"` - Build single game
   - **Build Message**: Optional description for the build
   - **Build Runner**: Select the mac runner
   - **Upload to Slack**: Enable/disable Slack notifications

### Build Output

- Each game produces a WebGL build ZIP file
- ZIP contains: `index.html`, `Build/` folder, `TemplateData/` folder
- Single Slack message with all successful builds attached
- Build status and git information included

## Adding New Games

To add a new game to the build system:

1. **Update Workflow** (`.github/workflows/build-main.yml`):
   ```yaml
   GAME_REPOS: |
     NewGame:XarpieLabs/new-game-repo:branch-name
   ```
2. **Update Game List**:

   ```bash
   ALL_GAMES="DiceRoll Wordo ... NewGame"
   ```

3. **Update Slack Script** (`BuildSetup/upload_to_slack.sh`):
   ```bash
   ["NewGame"]="🎮"  # Add appropriate emoji
   ```
