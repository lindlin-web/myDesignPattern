import { Creator } from "./Creator";
import { IProduct } from "./IProduct";
import { Product2 } from "./Product2";

export class CreatorB extends Creator {
    protected  factoryMethod(): IProduct {
        console.log("===============Creating product2 ===============");
        return new Product2();
    }
}