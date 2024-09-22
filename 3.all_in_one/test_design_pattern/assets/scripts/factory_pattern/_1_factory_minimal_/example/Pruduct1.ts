import { IProduct } from "./IProduct";

export class Product1 implements IProduct {
    manipulate(): void {
        console.log("==============Doing stuff with Product1=============");
    }
}