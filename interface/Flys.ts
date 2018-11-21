
export interface Flys{
    fly() : string;    
}

export class ItFly implements Flys {
    fly = function (): string { return "Flying High"};
}

export class CantFly implements Flys {
    fly = function (): string { return "I can't fly"};
}
