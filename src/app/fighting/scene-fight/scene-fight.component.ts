import { FightingLocation } from './../../../model/fighting-location';
import { CharacterDetailComponent } from './../character-detail/character-detail.component';
import { Component, ComponentFactoryResolver, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Combat } from 'src/model/combat';
import { FightingManager } from '../fighting-manager';

@Component({
  selector: 'app-scene-fight',
  templateUrl: './scene-fight.component.html',
  styleUrls: ['./scene-fight.component.scss']
})
export class SceneFightComponent implements OnInit {
  @ViewChild('ennemyTeam', {static: true, read: ViewContainerRef}) ennemyTeamContainer!: ViewContainerRef;
  @ViewChild('allyTeam', {static: true, read: ViewContainerRef}) allyTeamContainer!: ViewContainerRef;
  @Input() location!: FightingLocation;
  combat!: Combat;

  constructor(private CFR: ComponentFactoryResolver) { }

  ngOnInit(): void {
    if(this.location != null){
      let c = FightingManager.getFightingManager().getCombatForLocation(this.location.name);
      if(c != null){
        this.combat = c;
      }
      this.loadComponent();
    }
  }

  loadComponent() {
    let componentFactory = this.CFR.resolveComponentFactory(CharacterDetailComponent);

    this.allyTeamContainer.clear();
    this.combat.playerTeam.forEach(c => {
      let componentRef = this.allyTeamContainer.createComponent(componentFactory);
      componentRef.instance.combatant = c;
    });

    this.ennemyTeamContainer.clear();
    this.combat.ennemyTeam.forEach(c => {
      let componentRef = this.ennemyTeamContainer.createComponent(componentFactory);
      componentRef.instance.combatant = c;
    });
  }
}


