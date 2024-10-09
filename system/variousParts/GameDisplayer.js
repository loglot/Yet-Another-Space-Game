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

    bg = ["#052030","#000","#90b0c0", "#333030"]

    maskX = [-2000,-2000,-10000] //, 
    maskY = [-100,1500,1500]
    maskWidth = [100000,100000]
    maskHeight = [100000,100000]

    playerFillColors = ["#afbfaf", "rgba(0,0,0,0)", "#afbfaf", "#88985b"]
    playerStrokeColors = ["#53565f", "white", "#33363f", "#4d5966"]

    settingsY = 0
    subSetY = 0

    drawUtils = new DrawUtils();

    


    constructor(game, Map) {
        this.game = game
        this.map = Map;
    }
    drawGameFrame() {

        this.resizeCanvasForWindowSize(canvas, ctx);

        this.drawUtils.Rect(0,0,10000,10000,this.game.menu.mainMenuColor[this.game.menu.settings[1].var1], ctx)
        this.drawUtils.Text("Yet Another Space Game", 200, 200, "black", "white", ctx, 120)
        this.drawUtils.Text("Press W To Start", 250, 500, "black", "white", ctx, 120)
        this.drawUtils.Text("Press S To Edit Settings", 250, 350, "black", "white", ctx, 120)

        ctx.save();
        this.gameScreen()
        this.optionsScreen()
        this.subOptionsScreen()
        ctx.restore();

        if(this.game.gameState == "mainMenu"){
            this.maskY[0] = ((this.maskY[0]*7) -100) / 8
            this.maskY[1] = ((this.maskY[1]*7)+1155) / 8
            this.maskY[2] = ((this.maskY[2]*7)+1500) / 8

        } else if(this.game.gameState == "game") {
            this.maskY[0] = ((this.maskY[0]*7)-1300) / 8
            this.maskY[1] = ((this.maskY[1]*7)+1500) / 8
            this.maskY[2] = ((this.maskY[2]*7)+1500) / 8
            //this.game.map.map[0].rotation++
        } else if(this.game.gameState == "settings") {
            this.maskY[0] = ((this.maskY[0]*7) -300) / 8
            this.maskY[1] = ((this.maskY[1]*7)+100) / 8
            this.maskY[2] = ((this.maskY[2]*7)+1200) / 8
            //this.game.map.map[0].rotation++
        } else if(this.game.gameState == "subSettings") {
            this.maskY[0] = ((this.maskY[0]*7) -500) / 8
            this.maskY[1] = ((this.maskY[1]*7)+400) / 8
            this.maskY[2] = ((this.maskY[2]*7)+250) / 8
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

    gameScreen(){
        ctx.save();
        ctx.beginPath()
        this.gameSetup()
        this.drawUtils.Player(this.game.player.x, this.game.player.y,  -this.game.player.rotation, this.playerFillColors[this.game.menu.settings[0].var1], this.playerStrokeColors[this.game.menu.settings[0].var1])
        this.game.map.draw()
        ctx.closePath()
        ctx.restore();

    }

    optionsScreen(){
        ctx.save();
        this.optionsSetup()
        this.drawUtils.Text("=>", -1100, -10, "black", "white", ctx, 120)
        this.drawUtils.Text("ESC", -1200, -500, "black", "white", ctx, 120)
        this.settingsY = (this.settingsY*9 + (-100 * this.game.menu.settingSelect))/10
        for(let i = 0; i < this.game.menu.settings.length; i++){

            var ything = 450 + (100*i) + (this.settingsY)
            this.drawUtils.Text(this.game.menu.settings[i].title + " : " + this.game.menu.settings[i].state, ((310-i*200)-(this.settingsY*2 ))-1250,(ything + (((ything)-450)*((ything)-450))/40)-470,"black","white",ctx,80 + i*20 +(this.settingsY/5 )-4)
            
        }
        ctx.restore();
    }

    subOptionsScreen(){
        ctx.save();
        this.subOptionsSetup()
        this.drawUtils.Text("=>", +400, -10, "black", "white", ctx, 120)
        this.subSetY = (this.subSetY*9 + (-100 * this.game.menu.settings[this.game.menu.subSetId].var1))/10//this.settings[this.subSetId].var1
        for(let i = 0; i < this.game.menu.settings[this.game.menu.subSetId].var2.length; i++){

            var ything = 450 + (100*i) + (this.subSetY)
            this.drawUtils.Text(this.game.menu.settings[this.game.menu.subSetId].var2[i], ((310-i*-150)+(this.subSetY*1.5 ))+300,(ything + (((ything)-450)*((ything)-450))/40)-470,"black","white",ctx,80 + i*20 +(this.subSetY/5 )-4)
            
        }
        this.drawUtils.Text(this.game.menu.settings[this.game.menu.subSetId].title,700,-600)
        ctx.restore();
    }

    gameSetup(){
        ctx.translate(this.originalWidth/2, this.originalHeight/2)
        ctx.rotate(-30 * Math.PI / 180)
        ctx.rect(this.maskX[0], this.maskY[0], this.maskWidth[0], this.maskHeight[0])
        ctx.rotate(30 * Math.PI / 180)
        ctx.clip()
        this.drawUtils.Rect(-10000,-10000,100000,100000,this.bg[this.game.menu.settings[0].var1], ctx) 
        ctx.rotate(this.game.camera.rotation * Math.PI / 180)
        ctx.translate(-this.game.camera.x, -this.game.camera.y)

    }

    optionsSetup(){
        ctx.beginPath()
        ctx.translate(this.originalWidth/2, this.originalHeight/2)
        ctx.rotate(60 * Math.PI / 180)
        ctx.rect(this.maskX[1], this.maskY[1], this.maskWidth[1], this.maskHeight[1])
        ctx.rotate(-60 * Math.PI / 180)
        ctx.clip()
        this.drawUtils.Rect(-10000,-10000,100000,100000,this.game.menu.settingsColor[this.game.menu.settings[1].var1], ctx) 
        ctx.closePath()

    }

    subOptionsSetup(){
        ctx.beginPath()
        ctx.translate(this.originalWidth/2, this.originalHeight/2)
        ctx.rotate(-60 * Math.PI / 180)
        ctx.rect(this.maskX[2], this.maskY[2], this.maskWidth[1], this.maskHeight[1])
        ctx.rotate(60 * Math.PI / 180)
        ctx.clip()
        this.drawUtils.Rect(-10000,-10000,100000,100000,this.game.menu.subSetColor[this.game.menu.settings[1].var1], ctx) 
        ctx.closePath()

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

