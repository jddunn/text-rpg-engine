(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("text-rpg-engine", [], factory);
	else if(typeof exports === 'object')
		exports["text-rpg-engine"] = factory();
	else
		root["text-rpg-engine"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Display =
/*#__PURE__*/
function () {
  function Display() {
    var html = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var elementId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'display';

    _classCallCheck(this, Display);

    this.html = html;
    this.elementId = elementId;
  }

  _createClass(Display, [{
    key: "show",
    value: function show() {
      var html = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (html === null) {
        document.getElementById(this.elementId).innerHTML = this.html;
      } else {
        document.getElementById(this.elementId).innerHTML = html;
        this.html = html;
      }
    } // Append HTML content to display screen

  }, {
    key: "append",
    value: function append(html) {
      document.getElementById(this.elementId).innerHTML += html;
    }
  }]);

  return Display;
}();

exports.default = Display;
module.exports = exports["default"];

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _display = _interopRequireDefault(__webpack_require__(/*! ./display */ "./src/display.js"));

var _input = _interopRequireDefault(__webpack_require__(/*! ./input */ "./src/input.js"));

var _player = _interopRequireDefault(__webpack_require__(/*! ./player */ "./src/player.js"));

var _room = _interopRequireDefault(__webpack_require__(/*! ./room */ "./src/room.js"));

var _inventory = _interopRequireDefault(__webpack_require__(/*! ./inventory */ "./src/inventory.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Game =
/*#__PURE__*/
function () {
  function Game() {
    var rooms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var items = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var startRoom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var endRoom = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

    _classCallCheck(this, Game);

    this.Display = new _display.default();
    this.Input = new _input.default();
    this.rooms = []; // All the rooms in our game

    var _this = this;

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
    } // If game wasn't initialized with a endRoom, set it to the last room


    if (this.endRoom === '' && this.rooms.length > 1) {
      this.endRoom = this.rooms[this.rooms.length - 1].name;
    }

    this.Player = new _player.default(startRoom = this.startRoom);
  }

  _createClass(Game, [{
    key: "init",
    value: function init() {
      var displayText; // If game wasn't initialized with a startRoom, set it to the first room

      if (this.startRoom === '' && this.rooms.length > 0) {
        this.startRoom = this.rooms[0].name;
        this.Player.startRoom = this.startRoom;
        this.Player.currentRoom = this.Player.startRoom;
      } // If game wasn't initialized with a endRoom, set it to the last room


      if (this.endRoom === '' && this.rooms.length > 1) {
        this.endRoom = this.rooms[this.rooms.length - 1].name;
      }

      for (var i = 0; i < this.rooms.length; i++) {
        if (this.rooms[i].name === this.startRoom) {
          displayText = this.rooms[i].getText;
          break;
        }
      }

      if (displayText === undefined) {
        displayText = 'No starting room text found!';
      }

      this.Display.show(displayText);
    } // Loads game data from JSON object passed

  }, {
    key: "loadData",
    value: function loadData(gameData) {
      var _this = this;

      gameData.game.rooms.forEach(function (room) {
        // console.log(room);
        var roomPrompts = [];
        var roomRequirements = []; // Room prompts and requirements are optional so handle that

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
      } // If game wasn't initialized with a startRoom, set it to the first room


      if (this.startRoom === '' || this.startRoom === undefined) {
        if (this.rooms.length > 0) {
          this.startRoom = this.rooms[0].name;
          this.Player.startRoom = this.startRoom;
          this.Player.currentRoom = this.Player.startRoom;
        }
      } // If game wasn't initialized with a endRoom, set it to the last room


      if (this.endRoom === '' && this.endRoom === undefined) {
        if (this.rooms.length > 1) {
          this.endRoom = this.rooms[this.rooms.length - 1].name;
        }
      }
    } // Manage rooms

  }, {
    key: "addRoom",
    value: function addRoom(name, getText) {
      var prompts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var requirements = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
      var roomObj = new _room.default(name, getText, prompts, requirements);
      this.rooms.push(roomObj);
      return roomObj;
    }
  }, {
    key: "dropRoom",
    value: function dropRoom(roomName) {
      var newRooms = this.rooms.filter(function (room) {
        return room.name !== roomName;
      });
      this.rooms = newRooms;
      return this.rooms;
    } // Returns room object (properties) given the name

  }, {
    key: "getRoom",
    value: function getRoom(roomName) {
      var room = this.rooms.find(function (x) {
        return x.name === roomName;
      });
      return room;
    } // User input

  }, {
    key: "userSend",
    value: function userSend(message) {
      // Our Input class will handle cleaning / normalizing strings
      this.Input.send(message);
      this.decidePath(this.Input.value);
    } // Game AI

  }, {
    key: "decidePath",
    value: function decidePath(message) {
      if (message === 'restart') {
        this.resetGame();
      }

      var _this = this;

      var currRoom = _this.getRoom(_this.Player.currentRoom); // Do we have actions that we can do in the room?


      if (_typeof(currRoom.prompts) !== undefined) {
        // Check every prompt action to see if it matches our input keywords
        // For now just get the first matching prompt and do that
        var foundPrompt = false;
        currRoom.prompts.forEach(function (prompt) {
          try {
            if (foundPrompt === false) {
              var matchingPromptResults = prompt.matchKeywords(message, _this.Player.inventory.items); // If we get a matching result back

              if (matchingPromptResults !== null) {
                // This prompt has keywords that match the user's input
                foundPrompt = true; // If player succeeded in prompt action

                if ('success' in matchingPromptResults) {
                  _this.Display.show("<p>".concat(matchingPromptResults.success.successText, "</p>")); // Get items from prompt if any are returned and add them to inventory


                  if (matchingPromptResults.success.itemsGiven !== undefined) {
                    _this.Player.inventory.addItems(matchingPromptResults.success.itemsGiven);
                  } // If the prompt success result includes entering a new room..


                  if (matchingPromptResults.success.roomToEnter !== undefined) {
                    var enterRoomResultSuccess;
                    var enterRoomResultText; // Check to see if player can successfully enter the room (given the inventory / room requirements)

                    var _this$Player$enterRoo = _this.Player.enterRoom(_this.getRoom(matchingPromptResults.success.roomToEnter));

                    var _this$Player$enterRoo2 = _slicedToArray(_this$Player$enterRoo, 2);

                    enterRoomResultText = _this$Player$enterRoo2[0];
                    enterRoomResultSuccess = _this$Player$enterRoo2[1];

                    _this.Display.append("<p>".concat(enterRoomResultText, "</p>"));

                    if (enterRoomResultSuccess) {
                      // Check to see if player entered winning room
                      if (matchingPromptResults.success.roomToEnter === _this.endRoom) {
                        _this.win();
                      }
                    } else {// Player could not enter room (missing required items in inventory)
                    }
                  }
                } // Player failed to do prompt (missing item requirement)


                if ('fail' in matchingPromptResults) {
                  _this.Display.show("".concat(matchingPromptResults.fail.failText));

                  _this.Display.append("<p>Missing required items: ".concat(matchingPromptResults.fail.missing.toString(), ".</p>\n                                      <p>").concat(_this.getRoom(_this.Player.currentRoom).getText, "</p>"));

                  return;
                }
              }
            }
          } catch (err) {
            console.log(err);
          }

          if (foundPrompt === false) {
            // Player didn't say any keywords that triggered any of the current room prompts
            _this.Display.show("<p>No actions could be done from: \"".concat(message, "\". Try something else, or be\n                              more specific about what you're doing.</p>\n                              <p>").concat(_this.getRoom(_this.Player.currentRoom).getText, "</p>"));
          }
        });
      } else {
        // No prompts exist for the current room
        _this.Display.show("<p>There doesn't seem to be any actions at all that you can do in this room.</p>\n                        ".concat(_this.getRoom(_this.Player.currentRoom).getText, "\n      "));
      }

      console.log(message, this.Player);
    }
  }, {
    key: "disableInput",
    value: function disableInput() {
      this.Input.disable();
    }
  }, {
    key: "enableInput",
    value: function enableInput() {
      this.Input.enable();
    } // Player wins

  }, {
    key: "win",
    value: function win() {
      // Show final room text (win text)
      for (var i = 0; i < this.rooms.length; i++) {
        if (this.rooms[i].name === this.endRoom) {
          this.Display.append('<p>Game end.</p>');
          break;
        }
      } // Disable any more user input after winning


      this.disableInput();
    } // Player resets game

  }, {
    key: "resetGame",
    value: function resetGame() {
      // Resets player with blank inventory and back to starting room
      this.Player.inventory = new _inventory.default();
      this.Player.currentRoom = this.startRoom;
      var room = this.getRoom(this.startRoom);
      this.Display.show(room.getText);
      this.Input.enable();
    }
  }]);

  return Game;
}();

exports.default = Game;
module.exports = exports["default"];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _game = _interopRequireDefault(__webpack_require__(/*! ./game */ "./src/game.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var game = new _game.default();
var _default = game;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/input.js":
/*!**********************!*\
  !*** ./src/input.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Input =
/*#__PURE__*/
function () {
  function Input() {
    var disabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var elementId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'input';

    _classCallCheck(this, Input);

    this.disabled = disabled;
    this.value = value;
    this.elementId = elementId;
  }

  _createClass(Input, [{
    key: "enable",
    value: function enable() {
      this.disabled = false;
      document.getElementById('input').disabled = false;
    }
  }, {
    key: "disable",
    value: function disable() {
      this.disabled = true;
      document.getElementById('input').disabled = true;
    }
  }, {
    key: "send",
    value: function send(value) {
      // Normalize input values (if desired)
      value = value.toLowerCase();
      this.value = value;
    }
  }]);

  return Input;
}();

exports.default = Input;
module.exports = exports["default"];

/***/ }),

/***/ "./src/inventory.js":
/*!**************************!*\
  !*** ./src/inventory.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Inventory =
/*#__PURE__*/
function () {
  function Inventory() {
    var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, Inventory);

    this.items = items;
  } // We can use this to add single or multiple items, as long as the
  // passed value is an array


  _createClass(Inventory, [{
    key: "addItems",
    value: function addItems(items) {
      this.items = this.items.concat(items);
      return this.items;
    }
  }, {
    key: "dropItem",
    value: function dropItem(itemName) {
      var newInventory = this.items.filter(function (item) {
        return item.name !== itemName;
      });
      this.items = newInventory;
      return this.items;
    }
  }]);

  return Inventory;
}();

exports.default = Inventory;
module.exports = exports["default"];

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inventory = _interopRequireDefault(__webpack_require__(/*! ./inventory */ "./src/inventory.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Player =
/*#__PURE__*/
function () {
  function Player() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var inventory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _inventory.default();
    var currentRoom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var startRoom = arguments[3];

    _classCallCheck(this, Player);

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

  _createClass(Player, [{
    key: "enterRoom",
    value: function enterRoom(room) {
      var roomResult = room.enter(this.inventory.items);

      if (roomResult[1] === false) {// Player did not have required items to enter the room
      } else {
        // Entered room successfully
        this.currentRoom = room.name;
      } // Return results text and whether or not player successfully entered room


      return [roomResult[0], roomResult[1]];
    }
  }, {
    key: "getItem",
    value: function getItem(item) {
      this.inventory.addItem(item);
      return this.inventory;
    }
  }, {
    key: "dropItem",
    value: function dropItem(item) {
      this.inventory.dropItem(item);
      return this.inventory;
    }
  }]);

  return Player;
}();

exports.default = Player;
module.exports = exports["default"];

/***/ }),

/***/ "./src/prompt.js":
/*!***********************!*\
  !*** ./src/prompt.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Prompt =
/*#__PURE__*/
function () {
  function Prompt() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var keywords = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var results = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var requirements = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

    _classCallCheck(this, Prompt);

    this.name = name; // Keywords that can trigger the prompt (make all lower-case by default)

    this.keywords = keywords.map(function (v) {
      return v.toLowerCase();
    }); // Results that occur when this prompt is successfully triggered;
    // the result keys comprise of “successText” (required), "failText" (optional),
    // “itemsRequired” (optional), and “roomToEnter” (optional)

    this.results = results; // Any prerequisite items needed to do the prompt?

    this.requirements = requirements;
  } // Check if input message matches any prompt keywords and return results


  _createClass(Prompt, [{
    key: "matchKeywords",
    value: function matchKeywords(message) {
      var items = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var foundKeyword = false;
      var missingRequirements = []; // If we have any item requirements

      if (this.requirements.length > 0) {
        // Check all the requirements against the items passed
        this.requirements.forEach(function (requirement) {
          var foundRequirement = false;
          items.forEach(function (item) {
            if (item === requirement) {
              foundRequirement = true;
            }
          }); // If a requirement isn't found add that a list

          if (!foundRequirement) {
            missingRequirements.push(requirement);
          }
        });
      } // Once we check to see if the player's missing any items,
      // parse the input for matching keywords to the prompt


      this.keywords.forEach(function (keyword) {
        if (message.includes(keyword.toLowerCase())) {
          foundKeyword = true;
        }
      }); // If any keywords have been matched from the user input

      if (foundKeyword) {
        // If there are any missing item requirements
        if (missingRequirements.length > 0) {
          // Prompt fails; return missing items and failText
          return {
            'fail': {
              'missing': missingRequirements,
              'failText': this.results.failText
            }
          };
        } // Prompt succeeds; return results of the prompt


        return {
          'success': this.results
        };
      }

      return null;
    }
  }]);

  return Prompt;
}();

exports.default = Prompt;
module.exports = exports["default"];

/***/ }),

