import { drawMap } from './draw.js'
import { Player } from './player.js'

const canvas = document.querySelector('#index_canvas')
let ctx = canvas.getContext('2d')

Player.loadPlayerStates(playerStates => {
    let mainCharacter = new Player(6, 6, playerStates.idle[3])
    
    drawMap(ctx, mainCharacter, tiles => {
        //this is the callback function with tiles available and loaded
        // we'll start exactly the loop here
        window.addEventListener('keydown', e => {
            
        })

    }) // draw the map 
})