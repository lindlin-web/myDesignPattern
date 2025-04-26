import { _decorator, Component, Node } from 'cc';
import { BandFace } from './BandFace';
import { Bongo, Guitar } from './Guitar';
const { ccclass, property } = _decorator;

@ccclass('MakeSound')
export class MakeSound extends Component {
    private guitar:BandFace = null;
    private bongo:BandFace = null;
    start() {
        this.guitar = new Guitar();
        this.guitar.playInstrument("Gibson");

        this.bongo = new Bongo();
        this.bongo.playInstrument("bongo.mp3");
    }

    update(deltaTime: number) {
        
    }
}


