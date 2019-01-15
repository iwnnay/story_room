/**
 * Room example structure:
 * {
 *   id: String - Identifying name
 *   describe: String - Displayed
 *   coordinate: Array - [x, y] units inside parent Location, lower right of room
 *   dimensions: Array - [x, y, z] units inside of parent location
 *   items: Array - [String|Object] of items
 *   hasSeen: Boolean - Indicates if the room was described before
 * }
 */
import Item from './item';
import { didHappen } from './dice';

export default class Room {
  constructor(data) {
    this.data = data;
  }

  set data(data) {
    this.loadedData = data;
    this.hasSeen = data.hasSeen || false;
    this.items = [];

    data.items.forEach((itemData) => {
      this.items.push(new Item(itemData));
    });
  }

  get data() {
    return {
      ...this.loadedData,
      hasSeen: this.hasSeen,
    };
  }

  get describe() {
    this.calculateItemVisibility();

    return this.loadedData.describe;
  }

  get itemDescriptions() {
    return this.items.filter(item => item.isVisible).map(item => ({
      isNew: !item.hasSeen,
      overview: item.describe,
    }));
  }

  calculateItemVisibility() {
    this.items.forEach((item) => {
      if (!item.isVisible) {
        if (didHappen(item.visibility)) {
          item.markVisible();
        }
      }
    });
  }
}
