const MAX = 10 + data_size;

function bucketSort(items, num) {
    const N = items.length;

    var number = new Array(MAX).fill(0);
    for (i = 0; i < items.length; ++i) {
        ++number[items[i]];
    }

    var sum = new Array(MAX).fill(0);
    for (v = 1; v < MAX; ++v) {
        sum[v] = sum[v - 1] + number[v];
    }

    var items2 = items.map(d => d);  
    for (i = items.length - 1; i >= 0; --i) {
        items2[--sum[items[i]]] = items[i];

        steps[num].push({ data: items2.slice(), left: i, right: sum[items[i]], flag: false });
        counter[num]++;
    }

    items = items2;
    steps[num].push({ data: items2.slice(), left: 0, right: items.length, flag: false });
    counter[num]++;
}
