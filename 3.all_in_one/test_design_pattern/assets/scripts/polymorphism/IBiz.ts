import { Component } from "cc";

export interface IBiz{

    productDescribe():string;

    productPrice(price:number):string;

    productDisplay(product:string):void;
}


export class Plasma extends Component implements IBiz{
    productDescribe(): string {
        return "42 inch TV with Plasma screen";
    }
    productPrice(price: number): string {
        this.priceNow = price;
        return "$" + this.priceNow + "\n";
    }


    productDisplay(product: string): void {
        
    }

    private priceNow:number = 0;

    
}