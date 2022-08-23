// Your Code Here
// let firstAnswer = window.prompt('Do you head left, or right?')
// if(firstAnswer === 'left') {
//     let secondAnswer = window.prompt(`You come across a stray cat. It scampers off down a small hole, just large enough for you to crawl through. Do you follow it, or continue on your path?`)
// } else if(firstAnswer === 'right') {
//     let secondAnswer = window.prompt(`You come across a snoring drawon. On the other side of him, you see a shiny chest of treasure. Another path would lead you away from the dragon all together. Which do you take?`)
// }

// [End Here: Use window.alert instead of window.prompt]
// Prompt: Do you head left or right? firstAnswer
// Left
    // Prompt: Follow or Continue secondAnswer
    // Follow
        // Prompt: Stay or Spread the Word thirdAnswer
        // Stay [End Here]
        // Spread the Word [End Here]
    // Continue
        // Prompt: Ladder or Staircase thirdAnswer
        // Ladder [End Here]
        // Staircase [End Here]
// Right
    // Prompt: Past the Dragon or Away from the Dragon secondAnswer
    // Past the Dragon
        // Prompt: Stay or Run thirdAnswer
        // Stay [End Here]
        // Run [End Here]
    // Away from the Dragon
        // Prompt: Draw It or Pick It thirdAnswer
        // Draw It [End Here]
        // Pick It [End Here]

function start() {
    let firstAnswer = window.prompt('Do you head left, or right?')
    if (firstAnswer === 'left') {
        goLeft()
    } else if (firstAnswer === 'right') {
        goRight()
    }
}

function goLeft() {
    let secondAnswer = window.prompt(`You come across a stray cat. 
    It scampers off down a small hole, just large enough for you to crawl through. 
    Do you follow it, or continue on your path?`)
    if (secondAnswer === 'back') {
        start()
    }
}

function followCat() {

}

function stayCat() {

}

function spreadWord() {

}

function continuePath() {

}

function ladder() {

}

function staircase() {

}

function goRight() {
    let secondAnswer = window.prompt(`You come across a snoring dragon. 
    On the other side of him, you see a shiny chest of treasure. Another path would 
    lead you away from the dragon all together. Which do you take?`)
    if (secondAnswer === 'back') {
        start()
    }
}

function pastDragon() {

}

function stayDragon() {

}

function run(){

}

function awayDragon() {

}

function drawIt() {

}

function pickIt() {
    
}

start()