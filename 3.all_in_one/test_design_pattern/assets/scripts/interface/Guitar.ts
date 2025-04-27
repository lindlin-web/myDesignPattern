<<<<<<< HEAD
export class Guitar implements BandFace {
    start() {

    }

    update(deltaTime: number) {
        
    }
}

=======
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
>>>>>>> 700c536653f32db09bc10859bdb2cfe431523691

