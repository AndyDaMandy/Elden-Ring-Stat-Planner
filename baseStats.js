class Character {
    constructor(className, lvl, vig, mnd, end, str, dex, int, fth, arc){
        this.className = className;
        this.lvl = lvl;
        this.vig = vig;
        this.mnd = mnd;
        this.end = end;
        this.str = str;
        this.dex = dex;
        this.int = int;
        this.fth = fth;
        this.arc = arc;
    }
}
const vagabond = new Character('Vagabond', 9, 15, 10, 11, 14, 13, 9, 9, 7);
const warrior = new Character('Warrior', 8, 11, 12, 11, 10, 16, 10, 8, 9);
const hero = new Character('Hero', 7, 14, 9, 12, 16, 9, 7, 8, 11);
const bandit = new Character('Bandit', 5, 10, 11, 10, 9, 13, 9, 8, 14);
const astrologer = new Character('Astrologer', 5, 15, 15, 9, 8, 12, 16, 7, 9);
const prophet = new Character('Prophet', 7, 10, 14, 8, 11, 10, 7, 16, 10);
const samurai = new Character('Samurai',9, 12, 11, 13, 12, 15, 9, 8, 8);
const prisoner = new Character('Prisoner', 6, 11, 12, 11, 8, 14, 14, 6, 9);
const confessor = new Character('Confessor', 10, 10, 13, 10, 12, 12, 9, 14, 9);
const wretch = new Character('Wretch', 1, 10, 10, 10, 10, 10, 10, 10, 10);