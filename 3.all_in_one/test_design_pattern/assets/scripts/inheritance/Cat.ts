import { QuadPets } from "./QuadPets";

export class Cat extends QuadPets {
    constructor() {
        super();
    }
    
    public meow():void 
    {
        console.log("Cat class: Meow meow");
    }
}


