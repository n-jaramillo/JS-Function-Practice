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
    let thirdAnswer = window.prompt(``)
}

function stayCat() {
    let fourthAnswer = window.prompt(``)
}

function spreadWord() {
    let fourthAnswer = window.prompt(``)
}

function continuePath() {
    let thirdAnswer = window.prompt(``)
}

function ladder() {
    let fourthAnswer = window.prompt(``)
}

function staircase() {
    let fourthAnswer = window.prompt(``)
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
    let thirdAnswer = window.prompt(``)
}

function stayDragon() {
    let fourthAnswer = window.prompt(``)
}

function run(){
    let fourthAnswer = window.prompt(``)
}

function awayDragon() {
    let thirdAnswer = window.prompt(``)
}

function drawIt() {
    let fourthAnswer = window.prompt(``)
}

function pickIt() {
    let fourthAnswer = window.prompt(``)
}

start()