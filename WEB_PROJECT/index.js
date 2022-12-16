//PERMET DE GERER LE MOTEUR DU JEU
class Game{
    constructor(){
        this.computerSequence = []
        this.userSequence = []
        this.lives = 3
        this.level = 1
        this.lenghtSequence = 4
        // this.generateSequence()
        // this.isLastElementValid()
    }
    //----------------------------------------------------------------------------------------------------------------------------
    generateSequence(){
        this.computerSequence = []
        while (this.computerSequence.length != this.lenghtSequence){
            //r signifie la valeur aléatoire pour un élement de la séquence
            var rmin = 0
            var rmax = 4
            var rnb = Math.floor(Math.random()*(rmax-rmin) + rmin)
            this.computerSequence.push(rnb)
        }
        console.log("GENERATED SEQUENCE ", this.computerSequence)
        this.lives = 3
        $("#points").replaceWith('<div class="button2" id="points"><a style="color:white" href="https://www.youtube.com/watch?v=xvFZjo5PgG0">Remaining Lives = 3</a></div>')
    }
    //----------------------------------------------------------------------------------------------------------------------------
    isLastElementValid(){
        if(this.userSequence[this.userSequence.length-1 ]===this.computerSequence[this.userSequence.length-1]){
            return true
        }else{
            this.userSequence.pop()
            var audio2 = new Audio('roblox.mp3');
            audio2.play();
            return false
        }
    }
    //----------------------------------------------------------------------------------------------------------------------------
    nextRound(){
        console.log("==>Next Round !")
        this.lenghtSequence++
        this.generateSequence()
        this.userSequence=[]
        this.level += 1
        console.log("LEVEL = ", this.level)
        $(".title").replaceWith(`<div class="title">Simon's Game, Level = ` + this.level + `</div>`)
        $(".title").css("color", "white")
    }
    // console.log(this.userSequence, this.computerSequence)
    //----------------------------------------------------------------------------------------------------------------------------
    enterNewElementInUserSequence(i){
        if(this.computerSequence.length>this.userSequence.length){
            this.userSequence.push(i)
            return this.isLastElementValid()
        }
    }   
    //-------------------------------------------------------------------------------
    isUserSequenceFull(){
        if(this.userSequence.length === this.computerSequence.length){
            return true
        }
        return false
    }
}

//----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------

class Display{
    constructor(){
        this.game = new Game()
        this.buttons = document.querySelectorAll('.button')
        this.enterButton = document.getElementById('enter')
        this.circle = document.querySelector(".center")
        this.attachEvents()
        this.music()
        this.doNotClick()
        this.buttonBehaviour()
    }
    //----------------------------------------------------------------------------------------------------------------------------    
    attachEvents(){
        this.buttons.forEach((button,i)=>{
            button.addEventListener("click",()=>{
                var audio8 = new Audio('click.mp3');
                audio8.play()
                if(this.game.enterNewElementInUserSequence(i)===true){
                    console.log(`${i} is valid`)
                    if(this.game.isUserSequenceFull()){
                        this.game.nextRound()
                        this.playSequence()
                        var audio7 = new Audio('up.mp3');
                        audio7.play()
                    }
                }else{
                    console.log("not valid")
                    this.game.lives -= 1
                    $("#points").replaceWith('<div class="button2" id="points"><a style="color:white" href="https://www.youtube.com/watch?v=xvFZjo5PgG0">Remaining Lives = '+ this.game.lives +'</a></div>')
                    console.log(this.game.lives)
                    if(this.game.lives<=0){
                        $(".gameover").css("z-index", "1")
                        var audio3 = new Audio('lose.mp3');
                        audio3.play();
                        this.game.lives=3
                        this.game.level = 1
                        $(".title").replaceWith(`<div class="title">Simon's Game, Level = ` + this.game.level + `</div>`)
                        this.game.computerSequence = []
                        this.game.lenghtSequence = 4
                    }
                }
                console.log("USER ARRAY ", this.game.userSequence)
            })
        })
            this.enterButton.addEventListener('click',()=>{
                this.game.userSequence = []
                this.game.generateSequence()
                var audio4 = new Audio('go.mp3');
                audio4.play();
                this.playSequence()
                $(".gameover").css("z-index", "-1")
                
        })
    }
//----------------------------------------------------------------------------------------------------------------------------
    playSequence(){
        let index=-1
        
        const id = setInterval(()=>{
            // console.log(this.game.computerSequence[index])
            index++
            if(this.game.computerSequence[index]==0){
                var audio8 = new Audio('ding.mp3');
                audio8.play();
                $("#red").css("background-color", "white")
                setTimeout(function(){
                    $("#red").css("background-color", "#5BC0BE")
                },300)
                
            }else if(this.game.computerSequence[index]==1){
                var audio8 = new Audio('ding.mp3');
                audio8.play();
                $("#yellow").css("background-color", "white")
                setTimeout(function(){
                    $("#yellow").css("background-color", "#3A506B")
                },300)
                
            }else if(this.game.computerSequence[index]==2){
                var audio8 = new Audio('ding.mp3');
                audio8.play();
                $("#blue").css("background-color", "white")
                setTimeout(function(){
                    $("#blue").css("background-color", "#338685")
                },300)
                
            }else if(this.game.computerSequence[index]==3){
                var audio8 = new Audio('ding.mp3');
                audio8.play();
                $("#green").css("background-color", "white")
                setTimeout(function(){
                    $("#green").css("background-color", "#1C2541")
                },300)

            }else if(index>=this.game.computerSequence.length){
                clearInterval(id)
            }

        }, 600)
    }
    //----------------------------------------------------------------------------------------------------------------------------
    music(){
        var audio1 = new Audio('mainmusic.mp3');
        audio1.play();
    } 
    //----------------------------------------------------------------------------------------------------------------------------
    doNotClick(){
        this.circle.addEventListener("click", ()=>{
            function popup(){ 
                window.open('https://trollface.dk/','w1','width=1000,height=800,left=100,top=50');
                var audio4 = new Audio('lose.mp3');
                audio4.play(); 
            }
            popup()
        })
    }
    //----------------------------------------------------------------------------------------------------------------------------
    buttonBehaviour(){
        $("#red").on({
            mouseenter: function(){
                $("#red").css("background-color", "white")
                var audio6 = new Audio('mouse.mp3');
                audio6.play(); 
            },
            mouseleave: function(){
                $("#red").css("background-color", "#5BC0BE")
            }
        })
        $("#yellow").on({
            mouseenter: function(){
                $("#yellow").css("background-color", "white")
                var audio6 = new Audio('mouse.mp3');
                audio6.play(); 
            },
            mouseleave: function(){
                $("#yellow").css("background-color", "#3A506B")
            }
        })
        $("#blue").on({
            mouseenter: function(){
                $("#blue").css("background-color", "white")
                var audio6 = new Audio('mouse.mp3');
                audio6.play()
            },
            mouseleave: function(){
                $("#blue").css("background-color", "#338685")
            }
        })
        $("#green").on({
            mouseenter: function(){
                $("#green").css("background-color", "white")
                var audio6 = new Audio('mouse.mp3');
                audio6.play()
            },
            mouseleave: function(){
                $("#green").css("background-color", "#1C2541")
            }
        })
    }
    
    //----------------------------------------------------------------------------------------------------------------------------
}
//----------------------------------------------------------------------------------------------------------------------------

const display = new Display()

//----------------------------------------------------------------------------------------------------------------------------