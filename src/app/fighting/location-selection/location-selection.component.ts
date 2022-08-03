import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FightingLocation } from 'src/model/fighting-location';

@Component({
  selector: 'app-location-selection',
  templateUrl: './location-selection.component.html',
  styleUrls: ['./location-selection.component.scss']
})
export class LocationSelectionComponent {

  @Input() locations: FightingLocation[] = [];
  @Output() fightingLocationEmitter = new EventEmitter<FightingLocation>();


  onSelectLocation(l: FightingLocation){
    this.fightingLocationEmitter.emit(l);
  }
}
