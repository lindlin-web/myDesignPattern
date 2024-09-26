import { Vec2 } from "cc";

export interface IModel {
    setLocation(pos:Vec2):void;
    getLocation():Vec2;
}