import * as PIXI from 'pixi.js';

export abstract class Drawable extends PIXI.Graphics {
    update(delta: number) {
  
    }
    
    lerp(start: number, end: number, amt: number) {
      return (1 - amt) * start + amt * end
    }
  }