import { FightingLocation } from './../../../model/fighting-location';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Combatant } from 'src/model/combatant';
import { PlayerCombatants } from 'src/model/player-combatants';

@Component({
  selector: 'app-location-team-selection',
  templateUrl: './location-team-selection.component.html',
  styleUrls: ['./location-team-selection.component.scss']
})
export class LocationTeamSelectionComponent implements OnInit {
  @Input() location!: FightingLocation;
  @Output() teamSelected = new EventEmitter<Combatant[]>();
  selectedCombatants: Combatant[] = [];
  constructor(public playerCombatants: PlayerCombatants) { }

  ngOnInit(): void {
  }

  startFight(){
    this.teamSelected.emit(this.selectedCombatants);
  }
}
