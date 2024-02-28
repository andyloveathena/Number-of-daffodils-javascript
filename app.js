function PPDI() {
  for (i = 101; i <= 999; i++) {
    let unit = i % 10;
    let tens = Math.floor(i / 10) % 10;
    let hundres = Math.floor(i / 100) % 10;
    let sum = Math.pow(unit, 3) + Math.pow(tens, 3) + Math.pow(hundres, 3);
    if (sum == i) {
      console.log(i);
    }
  }
}

PPDI();
// 153
// 370
// 371
// 407
