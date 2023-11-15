function sonlarniTopla(a) {
    let yigindi = 0;
    for (let i = 0; i <= a; i++) {
        yigindi += i;
    }

    console.log("0 dan " + a + " gacha bo'lgan sonlar yig'indisi: " + yigindi);
    return yigindi;
}


let a = 5;
let yigindi = sonlarniTopla(a);
console.log("a soni: " + a);
