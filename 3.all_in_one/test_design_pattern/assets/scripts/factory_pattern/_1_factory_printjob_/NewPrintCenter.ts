import { IPrintjob } from "./IPrintjob";

export class NewPrintCenter {
    public print(fn:string, cKind:number):void {
        var printjob:IPrintjob = this.createPrintjob(cKind);
        printjob.start(fn);
    }

    protected createPrintjob(cKind:number):IPrintjob {
        return null;
    }
}