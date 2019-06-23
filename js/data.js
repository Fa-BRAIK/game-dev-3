// the default size of the loaded tiles is 256 * 512 
// mapX and mapY are offsets to positioning the map 
// frames will be used to animate the main character when he moved
export const mapArray = [
    [15, 4, 4, 'b', 4, 8, 26, 'f', 4, 16],
    [10, 0, 0, 0, 0, 0, 5, 0, 0, 5],
    [6, 12, 0, 34, 0, 0, 5, 0, 36, 5],
    [6, 13, 0, 34, 0, 0, 'g', 0, 0, 21],
    [6, 0, 0, 1, 0, 0, 0, 0, 32, 5],
    [28, 'e', 'b', 26, 0, 0, 0, 0, 0, 5],
    ['a', 0, 0, 3, 0, 0, 31, 0, 36, 21],
    ['c', 0, 0, 5, 0, 0, 0, 0, 0, 5],
    ['d', 0, 0, 5, 36, 0, 1, 0, 0, 5],
    [17, 7, 7, 27, 7, 7, 9, 7, 7, 18],
],
obstArray = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 1, 0, 0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 1, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
], tileWidth = 128, tileHeight = 256, mapX = 600, mapY = -128, frames = 10,
canvasWidth = 1100, canvasHeight = 600, arrayWidth = mapArray.length