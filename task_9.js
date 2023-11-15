function palindromeTekshir(son) {
    let sonStr = son.toString();

    let teskari = sonStr.split('').reverse().join('');

    return sonStr === teskari;
}

let n = 12321;
console.log(palindromeTekshir(n));