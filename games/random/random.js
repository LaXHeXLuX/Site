/*COIN FLIP*/
const coin = document.getElementById('coin')
coin.addEventListener('click', () => {
    const flip = Math.random()
    coin.className = ''
    const coinFlipResult = document.getElementById('coinFlipResult')
    let resultText = String.fromCharCode(160)
    coinFlipResult.innerText = resultText
    setTimeout(() => {
        if (flip <= 0.5) {
            coin.className = 'heads'
            resultText = 'Heads!'
        } else {
            coin.className = 'tails'
            resultText = 'Tails!'
        }
    }, 10)
    setTimeout(() => {
        coinFlipResult.innerText = resultText
    }, 2300)
})

/*DICE ROLL*/
const diceRollButton = document.getElementById('rollDieButton')
diceRollButton.addEventListener('click', () => {
    const previousResult = document.getElementById('rollDieResultText')
    if (previousResult != null) {
        previousResult.remove()
    }

    let amountOfDice = document.getElementById('rollDieInput').value
    document.getElementById('rollDieInput').value = ''
    if (amountOfDice >= 25) {
        alert('hmmm... I don\'t think you have that many dice')
        return
    }
    if (amountOfDice == '' || amountOfDice == 0) {
        amountOfDice = 1
    }
    
    function rollDice(amountOfDice) {
        let rolls = []
        for (let i = 0; i < amountOfDice; i++) {
            const roll = Math.ceil(Math.random() * 6)
            rolls.push(roll)
        }
        return rolls
    }
    const rolls = rollDice(amountOfDice)
    console.log(rolls)

    const resultText = document.createElement('p')
    resultText.id = 'rollDieResultText'
    resultText.innerText = rolls.toString()

    document.getElementById('rollDieResult').appendChild(resultText)
})