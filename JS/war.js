// Soldier

class Soldier {
    constructor(health, strength){
        this.health = health
        this.strength = strength
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health -= damage
    }
        
}

// Viking
class Viking  extends Soldier{
    constructor(name, health, strength){
        super(health, strength)
        this.name = name
    }
    attack(){
        return this.strength
    }
    health(){
        return this.health
    }
    receiveDamage(damage){
        this.health -= damage
        if(this.health>0){
            console.log(`${this.name} has received ${damage} points of damage`)
        } else {
            console.log(`${this.name} has died in act of combat`)
        }
    }
    battleCry(){
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health,strength)
    }
    receiveDamage(damage){
        this.health -= damage
        if(this.health>0){
            return `A Saxon has received ${damage} points of damage`
        }
        return "A Saxon has died in combat"
    }
}

// War
class War {
    constructor(){
        this.viking = new Viking("Ragnar", 120, 30)
        this.saxon = new Saxon(150, 20)
    }
    vikingAttack(){
        this.saxon.receiveDamage(this.viking.attack())
    }
    saxonAttack(){
        this.viking.receiveDamage(this.saxon.attack())
    }
}

const viking = new Viking("Ragnar",150, 14)
console.log(viking.attack())
viking.receiveDamage(32)
// console.log(viking.health())
const saxon = new Saxon(120,30)