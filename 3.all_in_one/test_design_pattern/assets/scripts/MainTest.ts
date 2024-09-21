import { _decorator, Component, Node } from 'cc';
import { AbstractClass } from './abstract/AbstractClass';
import { Subclss } from './abstract/Suclass';
import { SubclassChange } from './abstract/SubclassChange';
const { ccclass, property } = _decorator;

@ccclass('MainTest')
export class MainTest extends Component {
    start() {
        
        var doMemo:AbstractClass = new SubclassChange();
        doMemo.abstractMethod();
        doMemo.concreteMethod();
    }

    update(deltaTime: number) {
        
    }
}


