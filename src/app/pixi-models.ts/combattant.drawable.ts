import { Combatant } from "src/model/combatant";
import { Drawable } from "./drawable";
import * as PIXI from 'pixi.js';
import { Graphics } from "pixi.js";

export class DCombattant extends Drawable {
    constructor() {
        super();

        const p = new Graphics();
        p.beginFill(0x000000);
        p.lineStyle(0);
        p.drawCircle(30, 30, 20);
        p.endFill();

        let sprite = PIXI.Sprite.from('assets/img/hero.png');
        sprite.width = 50;
        sprite.height = 50;
        sprite.mask = p;
        this.addChild(sprite);
    }
}