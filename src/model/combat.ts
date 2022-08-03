import { FightingLocation } from './fighting-location';
import { Combatant } from "src/model/combatant";

export class Combat{
    location!: FightingLocation;
    playerTeam: Combatant[] = [];
    ennemyTeam: Combatant[] = [];

    constructor(l: FightingLocation, playerTeam: Combatant[]){
        this.location = l;
        this.playerTeam = playerTeam;
    }

    updateCombat(deltaTime: number){
        this.playerTeam.forEach(c => {
            this.udpdateCombatant(c, deltaTime);
        });
        this.ennemyTeam.forEach(c => {
            this.udpdateCombatant(c, deltaTime);
        });
    }

    udpdateCombatant(c: Combatant, deltaTime: number){
        c.gainDelayToAct(deltaTime);
            if(c.canAttack()){
                let target = this.findAttackeable(c);
                if(target != null){
                    this.basicAttack(c, target);
                    c.delaySinceLastAttack = 0;
                }
            }
    }

    findAttackeable(c: Combatant) {
        let opposingTeam;
        if(this.playerTeam.some(cb => cb == c)){
            opposingTeam = this.ennemyTeam;
        }else{
            opposingTeam = this.playerTeam;
        }
        let attackables = opposingTeam.filter(c => c.isTargetable());
        if(attackables.length >0){
            return attackables[Math.floor(Math.random() * attackables.length)];
        }
        return null;
    }

    basicAttack(combatant: Combatant, ennemy: Combatant) {
        ennemy.receiveAttack(combatant.attackBase);
    }
}