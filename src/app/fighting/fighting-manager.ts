
import { interval, Subscription } from "rxjs";
import { Combatant } from "src/model/combatant";
import { FightingLocation } from "src/model/fighting-location";
import { Combat } from "../../model/combat";

export class FightingManager{
    combats: Combat[] = [];
    subscription!: Subscription;
    intervalInMs: number = 100;

    private static instance: FightingManager;
    private constructor(){
        const source = interval(this.intervalInMs);
        this.subscription = source.subscribe(val => this.updateFight());
    }

    static getFightingManager(){
        if(this.instance == null){
            this.instance = new FightingManager();
        }
        return this.instance;
    }

    updateFight(){
        this.combats.forEach(c => {
            c.updateCombat(this.intervalInMs);
        });
    }

    startCombat(location: FightingLocation, combatants: Combatant[]){
        this.combats.forEach(c => {
            c.playerTeam.slice(0).forEach(activeCombatant =>{
                if(combatants.some(sc => sc === activeCombatant)){
                    c.playerTeam.splice(c.playerTeam.indexOf(activeCombatant), 1);
                    console.log("Removed " + activeCombatant.name + " from " + c.location.name);
                }
            })
        });
        this.combats.push(new Combat(location, combatants));
    }

    stopCombat(combat: Combat){
        const index = this.combats.indexOf(combat, 0);
        if (index > -1) {
            this.combats.splice(index, 1);
        }else{
            console.log("Combat not found when trying to delete");
        }
    }

    getCombatForLocation(locationName: string){
        return this.combats.find(c => c.location.name == locationName);
    }
}