import { InkjetPrintjob } from "./InkjetPrintjob"
import { IPrintjob } from "./IPrintjob"
import { PrintCenter } from "./PintCenter"

export class LowVolPrintCenter extends PrintCenter {
    
    protected createPrintjob(): IPrintjob {
        return new InkjetPrintjob();
    }
}