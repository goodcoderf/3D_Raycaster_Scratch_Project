/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class DistanceSensing extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./DistanceSensing/costumes/costume1.svg", {
        x: 0.8683992777008598,
        y: 0.9516926390638503
      })
    ];

    this.sounds = [new Sound("pop", "./DistanceSensing/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.effects.ghost = 100;
    this.goto(this.sprites["Person"].x, this.sprites["Person"].y);
    this.stage.vars.distances = [];
    this.visible = true;
  }

  *sense() {
    this.stage.vars.distances = [];
    this.stage.vars.distance = 0;
    this.stage.vars.angleOffset = -48;
    for (let i = 0; i < 96; i++) {
      this.stage.vars.distance = 0;
      this.goto(this.sprites["Person"].x, this.sprites["Person"].y);
      this.direction =
        this.sprites["Person"].direction +
        this.toNumber(this.stage.vars.angleOffset);
      while (
        !(
          this.touching(this.sprites["Map"].andClones()) ||
          this.compare(this.stage.vars.distance, 119) > 0
        )
      ) {
        this.move(1);
        this.stage.vars.distance++;
      }
      this.stage.vars.distances.push(this.stage.vars.distance);
      this.stage.vars.angleOffset++;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      yield* this.sense();
      this.broadcast("draw");
      yield;
    }
  }
}
