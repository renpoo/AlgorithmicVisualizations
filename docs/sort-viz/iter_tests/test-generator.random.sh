#! /bin/bash
TIMEFORMAT='R:%R (S:%S U:%U P:%P%%)'

test_commands=("code_12_1" "code_12_2" "code_12_3" "code_12_4" "code_12_5")
# test_commands=("./code_12_1")

MAX_VALUE=(100 500 1000 10000 100000)

for maxval in "${MAX_VALUE[@]}"
do
    rm -f ./code_12_?

    CFLAGS="-DMAX_VALUE=${maxval} "

    for tcmd in "${test_commands[@]}"
    do
        clang++ $CFLAGS -ggdb3 -O0 -o $tcmd $tcmd.cpp
    done


    # sleep 10


    # N=$1
    N=$maxval

    rm test_random.$N.txt
    rm test_random.tmp

    echo $N > test_random.$N.txt
    for i in $(seq $N)
    do
        echo $(($RANDOM % $N)) >> test_random.$N.txt;
    done

    for tcmd in "${test_commands[@]}"
    do
        for i in `seq 1 10`
        do
            echo "TRIAL:$i ($tcmd) ($N) (random)"; time (./$tcmd < test_random.$N.txt;)
        done
    done

done