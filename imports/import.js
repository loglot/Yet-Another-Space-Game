import { GameDisplayer as Display } from "../system/variousParts/GameDisplayer.js";
import { KeyManager } from "../system/variousParts/keyMan.js";
import { Menu } from "../system/variousParts/MenuManager.js";
import { Map } from "../system/map-player/map/map.js";





export class Import {
    gameState = "mainMenu"
    keyManager = new KeyManager(this)
    menu = new Menu(this)
    display = new Display(this)
    map = new Map(this)
}