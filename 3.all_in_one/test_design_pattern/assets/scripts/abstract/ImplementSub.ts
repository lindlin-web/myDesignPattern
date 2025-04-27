import { _decorator, Component, Node } from 'cc';
import { AbstractClass, Subclass } from './AbstractClass';
import { SubclassChange } from './SubclassChange';
import { Classic, Country, Jazz, Polymorphism, Rock } from '../polymorphism/Polymorphism';
const { ccclass, property } = _decorator;

@ccclass('ImplementSub')
export class ImplementSub extends Component {
    private doDemo:AbstractClass;
    private doDemo2:AbstractClass;

    private rock:Polymorphism;
    private classic:Polymorphism;
    private country:Polymorphism;
    private jazz:Polymorphism;
    start() {
        this.doDemo = new Subclass();
        this.doDemo.abstractMethod();
        this.doDemo.concreteMethod();

        this.doDemo2 = new SubclassChange();
        this.doDemo2.abstractMethod();
        this.doDemo2.concreteMethod();


        this.rock = new Rock();
        this.rock.myMisic();
        this.classic = new Classic();
        this.classic.myMisic();
        this.country = new Country();
        this.country.myMisic();
        this.jazz = new Jazz();
        this.jazz.myMisic();

    }

    update(deltaTime: number) {
        
    }
}


