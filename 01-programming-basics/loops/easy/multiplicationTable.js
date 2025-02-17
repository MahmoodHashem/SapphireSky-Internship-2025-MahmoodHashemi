console.log('Enter a number:');

process.stdin.on('data', (data) => {
    let num = parseInt(data)
    for(let i = 1; i <= num; i++){
        for(let j = 1; j <= num; j++){
            let product = i * j;
            process.stdout.write(product.toString().padStart(4, ' '));
        }
        console.log();
    }
   

    process.exit();
});
