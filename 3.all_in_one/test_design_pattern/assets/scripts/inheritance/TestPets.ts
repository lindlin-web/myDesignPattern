import { _decorator, Component, Node } from 'cc';
import { Dog } from './Dog';
import { Cat } from './Cat';
const { ccclass, property } = _decorator;

@ccclass('TestPets')
export class TestPets extends Component {
    start() {
        let dog = new Dog();
        dog.makeSound();
        dog.bark();

        let cat = new Cat();
        cat.makeSound();
        cat.meow();
    }

    update(deltaTime: number) {
        
    }
}


