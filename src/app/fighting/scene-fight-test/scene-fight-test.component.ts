import { DCombattant } from './../../pixi-models.ts/combattant.drawable';
import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import * as PIXI from 'pixi.js';
import { DBackground } from 'src/app/pixi-models.ts/backround.drawable';
import { Graphics } from 'pixi.js';
import { interval } from 'rxjs';

@Component({
  selector: 'app-scene-fight-test',
  templateUrl: './scene-fight-test.component.html',
  styleUrls: ['./scene-fight-test.component.scss']
})
export class SceneFightTestComponent implements AfterViewInit, OnInit {
  private stage = new PIXI.Container();
  private renderer = PIXI.autoDetectRenderer();
  @ViewChild('convasContainer') canvas: ElementRef;
  sheet;
  loading = true;

  constructor() {
  }
  ngOnInit(): void {
  }

  initActors() {
    this.stage.addChild(new DBackground());
    this.stage.addChild(new DCombattant());
    let animatedSprite = new PIXI.AnimatedSprite(this.sheet.animations["attack1"]);
    // set speed, start playback and add it to the stage
    animatedSprite.animationSpeed = 0.167; 
    animatedSprite.play();
    this.stage.addChild(animatedSprite);
  }

  ngAfterViewInit() {
    this.renderer = PIXI.autoDetectRenderer();
    this.canvas.nativeElement.appendChild(this.renderer.view);
    this.renderer.resize(this.canvas.nativeElement.offsetHeight, this.canvas.nativeElement.offsetWidth);
    this.renderer.backgroundColor = 0xFFFFFF;
    this.renderer.clearBeforeRender = true;
    // let t = PIXI.Texture.from('assets/img/hero.png');
    // t.on('update', () => {
    //   //Create a container object called the `stage` and render it...
    //   this.initActors();
      
    // });

    PIXI.Loader.shared.add("assets/animation/attack.json").load(v => {
      this.sheet = PIXI.Loader.shared.resources["assets/animation/attack.json"].spritesheet
      this.playAnimation()
    });  
  }

  playAnimation(){
    this.stage.addChild(new DBackground());
    let animatedSprite = new PIXI.AnimatedSprite(this.sheet.animations["attack1"]);
    // set speed, start playback and add it to the stage
    animatedSprite.animationSpeed = 1; 
    animatedSprite.position.set(100, 100);
    console.log(animatedSprite)
    this.stage.addChild(animatedSprite);
    this.renderer.render(this.stage);
    animatedSprite.play();
  }
}
