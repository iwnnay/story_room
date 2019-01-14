import Location from './location';

export default class {
  constructor(location) {
    this.location = new Location(location);
    this.room = this.location.currentRoom;
    this.focus = this.currentRoom;
  }

  set room(room) {
    this.currentRoom = room;
  }

  describe() {
    return {
      focus: this.current,
      // enteredRoom: this.room.newItems,
    };
  }

  get current() {
    return {
      isNew: !this.focus.hasSeen,
      overview: this.focus.describe,
      items: this.focus.itemDescriptions,
    };
  }
}
