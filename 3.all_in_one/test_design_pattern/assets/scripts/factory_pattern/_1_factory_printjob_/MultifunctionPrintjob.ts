
import {IPrintjob} from "./IPrintjob"
export class  MultifunctionPrintjob implements IPrintjob {
    start(fn: string): void {
        console.log("====Printing " + fn + " to multifunction printer");
    }
    
}