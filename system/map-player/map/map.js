import { Hitbox } from "../hitbox.js"
const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");
export class Map{
    map = []
    constructor(){
        this.makeMap()
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

            this.map[i].tempDraw("#aaa")
        }
        ctx.closePath();
        //ctx.fill()
        //ctx.lineWidth = 8
        //ctx.strokeStyle = "ff0000"
        ctx.lineWidth = 32
        ctx.strokeStyle = "white"
        ctx.stroke()
        ctx.fillStyle = "#052030"
        ctx.fill()
        ctx.closePath();
        //ctx.closePath();
    }
}