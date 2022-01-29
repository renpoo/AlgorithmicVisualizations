#! /bin/bash

rm result.random.txt;
./test-generator.random.sh 100 1>> result.random.txt 2>> result.random.txt

rm result.shuffle.txt;
./test-generator.shuffle.sh 100 1>> result.shuffle.txt 2>> result.shuffle.txt