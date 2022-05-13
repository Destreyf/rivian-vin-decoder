#!/bin/bash

NODE_ENV=production npm run build && \
cp ./dist/index.html ./dist/404.html && \
git add -A ./dist && \
git commit -m "Build" && \
git subtree push --prefix dist origin gh-pages