const numbers = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

nbt = false
nbf = 0
nbf2 = 0
nbi = 0

function avg (){
    numbers.forEach(nb => {


        if(typeof nb == 'number' ){
            nbt = true
        } else {
            nbt = false
        }

        if(nbt == true){
            nbf += nb
            nbi++
        } else {
            nbf += 0
        }
    })
    nbf2 = nbf/nbi
    
    console.log(nbf2)
}

avg()
