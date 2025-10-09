#!/bin/bash

set -e

npm install

npm run build

cd fe-server
source install.sh