/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.speed = 2;
    this.vars.distance = 23;
    this.vars.angleOffset = 48;
    this.vars.column = 97;
    this.vars.distances = [
      49,
      47,
      46,
      44,
      43,
      41,
      40,
      39,
      38,
      37,
      36,
      35,
      34,
      33,
      33,
      32,
      31,
      31,
      30,
      30,
      29,
      29,
      28,
      28,
      27,
      27,
      26,
      26,
      26,
      25,
      25,
      25,
      24,
      24,
      25,
      26,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      34,
      35,
      37,
      38,
      40,
      42,
      45,
      48,
      51,
      54,
      58,
      63,
      120,
      120,
      120,
      120,
      120,
      120,
      120,
      120,
      120,
      120,
      120,
      120,
      120,
      120,
      120,
      101,
      90,
      90,
      90,
      80,
      71,
      64,
      58,
      54,
      50,
      46,
      43,
      41,
      38,
      36,
      34,
      33,
      31,
      30,
      29,
      28,
      27,
      26,
      25,
      24,
      23
    ];
  }
}
