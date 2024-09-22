import { IPrintjob } from "./IPrintjob";
import { PrintCenter } from "./PintCenter";
import { WorkgroupPrintjob } from "./WorkgroupPrintjob";

export class HighVolPrintCenter extends PrintCenter {
    protected createPrintjob(): IPrintjob {
        return new WorkgroupPrintjob();
    }
}