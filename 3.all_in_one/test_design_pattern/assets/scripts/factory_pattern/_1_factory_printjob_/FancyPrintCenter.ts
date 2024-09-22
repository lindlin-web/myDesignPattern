import { IPrintjob } from "./IPrintjob";
import { MultifunctionPrintjob } from "./MultifunctionPrintjob";
import { PrintCenter } from "./PintCenter";

export class FancyPrintCenter extends PrintCenter {
    protected createPrintjob(): IPrintjob {
        return new MultifunctionPrintjob();
    }
}