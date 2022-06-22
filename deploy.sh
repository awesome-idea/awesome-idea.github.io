#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

rm -rf ./docs/.vuepress/dist

git add .
git commit -m 't'
git push origin main