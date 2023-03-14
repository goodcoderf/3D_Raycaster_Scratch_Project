/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Person extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Person/costumes/costume1.svg", {
        x: 0.2857150000000104,
        y: 0.2857150000000104
      })
    ];

    this.sounds = [new Sound("pop", "./Person/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.speed = 2;
    this.goto(50, 50);
    this.effects.ghost = 100;
    yield* this.broadcastAndWait("sense");
    while (true) {
      if (this.keyPressed("up arrow")) {
        yield* this.move2(this.stage.vars.speed);
        yield* this.broadcastAndWait("sense");
      }
      if (this.keyPressed("down arrow")) {
        yield* this.move2(-1 * this.toNumber(this.stage.vars.speed));
        yield* this.broadcastAndWait("sense");
      }
      if (this.keyPressed("right arrow")) {
        this.direction += 3;
        yield* this.broadcastAndWait("sense");
      }
      if (this.keyPressed("left arrow")) {
        this.direction -= 3;
        yield* this.broadcastAndWait("sense");
      }
      yield;
    }
  }

  *move2(speed) {
    this.move(this.toNumber(speed));
    if (this.touching(this.sprites["Map"].andClones())) {
      this.move(-1 - this.toNumber(speed));
    }
  }
}
