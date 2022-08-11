import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import * as PIXI from 'pixi.js';
import { Background } from 'src/app/pixi-models.ts/backround.drawable';

@Component({
  selector: 'app-scene-fight-test',
  templateUrl: './scene-fight-test.component.html',
  styleUrls: ['./scene-fight-test.component.scss']
})
export class SceneFightTestComponent implements AfterViewInit {
  private stage = new PIXI.Container();
  @ViewChild('convasContainer') canvas: ElementRef;


  constructor(private renderer: Renderer2) {

  }

  initActors() {
    this.stage.addChild(new Background());
  }

  ngAfterViewInit() {
    var renderer = PIXI.autoDetectRenderer();
    this.canvas.nativeElement.appendChild(renderer.view);
    renderer.resize(this.canvas.nativeElement.offsetHeight, this.canvas.nativeElement.offsetWidth);
    renderer.backgroundColor = 0xFFFFFF;
    //Create a container object called the `stage` and render it...
    this.initActors();
    renderer.render(this.stage);
  }
}
