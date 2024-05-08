#!/bin/sh
echo "Installing bash..."
apk add bash

echo "Installing dependiencies..."
yarn install

if [ $ENV = "prod" ]; then
  echo "------------ PRODUCTION MODE ------------"
  yarn build
  yarn start
else
  echo "------------ DEVELOPMENT MODE ------------"
  pip install -r requirements.txt
  uvicorn main:app --host 0.0.0.0 --port 8000
fi



