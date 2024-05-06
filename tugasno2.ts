const nim = `043352826`;
const lastDigit = parseInt(nim.slice(-2));
let mulai = lastDigit; 
let i = 0;

do {
    console.log(mulai);
    mulai++;
    i++;
} while (i <= 26);
console.log(mulai)
mulai++;
i++;