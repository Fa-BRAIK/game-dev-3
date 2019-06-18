import { mapArray } from './map.js'

export const drawMap = (ctx) => {
    const tiles = []
    
    loadImages(ctx, mapArray, tiles => {
        draw(ctx, tiles, mapArray)
    })
}

export const drawPlayer = (ctx, mainCharacter) => {
    const tileWidth = 128, tileHeight = 256 // the default size of the loaded tiles is 256 * 512 

    const mapX = 450, mapY = -128 //mapX and mapY are offsets to positioning the map 

    ctx.drawImage(mainCharacter.state, 
        (mainCharacter.positionX - mainCharacter.positionY) * tileWidth/2 + mapX, 
        (mainCharacter.positionX + mainCharacter.positionY) * tileWidth / 4 + mapY, 
        tileWidth, tileHeight);
}

const loadImages = (ctx, mapArray, callback) => {
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

const draw = (ctx, tiles, mapArray) => {
    const tileWidth = 128, tileHeight = 256 // the default size of the loaded tiles is 256 * 512 

    const mapX = 450, mapY = -128 //mapX and mapY are offsets to positioning the map 

    let tile_id;
    const level2Tiles = []
    const level3Tiles = []

    for (let i = 0; i < mapArray.length; i++)
        for (let j = 0; j < mapArray[i].length; j++) {
            switch (mapArray[i][j]) {
                case 2: { tile_id = Math.floor(Math.random() * 4); level2Tiles.push({ x: i, y: j}); break } //2 is a crate it is stored as a level 2 building
                case 3: { tile_id = Math.floor(Math.random() * 4); level3Tiles.push({ x: i, y: j}); break } //3 is a gate it is stored as a level 3 building
                default: {
                    tile_id = (mapArray[i][j] === 0) ? Math.floor(Math.random() * 4)
                        : Math.floor(Math.random() * 4) + 4
                } 
            }

            ctx.drawImage(tiles[tile_id], (i - j) * tileWidth/2 + mapX, (i + j) * tileWidth / 4 + mapY, tileWidth, tileHeight);
    }

    // time to draw the level 2 priority
    tile_id = 8
    for (let i = 0; i < level2Tiles.length; i++) 
        ctx.drawImage(tiles[tile_id], (level2Tiles[i].x - level2Tiles[i].y) * tileWidth/2 + mapX, (level2Tiles[i].x + level2Tiles[i].y) * tileWidth / 4 + mapY, tileWidth, tileHeight);

    // time to draw the level 3 priority
    tile_id = 9
    for (let i = 0; i < level3Tiles.length; i++)
        ctx.drawImage(tiles[tile_id], (level3Tiles[i].x - level3Tiles[i].y) * tileWidth/2 + mapX, (level3Tiles[i].x + level3Tiles[i].y) * tileWidth / 4 + mapY, tileWidth, tileHeight);
}