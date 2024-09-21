var QuadPets = require("./QuadPets")
class Cat extends QuadPets {
    constructor() {
        super();
        console.log("Cat is instantiate");
    }
    meow() {
        console.log("Cat class: Meow");
    }
}
module.exports =  Cat;