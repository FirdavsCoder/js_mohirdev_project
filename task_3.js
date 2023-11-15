let yil = 2023
let kabisaYil = (yil % 4 === 0 && (yil % 100 !== 0 || yil % 400 === 0));
console.log(kabisaYil);
