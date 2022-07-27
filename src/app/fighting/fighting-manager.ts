
import { interval, Subscription } from "rxjs";
import { Combat } from "../../model/combat";

export class FightingManager{
    combats: Combat[] = [];
    subscription!: Subscription;
    intervalInMs: number = 100;

    constructor(){
        const source = interval(this.intervalInMs);
        this.subscription = source.subscribe(val => this.updateFight());
    }

    updateFight(){
        this.combats.forEach(c => {
            c.updateCombat(this.intervalInMs);
        });
    }

    startCombat(combat: Combat){
        this.combats.push(combat);
    }

    stopCombat(combat: Combat){
        const index = this.combats.indexOf(combat, 0);
        if (index > -1) {
            this.combats.splice(index, 1);
        }else{
            console.log("Combat not found when trying to delete");
        }
    }
}