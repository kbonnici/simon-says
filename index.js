$('#play-button > button').click(startGame)
$('.square').click(handleSquareClick)

function handleSquareClick() {
    alert('click')
}

function startGame() {
    alert('game has begun')
}