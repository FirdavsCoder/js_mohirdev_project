function sonHonali(a) {
    let son = Math.abs(a);
    if (son >= 1 && son <= 9) {
      return 1
    } else if (son >= 10 && son <= 99) {
      return 2
    } else if (son >= 100 && son <= 999) {
      return 3
    } else {
      return "Berilgan son 1 - 999 oraliqida emas";
    }
  }
  
  console.log(sonHonali(5));   
  console.log(sonHonali(45));  
  console.log(sonHonali(789)); 
  console.log(sonHonali(-25));
  console.log(sonHonali(1000));
  