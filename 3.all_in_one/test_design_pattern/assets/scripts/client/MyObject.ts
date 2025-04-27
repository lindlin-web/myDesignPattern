export class MyObject{
    private fire:string;

    public constructor()
    {

    }

    public worksForRequest():void 
    {
        this.fire = "This was requested by a client";
        console.log(this.fire);
    }
}


