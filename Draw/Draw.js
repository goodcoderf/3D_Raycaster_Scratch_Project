/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Draw extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Draw/costumes/costume1.png", { x: 0, y: 0 })
    ];

    this.sounds = [new Sound("pop", "./Draw/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "draw" }, this.whenIReceiveDraw)
    ];
  }

  *whenIReceiveDraw() {
    yield* this.draw();
  }

  *draw() {
    this.goto(-237.5, 180);
    this.penSize = 5;
    this.penColor = Color.rgb(138, 12, 250);
    this.clearPen();
    this.penDown = false;
    this.stage.vars.column = 1;
    for (let i = 0; i < this.stage.vars.distances.length; i++) {
      this.penColor.v =
        50 +
        this.toNumber(
          this.itemOf(this.stage.vars.distances, this.stage.vars.column - 1)
        ) *
          (50 / 80);
      this.y =
        -1200 /
        this.toNumber(
          this.itemOf(this.stage.vars.distances, this.stage.vars.column - 1)
        );
      this.penDown = true;
      this.y =
        1200 /
        this.toNumber(
          this.itemOf(this.stage.vars.distances, this.stage.vars.column - 1)
        );
      this.penDown = false;
      this.x += 5;
      this.stage.vars.column++;
    }
  }
}
