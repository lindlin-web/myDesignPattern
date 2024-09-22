import { IPrintjob } from "./IPrintjob";

export class WorkgroupPrintjob implements IPrintjob {
    start(fn: string): void {
        console.log("Printing " + fn + " to workgroup printer");
    }
}