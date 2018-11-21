"use strict";
exports.__esModule = true;
var Dog_1 = require("./Dog");
var Bird_1 = require("./Bird");
console.log("Run main.ts");
var cachorro = new Dog_1.Dog();
var passaro = new Bird_1.Bird();
console.log("O cachorro voa? " + cachorro.tryFly());
console.log("O passaro voa? " + passaro.tryFly());
