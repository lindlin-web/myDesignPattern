export class AbstractClass   {
    public abstractMethod():void 
    {

    }
    public concreteMethod():void 
    {
        console.log("I' m a concrete method from an abstract class");
    }
}

export class Subclass extends AbstractClass
{
    public override abstractMethod(): void {
        console.log("This is the overridden abstract method");
    }
}