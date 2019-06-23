// the default size of the loaded tiles is 256 * 512 
// mapX and mapY are offsets to positioning the map 
// frames will be used to animate the main character when he moved
export const mapArray = [
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 1, 0, 0, 0, 0],
    [0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 3, 0, 1, 0, 0, 0],
    [0, 0, 2, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 2, 0, 1, 0, 0, 0, 0, 0],
], tileWidth = 128, tileHeight = 256, mapX = 600, mapY = -128, frames = 10,
canvasWidth = 1100, canvasHeight = 600, arrayWidth = mapArray.length