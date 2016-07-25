#!/bin/bash
set -e

rm -rf dist || exit 0;
mkdir dist;

webpack -p --config webpack-prod.config.js

mv CNAME dist/CNAME
mv favicons/* dist/

cd dist
git init
git config user.name "Travis CI"
git config user.email "yefim323@gmail.com"

git add .
git commit -m "Deploy to github pages"

git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
