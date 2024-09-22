import { ColorInkjetPrintjob } from "./ColorInkjetPrintjob";
import { InkjetPrintjob } from "./InkjetPrintjob";
import { IPrintjob } from "./IPrintjob";
import { NewPrintCenter } from "./NewPrintCenter";

export class NewLowVolPrintCenter extends NewPrintCenter {
    public static BW:number = 0;
    public static COLOR:number = 1;

    protected createPrintjob(cKind:number):IPrintjob {
        if(cKind == NewLowVolPrintCenter.BW) {
            return new InkjetPrintjob();
        }
        else if(cKind == NewLowVolPrintCenter.COLOR) {
            return new ColorInkjetPrintjob();
        } else {
            return null;
        }
    }
}