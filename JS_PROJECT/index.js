//PERMET DE GERER LE MOTEUR DU JEU
class Game{
    constructor(){
        this.computerSequence = []
        this.userSequence = []
        this.points = 0
        this.lenghtSequence = 4
        // this.generateSequence()
        // this.isLastElementValid()
    }

    generateSequence(){
        this.computerSequence = []
        while (this.computerSequence.length != this.lenghtSequence){
            //r signifie la valeur aléatoire pour un élement de la séquence
                var rmin = 0
                var rmax = 4
                var rnb = Math.floor(Math.random()*(rmax-rmin) + rmin)
                this.computerSequence.push(rnb)
            }
        console.log("GENERARED SEQUENCE ", this.computerSequence)
    }

    isLastElementValid(){
        if(this.userSequence[this.userSequence.length-1 ]===this.computerSequence[this.userSequence.length-1]){
            return true
        }
        return false
        // if(this.userSequence.length == this.computerSequence.length){
        //     // this.userSequence.forEach(nb =>{
        //     //     console.log(nb)
        //     //     console.log("tee")
        //     // })
        //     console.log(this.userSequence)
        // }
    }
}   


class Display{
    constructor(){
        this.game = new Game()
        this.buttons = document.querySelectorAll('.button')
        this.enterButton = document.getElementById('enter')
        this.attachEvents()
    }

    attachEvents(){
        this.buttons.forEach((button,i)=>{
            button.addEventListener("click",()=>{
                //console.log(i)
                this.game.userSequence.push(i)
                console.log("USER ARRAY ", this.game.userSequence)
            })
        })
        this.enterButton.addEventListener('click',()=>{
            this.game.generateSequence()
            this.playSequence()
        })
    }

    playSequence(){
        let index=0
        const id = setInterval(()=>{
            console.log(this.game.computerSequence[index])
            index++
            if(index>=this.game.computerSequence.length){
                clearInterval(id)
            }
        }, 1000)
    }
}
    
const display = new Display()



//class eventListener$(){
    //  forEach.userSequence(element, =>{
        //      if(str nb "")
        //})
        
        // //définisons nos quatre boutons
        // let red = document.getElementById("red")
        // let yellow = document.getElementById("yellow")
        // let green = document.getElementById("green")
        // let blue = document.getElementById("blue")
        
        // let redS = document.querySelector("#red")
        // let yellowS = document.querySelector("#yellow")
        // let greenS = document.querySelector("#green")
        // let blueS = document.querySelector("#blue")
        
        
        // //l signifie la longueur de la séquence
        // var l = 4
        // //si user à bon, incrémenter de 1 la longueur
        // //sinon affichage "perdu" + retour à 4 si perdu
        
        // //tableau de données où sont stockées les valeurs aléatoires de la séquence en fonction de la longueur
        // //[rnb, rnb, rnb, rnb] longueur en fonction de l
        // const arraySequence = []
        
        // function randomNB(){
        //     while (arraySequence.length != l){
        //         //r signifie la valeur aléatoire pour un élement de la séquence
        //         var rmin = 0
        //         var rmax = 4
        //         var rnb = Math.floor(Math.random()*(rmax-rmin) + rmin)
        //         arraySequence.push(rnb)
        //     } 
        // }
        // randomNB()  
        // console.log(arraySequence)
        
        // //fct permettant de mettre le jeu en attente pendant un temps donné
        // function sleep(milliseconds) {
        //     const date = Date.now();
        //     let currentDate = null;
        //     do {
        //       currentDate = Date.now();
        //     } while (currentDate - date < milliseconds);
        //   }
        
        // //affichage de la séquence dans la console
        // if(arraySequence.length == l){
        //     for(i=0; i<=l; i++){
        //         // sleep(1000)
        //         console.log(arraySequence[i-1])
        //         // setTimeout(display(), 1000)
        //     }
        //     display();
        // }
        
        // function display(){
        //     arraySequence.forEach(element => {
        //         pos = 0
        //         if(element == 0){
        //             redS.style.backgroundColor = "white";
        //             setTimeout(() => {  redS.style.backgroundColor = "red"; }, 1000);
        //         }else if(element == 1){
        //             blueS.style.backgroundColor = "white";
        //             setTimeout(() => {  blueS.style.backgroundColor = "blue"; }, 1000);
        //         }else if(element == 2){
        //             yellowS.style.backgroundColor = "white";
        //             setTimeout(() => {  yellowS.style.backgroundColor = "yellow"; }, 1000);
        //         }else if(element == 3){
        //             greenS.style.backgroundColor = "white";
        //             setTimeout(() => {  greenS.style.backgroundColor = "green"; }, 1000);
        //         }
        //     }
        //     )
        // }
        
        // //définissions du tableau de données du joueur
        // const arraySequencePlayer = []
        
        // //valeur que le joueur attribue quand il appuie sur une case
        // pnb = 0
        
        // //appuie sur la case rouge
        // red.addEventListener('click', function() {
        //     pnb = 0
        //     console.log(pnb)
        // })
        
        // blue.addEventListener('click', function() {
        //     pnb = 1
        //     console.log(pnb)
        // })
        
        // yellow.addEventListener('click', function() {
        //     pnb = 2
        //     console.log(pnb)
        // })
        
        // green.addEventListener('click', function() {
        //     pnb = 3
        //     console.log(pnb)
        // })