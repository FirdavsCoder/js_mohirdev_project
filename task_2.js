let son = 5;

let haftaKunlari = ["Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba", "Yakshanba"];

let haftaKuni = (son === 1) ? "Dushanba" :
                 (son === 2) ? "Seshanba" :
                 (son >= 3 && son <= 7) ? haftaKunlari[son - 1] : "none";

console.log(haftaKuni);
