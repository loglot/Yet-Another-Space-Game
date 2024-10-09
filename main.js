import { Import } from "./imports/import.js"
var game = new Import(this)

async function init(){
    requestAnimationFrame(tick)
}
async function tick(){
    requestAnimationFrame(tick)
    game.keyManager.tick()
    game.debug.tick()
    game.menu.tick()
    game.camera.tick()
    game.display.drawGameFrame()
    game.player.tick()
}
init()
