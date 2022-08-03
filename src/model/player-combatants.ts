import { Injectable } from "@angular/core";
import { Combatant } from "./combatant";

@Injectable({
    providedIn: 'root',
  })
export class PlayerCombatants{
    combatants: Combatant[] = [];

    nbrCombatantLimit: number = 10;
}