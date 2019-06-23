import { drawMap, draw } from './draw.js'
import { Player } from './player.js'
import { frames, arrayWidth } from './data.js'

const canvas = document.querySelector('#index_canvas')
let ctx = canvas.getContext('2d')
ctx.scale(0.8, 0.8) // scale everything to 80%

// for the main charactere movement
// this variable will be used to move the player accross the map
const characterMovementValue = arrayWidth / (frames * 15)
// animation will be used to prevent multiple keydown events
let animation = false 
// currentFrame will be used to chose the next state of the charactere
let currentFrame = 0

Player.loadPlayerStates(playerStates => {
    let mainCharacter = new Player(6, 6, playerStates.idle[3])

    drawMap(ctx, mainCharacter, tiles => {
        // this is the callback function with tiles available and loaded
        // everything is loaded now and ready to be used smoothely 
        window.addEventListener('keyup', e => {
            console.log('Stand up player!')
            switch(e.keyCode) {
                case 37: // stand up towards the left side
                    mainCharacter.setState(playerStates.idle[6])
                break
                case 39: // stand up towards the right side
                    mainCharacter.setState(playerStates.idle[2])
                break
                case 38:  // stand up towards the top side
                    mainCharacter.setState(playerStates.idle[0])
                break
                case 40: // stand up towards the bottom side
                    mainCharacter.setState(playerStates.idle[4])
                break
            }

            // clear and redraw the map with the character
            ctx.clearRect(0, 0, 2000, 1000)
            draw(ctx, tiles, mainCharacter)
        })

        window.addEventListener('keydown', e => {
            if (!animation) {
                // lock everything until the animation is done
                animation = true
                switch (e.keyCode) {
                    case 37: // go left
                        currentFrame = (currentFrame === 9) ? 0 : ++currentFrame
                        mainCharacter.run('left', currentFrame, playerStates, characterMovementValue)
                    break
                    case 39: // go right
                        currentFrame = (currentFrame === 9) ? 0 : ++currentFrame
                        mainCharacter.run('right', currentFrame, playerStates, characterMovementValue)
                    break
                    case 38: // go top
                        currentFrame = (currentFrame === 9) ? 0 : ++currentFrame
                        mainCharacter.run('top', currentFrame, playerStates, characterMovementValue)
                    break
                    case 40: // go bottom
                        currentFrame = (currentFrame === 9) ? 0 : ++currentFrame
                        mainCharacter.run('bottom', currentFrame, playerStates, characterMovementValue)
                    break
                }
                console.log('Current frame: ', currentFrame)
    
                // clear and redraw the map with the character
                ctx.clearRect(0, 0, 2000, 1000)
                draw(ctx, tiles, mainCharacter)
                animation = false
            }
        })
    })  
})