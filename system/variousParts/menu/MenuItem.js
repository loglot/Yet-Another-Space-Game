export class Item{
    func
    title
    state
    game
    var1
    constructor(title = "null", state = false, fn = function fun(){this.game.menu.colors[0] = "white"}, game){
        this.func = fn
        this.title = title
        this.state = state
        this.game = game
    }


    interact(){
        this.game.menu.colors[1] = "white"
        this.func()
    }
}