/***/ "./src/room.js":
/*!*********************!*\
  !*** ./src/room.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prompt = _interopRequireDefault(__webpack_require__(/*! ./prompt */ "./src/prompt.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Room =
/*#__PURE__*/
function () {
  function Room() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var getText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var prompts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var requirements = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

    _classCallCheck(this, Room);

    this.name = name;
    this.getText = getText; // The text that is displayed when the room is entered
    // this.prompts = prompts; // What are the actions that we can do in this room?

    var _this = this;

    this.prompts = [];
    prompts.forEach(function (prompt) {
      _this.addPrompt(prompt.name, prompt.keywords, prompt.results, prompt.requirements);
    });
    this.requirements = requirements; // Any requirements (items) needed to access the room
  } // Add new prompt / interaction to room


  _createClass(Room, [{
    key: "addPrompt",
    value: function addPrompt(name, keywords, results, requirements) {
      var prompt = new _prompt.default(name, keywords, results, requirements);
      this.prompts.push(prompt);
      return this.prompts;
    } // Enter the room

  }, {
    key: "enter",
    value: function enter() {
      var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var resultText = '';
      var metAllRequirements = true; // Can we enter the room?
      // The room is not accessible by default if we have more than one requirement (item)

      if (this.requirements > 0) {
        if (items.length === 0) {
          metAllRequirements = false; // Append missing requirement messages

          this.requirements.forEach(function (requirement) {
            resultText += "".concat(requirement.failText, ". ");
          });
        } else {
          // Check the room's requirements against items to see if they're all found
          this.requirements.forEach(function (requirement) {
            var found = false;
            this.items.forEach(function (item) {
              if (item === requirement) {
                found = true;
              }
            });

            if (found === false) {
              metAllRequirements = false; // Return fail messages for missing requirements

              resultText += requirement.failText;
            }
          }); // If all item requirements have been found, return room text

          if (metAllRequirements === true) {
            resultText = this.getText;
          }
        } // No items required to enter the room, return room text

      } else {
        resultText = this.getText;
      } // Return resulting text and whether or not room could be entered


      return [resultText, metAllRequirements];
    }
  }]);

  return Room;
}();

