import { IPrintjob } from "./IPrintjob";

export class PrintCenter {
    public print(fn:string):void {
        var printjob:IPrintjob = this.createPrintjob();
        printjob.start(fn);
    }

    protected createPrintjob():IPrintjob {
        return null;
    }
}