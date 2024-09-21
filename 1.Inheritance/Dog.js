var QuadPets = require("./QuadPets")
class Dog extends QuadPets {
    constructor() {
        super();
        console.log("Dog in instantiate");
    }

    bark() {
        console.log("Dog class: Bow wow");
    }
}

module.exports =  Dog;
