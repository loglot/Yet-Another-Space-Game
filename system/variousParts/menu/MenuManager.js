import { Item } from "./MenuItem.js"

export class Menu{
    game
    colors = ["#90b0c0", "#c0b090"]
    settings = []
    settingSelect = 0
    constructor(game){
        this.game = game
        this.makeSettings()
    }

    makeSettings(){
        this.settings[this.settings.length] = new Item("Game Style", "Classic", function fun(){ 
            if(this.var1 == null){
                this.var1 = 0
            }if(this.var2 == null){
                this.var2 = ["Classic", "Retro", "YA2P"]
            }
            this.var1++
            if(this.var1>this.var2.length-1){
                this.var1=0
            }
            this.state = this.var2[this.var1]
        }, this.game)
        this.settings[this.settings.length] = new Item()
        this.settings[this.settings.length] = new Item()
        this.settings[this.settings.length] = new Item()
        this.settings[this.settings.length] = new Item()
        this.settings[this.settings.length] = new Item()
    }

    tick(){
        if(this.game.gameState == "mainMenu"){
            if(this.game.keyManager.wasKeyJustPressed("KeyW")){
                this.game.gameState = "game"
                
            }
            if(this.game.keyManager.wasKeyJustPressed("KeyS")){
                this.game.gameState = "settings"
                
            }
        }
        if(this.game.gameState == "settings"){
            if(this.game.keyManager.wasKeyJustPressed("KeyW")){
                this.game.gameState = "mainMenu"
                
            }
            if(this.game.keyManager.wasKeyJustPressed("ArrowUp")){
                this.settingSelect--
            }
            if(this.game.keyManager.wasKeyJustPressed("ArrowDown")){
                this.settingSelect++
            }
            if(this.game.keyManager.wasKeyJustPressed("Enter")){

                this.settings[this.settingSelect].interact()
                
            }
            // this.colors[0] = "#0f0f2f"
            // this.colors[1] = "#1f1f3f"

        }
        if(this.game.gameState == "game"){
            if(this.game.keyManager.wasKeyJustPressed("KeyP")){
                this.game.gameState = "mainMenu"
                
            }

        }
    }
}