import { IPrintjob } from "./IPrintjob";

export class InkjetPrintjob implements IPrintjob {
    start(fn: string): void {
        console.log("Printing" + fn + " to inkjet printer");
    }
    
}