import { _decorator, Component, Node } from 'cc';
import { NoEncap } from './NoEncap';
import { Encap } from './Encap';
import { EncapSet } from './EncapSet';
const { ccclass, property } = _decorator;

@ccclass('MainScene')
export class MainScene extends Component {
    @property(NoEncap)
    public noEncap:NoEncap = null;

    @property(Encap)
    private encap:Encap = null;

    @property(EncapSet)
    private encapSet:EncapSet = null;
    start() {
        this.noEncap.dogTalk = "Meow Meow Meow";
        this.noEncap.showDogTalk();

        //this.encap.dogTalk = "Meow Meow Meow";
        this.encap.showDogTalk();

        this.encapSet.setDogTalk("Howl");
        this.encapSet.showDogTalk();
    }

    update(deltaTime: number) {
        
    }
}


