import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Map from "./Map/Map.js";
import Person from "./Person/Person.js";
import DistanceSensing from "./DistanceSensing/DistanceSensing.js";
import Draw from "./Draw/Draw.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Map: new Map({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  Person: new Person({
    x: 72.53615876411011,
    y: 26.357418526933493,
    direction: 162,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  DistanceSensing: new DistanceSensing({
    x: 61.385537498444336,
    y: 6.241165262727404,
    direction: -151,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3
  }),
  Draw: new Draw({
    x: 240,
    y: 52.17391304347826,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
