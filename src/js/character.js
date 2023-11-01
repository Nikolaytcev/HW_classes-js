export class Character {

    #types= {"Bowman": {attack: 25, defence: 25},
    "Swordsman": {attack: 40, defence: 10},
    "Magician": {attack: 10, defence: 40},
    "Daemon": {attack: 25, defence: 25},
    "Undead": {attack: 40, defence: 10},
    "Zombie": {attack: 10, defence: 40}}

    constructor(name, type) {
        try {
            if (name.length < 2 || name.length > 10) {
                throw new Error("Ошибка! Имя не соответствует условию: длина имени больше 2, но меньше 10 символов");
            }
            else {
                this.name = name;
            }
            if (!Object.keys(this.#types).includes(type)) {
                throw new Error("Ошибка! Несуществующий персонаж");
            }
            else {
                this.type = type;
            }
        }
        catch (error) {
            return error;
        }
        this.health = 100;
        this.level = 1;
        this.attack = this.#types[this.type].attack;
        this.defence = this.#types[this.type].defence;
    }

    levelUp() {
        try {
            if (this.health > 0) {
                this.level++;
                this.attack *= 1.2;
                this.defence *= 1.2;
                this.health = 100;
                return this;
            }
            else {
                throw new Error("нельзя повысить левел умершего");
            }
        }
        catch (e) {
            return e
        }
    }

    damage(points) {
        if (this.health >= 0) {
            this.health -= points * (1 - this.defence / 100);
        }
    }
}