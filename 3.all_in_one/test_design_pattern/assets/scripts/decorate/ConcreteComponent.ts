import { Componentss } from "./Componentss";

export class ConcreteComponent extends Componentss{
    constructor() {
        super();
        this.information = "Concrete Component is decorated with \u2794";
    }
}