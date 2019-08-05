const numberSwap = (num1, num2) => {
    for (var i = 0; i < 32; i++) {
        var mask = 1 << i
        if ((num1 & mask) !== (num2 & mask)) {
            num1 ^= mask
            num2 ^= mask
            console.log(num1, num2)
        }
    }
    console.log("Final Result is: ", num1, num2)
}

numberSwap(34, 95)