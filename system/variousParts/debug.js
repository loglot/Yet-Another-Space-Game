export class Debug {
    mapBoxShow = false
    game
    constructor(game){
        this.game = game
    }
    tick(){
        if(this.game.keyManager.isKeyPressed("Backslash")){
            this.debugCheck()
            console.log("backslash")
        }
    }
    debugCheck(){
        
        if(this.game.keyManager.wasKeyJustPressed("KeyB")){
            this.mapBoxShow = !this.mapBoxShow
            console.log("b")
        }
    }
}