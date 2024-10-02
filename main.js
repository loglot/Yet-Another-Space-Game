import { Import } from "./imports/import.js"
var game = new Import(this)

async function init(){
    requestAnimationFrame(tick)
}
async function tick(){
    requestAnimationFrame(tick)
    game.display.drawGameFrame()
}
init()
