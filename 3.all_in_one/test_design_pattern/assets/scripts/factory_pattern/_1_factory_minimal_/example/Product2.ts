import { IProduct } from "./IProduct";

export class Product2 implements IProduct {
    manipulate(): void {
        console.log("===============Doing stuff with Product2==============");
    }
    
}