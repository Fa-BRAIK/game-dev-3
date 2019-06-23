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
    let tile_id = 0
    switch (mapArray[i][j]) {
        case 1:
            tile_id = 1
        break
        default: 
            ctx.drawImage(tiles[tile_id], 
                (i - j) * tileWidth / 2 + mapX, 
                (i + j) * tileWidth / 4 + mapY, 
            tileWidth, tileHeight)
            tile_id = mapArray[i][j]
        break
    }
    if (tile_id === 3) {
        ctx.drawImage(mainCharacter.state, 
            (mainCharacter.positionX - mainCharacter.positionY) * tileWidth / 2 + mapX, 
            (mainCharacter.positionX + mainCharacter.positionY) * tileWidth / 4 + mapY, 
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
            (mainCharacter.positionX - mainCharacter.positionY) * tileWidth / 2 + mapX, 
            (mainCharacter.positionX + mainCharacter.positionY) * tileWidth / 4 + mapY, 
            tileWidth, tileHeight)
    }
}

const loadImages = (callback) => {
    const tiles = []
    const tilesToBeLoaded = [ // tiles needed
        'img/isometric/stone_E.png',
        'img/isometric/stoneInset_E.png',
        'img/isometric/woodenCrate_E.png',
        'img/isometric/stoneWallArchway_N.png',
        'img/isometric/stoneWallAged_E.png',
        'img/isometric/stoneWallAged_N.png',
        'img/isometric/stoneWallAged_S.png',
        'img/isometric/stoneWallAged_W.png',
        'img/isometric/stoneWallGateClosed_E.png',
        'img/isometric/stoneWallGateClosed_W.png',
        'img/isometric/stoneWallHole_S.png',
        'img/isometric/stoneWallHole_W.png',
        'img/isometric/woodenPile_W.png',
        'img/isometric/woodenPile_S.png',
        'img/isometric/tableShortChairs_N.png',
        'img/isometric/stoneWallRoundBroken_E.png',
        'img/isometric/stoneWallRound_N.png',
        'img/isometric/stoneWallRound_S.png',
        'img/isometric/stoneWallRound_W.png',
        'img/isometric/chestOpen_S.png',
        'img/isometric/chestClosed_W.png',
        'img/isometric/stoneWallHole_N.png',      
        'img/isometric/stoneCorner_E.png',
        'img/isometric/stoneCorner_N.png',
        'img/isometric/stoneCorner_S.png',
        'img/isometric/stoneCorner_W.png',
        'img/isometric/stoneWallCorner_E.png',
        'img/isometric/stoneWallCorner_N.png',
        'img/isometric/stoneWallCorner_S.png',
        'img/isometric/stoneWallCorner_W.png',
        'img/isometric/woodenCrates_E.png',
        'img/isometric/stoneUneven_N.png',
        'img/isometric/stoneUneven_S.png',
        'img/isometric/stoneUneven_E.png',
        'img/isometric/stoneUneven_W.png',
        'img/isometric/tableChairsBroken_E.png',
        'img/isometric/barrelsStacked_S.png',
        'img/isometric/stoneWallBrokenLeft_N.png',
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

export const draw = (ctx, tiles, mainCharacter) => {
    let tile_id = 0

    for (let i = 0; i < mapArray.length; i++)
        for (let j = 0; j < mapArray[i].length; j++) {
            if (i === Math.round(mainCharacter.positionX) && j === Math.round(mainCharacter.positionY)) {
                drawPlayer(ctx, tiles, mainCharacter)
            } else {
                switch (mapArray[i][j]) {
                    case 'a': 
                        tile_id = 0
                        ctx.drawImage(tiles[tile_id], 
                            (i - j) * tileWidth / 2 + mapX, 
                            (i + j) * tileWidth / 4 + mapY, 
                            tileWidth, tileHeight)
                        tile_id = 6
                        ctx.drawImage(tiles[tile_id], 
                            (i - j) * tileWidth / 2 + mapX, 
                            (i + j) * tileWidth / 4 + mapY, 
                            tileWidth, tileHeight)
                        tile_id = 19
                    break
                    case 'b': 
                        tile_id = 0
                        ctx.drawImage(tiles[tile_id], 
                            (i - j) * tileWidth / 2 + mapX, 
                            (i + j) * tileWidth / 4 + mapY, 
                            tileWidth, tileHeight)
                        tile_id = 4
                        ctx.drawImage(tiles[tile_id], 
                            (i - j) * tileWidth / 2 + mapX, 
                            (i + j) * tileWidth / 4 + mapY, 
                            tileWidth, tileHeight)
                        tile_id = 20
                    break
                    case 'c': 
                        tile_id = 0
                        ctx.drawImage(tiles[tile_id], 
                            (i - j) * tileWidth / 2 + mapX, 
                            (i + j) * tileWidth / 4 + mapY, 
                            tileWidth, tileHeight)
                        tile_id = 6
                        ctx.drawImage(tiles[tile_id], 
                            (i - j) * tileWidth / 2 + mapX, 
                            (i + j) * tileWidth / 4 + mapY, 
                            tileWidth, tileHeight)
                        tile_id = 14
                    break
                    case 'd': 
                        tile_id = 0
                        ctx.drawImage(tiles[tile_id], 
                            (i - j) * tileWidth / 2 + mapX, 
                            (i + j) * tileWidth / 4 + mapY, 
                            tileWidth, tileHeight)
                        tile_id = 10
                        ctx.drawImage(tiles[tile_id], 
                            (i - j) * tileWidth / 2 + mapX, 
                            (i + j) * tileWidth / 4 + mapY, 
                            tileWidth, tileHeight)
                        tile_id = 14
                    break
                    case 'e': 
                        tile_id = 0
                        ctx.drawImage(tiles[tile_id], 
                            (i - j) * tileWidth / 2 + mapX, 
                            (i + j) * tileWidth / 4 + mapY, 
                            tileWidth, tileHeight)
                        tile_id = 4
                        ctx.drawImage(tiles[tile_id], 
                            (i - j) * tileWidth / 2 + mapX, 
                            (i + j) * tileWidth / 4 + mapY, 
                            tileWidth, tileHeight)
                        tile_id = 30
                    break
                    case 'f': 
                        tile_id = 0
                        ctx.drawImage(tiles[tile_id], 
                            (i - j) * tileWidth / 2 + mapX, 
                            (i + j) * tileWidth / 4 + mapY, 
                            tileWidth, tileHeight)
                        tile_id = 4
                        ctx.drawImage(tiles[tile_id], 
                            (i - j) * tileWidth / 2 + mapX, 
                            (i + j) * tileWidth / 4 + mapY, 
                            tileWidth, tileHeight)
                        tile_id = 35
                    break
                    case 'g': 
                        tile_id = 0
                        ctx.drawImage(tiles[tile_id], 
                            (i - j) * tileWidth / 2 + mapX, 
                            (i + j) * tileWidth / 4 + mapY, 
                            tileWidth, tileHeight)
                        tile_id = 2
                        ctx.drawImage(tiles[tile_id], 
                            (i - j) * tileWidth / 2 + mapX, 
                            (i + j) * tileWidth / 4 + mapY, 
                            tileWidth, tileHeight)
                        tile_id = 37
                    break
                    case 2: 
                        tile_id = 0
                        ctx.drawImage(tiles[tile_id], 
                            (i - j) * tileWidth / 2 + mapX, 
                            (i + j) * tileWidth / 4 + mapY, 
                            tileWidth, tileHeight)
                        tile_id = 2
                    break
                    case 16: 
                        tile_id = 24
                        ctx.drawImage(tiles[tile_id], 
                            (i - j) * tileWidth / 2 + mapX, 
                            (i + j) * tileWidth / 4 + mapY, 
                            tileWidth, tileHeight)
                        tile_id = 16
                    break
                    case 17: 
                        tile_id = 23
                        ctx.drawImage(tiles[tile_id], 
                            (i - j) * tileWidth / 2 + mapX, 
                            (i + j) * tileWidth / 4 + mapY, 
                            tileWidth, tileHeight)
                        tile_id = 17
                    break
                    case 18: 
                        tile_id = 22
                        ctx.drawImage(tiles[tile_id], 
                            (i - j) * tileWidth / 2 + mapX, 
                            (i + j) * tileWidth / 4 + mapY, 
                            tileWidth, tileHeight)
                        tile_id = 18
                    break
                    default: 
                        tile_id = 0
                        ctx.drawImage(tiles[tile_id], 
                            (i - j) * tileWidth / 2 + mapX, 
                            (i + j) * tileWidth / 4 + mapY, 
                            tileWidth, tileHeight)
                        tile_id = mapArray[i][j]
                }
                ctx.drawImage(tiles[tile_id], 
                    (i - j) * tileWidth / 2 + mapX, 
                    (i + j) * tileWidth / 4 + mapY, 
                    tileWidth, tileHeight)
            }
    }
}