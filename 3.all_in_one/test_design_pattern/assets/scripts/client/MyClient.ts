import { _decorator, Component, Node } from 'cc';
import { MyObject } from './MyObject';
const { ccclass, property } = _decorator;

@ccclass('MyClient')
export class MyClient extends Component {
    private myObject:MyObject = null;
    start() {
        this.myObject = new MyObject();
        this.myObject.worksForRequest();

    }

    update(deltaTime: number) {
        
    }
}


