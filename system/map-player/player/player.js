
const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");
import { DrawUtils } from "../../variousParts/drawUtills.js";

export class Player {
    x = 0
    y = 0
    close
    velX = 0
    velY = 0
    velR = 0
    rotation = 0
    disableInput = 0
    game
    draw = new DrawUtils()
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
        if(this.disableInput == 0){

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
        }else{
            this.disableInput--
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
            if(this.game.menu.settings[2].var1==0){
            this.game.camera.rotation -= 360
            }
        }
        if(this.rotation <= 0){
            this.rotation += 360
            if(this.game.menu.settings[2].var1==0){
            this.game.camera.rotation += 360
            }
        }
        if(this.game.menu.settings[2].var1==0){
            this.game.camera.targetR = this.rotation
        }
        for(let i = 0; i < this.game.map.map.length; i++){

            if(this.checkCollision(this.game.map.map[i])){
                if(!this.game.debug.noclip){

                    var totalvelstore = this.velX + this.velY
                    this.velX = -(this.close.x - this.x)
                    this.velY = -(this.close.y - this.y)
                    var totalvelchange = (this.velX + this.velX) /totalvelstore
                    //this.velX *= totalvelchange
                    //this.velY *= totalvelchange
                    this.disableInput = 0
                    i=NaN
                }
            }
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
            this.close = this.getRotatedPos({x:rect.x, y:rect.y}, {x:closestX,y:closestY}, -radians)
        if(this.game.debug.mapBoxShow){

            ctx.save();
            ctx.beginPath()

            ctx.translate(this.game.display.originalWidth/2, this.game.display.originalHeight/2) 
            ctx.rotate(this.game.camera.rotation * Math.PI / 180)
            ctx.translate(-this.game.camera.x, -this.game.camera.y)
            this.draw.Circle(this.x, this.y, 25);
            this.draw.Circle(this.close.x, this.close.y, 25);
            
            ctx.translate(rectCorrected.x, rectCorrected.y)
            ctx.translate(rectCorrected.width/2, rectCorrected.height/2)
            ctx.rotate(radians)
            ctx.rect(-rectCorrected.width/2, -rectCorrected.height/2, rectCorrected.width, rectCorrected.height);

            if (distance < 25) {ctx.fillStyle = "rgba(0,255,0,.1)"} else {ctx.fillStyle = "rgba(255,0,0,.2)"}
            ctx.fill()
            ctx.closePath()
            ctx.restore();


        }

        if (distance < 25) return true;
          
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

    debugDraw(){

    }
    
}