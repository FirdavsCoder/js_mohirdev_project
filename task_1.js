let a = 0
let b = 5
let c = 8

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
