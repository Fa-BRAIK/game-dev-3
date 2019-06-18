import { drawMap } from './draw.js'
import { Player } from './player.js'

const canvas = document.querySelector('#index_canvas')
let ctx = canvas.getContext('2d')

Player.loadPlayerStates(playerStates => {
    let mainCharacter = new Player(2, 2, playerStates.idle[3])
    
    drawMap(ctx, tiles => {
        console.log(tiles)
        //drawPlayer(ctx, tiles, mainCharacter) // after drawing the map we'll draw the player
    }) // draw the map 
    

})