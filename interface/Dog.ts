import {Animal} from './Animal';
import {CantFly} from './Flys';

export class Dog extends Animal{
    flyingType = new CantFly();
 }