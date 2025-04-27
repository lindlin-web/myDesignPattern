import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PlayVideo')
export class PlayVideo extends Component {
    start() {

    }

    update(deltaTime: number) {
        
    }

    // public PlayVideo()
    // {
    //     var nc = new NetConnection();
    //     nc.connect(null);
    //     var ns = new NetStream(nc);
    //     ns.attachCamera(cc.Camera.main);
    //     ns.play("rtmp://192.168.1.100:1935/live/1");
    //     addChild(vid);
    //     vid.x = 100;
    //     vid.y = 50;
    // }
}

