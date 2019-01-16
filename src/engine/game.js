import Situation from './situation';
import { process } from './action';

export default class GameEngine {
  constructor(api, locationName) {
    this.api = api;
    this.situation = null; // Situation;
    this.load(locationName);
  }

  processCommand(command) {
    process(command, this.situation);
  }

  load(locationName) {
    this.situation = new Situation(this.api.getLocation(locationName));
  }
}
