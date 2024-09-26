import { Vec2 } from "cc";
import { IModel } from "../data/IModel";
import { IKeyboardInputHandler } from "./IKeyboardInputHandler";

export class Controller implements IKeyboardInputHandler {
    private model:IModel;

    constructor(aModel:IModel) {
        this.model = aModel;
    }
    keyPressHandler(pos:Vec2): void {
        this.model.setLocation(pos);
    }

}