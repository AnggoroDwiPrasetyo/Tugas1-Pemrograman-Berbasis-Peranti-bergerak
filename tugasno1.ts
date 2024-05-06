const maksPerulangan = 10;

for(let i = 1;i <= maksPerulangan; i++){
    let mulai =  (i -1) * 10 + 1;
    let selesai = i * 10
    let jumlah = 0;
    console.log(`Perulangan 10 ke-${i}:`);
    for(let j = mulai; j <= selesai; j++){
        if(i % 2 === 0){
            if(j %2 === 0){
                console.log(j);
                jumlah += j;
            }
        } else{
            if(j % 2 === 1){
                console.log(j);
                jumlah += j;
            }
        }
    }
    console.log(`-------------------------------`);
    console.log(`jumlah = ${jumlah}`);
}