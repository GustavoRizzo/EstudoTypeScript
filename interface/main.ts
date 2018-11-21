import {Dog } from './Dog';
import {Bird } from './Bird';

console.log("Run main.ts");

let cachorro : Dog = new Dog();
let passaro : Bird = new Bird(); 

 console.log( "O cachorro voa? " + cachorro.tryFly() );
 console.log( "O passaro voa? " + passaro.tryFly() );
