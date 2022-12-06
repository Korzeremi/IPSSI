const createSequence = (ln) => {
    const array = []
    for(let i=0; i<ln; i++){
        array.push(Math.floor(Math.random()*4))
    }
    return array
}
const sequence = createSequence(6)
console.log("=> sequence : ", sequence)