#!/bin/bash

set -e

if [ ! -f requirements.txt ]; then
    echo "requirements.txt not found. Please ensure you are in the correct directory."
    exit 1
fi

if [ ! -d ./.venv ]; then
    echo "Creating virtual environment..."
    python3 -m venv ./.venv
else
    echo "Virtual environment already exists. Skipping creation."
fi

echo "Activating virtual environment..."
source ./.venv/bin/activate

echo "Installing requirements..."
pip install --upgrade pip
pip install -r requirements.txt

chmod +x run.sh

echo "Deactivating virtual environment."
deactivate
