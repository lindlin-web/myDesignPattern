import { IPrintjob } from "./IPrintjob";

export class ColorLaserPrintjob implements IPrintjob {
    start(fn: string): void {
        console.log("Printing " + fn + " to color laser printer");
    }
    
}