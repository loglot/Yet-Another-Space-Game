export class Item{
    unct
    title
    state
    game
    var1
    constructor(title = "null", state = false, fn = function fun(){}, game){
        this.unct = fn
        this.title = title
        this.state = state
        this.game = game
    }

    interact(){
        this.unct()
    }
}