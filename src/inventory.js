export default class Inventory {

  constructor(items = []) {
    this.items = items;
  }
  
  examine(itemName = null) {
    // If we're examining an item
    if (itemName !== null) {
      // Display item getText
      return this.items[itemName].getText;
    }
    // If we're examining inventory, print out
    // list of all the items.
    return this.items.map(a => a.name);
  }

  addItem(item) {
    this.items.push(item);
    return this.items;
  }

  dropItem(itemName) {
    let newInventory = this.items.filter(function(item) {
      return item.name !== itemName;
    });
    this.items = newInventory;
    return this.items;
  }
}
