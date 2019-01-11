export default class GameEngine {
  constructor() {
    this.situation = null; // Situation;
  }

  start() {
    this.situation.describe();
  }

  setPlayer(player) {
    this.player = player;
  }

  setRoom(room) {
    this.room = room;
  }
}
