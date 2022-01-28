// Porting from: (by Renpoo)
// https://github.com/drken1215/book_algorithm_solution/


function insertSort(items, num) {

    var v = -999;
    for (i = 0; i < items.length; ++i) {
        v = items[i];

        var j = i;
        for (; j > 0; --j) {
            if (items[j - 1] > v) {
                items[j] = items[j - 1];
                steps[num].push({ data: items.slice(), left: j - 1, right: j, flag: true });
                counter[num]++;

            } else break;
        }

        items[j] = v;
        steps[num].push({ data: items.slice(), left: i, right: j, flag: true });
        counter[num]++;
    }
}
