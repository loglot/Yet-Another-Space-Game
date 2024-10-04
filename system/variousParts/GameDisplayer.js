'use strict';

const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d")
var scaleX = 0;
var scaleY = 0;

// import { Map }
// import { Camera }
import { DrawUtils } from "./drawUtills.js";

export class GameDisplayer {


    // system
    game;
    map;
    draw;
    
    // fields
    originalWidth = canvas.width;
    originalHeight = canvas.height;
    width
    height

    maskX = -2000
    maskY = -100
    maskWidth = 100000
    maskHeight = 100000

    drawUtils = new DrawUtils();

    


    constructor(game, Map) {
        this.game = game
        this.map = Map;
    }
    drawGameFrame() {

        this.resizeCanvasForWindowSize(canvas, ctx);

        this.drawUtils.Rect(0,0,10000,10000,"#90b0c0", ctx)
        this.drawUtils.Text("Yet Another Space Game", 200, 200, "black", "white", ctx, 120)
        this.drawUtils.Text("Press W To Start", 250, 500, "black", "white", ctx, 120)
        this.drawUtils.Text("Press S To Edit Settings", 250, 350, "black", "white", ctx, 120)

        
        ctx.beginPath();
        ctx.translate(this.originalWidth/2, this.originalHeight/2)
        ctx.rotate(-30 * Math.PI / 180)
        ctx.rect(this.maskX, this.maskY, this.maskWidth, this.maskHeight);
        ctx.rotate(30 * Math.PI / 180)
        ctx.clip()
        this.drawUtils.Rect(-10000,-10000,100000,100000,"#052030", ctx) 
        ctx.rotate(this.game.camera.rotation * Math.PI / 180)
        ctx.translate(-this.game.camera.x, -this.game.camera.y)
        this.drawUtils.Rect(-10000,-10000,100000,100000,"#052030", ctx) 
        this.drawUtils.Player(this.game.player.x, this.game.player.y,  -this.game.player.rotation)
        this.game.map.draw()
        ctx.closePath()

        if(this.game.gameState == "mainMenu"){
            this.maskY = ((this.maskY*7) -100) / 8

        } else {
            this.maskY = ((this.maskY*7)-1300) / 8
            //this.game.map.map[0].rotation++



        }
    }

    fps(){
        this.drawUtils.Text(Math.round(this.debug.fpsCount), 30, 90, "white", "black")

    }

    getPos() {
        this.drawUtils.Text(Math.round(this.player.x), 100, 300, "white", "black")
        this.drawUtils.Text(Math.round(this.player.y), 100, 400, "white", "black")
    }

    enum() {
        for (let i = 0; i < this.map.ground.hitboxes.length; i++) {
            this.drawUtils.Text(i, this.map.ground.hitboxes[i].x + this.camera.x, this.map.ground.hitboxes[i].y + this.camera.y, "white", "#0f0f0f")
            if(this.debug.extraEnum){
                this.drawUtils.Text(this.map.ground.hitboxes[i].x + ", " + this.map.ground.hitboxes[i].y, this.map.ground.hitboxes[i].x + this.camera.x + 150, this.map.ground.hitboxes[i].y + this.camera.y, "white", "#0f0f0f")
            }
        }
        for (let i = 0; i < this.map.lava.hitboxes.length; i++) {
            this.drawUtils.Text(i, this.map.lava.hitboxes[i].x + this.camera.x, this.map.lava.hitboxes[i].y + this.camera.y, "white", "#500000")
        }
        for (let i = 0; i < this.map.checkpoint.hitboxes.length; i++) {
            this.drawUtils.Text(i, this.map.checkpoint.hitboxes[i].x + this.camera.x, this.map.checkpoint.hitboxes[i].y + this.camera.y, "white", "rgba(0, 255, 50, 1)")
        }
        for (let i = 0; i < this.map.teleport.hitboxes.length; i++) {
            this.drawUtils.Text(i, this.map.teleport.hitboxes[i].x + this.camera.x, this.map.teleport.hitboxes[i].y + this.camera.y, "white", "#dbb000")
        }
    }
















































































































    
    // don't alter this, just ignore it
    // we don't kow how it works, it just does
    // i tried to alter it, but i failed
    
    // i altered it and i succeded this time
    resizeCanvasForWindowSize(canvas, ctx) {
        var currentWidth = canvas.width;
        var currentHeight = canvas.height;
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var desiredWidth = windowWidth;
        var aspectRatio = this.originalWidth / this.originalHeight;
        var desiredHeight = desiredWidth / aspectRatio;
        canvas.width = desiredWidth;
        canvas.height = desiredHeight;
        scaleX = (desiredWidth / this.originalWidth);
        scaleY = (desiredHeight / this.originalHeight);

        //ctx.setTransform(scaleY * this.game.camera.zoom, 0, 0, scaleX * this.game.camera.zoom, 0, 0)
            ctx.setTransform(scaleY, 0, 0, scaleX, 0, 0)        

        currentWidth = canvas.width;
        currentHeight = canvas.height;
        if (currentHeight >= windowHeight) {
            desiredHeight = windowHeight;
            aspectRatio = this.originalWidth / this.originalHeight;
            desiredWidth = desiredHeight * aspectRatio;
            canvas.width = desiredWidth;
            this.width = desiredWidth
            this.height = desiredHeight
            canvas.height = desiredHeight;
            scaleX = (desiredWidth / this.originalWidth);
            scaleY = (desiredHeight / this.originalHeight);
            //ctx.setTransform(scaleY * this.game.camera.zoom, 0, 0, scaleX * this.game.camera.zoom, 0, 0)    
            ctx.setTransform(scaleY, 0, 0, scaleX, 0, 0)        
        }
    }
}

