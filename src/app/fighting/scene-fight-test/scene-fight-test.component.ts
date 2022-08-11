import { DCombattant } from './../../pixi-models.ts/combattant.drawable';
import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import * as PIXI from 'pixi.js';
import { DBackground } from 'src/app/pixi-models.ts/backround.drawable';
import { Graphics } from 'pixi.js';

@Component({
  selector: 'app-scene-fight-test',
  templateUrl: './scene-fight-test.component.html',
  styleUrls: ['./scene-fight-test.component.scss']
})
export class SceneFightTestComponent implements AfterViewInit {
  private stage = new PIXI.Container();
  private renderer = PIXI.autoDetectRenderer();
  @ViewChild('convasContainer') canvas: ElementRef;


  constructor() {

  }

  initActors() {
    this.stage.addChild(new DBackground());
    this.stage.addChild(new DCombattant());
  }

  ngAfterViewInit() {
    var renderer = PIXI.autoDetectRenderer();
    this.canvas.nativeElement.appendChild(renderer.view);
    renderer.resize(this.canvas.nativeElement.offsetHeight, this.canvas.nativeElement.offsetWidth);
    renderer.backgroundColor = 0xFFFFFF;
    renderer.clearBeforeRender = true;
    let t = PIXI.Texture.from('assets/img/hero.png');
    t.on('update', () => {
      //Create a container object called the `stage` and render it...
      this.initActors();
      renderer.render(this.stage);
    });

  }
}
