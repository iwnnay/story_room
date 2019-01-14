/**
 * Location Example Structure:
 * {
 *   name: String - name of the location
 *   startRoom: Boolean - only used when it is the first location of the game
 *   rooms: Array - Room class data
 *   gridLocation: Array - X, Y coordinates of location in world
 *   area: Array - Number of times the location goes 51 units in the X, Y directions
 *   hasVisited: Boolean - Indicates if the location was described before
 * }
 *
 */
import Room from './room';

export default class Location {
  constructor(data, startRoom) {
    this.data = data;
    this.startRoom = startRoom;
  }

  set data(data) {
    this.loadedData = data;
    this.hasSeen = data.hasSeen || false;
    this.rooms = [];

    data.rooms.forEach((roomData) => {
      const room = new Room(roomData);
      this.rooms.push(room);

      if (this.isCurrentRoom(room)) {
        this.currentRoom = room;
      }
    });
  }

  get data() {
    return {
      ...this.loadedData,
      currentRoom: this.currentRoom.name,
      rooms: this.rooms.map(room => room.data),
      hasVisited: this.hasVisited,
    };
  }

  isCurrentRoom(room) {
    this.blah = room;
    // Only have one room at the moment, but need to change this
    return true;
  }
}
