import { Vec2 } from "cc";
import { IModel } from "./IModel";
import { AppNotify, NotifyMgrCls } from "../listener/AppNotify";

export class Model implements IModel {
    private lastKeyPressed:Vec2 = null;
    setLocation(key: Vec2): void {
        this.lastKeyPressed = key;
        NotifyMgrCls.getInstance().send(AppNotify.POSITION_CHANGE);
    }
    getLocation(): Vec2 {
        return this.lastKeyPressed;
    }
    
}