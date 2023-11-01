import { Character } from "../character";
import { Zombie } from "../zombie";
import { Swordsman} from "../swordsman";
import { Undead } from "../undead";
import { Bowman } from "../bowman";
import { Magician } from "../magician";
import { Daemon } from "../daemon"; 



test.each([[new Character('Mark', 'Undead'), {name: 'Mark', type: 'Undead', health: 100, level: 1, attack: 40, defence: 10}],
[new Character('Legolas', 'Bowman'), {name: 'Legolas', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25}],
[new Character('Said', 'Swordsman'), {name: 'Said', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10}],
[new Character('Gendalf', 'Magician'), {name: 'Gendalf', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40}],
[new Character('Leviafan', 'Daemon'), {name: 'Leviafan', type: 'Daemon', health: 100, level: 1, attack: 25, defence: 25}],
[new Character('Shaun', 'Zombie'), {name: 'Shaun', type: 'Zombie', health: 100, level: 1, attack: 10, defence: 40}],
[new Character('s', 'Undead'), new Error("Ошибка! Имя не соответствует условию: длина имени больше 2, но меньше 10 символов")],
[new Character('ssdf', 'Dead'), new Error("Ошибка! Несуществующий персонаж")]
]) ("testing Character", (hero, check) => {
    expect(check).toEqual(hero)
});

test("chek levelUp method", () => {
    expect(new Character('ssdf', 'Undead').levelUp()).toEqual({name: 'ssdf', type: 'Undead', health: 100, level: 2, attack: 48, defence: 12})
})

test("chek damage function", () => {
    const character = new Character('dead', "Undead");
    character.damage(1000);
    expect(character.health).toEqual(-800)
})

test("chek levelUp method with throw error", () => {
    const swordsman = new Character("Gimli", "Swordsman");
    swordsman.damage(300);
    expect(swordsman.levelUp()).toEqual(new Error("нельзя повысить левел умершего"))
})

test.each([[new Zombie("Shaun", "Zombie"), {name: 'Shaun', type: 'Zombie', health: 100, level: 1, attack: 10, defence: 40}],
[new Bowman("legolas", "Bowman"), {name: 'legolas', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25}],
[new Magician("Gendalf", "Magician"), {name: 'Gendalf', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40}],
[new Undead("mark", "Undead"), {name: 'mark', type: 'Undead', health: 100, level: 1, attack: 40, defence: 10}],
[new Swordsman("Gimli", "Swordsman"), {name: 'Gimli', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10}],
[new Daemon("Leviafan", "Daemon"), {name: 'Leviafan', type: 'Daemon', health: 100, level: 1, attack: 25, defence: 25}]]) ("Character %s match %s", (check, hero) => {
    expect(check).toEqual(hero);
})
