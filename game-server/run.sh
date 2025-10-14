#!/bin/bash

set -e

# Kill processes running on ports 8040 (ignore error if not found)
lsof -ti tcp:3011 | xargs kill -9 2>/dev/null || true

source ./.venv/bin/activate

echo "Starting Unity Host server at http://127.0.0.1:3011"
uvicorn main:app --host 0.0.0.0 --port 3011 --reload
