#!/bin/bash

sed -i "s|\('./[^']*\)\.js');|\1.cjs');|" dist/*.cjs
cp src/*.json dist/
cp package.json dist/
