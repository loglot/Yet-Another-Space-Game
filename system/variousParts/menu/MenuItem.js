export class Item{
    unct
    title
    state

    constructor(title = "null", state = false, fn = function fun(){}){
        this.unct = fn
        this.title = title
        this.state = state
    }

    interact(){
        this.unct()
    }
}