/**
 * Item example structure:
 * {
 *   short: String - Identifying name
 *   type: String - Category of item
 *   describe: String - Displayed
 *   actions: Array - [Objects] that describe the programatic and story outcome
 *     of an action performed on the item
 *   items: Array - [String|Object] of items
 *   hasSeen: Boolean (false) - Indicates if the item was described before
 *   isVisible: Boolean (false) - Indicates if the item has been discovered or not
 *   visiblity: Integer - Chance out of 100 that item is seen
 *   stats: Object {
 *    weight: (optional) Number - lbs the item weighs if movable
 *    measurements: (optional) Array - [w, h, d] this is to figure out the volume of an item
 *   }
 * }
 */
export default class Item {
  constructor(data) {
    this.data = data;
  }

  set data(data) {
    this.loadedData = data;
    this.hasSeen = data.hasSeen || false;
    this.isVisible = data.isVisible || false;
    this.items = [];

    (data.items || []).forEach((itemData) => {
      this.items.push(new Item(itemData));
    });
  }

  get data() {
    return {
      ...this.loadedData,
      hasSeen: this.hasSeen,
      isVisible: this.isVisible,
    };
  }

  get describe() {
    return this.loadedData.describe;
  }

  get itemDesciptions() {
    return this.items.filter(item => item.isVisible).map(item => ({
      isNew: !item.hasSeen,
      overview: item.describe,
    }));
  }

  get visibility() {
    return this.loadedData.visibility || 100;
  }

  markVisible() {
    this.isVisible = true;
  }
}
