import { PlayerResource } from './../model/player-resource';
import { Reward } from './../model/reward';
import { Resource } from './../model/resource';
import { Exploration, ExplorationStatus } from './../model/exploration';
import { Component, OnInit } from '@angular/core';
import { PlayerInventory } from 'src/model/player-inventory';

enum Scene{
  Fight,
  Exploration,
  Inventory
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

  ngOnInit(): void {
    this.explorations.push({id:"testLocked", name:"Locked", displayText:"I'm locked", status: ExplorationStatus.Unlocked, reward:{unlocksResources:[{resourceName:"testResource", nbr:100}], resources:[{resourceName:"testResource", nbr:5}]}})
    this.explorations.push({id:"testUnlocked", name:"Unlocked", displayText:"I'm Unlocked", status: ExplorationStatus.Unlocked, reward:{resources:[], unlocksResources:[]}})
  }

  displayActionsScene(){
    this.currentScene = Scene.Exploration
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

  manageReward(reward: Reward){
    this.playerInventory.unlockResources(reward.unlocksResources);
  }
}
