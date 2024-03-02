#!/bin/bash

mkdir tmp
mv dist/index.* tmp

rm -rf dist
mv tmp dist
