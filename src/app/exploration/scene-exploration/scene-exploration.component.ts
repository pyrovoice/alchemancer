import { Component, Input, OnInit } from '@angular/core';
import { Exploration, ExplorationStatus } from 'src/model/exploration';

@Component({
  selector: 'app-scene-exploration',
  templateUrl: './scene-exploration.component.html',
  styleUrls: ['./scene-exploration.component.scss']
})
export class SceneExplorationComponent implements OnInit {

  @Input() explorations!: Exploration[];
  constructor() { }

  ngOnInit(): void {
  }

  getExplorationsToDisplay(){
    return this.explorations.filter(e => e.status == ExplorationStatus.Unlocked);
  }
}
