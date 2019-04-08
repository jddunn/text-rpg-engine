import Display from './display';
import Input from './input';
import Player from './player';
import Room from './room';

export default class Game {

  constructor(datapath = '', rooms = [], startRoom = '', endRoom = '') {
    this.Display = new Display();
    this.Input = new Input();
    this.datapath = datapath; // TODO: Be able to have game initialize data from JSON file
    this.rooms = rooms; // All the rooms inside our game
    this.startRoom = startRoom; // Which room will the player start in
    this.endRoom = endRoom; // Which room 
    this.Player = new Player(this.startRoom); // TODO: Allow players to give their characters their own names later
  }

  init() {
    let displayText;
    if (this.dataPath !== '') {
      // this.loadData(this.dataPath);
      console.log('Initialized game from: ' + this.datapath);
    }
    if (this.startRoom === '' && this.rooms.length > 0) {
      this.startRoom = this.rooms[0].name; 
      this.Player.startRoom = this.startRoom;
      this.Player.currentRoom = this.Player.startRoom;
    }
    if (this.endRoom === '' && this.rooms.length > 1) {
      this.endRoom = this.rooms[this.rooms.length - 1].name;      
    }
    for (let i = 0; i < this.rooms.length; i++) {
      if (this.rooms[i].name === this.startRoom) {
        displayText = this.rooms[i].getText;
        break;
      }
    }
    if (displayText === undefined) {
      displayText = 'No starting room text found!';
    }
    this.Display.show(displayText);
  }

  addRoom(name, getText, prompts = [], requirements = []) {
    let roomObj = new Room(name, getText, prompts, requirements);
    this.rooms.push(roomObj);
    return roomObj;
  }

  dropRoom(roomName) {
    let newRooms = this.rooms.filter(function(room) {
      return room.name !== roomName;
    });
    this.rooms = newRooms;
    return this.rooms;
  }

  getRoom(roomName) {
    const room = this.rooms.find(x => x.name === roomName);
    return room;
  }

  userSend(message) {
    // Our Input class will handle cleaning / normalizing strings
    this.Input.send(message);
    this.decidePath(this.Input.value);
  }

  decidePath(message) {
    // Check to see if an item name was in the message
    // if (message.split())
    const _this = this;
    const currRoom = _this.getRoom(_this.Player.currentRoom);
    if (typeof currRoom.prompts !== undefined) {
      currRoom.prompts.forEach(function (prompt) {
        const matchingPromptResults = prompt.matchKeywords(message);
        if (matchingPromptResults !== null) {
          // For now just get the first matching result and show that
          // (only one prompt / action per message is sent is supported)
          console.log('FOUND MATCHING PROMPT RESULTS: ', matchingPromptResults);
          _this.Display.show(matchingPromptResults.text);
          // Get items from prompt if any are found
          // Merge the second array into the first one
          if (matchingPromptResults.resultItems !== undefined) {
            Array.prototype.push.apply(_this.Player.inventory.items, matchingPromptResults.items);
          }
          if (matchingPromptResults.resultRoom !== undefined) {
            // Successful prompt leads to new room entrance (if defined in prompt)
            _this.Player.currentRoom = matchingPromptResults.room;
            // Check to see if player's won
            if (matchingPromptResults.Room === _this.endRoom) {
              _this.win();
            } else {
              matchingPromptResults.Room.enter(_this.Player.inventory.items);
            }
          } 
        } else {
          // Player didn't say any keywords that triggered any of the current room prompts
          _this.Display.show(`<p>No actions could be done from: "${message}". Try something else.</p>
                              ${_this.getRoom(_this.Player.currentRoom).getText}
          `);
          return;
        }
      });
    } else {
      // No prompts exist for the current room
      _this.Display.show(`<p>There doesn't seem to be any actions at all that you can do in this room.</p>
                        ${_this.getRoom(_this.Player.currentRoom).getText}
      `);
      return;
    }
  }

  disableInput() {
    this.Input.disable();
  }

  enableInput() {
    this.Input.enable();
  }

  win() {
    // Show final room text (win text)
    for (let i = 0; i < this.rooms.length; i++) {
      if (this.rooms[i].name === this.endRoom) {
        this.Display.show(this.rooms[i].getText);
      }
    }
    // Disable any more user input after winning
    this.disableInput();
  }

  resetPlayer() {
    // Resets player with blank inventory and back to starting room
    // this.Player = new Player(this.startRoom);
  }
}
