'use strict';

const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

export class Hitbox {
    // fields
    x;
    y;
    width;
    height;
    hidden;
    rotation
    extraInfoI
    extraInfoII
    extraInfoIII
    extraInfoIIII

    constructor(x = 0, y = 0, width = 0, height = 0, rotation = 0, hidden = false, extraInfoI = false, extraInfoII = "undefined", extraInfoIII = 0, extraInfoIIII = 0){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.hidden = hidden
        this.rotation = rotation
        this.extraInfoI = extraInfoI
        this.extraInfoII = extraInfoII
        this.extraInfoIII = extraInfoIII
        this.extraInfoIIII = extraInfoIIII
    
    }

    draw(cameraX, cameraY, color) {
        if(!this.hidden && true /*
            this.x + this.width + cameraX > 0 &&
            this.x + cameraX < 1676 &&
            this.y + this.height + cameraY > 0 &&
            this.y + cameraY < 918*/
        ) {
            ctx.fillStyle = color;
            ctx.fillRect(cameraX + this.x, cameraY + this.y, this.width, this.height);
        }
    }
    nDraw(camera, color) {
        if(!this.hidden
        ) {
            ctx.fillStyle = color;
            ctx.fillRect(camera.x + this.x, camera.y + this.y, this.width, this.height);
        }
    }
    tempDraw(color) {
        if(!this.hidden
        ) {
            ctx.beginPath()
            ctx.translate(this.x, this.y)
            ctx.rotate(this.rotation*Math.PI/180)
            ctx.fillStyle = color;
            ctx.fillRect(-this.width/2,-this.height/2 , this.width, this.height);
            ctx.closePath();
        }
    }
}