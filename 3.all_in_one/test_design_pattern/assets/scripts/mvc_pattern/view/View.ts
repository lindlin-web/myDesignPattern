import { _decorator, Camera, Component, input, Input, instantiate, Node, Prefab, v2, v3, Vec2, Vec3 } from 'cc';
import { IModel } from '../data/IModel';
import { Controller } from '../controller/Controller';
import { IKeyboardInputHandler } from '../controller/IKeyboardInputHandler';
import { Model } from '../data/Model';
import { AppNotify, NotifyMgrCls } from '../listener/AppNotify';
const { ccclass, property } = _decorator;

@ccclass('View')
export class View extends Component {
    private model:IModel = null;
    private handler:IKeyboardInputHandler = null;

    @property({type:Prefab})
    thePrefab:Prefab;

    @property({type:Camera})
    camera:Camera;
    start() {
        this.model = new Model();
        this.handler = new Controller(this.model);
        NotifyMgrCls.getInstance().observe(AppNotify.POSITION_CHANGE, this.positionChange.bind(this));

        input.on(Input.EventType.TOUCH_START,(event)=>{
            console.log(this);
            console.log(event);
            let touchPos = event.getLocation();
            let pos = this.screen2UI(touchPos);
            this.handler.keyPressHandler(v2(pos.x, pos.y));
        },this);
    }

    positionChange() {
        console.log("=============数据已经发生改变了================");
        console.log(this.model.getLocation());
    }

    update(deltaTime: number) {
        
    }

    private screen2UI(screenPos:Vec2):Vec3 {
        let uiPoint:Vec3 = this.camera.screenToWorld(v3(screenPos.x, screenPos.y, 0));
        uiPoint.x -= 480;
        uiPoint.y -= 640;
        return uiPoint;
    }
}


