import { BandFace } from "./BandFace";

export class Guitar implements BandFace {

    constructor()
    {
        console.log("=============Guitar=============");
    }

    public playInstrument(strum: string): void {
        console.log("Playing my air " + strum);
    }
    
}

export class Bongo implements BandFace
{
    constructor()
    {

    }
    public playInstrument(strum: string): void {
        console.log("===========Bongo================",strum);
    }
}

