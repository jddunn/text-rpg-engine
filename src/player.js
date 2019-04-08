import Inventory from './inventory';

export default class Player {

  constructor(name = 'player', inventory = new Inventory(), currentRoom = '', startRoom) {
    this.name = name;
    this.inventory = inventory;
    this.startRoom = startRoom;
    if (this.currentRoom === '') {
      this.currentRoom = this.startRoom;
    }
  }
  
  enterRoom(room) {
    const res = room.enter(this.inventory.items);
    if (res[1] === false) {
      // Player did not have required items to enter the room
    } else {
      // Entered room successfully
      this.currentRoom = room.name; 
    }
    // Return game text and whether or not we were able to enter room
    return [res[0], res[1]];
  }

  getItem(item) {
    this.inventory.addItem(item);
    return this.inventory;
  }

  dropItem(item) {
    this.inventory.dropItem(item);
    return this.inventory;
  }

  doAction(text, item = null) {
    // No item passed, check room prompts for actions
    if (item === null) {
      return this.currentRoom.doAction(text);
    }
    // Doing action on item, check item prompts
    return item.doAction(text);
  }
}
  
