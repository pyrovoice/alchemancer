import { FightingLocation } from './../model/fighting-location';
import { Reward } from './../model/reward';
import { Exploration, ExplorationStatus } from './../model/exploration';
import { Component, OnInit } from '@angular/core';
import { PlayerInventory } from 'src/model/player-inventory';
import { FightingManager } from './fighting/fighting-manager';
import { Combat } from 'src/model/combat';
import { Combatant } from 'src/model/combatant';
import { PlayerCombatants } from 'src/model/player-combatants';

enum Scene{
  Fight,
  FightLocationSelection,
  Exploration,
  Inventory,
  FightLocationTeamSelection
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  currentScene: Scene = Scene.Fight;
  Scene = Scene;
  explorations: Exploration[] = [];
  playerInventory: PlayerInventory = new PlayerInventory();
  playerHeroes: Combatant[] = [new Combatant("hero1", 50, 10, 5, 50), new Combatant("hero2", 50, 10, 5, 50)];
  locations: FightingLocation[] = [{name:"zone1", isUnlocked: true}, {name:"zone2", isUnlocked: true}]
  locationToDisplay!: FightingLocation;

  constructor(private playerCombatants: PlayerCombatants){}

  ngOnInit(): void {
    this.explorations.push({id:"testLocked", name:"Locked", displayText:"I'm locked", status: ExplorationStatus.Unlocked, reward:{unlocksResources:[{resourceName:"Bone", nbr:100}], resources:[{resourceName:"Bone", nbr:5}]}})
    this.explorations.push({id:"testUnlocked", name:"Unlocked", displayText:"I'm Unlocked", status: ExplorationStatus.Unlocked, reward:{resources:[], unlocksResources:[]}})
    this.playerCombatants.combatants.push(new Combatant("hero", 50, 10, 5, 50));
    this.playerCombatants.combatants.push(new Combatant("hero2", 50, 10, 5, 50));
    this.playerCombatants.combatants.push(new Combatant("hero3", 50, 10, 5, 50));
  }

  displayActionsScene(){
    this.currentScene = Scene.Exploration
  }

  displayLocationSelectionScene(){
    this.currentScene = Scene.FightLocationSelection
  }

  displayFightScene(){
    this.currentScene = Scene.Fight
  }

  displayInventoryScene(){
    this.currentScene = Scene.Inventory
  }

  resolveExploration(event: Exploration){
    this.manageReward(event.reward);
  }

  resolveFightingLocationSelection(event: FightingLocation){
    let combatOpt = FightingManager.getFightingManager().getCombatForLocation(event.name)
    this.locationToDisplay = event;
    if(combatOpt == null){
      this.currentScene = Scene.FightLocationTeamSelection;
    }else{
      this.currentScene = Scene.Fight;
    }
  }

  resolveStartFight(event: Combatant[]){
    FightingManager.getFightingManager().startCombat(this.locationToDisplay, event);
    this.displayFightScene();
  }

  manageReward(reward: Reward){
    reward.unlocksResources.forEach(e => {
      this.playerInventory.unlockResource(e.resourceName);
    });
    reward.resources.forEach(e => {
      this.playerInventory.addResource(e.resourceName, e.nbr);
    });
  }
}
