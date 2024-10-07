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
        this.velY *= .97
        this.velX *= .97
        this.velR *= .97
        if(this.rotation >= 360){
            this.rotation -= 360
            this.game.camera.rotation -= 360
        }
        if(this.rotation <= 0){
            this.rotation += 360
            this.game.camera.rotation += 360
        }
        this.game.camera.targetR = this.rotation
        if(this.checkCollision(this.game.map.map[2])){
            console.log("colide")
        }
        if(this.checkCollision(this.game.map.map[0])){
            console.log("colide No Rotation")
        }
    }

    checkCollision(rect) {
        const radians = this.degreesToRadians(rect.rotation); // get the rotation of the rectangle in radians
        const origin = {
            x: rect.x,
            y: rect.y
        }
        const rectCorrected = {
            x: rect.x - rect.width/2,
            y: rect.y - rect.height/2,
            width: rect.width,
            height: rect.height,
        }
          
        const newCirclePos = this.getRotatedPos(origin, {x: this.x, y: this.y}, radians); // rotate the circle to the same axis as the rectangle
          
        let closestX;
        let closestY;
          
            // gets the closest x position on the rectangle to the circle
        if (newCirclePos.x < rectCorrected.x) closestX  = rectCorrected.x;
        else if (newCirclePos.x > rectCorrected.x + rectCorrected.width) closestX = rectCorrected.x + rectCorrected.width;
        else closestX = newCirclePos.x;
          
            // gets the closest y position on the rectangle to the circle
        if (newCirclePos.y < rectCorrected.y) closestY  = rectCorrected.y;
        else if (newCirclePos.y > rectCorrected.y + rectCorrected.height) closestY = rectCorrected.y + rectCorrected.height;
        else closestY = newCirclePos.y;
          
            // gets the distance of the closest point on the rectangle to the circle
        const distX = Math.abs(newCirclePos.x - closestX);
        const distY = Math.abs(newCirclePos.y - closestY);
        const distance = Math.sqrt((distX ** 2) + (distY ** 2));
          
        // if the distance is less than the circle's radius, there is a collision
        if (distance < 50) return true;
          
        return false;
    }

    getRotatedPos(origin, point, angle) {
        const rotatedX = (Math.cos(angle) * (point.x - origin.x)) + (Math.sin(angle) * (point.y - origin.y)) + origin.x;
        const rotatedY = (Math.cos(angle) * (point.y - origin.y)) - (Math.sin(angle) * (point.x - origin.x)) + origin.y;
      
        return {
            x: rotatedX,
            y: rotatedY
        }
    }

    degreesToRadians(degrees) {
        return degrees * Math.PI / 180;
    }
    
}