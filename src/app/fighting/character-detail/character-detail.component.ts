import { Combatant } from './../../../model/combatant';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  @Input() combatant!: Combatant;
  constructor() { 
    this.combatant
  }

  ngOnInit(): void {
  }

}
