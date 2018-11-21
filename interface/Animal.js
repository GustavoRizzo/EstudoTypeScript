"use strict";
exports.__esModule = true;
var Animal = /** @class */ (function () {
    function Animal() {
    }
    /**
     * setFlyingAbility
     */
    Animal.prototype.setFlyingAbility = function (newFlyType) {
        this.flyingType = newFlyType;
    };
    /**
     * tryFly
     */
    Animal.prototype.tryFly = function () {
        return this.flyingType.fly();
    };
    return Animal;
}());
exports.Animal = Animal;
