import { Hitbox } from "../hitbox.js"
const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");
export class Map{
    map = []
    fillColor = ["#aaa", "#000", "#0f0f0f"]
    strokeColor = ["rgba(0,0,0,0)","white","rgba(0,0,0,0)"]

    game
    constructor(game){
        this.makeMap()
        this.game = game
    }
    makeMap(){
        this.map[this.map.length] = new Hitbox(-1000,-1000,1000,10000, 0)
        this.map[this.map.length] = new Hitbox(-1000,-1000,1000,10000, 45)
        this.map[this.map.length] = new Hitbox(-1000,2000,1000,10000, 55)
    }
    draw(){
        //ctx.beginPath(
        ctx.beginPath()
        for(let i = 0; i < this.map.length; i++){

            this.map[i].tempDraw()
        }
        //ctx.fill()
        //ctx.lineWidth = 8
        //ctx.strokeStyle = "ff0000"
        ctx.lineWidth = 32
        ctx.strokeStyle = this.strokeColor[this.game.menu.settings[0].var1]
        ctx.stroke()
        ctx.fillStyle = this.fillColor[this.game.menu.settings[0].var1]
        ctx.fill()
        ctx.closePath();
        //ctx.closePath();
    }
}