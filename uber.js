fancyRide = (l, fares) => {

    let types = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"];

    let min = 0;
    let max = fares.length - 1;
    let mid;


    while (min <= max) {
        mid = Math.floor((max + min) / 2);

        console.log(`Min ${min}  Mid ${mid} Max ${max}`)

        if (fares[mid] * l === 20) {
            console.log("q")
            return types[mid];
        }

        if (fares[mid] * l > 20 && fares[mid - 1] * l < 20) {
            console.log("v")
            return types[mid - 1];
        }

        if (fares[mid] * l < 20) {
            min = mid + 1;
        }

        if (fares[mid] * l > 20) {
            max = mid - 1;
        }
    }

    // min == max
    console.log("z")
    return types[mid];
}


const fares = [0.7, 1, 1.3, 1.5, 1.7];
const l = 15;


console.log(fancyRide(l,fares));