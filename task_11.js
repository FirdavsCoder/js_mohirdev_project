function teskariQil(arr) {
    let teskari = arr.slice().reverse();

    console.log("Asl massiv: " + arr);
    console.log("Teskari massiv: " + teskari);

    return teskari;
}

let originalMassiv = [1, 2, 3, 4, 5];
teskariQil(originalMassiv);
