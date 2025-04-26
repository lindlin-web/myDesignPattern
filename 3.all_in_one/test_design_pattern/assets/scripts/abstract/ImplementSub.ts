import { _decorator, Component, Node } from 'cc';
import { AbstractClass, Subclass } from './AbstractClass';
const { ccclass, property } = _decorator;

@ccclass('ImplementSub')
export class ImplementSub extends Component {
    private doDemo:AbstractClass;
    start() {
        this.doDemo = new Subclass();
        this.doDemo.abstractMethod();
        this.doDemo.concreteMethod();

    }

    update(deltaTime: number) {
        
    }
}


