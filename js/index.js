import { drawMap } from './draw.js'
import { Player } from './player.js'

const canvas = document.querySelector('#index_canvas')
let ctx = canvas.getContext('2d')

Player.loadPlayerStates(playerStates => {
    let mainCharacter = new Player(2, 2, playerStates.idle[3])
    
    drawMap(ctx, mainCharacter, tiles => {
        //this is the callback function with tiles available and loaded
    }) // draw the map 
})