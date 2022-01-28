#! /bin/bash
TIMEFORMAT='R:%R (S:%S U:%U P:%P%%)'

test_commands=("./code_12_1" "./code_12_2" "./code_12_3" "./code_12_4" "./code_12_5")

N=$1

rm test_random.$N.txt
rm test_random.tmp

echo $N > test_random.$N.txt
array=`seq 1 $N`
for item in "${array[@]}"; do echo "$item" >> test_random.tmp; done
sort -R test_random.tmp >> test_random.$N.txt


for tcmd in "${test_commands[@]}"
do
    for i in `seq 1 10`
    do
        echo "TRIAL:$i ($tcmd)"; time ($tcmd < test_random.$N.txt;)
    done
done