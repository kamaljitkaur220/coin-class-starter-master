class Coin{
    constructor(initialState){
        this.state = 0
    }

    flip(){
        console.log("coin.flip() has been invoked")
    }
    toString(){
        console.log("coin.toString() has beeen  invoked")
    }
    toHtml(){
        console.log("coin.toHtml() has been invoked")
    }
}