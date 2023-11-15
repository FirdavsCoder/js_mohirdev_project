function engKattaIkkonchi(arr) {

    arr.sort(function (a, b) {
        return b - a;
    });


    let engKattaIkkonchi = arr[1];


    console.log("Massivdagi eng katta ikkinchi element: " + engKattaIkkonchi);
    return engKattaIkkonchi;
}


let massiv = [5, 2, 8, 1, 7];
engKattaIkkonchi(massiv);
