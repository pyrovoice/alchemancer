import { Exploration, ExplorationStatus } from './../model/exploration';
import { Component, OnInit } from '@angular/core';

enum Scene{
  Fight,
  Exploration
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

  ngOnInit(): void {
    this.explorations.push({id:"testLocked", name:"Locked", displayText:"I'm locked", status: ExplorationStatus.Locked, reward:{resources:[]}})
    this.explorations.push({id:"testUnlocked", name:"Unlocked", displayText:"I'm Unlocked", status: ExplorationStatus.Unlocked, reward:{resources:[]}})
  }

  displayActionsScene(){
    this.currentScene = Scene.Exploration
  }

  displayFightScene(){
    this.currentScene = Scene.Fight
  }
}
