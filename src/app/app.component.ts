import { Reward } from './../model/reward';
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
    this.explorations.push({id:"testLocked", name:"Locked", displayText:"I'm locked", status: ExplorationStatus.Unlocked, reward:{unlocksResources:[{resourceName:"Bone", nbr:100}], resources:[{resourceName:"Bone", nbr:5}]}})
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
    console.log(reward)
    reward.unlocksResources.forEach(e => {
      this.playerInventory.unlockResource(e.resourceName);
    });
    reward.resources.forEach(e => {
      this.playerInventory.addResource(e.resourceName, e.nbr);
    });
  }
}
