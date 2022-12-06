const words = ['machine','subset','trouble','starting','matter','eating','truth','disobedience']

const getTheLongestWord = (wordsArray) => {
    let lw = ""
    wordsArray.forEach(element => {
        if (element.length > lw.length) {
            lw=element
        }
    });
    return lw
}

// const longeĸstW = getTheLongestWord(words)
console.log(getTheLongestWord(words))5