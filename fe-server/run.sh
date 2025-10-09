#!/bin/bash

set -e

# Kill processes running on port 3010 (ignore error if not found)
lsof -ti tcp:3010 | xargs kill -9 2>/dev/null || true

# Activate virtual environment
source ./.venv/bin/activate

echo "Starting Build server at http://0.0.0.0:3010"
uvicorn main:app --host 0.0.0.0 --port 3010 --reload
