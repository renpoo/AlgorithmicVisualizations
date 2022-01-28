// Porting from: (by Renpoo)
// https://github.com/drken1215/book_algorithm_solution/


function quickSort(items, left, right, num) {

    if (right - left <= 1) return;

    var pivot_index = Math.floor((left + right) / 2);
    var pivot = items[pivot_index];

    swap(items, pivot_index, right - 1);
    steps[num].push({ data: items.slice(), left: pivot_index, right: right - 1, flag: true });
    counter[num]++;

    var i = left;
    for (j = left; j < right - 1; ++j) {
        if (items[j] < pivot) {
            swap(items, i, j);
            steps[num].push({ data: items.slice(), left: i, right: j, flag: true });
            counter[num]++;
            i++;
        }
    } 

    swap(items, i, right - 1);
    steps[num].push({ data: items.slice(), left: i, right: right - 1, flag: true });
    counter[num]++;

    quickSort(items, left, i, num);
    quickSort(items, i + 1, right, num);
}


function swap(items, i, j) {
    var tmp = items[i];
    items[i] = items[j];
    items[j] = tmp;
}