// Porting from: (by Renpoo)
// https://github.com/drken1215/book_algorithm_solution/


function mergeSort(items, left, right, num) {

    if (right - left == 1) return;

    var mid = left + Math.floor((right - left) / 2);

    mergeSort(items, left, mid, num);

    steps[num].push({ data: items.slice(), left: left, right: right - 1, flag: false });
    counter[num]++;

    mergeSort(items, mid, right, num);

    steps[num].push({ data: items.slice(), left: left, right: right - 1, flag: false });
    counter[num]++;


    var buf = [];

    for (i = left; i < mid; ++i) {
        buf.push(items[i]);
    }
    for (i = right - 1; i >= mid; --i) {
        buf.push(items[i]);
    }


    index_left = 0;
    index_right = buf.length - 1;


    for (i = left; i < right; ++i) {

        if (buf[index_left] <= buf[index_right]) {
            items[i] = buf[index_left++];
        } else {
            items[i] = buf[index_right--];
        }
    }

    steps[num].push({ data: items.slice(), left: left, right: right - 1, flag: false });
    counter[num]++;
}


