import { IProduct } from "./IProduct";

export class Creator {
    public doStuff():void {
        var product:IProduct = this.factoryMethod();
        product.manipulate();
    }

    protected factoryMethod():IProduct {
        return null;
    }
}