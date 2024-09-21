import { AbstractClass } from "./AbstractClass";

export class Subclss extends AbstractClass {
    abstractMethod():void {
        console.log("This is the overridden abstract method");
    }
}