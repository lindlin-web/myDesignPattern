import { BandFace } from "./BandFace";
export class Guitar implements BandFace {
    playInstrument(strum: string): void {
        console.log("Playing my air " + strum);
    }
}
