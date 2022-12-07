const numbers = [0, 12, 1, 10, 13, 16, 2, 1, 8, 10];

nbf = 0

function sumNumbers (){
    numbers.forEach(nb => {
        nbf += nb
    })
    console.log(nbf)
}

sumNumbers()
