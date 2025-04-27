import { _decorator, Component, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('EncapSet')
export class EncapSet extends Component {

    @property(Label)
    private textFld:Label = null;

    private dogTalk:string = "";
    start() {
        this.textFld.node.setPosition(100, 100, 0);
    }



    public setDogTalk(bowWow:string)
    {
        switch(bowWow)
        {
            case "Woof":
                this.dogTalk = bowWow;
                break;
            case "Whine":
                this.dogTalk = bowWow;
                break;
            case "Grrrr":
                this.dogTalk = bowWow;
                break;
            case "Howl":
                this.dogTalk = bowWow;
                break;
            default:
                this.dogTalk = "Not dog talk!";
        }
    }

    public showDogTalk()
    {
        this.textFld.string = this.dogTalk;
    }

    update(deltaTime: number) {
        
    }
}


