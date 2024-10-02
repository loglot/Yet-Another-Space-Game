import { Import as Import } from "./imports/import.js"
var imports = new Import()

function init(){
    tick()
}
function tick(){
    requestAnimationFrame(tick)
    imports.display.drawGameFrame()
}
init()
