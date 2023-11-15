let a = prompt("a ni kiriting: ");
let b = prompt("b ni kiriting: ");
let c = prompt("c ni kiriting: ");

function yasash(a, b, c) {
    let uchXonaliSon = 0;  
    if (a == 0 || b == 0 || c == 0 || a < 0 || b < 0 || c < 0) {
    uchXonaliSon = 0;
    } else {
    uchXonaliSon = parseInt(a.toString().charAt(0) + b.toString().charAt(0) + c.toString().charAt(0));
    }
    console.log("Uch xonali son: " + uchXonaliSon);
}

yasash(a, b, c);
