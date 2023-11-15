function raqamlarniChiqar(son) {

    let raqamlar = son.toString().split('').map(Number);

    console.log(son + " -> raqamlari soni: " + raqamlar.length);
}

let son = 123;
raqamlarniChiqar(son);
