export class Combatant {
    name:string = "PLACEHOLDER";
    sprite: string = "default";
    lifeMax: number = 0;
    lifeCurrent = this.lifeMax;
    attackBase: number = 0;
    defenseBase: number = 0;
    speedBase: number = 0;
    delaySinceLastAttack: number = 0;

    constructor(name: string, life: number, attack: number, defense: number, speed: number){
        this.name = name;
        this.lifeMax = life;
        this.lifeCurrent = life;
        this.attackBase = attack;
        this.defenseBase = defense;
        this.speedBase = speed;
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

    canAttack(){
        return this.isAlive() && this.delaySinceLastAttack >= this.getDelayToAct();
    }

    getDelayToAct(){
        return 1/Math.log(this.speedBase)*10000;
    }

    gainDelayToAct(value: number){
        this.delaySinceLastAttack += value;
        if(this.delaySinceLastAttack > this.getDelayToAct()){
            this.delaySinceLastAttack = this.getDelayToAct();
        }
    }
}