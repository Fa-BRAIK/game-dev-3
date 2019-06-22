import { mapArray, tileWidth, tileHeight, mapX, mapY } from './data.js'

export const drawMap = (ctx, mainCharacter, callback) => {
    const tiles = []
    
    loadImages(tiles => {
        draw(ctx, tiles, mainCharacter)

        return callback(tiles)
    })
}

const drawPlayer = (ctx, tiles, mainCharacter) => {
    const i = Math.round(mainCharacter.positionX), j = Math.round(mainCharacter.positionY)
    let tile_id = Math.floor(Math.random() * 4) 
    switch (mapArray[i][j]) {
        case 1: 
            tile_id = Math.floor(Math.random() * 4) + 4
        break
        case 3: 
            ctx.drawImage(tiles[tile_id], 
                (i - j) * tileWidth / 2 + mapX, 
                (i + j) * tileWidth / 4 + mapY, 
                tileWidth, tileHeight)
            
            tile_id = 9
        break;
    }
    if (tile_id === 9) {
        ctx.drawImage(mainCharacter.state, 
            (i - j) * tileWidth / 2 + mapX, 
            (i + j) * tileWidth / 4 + mapY, 
            tileWidth, tileHeight)

        ctx.drawImage(tiles[tile_id], 
            (i - j) * tileWidth / 2 + mapX, 
            (i + j) * tileWidth / 4 + mapY, 
            tileWidth, tileHeight)
    } else {
        ctx.drawImage(tiles[tile_id], 
            (i - j) * tileWidth / 2 + mapX, 
            (i + j) * tileWidth / 4 + mapY, 
            tileWidth, tileHeight)

        ctx.drawImage(mainCharacter.state, 
            (i - j) * tileWidth / 2 + mapX, 
            (i + j) * tileWidth / 4 + mapY, 
            tileWidth, tileHeight)
    }
}

const loadImages = (callback) => {
    const tiles = []
    const tilesToBeLoaded = [ // tiles needed
        'img/isometric/stone_E.png',
        'img/isometric/stone_N.png',
        'img/isometric/stone_S.png',
        'img/isometric/stone_W.png',
        'img/isometric/stoneInset_E.png',
        'img/isometric/stoneInset_N.png',
        'img/isometric/stoneInset_S.png',
        'img/isometric/stoneInset_W.png',
        'img/isometric/woodenCrate_E.png',
        'img/isometric/stoneWallArchway_N.png'
    ]

    for (let i = 0; i < tilesToBeLoaded.length; i++) {  // load al the images into the const tiles 
        let newTile = new Image()
        newTile.src = tilesToBeLoaded[i]
        newTile.onload = () => {
            tiles.push(newTile)

            if (tiles.length === tilesToBeLoaded.length) {
                return callback(tiles)
            }
        }
    }
}

const draw = (ctx, tiles, mainCharacter) => {
    let tile_id = 0

    for (let i = 0; i < mapArray.length; i++)
        for (let j = 0; j < mapArray[i].length; j++) {
            if (i === Math.round(mainCharacter.positionX) && j === Math.round(mainCharacter.positionY)) {
                drawPlayer(ctx, tiles, mainCharacter)
            } else {
                switch (mapArray[i][j]) {
                    case 0: 
                        tile_id =  Math.floor(Math.random() * 4)
                    break
                    case 1: 
                        tile_id =  Math.floor(Math.random() * 4) + 4
                    break
                    case 2: 
                        tile_id = Math.floor(Math.random() * 4) 
                        ctx.drawImage(tiles[tile_id], 
                            (i - j) * tileWidth / 2 + mapX, 
                            (i + j) * tileWidth / 4 + mapY, 
                            tileWidth, tileHeight)
                        tile_id = 8
                    break
                    case 3: 
                        tile_id = Math.floor(Math.random() * 4) 
                        ctx.drawImage(tiles[tile_id], 
                            (i - j) * tileWidth / 2 + mapX, 
                            (i + j) * tileWidth / 4 + mapY, 
                            tileWidth, tileHeight)
                        tile_id = 9
                    break
                    default: 
                        console.error('unexpected number entered in mapArray variable')
                }
                ctx.drawImage(tiles[tile_id], 
                    (i - j) * tileWidth / 2 + mapX, 
                    (i + j) * tileWidth / 4 + mapY, 
                    tileWidth, tileHeight)
            }
    }
}