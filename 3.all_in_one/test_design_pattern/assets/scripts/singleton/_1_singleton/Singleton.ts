
export class Singleton {

    private _msg:string = null;
    private static instance:Singleton;
    private constructor() {

    }

    public static getInstance():Singleton {
        if(Singleton.instance == null) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public getMsg():string {
        return this._msg;
    }

    public setMsg(alert:string):void {
        this._msg = alert;
    }
}