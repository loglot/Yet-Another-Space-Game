export class Camera {
    x = 0
    y = 0
    velX = 0
    velY = 0
    velR = 0
    rotation = 0
    targetX = 0
    targetY = 0
    targetR = 0
    constructor(){

    }
    tick(){
        this.velX = (((this.x) - (this.targetX))  /5) //
        this.velY = (((this.y) - (this.targetY))  /5)
        this.velR = (((this.rotation) - (this.targetR))  /5)
        this.x -=  this.velX
        this.y -=  this.velY
        this.rotation -=  this.velR
    }
}