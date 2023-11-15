function massivniOsishTartibidaJoylashtir(arr) {

    arr.sort(function (a, b) {
        return a - b;
    });


    console.log("O'sish tartibida jo'ylangan massiv: " + arr);
    return arr;
}


let massiv = [5, 2, 8, 1, 7];
massivniOsishTartibidaJoylashtir(massiv);
