import { Creator } from "./Creator";
import { IProduct } from "./IProduct";
import { Product1 } from "./Pruduct1";

export class CreatorA extends Creator {
    protected  factoryMethod(): IProduct {
        console.log("==============Creating product 1===============");
        return new Product1();
    }
}