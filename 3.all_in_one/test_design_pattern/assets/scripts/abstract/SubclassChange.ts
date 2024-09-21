import { AbstractClass } from "./AbstractClass";

export class SubclassChange extends AbstractClass {
    abstractMethod(): void {
        console.log("This is the new abstractMethod!!!");
        console.log("Made jst one little important change.");
        console.log("ut this still workds just fine!");
    }
}