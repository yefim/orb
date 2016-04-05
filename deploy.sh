#!/bin/bash
set -e

rm -rf out || exit 0;
mkdir out;

gulp build
mv CNAME out/CNAME
mv images out/images

cd out
git init
git config user.name "Travis CI"
git config user.email "yefim323@gmail.com"

git add .
git commit -m "Deploy to github pages"

git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
