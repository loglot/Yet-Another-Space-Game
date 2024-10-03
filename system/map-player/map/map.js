import { Hitbox } from "../hitbox.js"
export class Map{
    map = []
    constructor(){
        this.makeMap()
    }
    makeMap(){
        this.map[this.map.length] = new Hitbox(-1000,-1000,1000,10000, 0)
        this.map[this.map.length] = new Hitbox(-1000,-1000,1000,1000, 45)
        this.map[this.map.length] = new Hitbox(-1000,-1000,1000,10000, 0)
        this.map[this.map.length] = new Hitbox(-1000,-1000,1000,10000, 0)
    }
    draw(){
        for(let i = 0; i < this.map.length; i++){
            this.map[i].tempDraw("#aaa")
        }
    }
}