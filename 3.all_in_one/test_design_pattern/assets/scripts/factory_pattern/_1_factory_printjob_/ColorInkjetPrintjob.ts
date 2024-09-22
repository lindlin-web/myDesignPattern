import { IPrintjob } from "./IPrintjob";

export class ColorInkjetPrintjob implements IPrintjob {
    start(fn: string): void {
        console.log("Printing " + fn + " to color laser printer");
    }
    
}