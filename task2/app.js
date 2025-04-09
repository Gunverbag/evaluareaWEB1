function primeCifra(n) {
    if (n <= 1) return false //1 и меньше не простые

    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false; // проверка на чётность
    } return true
}

console.log(primeCifra(2));
console.log(primeCifra(7));
console.log(primeCifra(10));