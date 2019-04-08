import Display from './display';
import Input from './input';
import Player from './player';
import Room from './room';
import Inventory from './inventory';
import Item from './item';
// import Item from './item';

export default class Game {

  constructor(datapath = '', rooms = [], items = [], startRoom = '', endRoom = '') {
    this.Display = new Display();
    this.Input = new Input();
    this.datapath = datapath; // TODO: Be able to have game initialize data from JSON file
    this.rooms = rooms; // All the rooms in our game
    this.items = items; // All the items in our game
    this.startRoom = startRoom; // Which room will the player start in
    this.endRoom = endRoom; // Which room 
    // TODO: Allow players to give their characters their own names later
    this.Player = new Player(startRoom = this.startRoom); 
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

  addItem(name, getText) {
    const item = new Item(name, getText);
    this.items.push(item);
    return this.items;
  }

  dropItem(itemName) {
    let newItems = this.items.filter(function(item) {
      return item.name !== itemName;
    });
    this.items = newItems;
    return this.items;
  }

  getItem(itemName) {
    const item = this.items.find(x => x.name === itemName);
    return item;
  }

  userSend(message) {
    // Our Input class will handle cleaning / normalizing strings
    this.Input.send(message);
    this.decidePath(this.Input.value);
  }

  decidePath(message) {
    if (message === 'restart') {
      this.resetGame();
    }
    const _this = this;
    const currRoom = _this.getRoom(_this.Player.currentRoom);

    // Do we have actions that we can do in the room?
  
    if (typeof currRoom.prompts !== undefined) {
      // Check every prompt action to see if it matches our input keywords
      // For now just get the first matching prompt and do that
      let foundPrompt = false;
      currRoom.prompts.forEach(function (prompt) {
        if (foundPrompt === false) {
          const matchingPromptResults = prompt.matchKeywords(message);
          // If we get a matching result back
          if (matchingPromptResults !== null) {
            foundPrompt = true;
            if ('success' in matchingPromptResults) {
              _this.Display.show(matchingPromptResults.success.successText);
              // Get items from prompt if any are found
              if (matchingPromptResults.success.itemsGiven !== undefined) {
                Array.prototype.push.apply(_this.Player.inventory.items, matchingPromptResults.success.itemsGiven);
              }
              // Successful prompt leads to new room entrance (if defined in prompt)
              if (matchingPromptResults.success.roomToEnter !== undefined) {
                let enterRoomResultSuccess;
                let enterRoomResultText;           
                [enterRoomResultText, enterRoomResultSuccess] = 
                      _this.Player.enterRoom(this.getRoom(matchingPromptResults.success.roomToEnter));
                // Check to see if player's won
                if (matchingPromptResults.success.roomToEnter === _this.endRoom) {
                  if (enterRoomResultSuccess) {
                    // Successfully entered room to win game
                    _this.win();
                  } else {
                    // Display results text (fail to enter winning room)
                    _this.Display.append(enterRoomResultText);
                  }
                }
              }
              // return;
            }
            // Failed to do prompt (missing item requirement)
            if ('fail' in matchingPromptResults) {
              console.log('fail is in matching prompt');
              _this.Display.show(`${prompt.results.failMessage}`);
              _this.Display.append(`Missing required items: ${matchingPromptResults.fail.toString()}`);
              return;
            }
          }
        } else {
          if (foundPrompt === false) {
            // Player didn't say any keywords that triggered any of the current room prompts
            _this.Display.show(`<p>No actions could be done from: "${message}". Try something else.</p>
            ${_this.getRoom(_this.Player.currentRoom).getText}
          `);
          }
        }
      });
    } else {
      // No prompts exist for the current room
      console.log('UNDEFINED PROMPTS');
      _this.Display.show(`<p>There doesn't seem to be any actions at all that you can do in this room.</p>
                        ${_this.getRoom(_this.Player.currentRoom).getText}
      `);
    }
    console.log(message, this.Player);

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
        this.Display.append(this.rooms[i].getText);
        this.Display.append('<p>Game end.</p>');
      }
    }
    // Disable any more user input after winning
    this.disableInput();
  }

  resetGame() {
    // Resets player with blank inventory and back to starting room
    this.Player.inventory = new Inventory();
    this.Player.currentRoom = this.startRoom;
    const room = this.getRoom(this.startRoom);
    this.Display.show(room.getText);
    this.Input.enable();
  }
}
