function ikkitaElementYigindisi(arr, a) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === a) {
                console.log(arr[i] + " + " + arr[j] + " = " + a);
                return true;
            }
        }
    }
    console.log("Uchib ketdi. Uchib ketgan sana: " + a);
    return false;
}


let a = 10;
let array = [2, 4, 6, 8];
ikkitaElementYigindisi(array, a);
