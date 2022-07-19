import { Component, Input, OnInit } from '@angular/core';
import { PlayerInventory } from 'src/model/player-inventory';

@Component({
  selector: 'app-scene-inventory',
  templateUrl: './scene-inventory.component.html',
  styleUrls: ['./scene-inventory.component.scss']
})
export class SceneInventoryComponent implements OnInit {
  @Input() inventory!: PlayerInventory;
  constructor() { }

  ngOnInit(): void {
  }

}
