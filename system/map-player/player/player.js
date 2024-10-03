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
            this.velY -= Math.cos(this.rotation * Math.PI /180)
            this.velX -= Math.sin(this.rotation * Math.PI /180)
        }
        if(this.game.keyManager.isKeyPressed("KeyS")){
            this.velY *= .90
            this.velX *= .90
            this.velR *= .90
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
        this.x += this.velX
        this.rotation += this.velR
        this.game.camera.targetX = this.x
        this.game.camera.targetY = this.y
        if(this.rotation >= 360){
            this.rotation -= 360
            this.game.camera.rotation -= 360
        }
        if(this.rotation <= 0){
            this.rotation += 360
            this.game.camera.rotation += 360
        }
        this.game.camera.targetR = this.rotation
    }
}