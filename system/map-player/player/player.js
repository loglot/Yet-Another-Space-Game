export class Player {
    x = 0
    y = 0
    velX = 0
    velY = 0
    velR = 0
    rotation = 0
    game
    constructor(game){
        this.game = game
    }
    tick(){ 
        if(this.game.gameState == "game"){
            this.changeVel()
            this.move()
        }
    }
    changeVel(){
        if(this.game.keyManager.isKeyPressed("KeyW")){
            this.velY--
        }
        if(this.game.keyManager.isKeyPressed("KeyS")){
            this.velY++
        }
        if(this.game.keyManager.isKeyPressed("KeyA")){
            this.velR +=.1
        }
        if(this.game.keyManager.isKeyPressed("KeyD")){
            this.velR -=.1
        }
    }
    move(){
        this.y += this.velY
        this.rotation += this.velR
    }
}