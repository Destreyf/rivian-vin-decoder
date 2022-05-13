#!/bin/bash

NODE_ENV=production npm run build && \
git add -A ./dist && \
git commit -am "Build" && \
git subtree push --prefix dist origin gh-pages