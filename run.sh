#!/bin/bash
set -e

# Get the current directory
CURRENT_DIR=$(pwd)

# Open first terminal for fe-server
osascript -e "tell application \"Terminal\" to do script \"cd '$CURRENT_DIR/fe-server' && ./run.sh\""

# Open second terminal for game-server
osascript -e "tell application \"Terminal\" to do script \"cd '$CURRENT_DIR/game-server' && ./run.sh\""

echo "Opened 2 new terminals:"
echo "1. fe-server running at: $CURRENT_DIR/fe-server"
echo "2. game-server running at: $CURRENT_DIR/game-server"