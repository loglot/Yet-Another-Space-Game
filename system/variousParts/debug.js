export class Debug {
    mapBoxShow = false
    game
    noclip = false
    constructor(game){
        this.game = game
    }
    tick(){
        if(this.game.keyManager.isKeyPressed("Backslash")){
            this.debugCheck()
        }
    }
    debugCheck(){
        
        if(this.game.keyManager.wasKeyJustPressed("KeyB")){
            this.mapBoxShow = !this.mapBoxShow
        }
        if(this.game.keyManager.wasKeyJustPressed("KeyN")){
            this.noclip = !this.noclip
        }
    }
}