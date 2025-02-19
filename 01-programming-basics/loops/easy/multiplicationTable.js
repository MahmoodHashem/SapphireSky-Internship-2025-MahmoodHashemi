console.log('Enter a number:');

process.stdin.on('data', (data) => {
    let num = parseInt(data)
    for(let i = 1; i <= 10; i++){
        let product = i * num
            process.stdout.write(product.toString().padStart(4, ' '));
        
        
    }
   

    process.exit();
});
