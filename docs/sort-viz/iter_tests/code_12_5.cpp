#include <iostream>
#include <vector>
using namespace std;


long counter = 0;


#ifndef MAX_VALUE
#define MAX_VALUE 100000
#endif


const int MAX = MAX_VALUE; // ここでは配列の値は MAX_VALUE 未満とする

// バケットソート
void BucketSort(vector<int> &a) {
    int N = (int)a.size();
    
    // 各要素の個数をカウントする
    // num[v]: v の個数
    vector<int> num(MAX, 0);
    for (int i = 0; i < N; ++i, counter++) {
        ++num[a[i]]; // a[i] をカウントする
    }

    // num の累積和をとる
    // sum[v]: v 以下の値の個数
    // 値 a[i] が全体の中で何番目に小さいかを求める
    vector<int> sum(MAX, 0);
    sum[0] = num[0];
    for (int v = 1; v < MAX; ++v, counter++) {
        sum[v] = sum[v - 1] + num[v];
    }

    // sum をもとにソート処理
    // a2: a をソートしたもの
    vector<int> a2(N);
    for (int i = N - 1; i >= 0; --i, counter++) {
        a2[--sum[a[i]]] = a[i];
    }
    a = a2;
}

int main() {
    // 入力
    int N; // 要素数
    cin >> N;
    vector<int> a(N);
    for (int i = 0; i < N; ++i) cin >> a[i];

    // バケットソート
    BucketSort(a);


    cout << "count: " << counter << "\n";
}
