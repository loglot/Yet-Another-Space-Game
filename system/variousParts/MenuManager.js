export class Menu{
    game
    constructor(game){
        this.game = game
    }

    tick(){
        if(this.game.gameState == "mainMenu"){
            if(this.game.keyManager.wasKeyJustPressed("KeyW")){
                this.game.gameState = "game"
                
            }
        }
    }
}