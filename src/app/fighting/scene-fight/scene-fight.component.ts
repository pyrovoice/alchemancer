import { CharacterDetailComponent } from './../character-detail/character-detail.component';
import { Combatant } from '../../../model/combatant';
import { Component, ComponentFactoryResolver, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-scene-fight',
  templateUrl: './scene-fight.component.html',
  styleUrls: ['./scene-fight.component.scss']
})
export class SceneFightComponent implements OnInit {
  playerTeam: Combatant[] = [];
  ennemyTeam: Combatant[] = [];
  subscription!: Subscription;
  @ViewChild('ennemyTeam', {static: true, read: ViewContainerRef}) ennemyTeamContainer!: ViewContainerRef;
  @ViewChild('allyTeam', {static: true, read: ViewContainerRef}) allyTeamContainer!: ViewContainerRef;

  constructor(private CFR: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.playerTeam.push(new Combatant("hero", 50, 10, 5))
    this.ennemyTeam.push(new Combatant("Villain", 20, 10, 5))
    
    this.loadComponent();

    const source = interval(1000);
    this.subscription = source.subscribe(val => this.fightOnUpdate());

  }

  loadComponent() {
    let componentFactory = this.CFR.resolveComponentFactory(CharacterDetailComponent);

    this.allyTeamContainer.clear();
    this.playerTeam.forEach(c => {
      let componentRef = this.allyTeamContainer.createComponent(componentFactory);
      componentRef.instance.combatant = c;
    });

    this.ennemyTeamContainer.clear();
    this.ennemyTeam.forEach(c => {
      let componentRef = this.ennemyTeamContainer.createComponent(componentFactory);
      componentRef.instance.combatant = c;
    });
  }

  fightOnUpdate(): void {
    this.playerTeam.forEach(combatant => {
      if(!combatant.isAlive()){
        return;
      }
      let opponent = this.findAttackeable(this.ennemyTeam)
      if(opponent != null){
        this.basicAttack(combatant, opponent);
      }
    });

    this.ennemyTeam.forEach(combatant => {
      if(!combatant.isAlive()){
        return;
      }
      let opponent = this.findAttackeable(this.playerTeam)
      if(opponent != null){
        this.basicAttack(combatant, opponent);
      }
    });
  }


  findAttackeable(opposingTeam: Combatant[]) {
    let c = opposingTeam.filter(c => c.isTargetable());
    if(c.length >0){
      return c[Math.floor(Math.random() * c.length)];
    }
    return null;
  }

  basicAttack(combatant: Combatant, ennemy: Combatant) {
    ennemy.receiveAttack(combatant.attackBase);
  }
}


