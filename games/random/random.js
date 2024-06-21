/*FLIP COIN*/
const coin = document.getElementById('coin')
coin.addEventListener('click', () => {
    const flip = Math.random()
    coin.className = ''
    const coinFlipResult = document.getElementById('coinFlipResult')
    let resultText = String.fromCharCode(160)
    coinFlipResult.innerText = resultText
    console.log('flip: ' + flip)
    setTimeout(() => {
        if (flip <= 0.495) {
            coin.className = 'heads'
            resultText = 'Heads!'
        } else if (flip >= 0.505) {
            coin.className = 'tails'
            resultText = 'Tails!'
        } else {
            coin.className = 'side'
            resultText = 'Balancing act!'
        }

        let timeout = 2300
        if (coin.className == 'side') {
            timeout = 5000
        }
        setTimeout(() => {
            coinFlipResult.innerText = resultText
        }, timeout)
    }, 10)
})

/*ROLL DICE*/
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

/*PICK NUMBER*/
const pickNumberButton = document.getElementById('pickNumberButton')
pickNumberButton.addEventListener('click', () => {
    const previousResult = document.getElementById('pickNumberResultText')
    if (previousResult != null) {
        previousResult.remove()
    }

    let start = document.getElementById('pickNumberStart').value
    if (start == '') {
        start = 0
    }
    let end = document.getElementById('pickNumberEnd').value
    if (end == '') {
        end = 100
    }
    start = parseInt(start)
    end = parseInt(end)
    if (start > end) {
        const temp = start
        start = end
        end = temp
    }
    const randomNumber = Math.floor(Math.random() * (end - start + 1)) + start

    const resultText = document.createElement('p')
    resultText.id = 'pickNumberResultText'
    resultText.innerText = randomNumber

    document.getElementById('pickNumberResult').appendChild(resultText)
})

/*DRAW CARD*/
const drawCardButton = document.getElementById('drawCardButton')
drawCardButton.addEventListener('click', () => {
    const previousResult = document.getElementById('drawCardResultText')
    if (previousResult != null) {
        previousResult.remove()
    }

    const suits = ['clubs', 'diamonds', 'hearts', 'spades']
    const suit = suits[Math.floor(Math.random() * suits.length)]

    const values = ['Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace']
    const value = values[Math.floor(Math.random() * values.length)]

    const resultText = document.createElement('p')
    resultText.id = 'drawCardResultText'
    resultText.innerText = value + ' of ' + suit

    console.log(Math.random() * 100)
    if (Math.random() * 100 < 0.1) {
        resultText.innerText = 'King of kings'
    }

    document.getElementById('drawCard').appendChild(resultText)
})