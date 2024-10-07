import { Item } from "./MenuItem.js"

export class Menu{
    game
    colors = ["#90b0c0", "#c0b090"]
    mainMenuColor = ["#90b0c0","#202030","#1f1f1f","#0f0f2f", "#667f59"]
    settingsColor = ["#c0b090","#302020","#2f2f2f","#1f1f3f", "#88985b"]
    subSetColor = ["#c7d8a7","#203020","#3f3f3f","#2f2f4f", "#b3b37e"]
    settings = []
    settingSelect = 0
    subSetId = 0
    constructor(game){
        this.game = game
        this.makeSettings()
    }

    makeSettings(){
        this.settings[this.settings.length] = new Item("Game Style", "Classic", function fun(){ 
            this.var2 = ["Classic", "Retro", "YA2P", "GBoy"]
            
            this.state = this.var2[this.var1]
            this.game.menu.subSetId = 0
            this.game.gameState = "subSettings"
        }, this.game)
        this.settings[this.settings.length] = new Item("Menu Style", "Classic", function fun(){ 
            this.var2 = ["Classic", "Dark", "YA2P", "NewWave", "GBoy"]

            this.state = this.var2[this.var1]
            this.game.menu.subSetId = 1
            this.game.gameState = "subSettings"

        }, this.game)
        this.settings[this.settings.length] = new Item("Movement", "Combined", function fun(){ 
            this.var2 = ["Combined", "Seperated"]

            this.state = this.var2[this.var1]
            this.game.menu.subSetId = 2
            this.game.gameState = "subSettings"

        }, this.game)
        this.settings[this.settings.length] = new Item()
        this.settings[this.settings.length] = new Item()
        this.settings[this.settings.length] = new Item()
        this.settings[this.settings.length] = new Item()
    }

    tick(){
        if(this.game.gameState == "mainMenu"){
            if(this.game.keyManager.wasKeyJustPressed("KeyW") || this.game.keyManager.wasKeyJustPressed("Backspace")){
                this.game.gameState = "game"
                
            }
            if(this.game.keyManager.wasKeyJustPressed("KeyS")){
                this.game.gameState = "settings"
                
            }
        }
        if(this.game.gameState == "subSettings"){
            if(this.game.keyManager.wasKeyJustPressed("Escape") || this.game.keyManager.wasKeyJustPressed("Enter") || this.game.keyManager.wasKeyJustPressed("Backspace")){
                this.game.gameState = "settings"
                this.game.keyManager.disableJustPressed("Enter")
                this.game.keyManager.disableJustPressed("Backspace")
                
            }
            if(this.game.keyManager.wasKeyJustPressed("ArrowUp")){
                this.settings[this.subSetId].var1--
                if(this.settings[this.subSetId].var1 < 0){
                    this.settings[this.subSetId].var1 = this.settings[this.subSetId].var2.length -1
                }
                this.settings[this.subSetId].state = this.settings[this.subSetId].var2[this.settings[this.subSetId].var1]
            }
            if(this.game.keyManager.wasKeyJustPressed("ArrowDown")){
                this.settings[this.subSetId].var1++
                if(this.settings[this.subSetId].var1 > this.settings[this.subSetId].var2.length -1){
                    this.settings[this.subSetId].var1 = 0
                }
                this.settings[this.subSetId].state = this.settings[this.subSetId].var2[this.settings[this.subSetId].var1]
            }

        }
        if(this.game.gameState == "settings"){
            if(this.game.keyManager.wasKeyJustPressed("Escape") || this.game.keyManager.wasKeyJustPressed("Backspace")){
                this.game.gameState = "mainMenu"
                this.game.keyManager.disableJustPressed("Backspace")
                
            }
            if(this.game.keyManager.wasKeyJustPressed("ArrowUp")){
                this.settingSelect--
                if(this.settingSelect < 0){
                    this.settingSelect = this.game.menu.settings.length-1
                }
            }
            if(this.game.keyManager.wasKeyJustPressed("ArrowDown")){
                this.settingSelect++
                if(this.settingSelect > this.game.menu.settings.length-1){
                    this.settingSelect = 0
                }
            }
            if(this.game.keyManager.wasKeyJustPressed("Enter")){

                this.settings[this.settingSelect].interact()
                
            }

        }
        if(this.game.gameState == "game"){
            if(this.game.keyManager.wasKeyJustPressed("KeyP") || this.game.keyManager.wasKeyJustPressed("Escape")){
                this.game.gameState = "mainMenu"
                
            }

        }
    }
}