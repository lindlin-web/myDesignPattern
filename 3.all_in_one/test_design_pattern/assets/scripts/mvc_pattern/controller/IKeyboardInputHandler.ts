import { Vec2 } from "cc";

export interface IKeyboardInputHandler {
    keyPressHandler(pos:Vec2):void;
}