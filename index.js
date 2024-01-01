$('.square').click(handleSquareClick)

const header = $('h1')
const highScoreHeader = $('h2')
const playButton = $('#play-button > button')
const colors = ['red', 'green', 'blue', 'yellow']

playButton.click(startGame)

let sequence = []
let playerSequence = []
let score = 0
let highScore = 0

function getRandomColor() {
    return colors[Math.floor(Math.random()*colors.length)]
}

async function handleSquareClick(e) {
    const color = e.target.id
    const square = $(`#${color}`)

    if (square.data('flashing') === 'true') return
    
    await flashColor(color)
    playerSequence.push(color)

    if (playerSequence.every((value, index) => value === sequence[index])) {
        if (sequence.length === playerSequence.length) {
            // correct
            header.text(`Score: ${++score}`)
            if (score > highScore) {
                highScore = score  
                highScoreHeader.text(`High Score: ${highScore}`)
            } 
            
            await new Promise(resolve => setTimeout(resolve, 1000))
            play()
        } 
    } else {
        header.text('You Lose!')
        playButton.text('Restart')
    }

}

async function flashColor(color) {
    const square = $(`#${color}`)

    const oldColor = square.css('background-color')

    square.data('flashing', 'true')
    square.css('background-color', color)

    await new Promise(resolve => setTimeout(resolve, 750))
    square.css('background-color', oldColor)
    await new Promise(resolve => setTimeout(resolve, 250))

    square.data('flashing', 'false')
}

function startGame() {
    if (playButton.text() === 'Playing') return
    score = 0
    sequence = []
    playButton.text('Playing')
    play()
}

async function play() {
    header.text(`Score: ${score}`)
    playerSequence = []
    sequence.push(getRandomColor())
    
    for (let color of sequence) {
        await flashColor(color)
    }
}