exports.default = Room;
module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGV4dC1ycGctZW5naW5lLy4vc3JjL2lucHV0LmpzIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS8uL3NyYy9pbnZlbnRvcnkuanMiLCJ3ZWJwYWNrOi8vdGV4dC1ycGctZW5naW5lLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvcHJvbXB0LmpzIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS8uL3NyYy9yb29tLmpzIl0sIm5hbWVzIjpbIkRpc3BsYXkiLCJodG1sIiwiZWxlbWVudElkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsIkdhbWUiLCJyb29tcyIsIml0ZW1zIiwic3RhcnRSb29tIiwiZW5kUm9vbSIsIklucHV0IiwiX3RoaXMiLCJmb3JFYWNoIiwicm9vbSIsImFkZFJvb20iLCJuYW1lIiwiZ2V0VGV4dCIsInByb21wdHMiLCJyZXF1aXJlbWVudHMiLCJsZW5ndGgiLCJQbGF5ZXIiLCJjdXJyZW50Um9vbSIsImRpc3BsYXlUZXh0IiwiaSIsInVuZGVmaW5lZCIsInNob3ciLCJnYW1lRGF0YSIsImdhbWUiLCJyb29tUHJvbXB0cyIsInJvb21SZXF1aXJlbWVudHMiLCJyZXF1aXVyZW1lbnRzIiwicm9vbU9iaiIsInB1c2giLCJyb29tTmFtZSIsIm5ld1Jvb21zIiwiZmlsdGVyIiwiZmluZCIsIngiLCJtZXNzYWdlIiwic2VuZCIsImRlY2lkZVBhdGgiLCJ2YWx1ZSIsInJlc2V0R2FtZSIsImN1cnJSb29tIiwiZ2V0Um9vbSIsImZvdW5kUHJvbXB0IiwicHJvbXB0IiwibWF0Y2hpbmdQcm9tcHRSZXN1bHRzIiwibWF0Y2hLZXl3b3JkcyIsImludmVudG9yeSIsInN1Y2Nlc3MiLCJzdWNjZXNzVGV4dCIsIml0ZW1zR2l2ZW4iLCJhZGRJdGVtcyIsInJvb21Ub0VudGVyIiwiZW50ZXJSb29tUmVzdWx0U3VjY2VzcyIsImVudGVyUm9vbVJlc3VsdFRleHQiLCJlbnRlclJvb20iLCJhcHBlbmQiLCJ3aW4iLCJmYWlsIiwiZmFpbFRleHQiLCJtaXNzaW5nIiwidG9TdHJpbmciLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZGlzYWJsZSIsImVuYWJsZSIsImRpc2FibGVJbnB1dCIsImRpc2FibGVkIiwidG9Mb3dlckNhc2UiLCJJbnZlbnRvcnkiLCJjb25jYXQiLCJpdGVtTmFtZSIsIm5ld0ludmVudG9yeSIsIml0ZW0iLCJyb29tUmVzdWx0IiwiZW50ZXIiLCJhZGRJdGVtIiwiZHJvcEl0ZW0iLCJQcm9tcHQiLCJrZXl3b3JkcyIsInJlc3VsdHMiLCJtYXAiLCJ2IiwiZm91bmRLZXl3b3JkIiwibWlzc2luZ1JlcXVpcmVtZW50cyIsInJlcXVpcmVtZW50IiwiZm91bmRSZXF1aXJlbWVudCIsImtleXdvcmQiLCJpbmNsdWRlcyIsIlJvb20iLCJhZGRQcm9tcHQiLCJyZXN1bHRUZXh0IiwibWV0QWxsUmVxdWlyZW1lbnRzIiwiZm91bmQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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biB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwidGV4dC1ycGctZW5naW5lXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInRleHQtcnBnLWVuZ2luZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ0ZXh0LXJwZy1lbmdpbmVcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIndXNlIHN0cmljdCc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXkge1xyXG5cclxuICBjb25zdHJ1Y3RvcihodG1sID0gJycsIGVsZW1lbnRJZCA9ICdkaXNwbGF5Jykge1xyXG4gICAgdGhpcy5odG1sID0gaHRtbDtcclxuICAgIHRoaXMuZWxlbWVudElkID0gZWxlbWVudElkO1xyXG4gIH1cclxuXHJcbiAgc2hvdyhodG1sID0gbnVsbCkge1xyXG4gICAgaWYgKGh0bWwgPT09IG51bGwpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLmlubmVySFRNTCA9IHRoaXMuaHRtbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICB0aGlzLmh0bWwgPSBodG1sO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQXBwZW5kIEhUTUwgY29udGVudCB0byBkaXNwbGF5IHNjcmVlblxyXG4gIGFwcGVuZChodG1sKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkuaW5uZXJIVE1MICs9IGh0bWw7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBEaXNwbGF5IGZyb20gJy4vZGlzcGxheSc7XHJcbmltcG9ydCBJbnB1dCBmcm9tICcuL2lucHV0JztcclxuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XHJcbmltcG9ydCBSb29tIGZyb20gJy4vcm9vbSc7XHJcbmltcG9ydCBJbnZlbnRvcnkgZnJvbSAnLi9pbnZlbnRvcnknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHJvb21zID0gW10sIGl0ZW1zID0gW10sIHN0YXJ0Um9vbSA9ICcnLCBlbmRSb29tID0gJycpIHtcclxuICAgIHRoaXMuRGlzcGxheSA9IG5ldyBEaXNwbGF5KCk7XHJcbiAgICB0aGlzLklucHV0ID0gbmV3IElucHV0KCk7XHJcbiAgICB0aGlzLnJvb21zID0gW107IC8vIEFsbCB0aGUgcm9vbXMgaW4gb3VyIGdhbWVcclxuICAgIGNvbnN0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICByb29tcy5mb3JFYWNoKGZ1bmN0aW9uIChyb29tKSB7XHJcbiAgICAgIF90aGlzLmFkZFJvb20ocm9vbS5uYW1lLCByb29tLmdldFRleHQsIHJvb20ucHJvbXB0cywgcm9vbS5yZXF1aXJlbWVudHMpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnN0YXJ0Um9vbSA9IHN0YXJ0Um9vbTsgLy8gV2hpY2ggcm9vbSB3aWxsIHRoZSBwbGF5ZXIgc3RhcnQgaW5cclxuICAgIHRoaXMuZW5kUm9vbSA9IGVuZFJvb207IC8vIFdoaWNoIHJvb20gaXMgdGhlIHdpbm5pbmcgLyBnYW1lIGVuZFxyXG5cclxuICAgIC8vIElmIGdhbWUgd2Fzbid0IGluaXRpYWxpemVkIHdpdGggYSBzdGFydFJvb20sIHNldCBpdCB0byB0aGUgZmlyc3Qgcm9vbVxyXG4gICAgaWYgKHRoaXMuc3RhcnRSb29tID09PSAnJyAmJiB0aGlzLnJvb21zLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5zdGFydFJvb20gPSB0aGlzLnJvb21zWzBdLm5hbWU7XHJcbiAgICAgIHRoaXMuUGxheWVyLnN0YXJ0Um9vbSA9IHRoaXMuc3RhcnRSb29tO1xyXG4gICAgICB0aGlzLlBsYXllci5jdXJyZW50Um9vbSA9IHRoaXMuUGxheWVyLnN0YXJ0Um9vbTtcclxuICAgIH1cclxuICAgIC8vIElmIGdhbWUgd2Fzbid0IGluaXRpYWxpemVkIHdpdGggYSBlbmRSb29tLCBzZXQgaXQgdG8gdGhlIGxhc3Qgcm9vbVxyXG4gICAgaWYgKHRoaXMuZW5kUm9vbSA9PT0gJycgJiYgdGhpcy5yb29tcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgIHRoaXMuZW5kUm9vbSA9IHRoaXMucm9vbXNbdGhpcy5yb29tcy5sZW5ndGggLSAxXS5uYW1lO1xyXG4gICAgfVxyXG4gICAgdGhpcy5QbGF5ZXIgPSBuZXcgUGxheWVyKHN0YXJ0Um9vbSA9IHRoaXMuc3RhcnRSb29tKTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBsZXQgZGlzcGxheVRleHQ7XHJcblxyXG4gICAgLy8gSWYgZ2FtZSB3YXNuJ3QgaW5pdGlhbGl6ZWQgd2l0aCBhIHN0YXJ0Um9vbSwgc2V0IGl0IHRvIHRoZSBmaXJzdCByb29tXHJcbiAgICBpZiAodGhpcy5zdGFydFJvb20gPT09ICcnICYmIHRoaXMucm9vbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnN0YXJ0Um9vbSA9IHRoaXMucm9vbXNbMF0ubmFtZTtcclxuICAgICAgdGhpcy5QbGF5ZXIuc3RhcnRSb29tID0gdGhpcy5zdGFydFJvb207XHJcbiAgICAgIHRoaXMuUGxheWVyLmN1cnJlbnRSb29tID0gdGhpcy5QbGF5ZXIuc3RhcnRSb29tO1xyXG4gICAgfVxyXG4gICAgLy8gSWYgZ2FtZSB3YXNuJ3QgaW5pdGlhbGl6ZWQgd2l0aCBhIGVuZFJvb20sIHNldCBpdCB0byB0aGUgbGFzdCByb29tXHJcbiAgICBpZiAodGhpcy5lbmRSb29tID09PSAnJyAmJiB0aGlzLnJvb21zLmxlbmd0aCA+IDEpIHtcclxuICAgICAgdGhpcy5lbmRSb29tID0gdGhpcy5yb29tc1t0aGlzLnJvb21zLmxlbmd0aCAtIDFdLm5hbWU7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm9vbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMucm9vbXNbaV0ubmFtZSA9PT0gdGhpcy5zdGFydFJvb20pIHtcclxuICAgICAgICBkaXNwbGF5VGV4dCA9IHRoaXMucm9vbXNbaV0uZ2V0VGV4dDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGRpc3BsYXlUZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgZGlzcGxheVRleHQgPSAnTm8gc3RhcnRpbmcgcm9vbSB0ZXh0IGZvdW5kISc7XHJcbiAgICB9XHJcbiAgICB0aGlzLkRpc3BsYXkuc2hvdyhkaXNwbGF5VGV4dCk7XHJcbiAgfVxyXG5cclxuICAvLyBMb2FkcyBnYW1lIGRhdGEgZnJvbSBKU09OIG9iamVjdCBwYXNzZWRcclxuICBsb2FkRGF0YShnYW1lRGF0YSkge1xyXG4gICAgY29uc3QgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIGdhbWVEYXRhLmdhbWUucm9vbXMuZm9yRWFjaChmdW5jdGlvbiAocm9vbSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhyb29tKTtcclxuICAgICAgbGV0IHJvb21Qcm9tcHRzID0gW107XHJcbiAgICAgIGxldCByb29tUmVxdWlyZW1lbnRzID0gW107XHJcblxyXG4gICAgICAvLyBSb29tIHByb21wdHMgYW5kIHJlcXVpcmVtZW50cyBhcmUgb3B0aW9uYWwgc28gaGFuZGxlIHRoYXRcclxuICAgICAgaWYgKHJvb20ucHJvbXB0cyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcm9vbVByb21wdHMgPSByb29tLnByb21wdHM7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHJvb20ucmVxdWlyZW1lbnRzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByb29tUmVxdWlyZW1lbnRzID0gcm9vbS5yZXF1aXVyZW1lbnRzO1xyXG4gICAgICB9XHJcbiAgICAgIF90aGlzLmFkZFJvb20ocm9vbS5uYW1lLCByb29tLmdldFRleHQsIHJvb21Qcm9tcHRzLCByb29tUmVxdWlyZW1lbnRzKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChnYW1lRGF0YS5zdGFydFJvb20gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnN0YXJ0Um9vbSA9IGdhbWVEYXRhLnN0YXJ0Um9vbTtcclxuICAgICAgdGhpcy5QbGF5ZXIuc3RhcnRSb29tID0gZ2FtZURhdGEuc3RhcnRSb29tO1xyXG4gICAgfVxyXG4gICAgaWYgKGdhbWVEYXRhLmVuZFJvb20gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmVuZFJvb20gPSBnYW1lRGF0YS5lbmRSb29tO1xyXG4gICAgfVxyXG4gICAgLy8gSWYgZ2FtZSB3YXNuJ3QgaW5pdGlhbGl6ZWQgd2l0aCBhIHN0YXJ0Um9vbSwgc2V0IGl0IHRvIHRoZSBmaXJzdCByb29tXHJcbiAgICBpZiAodGhpcy5zdGFydFJvb20gPT09ICcnIHx8IHRoaXMuc3RhcnRSb29tID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgaWYgKHRoaXMucm9vbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRSb29tID0gdGhpcy5yb29tc1swXS5uYW1lO1xyXG4gICAgICAgIHRoaXMuUGxheWVyLnN0YXJ0Um9vbSA9IHRoaXMuc3RhcnRSb29tO1xyXG4gICAgICAgIHRoaXMuUGxheWVyLmN1cnJlbnRSb29tID0gdGhpcy5QbGF5ZXIuc3RhcnRSb29tO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBJZiBnYW1lIHdhc24ndCBpbml0aWFsaXplZCB3aXRoIGEgZW5kUm9vbSwgc2V0IGl0IHRvIHRoZSBsYXN0IHJvb21cclxuICAgIGlmICh0aGlzLmVuZFJvb20gPT09ICcnICYmIHRoaXMuZW5kUm9vbSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGlmICh0aGlzLnJvb21zLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICB0aGlzLmVuZFJvb20gPSB0aGlzLnJvb21zW3RoaXMucm9vbXMubGVuZ3RoIC0gMV0ubmFtZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gTWFuYWdlIHJvb21zXHJcbiAgYWRkUm9vbShuYW1lLCBnZXRUZXh0LCBwcm9tcHRzID0gW10sIHJlcXVpcmVtZW50cyA9IFtdKSB7XHJcbiAgICBsZXQgcm9vbU9iaiA9IG5ldyBSb29tKG5hbWUsIGdldFRleHQsIHByb21wdHMsIHJlcXVpcmVtZW50cyk7XHJcblxyXG4gICAgdGhpcy5yb29tcy5wdXNoKHJvb21PYmopO1xyXG4gICAgcmV0dXJuIHJvb21PYmo7XHJcbiAgfVxyXG5cclxuICBkcm9wUm9vbShyb29tTmFtZSkge1xyXG4gICAgbGV0IG5ld1Jvb21zID0gdGhpcy5yb29tcy5maWx0ZXIoZnVuY3Rpb24gKHJvb20pIHtcclxuICAgICAgcmV0dXJuIHJvb20ubmFtZSAhPT0gcm9vbU5hbWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnJvb21zID0gbmV3Um9vbXM7XHJcbiAgICByZXR1cm4gdGhpcy5yb29tcztcclxuICB9XHJcblxyXG4gIC8vIFJldHVybnMgcm9vbSBvYmplY3QgKHByb3BlcnRpZXMpIGdpdmVuIHRoZSBuYW1lXHJcbiAgZ2V0Um9vbShyb29tTmFtZSkge1xyXG4gICAgY29uc3Qgcm9vbSA9IHRoaXMucm9vbXMuZmluZCh4ID0+IHgubmFtZSA9PT0gcm9vbU5hbWUpO1xyXG5cclxuICAgIHJldHVybiByb29tO1xyXG4gIH1cclxuXHJcbiAgLy8gVXNlciBpbnB1dFxyXG4gIHVzZXJTZW5kKG1lc3NhZ2UpIHtcclxuICAgIC8vIE91ciBJbnB1dCBjbGFzcyB3aWxsIGhhbmRsZSBjbGVhbmluZyAvIG5vcm1hbGl6aW5nIHN0cmluZ3NcclxuICAgIHRoaXMuSW5wdXQuc2VuZChtZXNzYWdlKTtcclxuICAgIHRoaXMuZGVjaWRlUGF0aCh0aGlzLklucHV0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8vIEdhbWUgQUlcclxuICBkZWNpZGVQYXRoKG1lc3NhZ2UpIHtcclxuICAgIGlmIChtZXNzYWdlID09PSAncmVzdGFydCcpIHtcclxuICAgICAgdGhpcy5yZXNldEdhbWUoKTtcclxuICAgIH1cclxuICAgIGNvbnN0IF90aGlzID0gdGhpcztcclxuICAgIGNvbnN0IGN1cnJSb29tID0gX3RoaXMuZ2V0Um9vbShfdGhpcy5QbGF5ZXIuY3VycmVudFJvb20pO1xyXG5cclxuICAgIC8vIERvIHdlIGhhdmUgYWN0aW9ucyB0aGF0IHdlIGNhbiBkbyBpbiB0aGUgcm9vbT9cclxuICAgIGlmICh0eXBlb2YgY3VyclJvb20ucHJvbXB0cyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIC8vIENoZWNrIGV2ZXJ5IHByb21wdCBhY3Rpb24gdG8gc2VlIGlmIGl0IG1hdGNoZXMgb3VyIGlucHV0IGtleXdvcmRzXHJcbiAgICAgIC8vIEZvciBub3cganVzdCBnZXQgdGhlIGZpcnN0IG1hdGNoaW5nIHByb21wdCBhbmQgZG8gdGhhdFxyXG4gICAgICBsZXQgZm91bmRQcm9tcHQgPSBmYWxzZTtcclxuXHJcbiAgICAgIGN1cnJSb29tLnByb21wdHMuZm9yRWFjaChmdW5jdGlvbiAocHJvbXB0KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGlmIChmb3VuZFByb21wdCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2hpbmdQcm9tcHRSZXN1bHRzID0gcHJvbXB0Lm1hdGNoS2V5d29yZHMobWVzc2FnZSwgX3RoaXMuUGxheWVyLmludmVudG9yeS5pdGVtcyk7XHJcblxyXG4gICAgICAgICAgICAvLyBJZiB3ZSBnZXQgYSBtYXRjaGluZyByZXN1bHQgYmFja1xyXG4gICAgICAgICAgICBpZiAobWF0Y2hpbmdQcm9tcHRSZXN1bHRzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgLy8gVGhpcyBwcm9tcHQgaGFzIGtleXdvcmRzIHRoYXQgbWF0Y2ggdGhlIHVzZXIncyBpbnB1dFxyXG4gICAgICAgICAgICAgIGZvdW5kUHJvbXB0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAvLyBJZiBwbGF5ZXIgc3VjY2VlZGVkIGluIHByb21wdCBhY3Rpb25cclxuICAgICAgICAgICAgICBpZiAoJ3N1Y2Nlc3MnIGluIG1hdGNoaW5nUHJvbXB0UmVzdWx0cykge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuRGlzcGxheS5zaG93KGA8cD4ke21hdGNoaW5nUHJvbXB0UmVzdWx0cy5zdWNjZXNzLnN1Y2Nlc3NUZXh0fTwvcD5gKTtcclxuICAgICAgICAgICAgICAgIC8vIEdldCBpdGVtcyBmcm9tIHByb21wdCBpZiBhbnkgYXJlIHJldHVybmVkIGFuZCBhZGQgdGhlbSB0byBpbnZlbnRvcnlcclxuICAgICAgICAgICAgICAgIGlmIChtYXRjaGluZ1Byb21wdFJlc3VsdHMuc3VjY2Vzcy5pdGVtc0dpdmVuICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgX3RoaXMuUGxheWVyLmludmVudG9yeS5hZGRJdGVtcyhtYXRjaGluZ1Byb21wdFJlc3VsdHMuc3VjY2Vzcy5pdGVtc0dpdmVuKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBwcm9tcHQgc3VjY2VzcyByZXN1bHQgaW5jbHVkZXMgZW50ZXJpbmcgYSBuZXcgcm9vbS4uXHJcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hpbmdQcm9tcHRSZXN1bHRzLnN1Y2Nlc3Mucm9vbVRvRW50ZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICBsZXQgZW50ZXJSb29tUmVzdWx0U3VjY2VzcztcclxuICAgICAgICAgICAgICAgICAgbGV0IGVudGVyUm9vbVJlc3VsdFRleHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAvLyBDaGVjayB0byBzZWUgaWYgcGxheWVyIGNhbiBzdWNjZXNzZnVsbHkgZW50ZXIgdGhlIHJvb20gKGdpdmVuIHRoZSBpbnZlbnRvcnkgLyByb29tIHJlcXVpcmVtZW50cylcclxuICAgICAgICAgICAgICAgICAgW2VudGVyUm9vbVJlc3VsdFRleHQsIGVudGVyUm9vbVJlc3VsdFN1Y2Nlc3NdID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuUGxheWVyLmVudGVyUm9vbShfdGhpcy5nZXRSb29tKG1hdGNoaW5nUHJvbXB0UmVzdWx0cy5zdWNjZXNzLnJvb21Ub0VudGVyKSk7XHJcbiAgICAgICAgICAgICAgICAgIF90aGlzLkRpc3BsYXkuYXBwZW5kKGA8cD4ke2VudGVyUm9vbVJlc3VsdFRleHR9PC9wPmApO1xyXG4gICAgICAgICAgICAgICAgICBpZiAoZW50ZXJSb29tUmVzdWx0U3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiBwbGF5ZXIgZW50ZXJlZCB3aW5uaW5nIHJvb21cclxuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hpbmdQcm9tcHRSZXN1bHRzLnN1Y2Nlc3Mucm9vbVRvRW50ZXIgPT09IF90aGlzLmVuZFJvb20pIHtcclxuICAgICAgICAgICAgICAgICAgICAgIF90aGlzLndpbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBQbGF5ZXIgY291bGQgbm90IGVudGVyIHJvb20gKG1pc3NpbmcgcmVxdWlyZWQgaXRlbXMgaW4gaW52ZW50b3J5KVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8vIFBsYXllciBmYWlsZWQgdG8gZG8gcHJvbXB0IChtaXNzaW5nIGl0ZW0gcmVxdWlyZW1lbnQpXHJcbiAgICAgICAgICAgICAgaWYgKCdmYWlsJyBpbiBtYXRjaGluZ1Byb21wdFJlc3VsdHMpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLkRpc3BsYXkuc2hvdyhgJHttYXRjaGluZ1Byb21wdFJlc3VsdHMuZmFpbC5mYWlsVGV4dH1gKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLkRpc3BsYXkuYXBwZW5kKGA8cD5NaXNzaW5nIHJlcXVpcmVkIGl0ZW1zOiAke21hdGNoaW5nUHJvbXB0UmVzdWx0cy5mYWlsLm1pc3NpbmcudG9TdHJpbmcoKX0uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7X3RoaXMuZ2V0Um9vbShfdGhpcy5QbGF5ZXIuY3VycmVudFJvb20pLmdldFRleHR9PC9wPmApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZvdW5kUHJvbXB0ID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgLy8gUGxheWVyIGRpZG4ndCBzYXkgYW55IGtleXdvcmRzIHRoYXQgdHJpZ2dlcmVkIGFueSBvZiB0aGUgY3VycmVudCByb29tIHByb21wdHNcclxuICAgICAgICAgIF90aGlzLkRpc3BsYXkuc2hvdyhgPHA+Tm8gYWN0aW9ucyBjb3VsZCBiZSBkb25lIGZyb206IFwiJHttZXNzYWdlfVwiLiBUcnkgc29tZXRoaW5nIGVsc2UsIG9yIGJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcmUgc3BlY2lmaWMgYWJvdXQgd2hhdCB5b3UncmUgZG9pbmcuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke190aGlzLmdldFJvb20oX3RoaXMuUGxheWVyLmN1cnJlbnRSb29tKS5nZXRUZXh0fTwvcD5gKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gTm8gcHJvbXB0cyBleGlzdCBmb3IgdGhlIGN1cnJlbnQgcm9vbVxyXG4gICAgICBfdGhpcy5EaXNwbGF5LnNob3coYDxwPlRoZXJlIGRvZXNuJ3Qgc2VlbSB0byBiZSBhbnkgYWN0aW9ucyBhdCBhbGwgdGhhdCB5b3UgY2FuIGRvIGluIHRoaXMgcm9vbS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7X3RoaXMuZ2V0Um9vbShfdGhpcy5QbGF5ZXIuY3VycmVudFJvb20pLmdldFRleHR9XHJcbiAgICAgIGApO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2cobWVzc2FnZSwgdGhpcy5QbGF5ZXIpO1xyXG4gIH1cclxuXHJcbiAgZGlzYWJsZUlucHV0KCkge1xyXG4gICAgdGhpcy5JbnB1dC5kaXNhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBlbmFibGVJbnB1dCgpIHtcclxuICAgIHRoaXMuSW5wdXQuZW5hYmxlKCk7XHJcbiAgfVxyXG5cclxuICAvLyBQbGF5ZXIgd2luc1xyXG4gIHdpbigpIHtcclxuICAgIC8vIFNob3cgZmluYWwgcm9vbSB0ZXh0ICh3aW4gdGV4dClcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb29tcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy5yb29tc1tpXS5uYW1lID09PSB0aGlzLmVuZFJvb20pIHtcclxuICAgICAgICB0aGlzLkRpc3BsYXkuYXBwZW5kKCc8cD5HYW1lIGVuZC48L3A+Jyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIERpc2FibGUgYW55IG1vcmUgdXNlciBpbnB1dCBhZnRlciB3aW5uaW5nXHJcbiAgICB0aGlzLmRpc2FibGVJbnB1dCgpO1xyXG4gIH1cclxuXHJcbiAgLy8gUGxheWVyIHJlc2V0cyBnYW1lXHJcbiAgcmVzZXRHYW1lKCkge1xyXG4gICAgLy8gUmVzZXRzIHBsYXllciB3aXRoIGJsYW5rIGludmVudG9yeSBhbmQgYmFjayB0byBzdGFydGluZyByb29tXHJcbiAgICB0aGlzLlBsYXllci5pbnZlbnRvcnkgPSBuZXcgSW52ZW50b3J5KCk7XHJcbiAgICB0aGlzLlBsYXllci5jdXJyZW50Um9vbSA9IHRoaXMuc3RhcnRSb29tO1xyXG4gICAgY29uc3Qgcm9vbSA9IHRoaXMuZ2V0Um9vbSh0aGlzLnN0YXJ0Um9vbSk7XHJcblxyXG4gICAgdGhpcy5EaXNwbGF5LnNob3cocm9vbS5nZXRUZXh0KTtcclxuICAgIHRoaXMuSW5wdXQuZW5hYmxlKCk7XHJcbiAgfVxyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcclxuXHJcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2FtZTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcihkaXNhYmxlZCA9IGZhbHNlLCB2YWx1ZSA9ICcnLCBlbGVtZW50SWQgPSAnaW5wdXQnKSB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLmVsZW1lbnRJZCA9IGVsZW1lbnRJZDtcclxuICB9XHJcblxyXG4gIGVuYWJsZSgpIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dCcpLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBkaXNhYmxlKCkge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQnKS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBzZW5kKHZhbHVlKSB7XHJcbiAgICAvLyBOb3JtYWxpemUgaW5wdXQgdmFsdWVzIChpZiBkZXNpcmVkKVxyXG4gICAgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxufVxyXG5cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52ZW50b3J5IHtcclxuXHJcbiAgY29uc3RydWN0b3IoaXRlbXMgPSBbXSkge1xyXG4gICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xyXG4gIH1cclxuXHJcbiAgLy8gV2UgY2FuIHVzZSB0aGlzIHRvIGFkZCBzaW5nbGUgb3IgbXVsdGlwbGUgaXRlbXMsIGFzIGxvbmcgYXMgdGhlXHJcbiAgLy8gcGFzc2VkIHZhbHVlIGlzIGFuIGFycmF5XHJcbiAgYWRkSXRlbXMoaXRlbXMpIHtcclxuICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1zLmNvbmNhdChpdGVtcyk7XHJcbiAgICByZXR1cm4gdGhpcy5pdGVtcztcclxuICB9XHJcblxyXG4gIGRyb3BJdGVtKGl0ZW1OYW1lKSB7XHJcbiAgICBsZXQgbmV3SW52ZW50b3J5ID0gdGhpcy5pdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgcmV0dXJuIGl0ZW0ubmFtZSAhPT0gaXRlbU5hbWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLml0ZW1zID0gbmV3SW52ZW50b3J5O1xyXG4gICAgcmV0dXJuIHRoaXMuaXRlbXM7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBJbnZlbnRvcnkgZnJvbSAnLi9pbnZlbnRvcnknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZSA9ICcnLCBpbnZlbnRvcnkgPSBuZXcgSW52ZW50b3J5KCksIGN1cnJlbnRSb29tID0gJycsIHN0YXJ0Um9vbSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIGlmICh0aGlzLm5hbWUgPT09ICcnKSB7XHJcbiAgICAgIHRoaXMubmFtZSA9ICdwbGF5ZXInO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pbnZlbnRvcnkgPSBpbnZlbnRvcnk7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50Um9vbSA9PT0gJycpIHtcclxuICAgICAgdGhpcy5jdXJyZW50Um9vbSA9IHRoaXMuc3RhcnRSb29tO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdGFydFJvb20gPSBzdGFydFJvb207XHJcbiAgfVxyXG5cclxuICBlbnRlclJvb20ocm9vbSkge1xyXG4gICAgY29uc3Qgcm9vbVJlc3VsdCA9IHJvb20uZW50ZXIodGhpcy5pbnZlbnRvcnkuaXRlbXMpO1xyXG5cclxuICAgIGlmIChyb29tUmVzdWx0WzFdID09PSBmYWxzZSkge1xyXG4gICAgICAvLyBQbGF5ZXIgZGlkIG5vdCBoYXZlIHJlcXVpcmVkIGl0ZW1zIHRvIGVudGVyIHRoZSByb29tXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBFbnRlcmVkIHJvb20gc3VjY2Vzc2Z1bGx5XHJcbiAgICAgIHRoaXMuY3VycmVudFJvb20gPSByb29tLm5hbWU7XHJcbiAgICB9XHJcbiAgICAvLyBSZXR1cm4gcmVzdWx0cyB0ZXh0IGFuZCB3aGV0aGVyIG9yIG5vdCBwbGF5ZXIgc3VjY2Vzc2Z1bGx5IGVudGVyZWQgcm9vbVxyXG4gICAgcmV0dXJuIFtyb29tUmVzdWx0WzBdLCByb29tUmVzdWx0WzFdXTtcclxuICB9XHJcblxyXG4gIGdldEl0ZW0oaXRlbSkge1xyXG4gICAgdGhpcy5pbnZlbnRvcnkuYWRkSXRlbShpdGVtKTtcclxuICAgIHJldHVybiB0aGlzLmludmVudG9yeTtcclxuICB9XHJcblxyXG4gIGRyb3BJdGVtKGl0ZW0pIHtcclxuICAgIHRoaXMuaW52ZW50b3J5LmRyb3BJdGVtKGl0ZW0pO1xyXG4gICAgcmV0dXJuIHRoaXMuaW52ZW50b3J5O1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9tcHQge1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lID0gJycsIGtleXdvcmRzID0gW10sIHJlc3VsdHMgPSB7fSwgcmVxdWlyZW1lbnRzID0gW10pIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAvLyBLZXl3b3JkcyB0aGF0IGNhbiB0cmlnZ2VyIHRoZSBwcm9tcHQgKG1ha2UgYWxsIGxvd2VyLWNhc2UgYnkgZGVmYXVsdClcclxuICAgIHRoaXMua2V5d29yZHMgPSBrZXl3b3Jkcy5tYXAoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHYudG9Mb3dlckNhc2UoKTt9KTtcclxuICAgIC8vIFJlc3VsdHMgdGhhdCBvY2N1ciB3aGVuIHRoaXMgcHJvbXB0IGlzIHN1Y2Nlc3NmdWxseSB0cmlnZ2VyZWQ7XHJcbiAgICAvLyB0aGUgcmVzdWx0IGtleXMgY29tcHJpc2Ugb2Yg4oCcc3VjY2Vzc1RleHTigJ0gKHJlcXVpcmVkKSwgXCJmYWlsVGV4dFwiIChvcHRpb25hbCksXHJcbiAgICAvLyDigJxpdGVtc1JlcXVpcmVk4oCdIChvcHRpb25hbCksIGFuZCDigJxyb29tVG9FbnRlcuKAnSAob3B0aW9uYWwpXHJcbiAgICB0aGlzLnJlc3VsdHMgPSByZXN1bHRzO1xyXG4gICAgLy8gQW55IHByZXJlcXVpc2l0ZSBpdGVtcyBuZWVkZWQgdG8gZG8gdGhlIHByb21wdD9cclxuICAgIHRoaXMucmVxdWlyZW1lbnRzID0gcmVxdWlyZW1lbnRzO1xyXG4gIH1cclxuXHJcbiAgLy8gQ2hlY2sgaWYgaW5wdXQgbWVzc2FnZSBtYXRjaGVzIGFueSBwcm9tcHQga2V5d29yZHMgYW5kIHJldHVybiByZXN1bHRzXHJcbiAgbWF0Y2hLZXl3b3JkcyhtZXNzYWdlLCBpdGVtcyA9IFtdKSB7XHJcbiAgICBsZXQgZm91bmRLZXl3b3JkID0gZmFsc2U7XHJcbiAgICBsZXQgbWlzc2luZ1JlcXVpcmVtZW50cyA9IFtdO1xyXG5cclxuICAgIC8vIElmIHdlIGhhdmUgYW55IGl0ZW0gcmVxdWlyZW1lbnRzXHJcbiAgICBpZiAodGhpcy5yZXF1aXJlbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAvLyBDaGVjayBhbGwgdGhlIHJlcXVpcmVtZW50cyBhZ2FpbnN0IHRoZSBpdGVtcyBwYXNzZWRcclxuICAgICAgdGhpcy5yZXF1aXJlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAocmVxdWlyZW1lbnQpIHtcclxuICAgICAgICBsZXQgZm91bmRSZXF1aXJlbWVudCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICBpZiAoaXRlbSA9PT0gcmVxdWlyZW1lbnQpIHtcclxuICAgICAgICAgICAgZm91bmRSZXF1aXJlbWVudCA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gSWYgYSByZXF1aXJlbWVudCBpc24ndCBmb3VuZCBhZGQgdGhhdCBhIGxpc3RcclxuICAgICAgICBpZiAoIWZvdW5kUmVxdWlyZW1lbnQpIHtcclxuICAgICAgICAgIG1pc3NpbmdSZXF1aXJlbWVudHMucHVzaChyZXF1aXJlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vIE9uY2Ugd2UgY2hlY2sgdG8gc2VlIGlmIHRoZSBwbGF5ZXIncyBtaXNzaW5nIGFueSBpdGVtcyxcclxuICAgIC8vIHBhcnNlIHRoZSBpbnB1dCBmb3IgbWF0Y2hpbmcga2V5d29yZHMgdG8gdGhlIHByb21wdFxyXG4gICAgdGhpcy5rZXl3b3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChrZXl3b3JkKSB7XHJcbiAgICAgIGlmIChtZXNzYWdlLmluY2x1ZGVzKGtleXdvcmQudG9Mb3dlckNhc2UoKSkpIHtcclxuICAgICAgICBmb3VuZEtleXdvcmQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIElmIGFueSBrZXl3b3JkcyBoYXZlIGJlZW4gbWF0Y2hlZCBmcm9tIHRoZSB1c2VyIGlucHV0XHJcbiAgICBpZiAoZm91bmRLZXl3b3JkKSB7XHJcbiAgICAgIC8vIElmIHRoZXJlIGFyZSBhbnkgbWlzc2luZyBpdGVtIHJlcXVpcmVtZW50c1xyXG4gICAgICBpZiAobWlzc2luZ1JlcXVpcmVtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgLy8gUHJvbXB0IGZhaWxzOyByZXR1cm4gbWlzc2luZyBpdGVtcyBhbmQgZmFpbFRleHRcclxuICAgICAgICByZXR1cm4geydmYWlsJzoge1xyXG4gICAgICAgICAgJ21pc3NpbmcnOiBtaXNzaW5nUmVxdWlyZW1lbnRzLFxyXG4gICAgICAgICAgJ2ZhaWxUZXh0JzogdGhpcy5yZXN1bHRzLmZhaWxUZXh0fVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgLy8gUHJvbXB0IHN1Y2NlZWRzOyByZXR1cm4gcmVzdWx0cyBvZiB0aGUgcHJvbXB0XHJcbiAgICAgIHJldHVybiB7J3N1Y2Nlc3MnOiB0aGlzLnJlc3VsdHN9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQcm9tcHQgZnJvbSAnLi9wcm9tcHQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm9vbSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWUgPSAnJywgZ2V0VGV4dCA9ICcnLCBwcm9tcHRzID0gW10sIHJlcXVpcmVtZW50cyA9IFtdKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5nZXRUZXh0ID0gZ2V0VGV4dDsgLy8gVGhlIHRleHQgdGhhdCBpcyBkaXNwbGF5ZWQgd2hlbiB0aGUgcm9vbSBpcyBlbnRlcmVkXHJcbiAgICAvLyB0aGlzLnByb21wdHMgPSBwcm9tcHRzOyAvLyBXaGF0IGFyZSB0aGUgYWN0aW9ucyB0aGF0IHdlIGNhbiBkbyBpbiB0aGlzIHJvb20/XHJcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgdGhpcy5wcm9tcHRzID0gW107XHJcblxyXG4gICAgcHJvbXB0cy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9tcHQpIHtcclxuICAgICAgX3RoaXMuYWRkUHJvbXB0KHByb21wdC5uYW1lLCBwcm9tcHQua2V5d29yZHMsIHByb21wdC5yZXN1bHRzLCBwcm9tcHQucmVxdWlyZW1lbnRzKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5yZXF1aXJlbWVudHMgPSByZXF1aXJlbWVudHM7IC8vIEFueSByZXF1aXJlbWVudHMgKGl0ZW1zKSBuZWVkZWQgdG8gYWNjZXNzIHRoZSByb29tXHJcbiAgfVxyXG5cclxuICAvLyBBZGQgbmV3IHByb21wdCAvIGludGVyYWN0aW9uIHRvIHJvb21cclxuICBhZGRQcm9tcHQobmFtZSwga2V5d29yZHMsIHJlc3VsdHMsIHJlcXVpcmVtZW50cykge1xyXG4gICAgY29uc3QgcHJvbXB0ID0gbmV3IFByb21wdChuYW1lLCBrZXl3b3JkcywgcmVzdWx0cywgcmVxdWlyZW1lbnRzKTtcclxuXHJcbiAgICB0aGlzLnByb21wdHMucHVzaChwcm9tcHQpO1xyXG4gICAgcmV0dXJuIHRoaXMucHJvbXB0cztcclxuICB9XHJcblxyXG4gIC8vIEVudGVyIHRoZSByb29tXHJcbiAgZW50ZXIoaXRlbXMgPSBbXSkge1xyXG4gICAgbGV0IHJlc3VsdFRleHQgPSAnJztcclxuICAgIGxldCBtZXRBbGxSZXF1aXJlbWVudHMgPSB0cnVlOyAvLyBDYW4gd2UgZW50ZXIgdGhlIHJvb20/XHJcblxyXG4gICAgLy8gVGhlIHJvb20gaXMgbm90IGFjY2Vzc2libGUgYnkgZGVmYXVsdCBpZiB3ZSBoYXZlIG1vcmUgdGhhbiBvbmUgcmVxdWlyZW1lbnQgKGl0ZW0pXHJcbiAgICBpZiAodGhpcy5yZXF1aXJlbWVudHMgPiAwKSB7XHJcbiAgICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBtZXRBbGxSZXF1aXJlbWVudHMgPSBmYWxzZTtcclxuICAgICAgICAvLyBBcHBlbmQgbWlzc2luZyByZXF1aXJlbWVudCBtZXNzYWdlc1xyXG4gICAgICAgIHRoaXMucmVxdWlyZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKHJlcXVpcmVtZW50KSB7XHJcbiAgICAgICAgICByZXN1bHRUZXh0ICs9IGAke3JlcXVpcmVtZW50LmZhaWxUZXh0fS4gYDtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBDaGVjayB0aGUgcm9vbSdzIHJlcXVpcmVtZW50cyBhZ2FpbnN0IGl0ZW1zIHRvIHNlZSBpZiB0aGV5J3JlIGFsbCBmb3VuZFxyXG4gICAgICAgIHRoaXMucmVxdWlyZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKHJlcXVpcmVtZW50KSB7XHJcbiAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0gPT09IHJlcXVpcmVtZW50KSB7XHJcbiAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGlmIChmb3VuZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgbWV0QWxsUmVxdWlyZW1lbnRzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIFJldHVybiBmYWlsIG1lc3NhZ2VzIGZvciBtaXNzaW5nIHJlcXVpcmVtZW50c1xyXG4gICAgICAgICAgICByZXN1bHRUZXh0ICs9IHJlcXVpcmVtZW50LmZhaWxUZXh0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIElmIGFsbCBpdGVtIHJlcXVpcmVtZW50cyBoYXZlIGJlZW4gZm91bmQsIHJldHVybiByb29tIHRleHRcclxuICAgICAgICBpZiAobWV0QWxsUmVxdWlyZW1lbnRzID09PSB0cnVlKSB7XHJcbiAgICAgICAgICByZXN1bHRUZXh0ID0gdGhpcy5nZXRUZXh0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvLyBObyBpdGVtcyByZXF1aXJlZCB0byBlbnRlciB0aGUgcm9vbSwgcmV0dXJuIHJvb20gdGV4dFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0VGV4dCA9IHRoaXMuZ2V0VGV4dDtcclxuICAgIH1cclxuICAgIC8vIFJldHVybiByZXN1bHRpbmcgdGV4dCBhbmQgd2hldGhlciBvciBub3Qgcm9vbSBjb3VsZCBiZSBlbnRlcmVkXHJcbiAgICByZXR1cm4gW3Jlc3VsdFRleHQsIG1ldEFsbFJlcXVpcmVtZW50c107XHJcbiAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9