import { Character } from "./character";

export class Undead extends Character{
    constructor(name, type) {
        super(name, type);
        this.attack = 40;
        this.defence = 10;
    }
}