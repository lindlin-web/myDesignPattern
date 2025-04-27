import { QuadPets } from "./QuadPets";

export class Dog extends QuadPets {
    constructor() {
        super();
    }

    public bark():void 
    {
        console.log("Dog class: Bow wow");
    }
}   


