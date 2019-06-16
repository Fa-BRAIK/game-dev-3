import { drawMap, drawPlayer } from './draw.js'
import { Player } from './player.js'

const canvas = document.querySelector('#index_canvas')
let ctx = canvas.getContext('2d')

Player.loadPlayerStates(playerStates => {
    let mainCharacter = new Player(1, 1, playerStates.idle[3])
    
    drawMap(ctx) // draw the map
    // drawPlayer(ctx, mainCharacter) // after drawing the map we'll draw the player
})
