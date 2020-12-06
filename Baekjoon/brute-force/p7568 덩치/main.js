var fs = require("fs")

class Person {
    constructor(weight, height) {
        this.weight = weight;
        this.height = height;
    }

    
}

var input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(a => +a)


