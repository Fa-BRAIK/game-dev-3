import { drawMap } from './draw.js'
import { Player } from './player.js'
import { frames, arrayWidth, canvasHeight, canvasWidth } from './data.js'

const canvas = document.querySelector('#index_canvas')
let ctx = canvas.getContext('2d')
ctx.scale(0.8, 0.8) // scale everything to 50%

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
        //this is the callback function with tiles available and loaded
        window.addEventListener('keydown', e => {
            if (!animation) {
                // lock everything until the animation is done
                animation = true
                switch (e.keyCode) {
                    case 37: // go left
                        currentFrame = (currentFrame === 10) ? 0 : ++currentFrame
                        mainCharacter.run('left', currentFrame, playerStates, characterMovementValue)
                    break
                    case 39: // go right
                        currentFrame = (currentFrame === 10) ? 0 : ++currentFrame
                        mainCharacter.run('right', currentFrame, playerStates, characterMovementValue)
                    break
                    case 38: // go top
                        currentFrame = (currentFrame === 10) ? 0 : ++currentFrame
                        mainCharacter.run('top', currentFrame, playerStates, characterMovementValue)
                    break
                    case 40: // go bottom
                        currentFrame = (currentFrame === 10) ? 0 : ++currentFrame
                        mainCharacter.run('bottom', currentFrame, playerStates, characterMovementValue)
                    break
                }
                console.log('Current frame: ', currentFrame)
    
                // redraw the map with the character
                drawMap(ctx, mainCharacter, tiles => {})
                animation = false
            }
        })
    })  
})