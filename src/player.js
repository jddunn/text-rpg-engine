import Inventory from './inventory';

export default class Player {

  constructor(name = '', inventory = new Inventory(), currentRoom = '', startRoom) {
    this.name = name;
    if (this.name === '') {
      this.name = 'player';
    }
    this.inventory = inventory;
    if (this.currentRoom === '') {
      this.currentRoom = this.startRoom;
    }
    this.startRoom = startRoom;
  }
  
  enterRoom(room) {
    const roomResult = room.enter(this.inventory.items);
    if (roomResult[1] === false) {
      // Player did not have required items to enter the room
    } else {
      // Entered room successfully
      this.currentRoom = room.name; 
    }
    // Return results text and whether or not player successfully entered room
    return [roomResult[0], roomResult[1]];
  }

  getItem(item) {
    this.inventory.addItem(item);
    return this.inventory;
  }

  dropItem(item) {
    this.inventory.dropItem(item);
    return this.inventory;
  }

  doAction(text) {
  }
}
  
