import { _decorator, Component, Node } from 'cc';
import { AbstractClass } from './abstract/AbstractClass';
import { SubclassChange } from './abstract/SubclassChange';
import { Creator } from './factory_pattern/_1_factory_minimal_/example/Creator';
import { CreatorA } from './factory_pattern/_1_factory_minimal_/example/CreatorA';
import { CreatorB } from './factory_pattern/_1_factory_minimal_/example/CreatorB';
import { PrintCenter } from './factory_pattern/_1_factory_printjob_/PintCenter';
import { HighVolPrintCenter } from './factory_pattern/_1_factory_printjob_/HighVolPrintCenter';
import { LowVolPrintCenter } from './factory_pattern/_1_factory_printjob_/LowVolPrintCenter';
import { FancyPrintCenter } from './factory_pattern/_1_factory_printjob_/FancyPrintCenter';
import { NewPrintCenter } from './factory_pattern/_1_factory_printjob_/NewPrintCenter';
import { NewLowVolPrintCenter } from './factory_pattern/_1_factory_printjob_/NewLowVolPrintCenter';
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

        var pcHighVol:PrintCenter = new HighVolPrintCenter();
        var pcLowVol:PrintCenter = new LowVolPrintCenter();

        pcHighVol.print("LongThesis.doc");
        pcLowVol.print("ShortVita.doc");

        var multiCenter:PrintCenter = new FancyPrintCenter();
        multiCenter.print("MultiFunction.doc");

        var pcNewHighVol:NewPrintCenter = new NewLowVolPrintCenter();

        pcNewHighVol.print("LongThesis.doc", NewLowVolPrintCenter.BW);
        pcNewHighVol.print("ShortVita.doc", NewLowVolPrintCenter.COLOR);
    }

    update(deltaTime: number) {
        
    }
}


