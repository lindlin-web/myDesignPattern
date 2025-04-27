import { _decorator, Component, Label, Node, v3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Encap')
export class Encap extends Component {

    private dogTalk:string = "Wof Wof Wof";

    @property(Label)
    private textFld:Label = null;

    protected onLoad(): void {
    }

    public showDogTalk()
    {
        this.textFld.string = this.dogTalk;

    }

    start() {

    }

    update(deltaTime: number) {
        
    }
}


