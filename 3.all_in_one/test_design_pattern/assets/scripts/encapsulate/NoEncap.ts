import { _decorator, Component, Label, Node, v3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('NoEncap')
export class NoEncap extends Component {

    public dogTalk:string = "汪汪汪"; 
    @property({type:Label})
    public textFld:Label = null;

    constructor() {
        super();
    }

    protected onLoad(): void {
        this.textFld.node.setPosition(v3(100, 100, 0));
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


