function sonBorliginiTopish(n, massiv) {
    let borlik = 0;
    for (let i = 0; i < massiv.length; i++) {
      if (massiv[i] === n) {
        borlik++;
      }
    }
  
    console.log("Massivda " + n + " sonidan " + borlik + " ta bor.");
  
    return borlik;
  }
  
  let n = 4;
  let massiv = [2, 4, 6, 4];
  sonBorliginiTopish(n, massiv);
  