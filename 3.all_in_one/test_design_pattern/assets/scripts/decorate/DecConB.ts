import { Componentss } from "./Componentss";

export class DecConB extends Componentss {
    private component:Componentss;
    public constructor(component:Componentss) {
        super();
        this.component = component;
    }
    public getInformation(): string {
        return this.component.getInformation() + " Decoration Beta:";
    }
}