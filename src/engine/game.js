import Situation from './situation';

export default class GameEngine {
  constructor(api, locationName) {
    this.api = api;
    this.situation = null; // Situation;
    this.load(locationName);
  }

  load(locationName) {
    console.count('hit');
    this.situation = new Situation(this.api.getLocation(locationName));
  }
}
