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
    else if (secondAnswer === 'follow') {
        followCat()
    }
    else if (secondAnswer === 'continue') {
        continuePath()
    }
}

function followCat() {
    let thirdAnswer = window.prompt(`You follow the cat to a colony of cats, snuggled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven. Do you stay or spread the word?`)
    if (thirdAnswer === 'back') {
        goLeft()
    }
    else if (thirdAnswer === 'stay') {
        window.alert(`You live happily amoungst the cats for the rest of your days.`)
    }
    else if (thirdAnswer === 'spread the word') {
        window.alert(`After leaving the cat colony, you are never able to find it again. Without proof, no one believes your story, which passes into legend nonetheless.`)
    }
}

function continuePath() {
    let thirdAnswer = window.prompt(`You come across a chamber that extends upwards to a shining light above. There is a long, winding staircase and a much quicker, but rickety-looking, ladder that leads up towards the light. Which do you take?`)
    if (thirdAnswer === 'back') {
        goLeft()
    }
    else if (thirdAnswer === 'ladder') {
        window.alert(`After ascending a few feet up the ladder, one of its rungs snaps and you fall comedically through each of the rungs below. Sheepish, you return home.`)
    }
    else if (thirdAnswer === 'staircase') {
        window.alert(`After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.`)
    }
}

function goRight() {
    let secondAnswer = window.prompt(`You come across a snoring dragon. 
    On the other side of him, you see a shiny chest of treasure. Another path would 
    lead you away from the dragon all together. Which do you take?`)
    if (secondAnswer === 'back') {
        start()
    }
    else if (secondAnswer === 'past the dragon') {
        pastDragon()
    }
    else if (secondAnswer === 'away from dragon') {
        awayDragon()
    }
}

function pastDragon() {
    let thirdAnswer = window.prompt(`The dragon awakes and sits upright. You only have a moment to respond, to stay or to run:`)
    if (thirdAnswer === 'back') {
        goRight()
    }
    else if (thirdAnswer === 'stay') {
        window.alert(`You and the dragon have an uplifting conversation about local politics and become lifelong friends.`)
    }
    else if (thirdAnswer === 'run') {
        window.alert(`Quickly, you run back to the cave's entrance. Sheepish, you return home.`)
    }
}

function awayDragon() {
    let thirdAnswer = window.prompt(`After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do?`)
    if (thirdAnswer === 'back') {
        goRight()
    }
    else if (thirdAnswer === 'draw it') {
        window.alert(`You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time discover joy in sharing the drawing with your friends and family, recounting the story of your days as a sorcerer with the aide of the sketch.`)
    }
    else if (thirdAnswer === 'pick it') {
        window.alert(`You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.`)
    }
}

start()