function sockMerchant(n, ar) {
    var set1 = new Set();
    var pairs = 0;
    for (var i=0; i < n; i++){
        if (set1.has(ar[i])) {
            pairs++;
            set1.delete(ar[i]);
            // console.log("pairs", pairs)
            // console.log("deleted", ar[i])
        } else {
            set1.add(ar[i]);
            // console.log("added", ar[i])
        }

    }

    return pairs;
}

console.log(sockMerchant(9,[10, 20, 20, 10, 10, 30, 50, 10, 20]))