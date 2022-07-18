export class Combatant {
    name:string = "PLACEHOLDER";
    lifeMax: number = 0;
    lifeCurrent = this.lifeMax;
    attackBase: number = 0;
    defenseBase: number = 0;

    constructor(name: string, life: number, attack: number, defense: number){
        this.name = name;
        this.lifeMax = life;
        this.lifeCurrent = life;
        this.attackBase = attack;
        this.defenseBase = defense;
    }
    
    receiveAttack(attackBase: number) {
        this.lifeCurrent -= (attackBase - this.defenseBase);
        if(this.lifeCurrent < 0){
            this.lifeCurrent = 0;
        }
    }
    
    isAlive() {
        return this.lifeCurrent > 0;
    }

    isTargetable(){
        return this.isAlive();
    }
}