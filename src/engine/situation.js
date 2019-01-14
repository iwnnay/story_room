export default class {
  constructor(location) {
    this.location = location;
  }

  set room(room) {
    this.currentRoom = room;
  }

  describe() {
    return {
      overview: this.currentSituation,
      // enteredRoom: this.room.newInfo,
      // discovered: this.newInfo,
    };
  }

  get currentSituation() {
    return 'get current situation';
  }
}
