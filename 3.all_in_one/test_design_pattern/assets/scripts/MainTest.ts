import { _decorator, Component, Node } from 'cc';
import { AbstractClass } from './abstract/AbstractClass';
import { Creator } from './factory_pattern/_1_factory_minimal_/example/Creator';
import { CreatorA } from './factory_pattern/_1_factory_minimal_/example/CreatorA';
import { CreatorB } from './factory_pattern/_1_factory_minimal_/example/CreatorB';
import { PrintCenter } from './factory_pattern/_1_factory_printjob_/PintCenter';
import { HighVolPrintCenter } from './factory_pattern/_1_factory_printjob_/HighVolPrintCenter';
import { LowVolPrintCenter } from './factory_pattern/_1_factory_printjob_/LowVolPrintCenter';
import { FancyPrintCenter } from './factory_pattern/_1_factory_printjob_/FancyPrintCenter';
import { NewPrintCenter } from './factory_pattern/_1_factory_printjob_/NewPrintCenter';
import { NewLowVolPrintCenter } from './factory_pattern/_1_factory_printjob_/NewLowVolPrintCenter';
import { Singleton } from './singleton/_1_singleton/Singleton';
import { ConcreteComponent } from './decorate/ConcreteComponent';
import { Componentss } from './decorate/Componentss';
import { DecConA } from './decorate/DecConA';
import { DecConB } from './decorate/DecConB';
const { ccclass, property } = _decorator;

@ccclass('MainTest')
export class MainTest extends Component {
    start() {
        


    }

    update(deltaTime: number) {
        
    }
}


