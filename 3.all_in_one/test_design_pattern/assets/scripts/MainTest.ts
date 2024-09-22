import { _decorator, Component, Node } from 'cc';
import { AbstractClass } from './abstract/AbstractClass';
import { SubclassChange } from './abstract/SubclassChange';
import { Creator } from './factory_pattern/_1_factory_minimal_/example/Creator';
import { CreatorA } from './factory_pattern/_1_factory_minimal_/example/CreatorA';
import { CreatorB } from './factory_pattern/_1_factory_minimal_/example/CreatorB';
const { ccclass, property } = _decorator;

@ccclass('MainTest')
export class MainTest extends Component {
    start() {
        
        var doMemo:AbstractClass = new SubclassChange();
        doMemo.abstractMethod();
        doMemo.concreteMethod();


        
        var cA:Creator = new CreatorA();
        var cB:Creator = new CreatorB();

        cA.doStuff();
        cB.doStuff();
    }

    update(deltaTime: number) {
        
    }
}


