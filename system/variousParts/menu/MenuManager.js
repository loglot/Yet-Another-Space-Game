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
        this.settings[this.settings.length] = new Item("Game Style", "Classic", function fun(){ this.state = "Retro"}, this.game)
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
            if(this.game.keyManager.wasKeyJustPressed("KeyL")){
                this.colors[0] = "#0f0f2f"
                this.colors[1] = "#1f1f3f"

                this.settings[0].interact()
                
            }

        }
        if(this.game.gameState == "game"){
            if(this.game.keyManager.wasKeyJustPressed("KeyP")){
                this.game.gameState = "mainMenu"
                
            }

        }
    }
}