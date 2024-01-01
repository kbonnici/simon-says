$('#play-button > button').click(startGame)
$('.square').click(handleSquareClick)

let playing = false
const colors = ['red', 'green', 'blue', 'yellow']
let playerSequence = []

function getRandomColor() {
    return colors[Math.floor(Math.random()*colors.length)]
}

function handleSquareClick(e) {
    if(!playing) return

    const color = e.target.id
    const square = $(`#${color}`)

    if (square.data('flashing') === 'true') return
    
    flashColor(color)
    playerSequence.push(color)
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
    playing = true
    $("h1").text('Score: 0')
    play()
}

async function play() {
    let score = 0
    const sequence = []
    
    // while(playing) {
    //     sequence.push(getRandomColor())
        
    //     // play sequence
    //     for (let color of sequence) {
    //         flashColor(color)
    //     }
        
    //     // let player enter sequence
    //     let correct = true
    //     while(correct) {
    //         if (!correct) break
            

    //     }
        
    //     // lose game
    // }
    
}