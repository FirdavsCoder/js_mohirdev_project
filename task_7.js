function mukammalSonniTekshir(a) {
    let son = Math.abs(a);

    let yigindi = 0;
    for (let i = 1; i < son; i++) {
        if (son % i === 0) {
            yigindi += i;
        }
    }

    let mukammal = (yigindi === son);

    console.log(a + " soni mukammal sonmi: " + mukammal);
    return mukammal;
}


let a = 6;
mukammalSonniTekshir(a);
