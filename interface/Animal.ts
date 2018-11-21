import {Flys} from './Flys';

export class Animal{
    public flyingType : Flys;
    
    /**
     * setFlyingAbility
     */
    public setFlyingAbility( newFlyType:Flys) {
        this.flyingType = newFlyType;
    }

    /**
     * tryFly
     */
    public tryFly() {
        return this.flyingType.fly();
    }
}