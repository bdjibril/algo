const kLengthSubSequence = (arr, k) => {
    if (arr.length === 0) return
    if (k === 1) return [arr[0]]

    let resTable = []

    for (let i = 0; i < arr.length; i++) {
        resTable[i] = [arr[i]]
    }

    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if(arr[i] > arr[j]){
                resTable[i] =  [...resTable[j]]
                resTable[i].push(arr[i])

                if(resTable[i].length === k) return resTable[i]
            }
        }
    }

    return
}

console.log(kLengthSubSequence([10, 1, 4, 8, 2, 9], 3))
console.log(kLengthSubSequence([10, 1, 4, 8, 2, 9], 4))
console.log(kLengthSubSequence([10, 1, 4, 8, 2, 9], 5))

