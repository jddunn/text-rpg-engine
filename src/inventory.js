'use strict';
export default class Inventory {

  constructor(items = []) {
    this.items = items;
  }

  // We can use this to add single or multiple items, as long as the
  // passed value is an array
  addItems(items) {
    this.items = this.items.concat(items);
    return this.items;
  }

  dropItem(itemName) {
    let newInventory = this.items.filter(function (item) {
      return item.name !== itemName;
    });

    this.items = newInventory;
    return this.items;
  }
}
