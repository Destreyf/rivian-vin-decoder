#!/bin/bash

NODE_ENV=production npm run build

git subtree push --prefix dist origin gh-pages