// Your Code Here
// let firstAnswer = window.prompt('Do you head left, or right?')
// if(firstAnswer === 'left') {
//     let secondAnswer = window.prompt(`You come across a stray cat. It scampers off down a small hole, just large enough for you to crawl through. Do you follow it, or continue on your path?`)
// } else if(firstAnswer === 'right') {
//     let secondAnswer = window.prompt(`You come across a snoring drawon. On the other side of him, you see a shiny chest of treasure. Another path would lead you away from the dragon all together. Which do you take?`)
// }

// [End Here: Use window.alert instead of window.prompt]
// Prompt: Do you head left or right?
// Left
    // Prompt: Follow or Continue
    // Follow
        // Prompt: Stay or Spread the Word
        // Stay [End Here]
        // Spread the Word [End Here]
    // Continue
        // Prompt: Ladder or Staircase
        // Ladder [End Here]
        // Staircase [End Here]
// Right
    // Prompt: Past the Dragon or Away from the Dragon
    // Past the Dragon
        // Prompt: Stay or Run
            // Stay [End Here]
            // Run [End Here]
    // Away from the Dragon
        // Prompt: Draw It or Pick It
            // Draw It [End Here]
            // Pick It [End Here]

function start(){
    let firstAnswer  = window.prompt('Do you head left, or right?')
    if(firstAnswer === 'left'){
       goLeft()
    } else if(firstAnswer === 'right') {
        goRight()
    }
}

function goLeft(){
    let secondAnswer = window.prompt(`You come across a stray cat. 
    It scampers off down a small hole, just large enough for you to crawl through. 
    Do you follow it, or continue on your path?`)
    if(secondAnswer === 'back'){
        start()
    }
}

function goRight(){
    let secondAnswer = window.prompt(`You come across a snoring dragon. 
    On the other side of him, you see a shiny chest of treasure. Another path would 
    lead you away from the dragon all together. Which do you take?`)
    if(secondAnswer === 'back'){
        start()
    }
}

start()