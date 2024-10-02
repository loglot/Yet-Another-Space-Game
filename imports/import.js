import { GameDisplayer as Display } from "../system/variousParts/GameDisplayer";



export class Import {
    map
    display = new Display(this, map)
}