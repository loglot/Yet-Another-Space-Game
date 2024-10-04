import { GameDisplayer as Display } from "../system/variousParts/GameDisplayer.js";
import { KeyManager } from "../system/variousParts/keyMan.js";
import { Menu } from "../system/variousParts/menu/MenuManager.js";
import { Map } from "../system/map-player/map/map.js";
import { Player } from "../system/map-player/player/player.js";
import { Camera } from "../system/map-player/player/camera.js";




export class Import {
    gameState = "mainMenu"
    camera = new Camera(this)
    keyManager = new KeyManager(this)
    menu = new Menu(this)
    display = new Display(this)
    map = new Map(this)
    player = new Player(this)
}