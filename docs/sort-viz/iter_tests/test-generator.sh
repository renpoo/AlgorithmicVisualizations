#! /bin/bash
TIMEFORMAT='R:%R (S:%S U:%U P:%P%%)'

test_commands=("./code_12_1" "./code_12_2" "./code_12_3" "./code_12_4" "./code_12_5")

N=$1

rm test_shuffle.$N.txt

echo $N > test_shuffle.$N.txt
for i in $(seq $N)
do
    echo $(($RANDOM % $N)) >> test_shuffle.$N.txt;
done

for tcmd in "${test_commands[@]}"
do
    for i in `seq 1 10`
    do
        echo "TRIAL:$i ($tcmd)"; time ($tcmd < test_shuffle.$N.txt;)
    done
done