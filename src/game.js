import Display from './display';
import Input from './input';
import Player from './player';
import Room from './room';
import Inventory from './inventory';

export default class Game {

  constructor(rooms = [], items = [], startRoom = '', endRoom = '') {
    this.Display = new Display();
    this.Input = new Input();
    this.rooms = []; // All the rooms in our game
    const _this = this;

    rooms.forEach(function (room) {
      _this.addRoom(room.name, room.getText, room.prompts, room.requirements);
    });
    this.startRoom = startRoom; // Which room will the player start in
    this.endRoom = endRoom; // Which room is the winning / game end

    // If game wasn't initialized with a startRoom, set it to the first room
    if (this.startRoom === '' && this.rooms.length > 0) {
      this.startRoom = this.rooms[0].name;
      this.Player.startRoom = this.startRoom;
      this.Player.currentRoom = this.Player.startRoom;
    }
    // If game wasn't initialized with a endRoom, set it to the last room
    if (this.endRoom === '' && this.rooms.length > 1) {
      this.endRoom = this.rooms[this.rooms.length - 1].name;
    }
    this.Player = new Player(startRoom = this.startRoom);
  }

  init() {
    let displayText;

    // If game wasn't initialized with a startRoom, set it to the first room
    if (this.startRoom === '' && this.rooms.length > 0) {
      this.startRoom = this.rooms[0].name;
      this.Player.startRoom = this.startRoom;
      this.Player.currentRoom = this.Player.startRoom;
    }
    // If game wasn't initialized with a endRoom, set it to the last room
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

  // Loads game data from JSON object passed
  loadData(gameData) {
    const _this = this;

    gameData.game.rooms.forEach(function (room) {
      // console.log(room);
      let roomPrompts = [];
      let roomRequirements = [];

      // Room prompts and requirements are optional so handle that
      if (room.prompts !== undefined) {
        roomPrompts = room.prompts;
      }
      if (room.requirements !== undefined) {
        roomRequirements = room.requiurements;
      }
      _this.addRoom(room.name, room.getText, roomPrompts, roomRequirements);
    });

    if (gameData.startRoom !== undefined) {
      this.startRoom = gameData.startRoom;
      this.Player.startRoom = gameData.startRoom;
    }
    if (gameData.endRoom !== undefined) {
      this.endRoom = gameData.endRoom;
    }
    // If game wasn't initialized with a startRoom, set it to the first room
    if (this.startRoom === '' || this.startRoom === undefined) {
      if (this.rooms.length > 0) {
        this.startRoom = this.rooms[0].name;
        this.Player.startRoom = this.startRoom;
        this.Player.currentRoom = this.Player.startRoom;
      }
    }
    // If game wasn't initialized with a endRoom, set it to the last room
    if (this.endRoom === '' && this.endRoom === undefined) {
      if (this.rooms.length > 1) {
        this.endRoom = this.rooms[this.rooms.length - 1].name;
      }
    }
  }

  // Manage rooms
  addRoom(name, getText, prompts = [], requirements = []) {
    let roomObj = new Room(name, getText, prompts, requirements);

    this.rooms.push(roomObj);
    return roomObj;
  }

  dropRoom(roomName) {
    let newRooms = this.rooms.filter(function (room) {
      return room.name !== roomName;
    });

    this.rooms = newRooms;
    return this.rooms;
  }

  // Returns room object (properties) given the name
  getRoom(roomName) {
    const room = this.rooms.find(x => x.name === roomName);

    return room;
  }

  // User input
  userSend(message) {
    // Our Input class will handle cleaning / normalizing strings
    this.Input.send(message);
    this.decidePath(this.Input.value);
  }

  // Game AI
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
        try {
          if (foundPrompt === false) {
            const matchingPromptResults = prompt.matchKeywords(message, _this.Player.inventory.items);

            // If we get a matching result back
            if (matchingPromptResults !== null) {
              // This prompt has keywords that match the user's input
              foundPrompt = true;
              // If player succeeded in prompt action
              if ('success' in matchingPromptResults) {
                _this.Display.show(`<p>${matchingPromptResults.success.successText}</p>`);
                // Get items from prompt if any are returned and add them to inventory
                if (matchingPromptResults.success.itemsGiven !== undefined) {
                  _this.Player.inventory.addItems(matchingPromptResults.success.itemsGiven);
                }
                // If the prompt success result includes entering a new room..
                if (matchingPromptResults.success.roomToEnter !== undefined) {
                  let enterRoomResultSuccess;
                  let enterRoomResultText;

                  // Check to see if player can successfully enter the room (given the inventory / room requirements)
                  [enterRoomResultText, enterRoomResultSuccess] =
                                    _this.Player.enterRoom(_this.getRoom(matchingPromptResults.success.roomToEnter));
                  _this.Display.append(`<p>${enterRoomResultText}</p>`);
                  if (enterRoomResultSuccess) {
                    // Check to see if player entered winning room
                    if (matchingPromptResults.success.roomToEnter === _this.endRoom) {
                      _this.win();
                    }
                  } else {
                    // Player could not enter room (missing required items in inventory)
                  }
                }
              }
              // Player failed to do prompt (missing item requirement)
              if ('fail' in matchingPromptResults) {
                _this.Display.show(`${matchingPromptResults.fail.failText}`);
                _this.Display.append(`<p>Missing required items: ${matchingPromptResults.fail.missing.toString()}.</p>
                                      <p>${_this.getRoom(_this.Player.currentRoom).getText}</p>`);
                return;
              }
            }
          }
        } catch (err) {
          console.log(err);
        }
        if (foundPrompt === false) {
          // Player didn't say any keywords that triggered any of the current room prompts
          _this.Display.show(`<p>No actions could be done from: "${message}". Try something else, or be
                              more specific about what you're doing.</p>
                              <p>${_this.getRoom(_this.Player.currentRoom).getText}</p>`);
        }
      });
    } else {
      // No prompts exist for the current room
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

  // Player wins
  win() {
    // Show final room text (win text)
    for (let i = 0; i < this.rooms.length; i++) {
      if (this.rooms[i].name === this.endRoom) {
        this.Display.append('<p>Game end.</p>');
        break;
      }
    }
    // Disable any more user input after winning
    this.disableInput();
  }

  // Player resets game
  resetGame() {
    // Resets player with blank inventory and back to starting room
    this.Player.inventory = new Inventory();
    this.Player.currentRoom = this.startRoom;
    const room = this.getRoom(this.startRoom);

    this.Display.show(room.getText);
    this.Input.enable();
  }
}
