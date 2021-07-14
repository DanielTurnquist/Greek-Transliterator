'use strict'
class Transliterator{
    
    constructor(logoi){
        this.logoiArray = logoi.split(" ");
    }


    tranliterate(){
        var upperIndices = this.getUpperIndices();
        upperIndices.forEach(element => {
            console.log(element);
        });
    }

    getUpperIndices(){
        var indices = [];
        for (let index = 0; index < this.logoiArray.length; index++) {
            let logosAsList = this.logoiArray[index];
            let gramma = logosAsList[0];
            if (gramma == gramma.toUpperCase()){
                indices.push(index);
            }
        }
        return indices;
    }
}


//main
var input = document.getElementById("inputBox");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        var logoi = document.getElementById("inputBox").value;
        var t = new Transliterator(logoi);
        t.tranliterate();
    }
});


