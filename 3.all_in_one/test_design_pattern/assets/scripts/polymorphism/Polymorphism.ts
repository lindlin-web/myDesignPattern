export class Polymorphism{

    public myMisic():void 
    {
        // Reserve details for subclasses
    }
}


export class Rock extends Polymorphism {
    public override myMisic(): void {
        console.log("Play Jimmie");
    }
}

export class Classic extends Polymorphism {
    public override myMisic(): void {
        console.log("Play Miles Davis");
    }
}

export class Country extends Polymorphism
{
    public override myMisic(): void {
        console.log("Play Willie");
    }
}

export class Jazz extends Polymorphism
{
    public override myMisic(): void {
        console.log("Play Coltrane");
    }
}