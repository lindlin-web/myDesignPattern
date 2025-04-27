import { AbstractClass } from "./AbstractClass";

export class SubclassChange extends AbstractClass {
   public override abstractMethod(): void {
        console.log("This is the new abstractMethod!!");
        console.log("Made just one little important change.");
        console.log("But this still works just fine!!!");
   }
}


