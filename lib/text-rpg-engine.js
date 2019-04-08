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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Game =
/*#__PURE__*/
function () {
  function Game() {
    var datapath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var rooms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var startRoom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var endRoom = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

    _classCallCheck(this, Game);

    this.Display = new _display.default();
    this.Input = new _input.default();
    this.datapath = datapath; // TODO: Be able to have game initialize data from JSON file

    this.rooms = rooms; // All the rooms inside our game

    this.startRoom = startRoom; // Which room will the player start in

    this.endRoom = endRoom; // Which room 

    this.Player = new _player.default(this.startRoom); // TODO: Allow players to give their characters their own names later
  }

  _createClass(Game, [{
    key: "init",
    value: function init() {
      var displayText;

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
    }
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
    }
  }, {
    key: "getRoom",
    value: function getRoom(roomName) {
      var room = this.rooms.find(function (x) {
        return x.name === roomName;
      });
      return room;
    }
  }, {
    key: "userSend",
    value: function userSend(message) {
      // Our Input class will handle cleaning / normalizing strings
      this.Input.send(message);
      this.decidePath(this.Input.value);
    }
  }, {
    key: "decidePath",
    value: function decidePath(message) {
      // Check to see if an item name was in the message
      // if (message.split())
      var _this = this;

      var currRoom = _this.getRoom(_this.Player.currentRoom);

      if (_typeof(currRoom.prompts) !== undefined) {
        currRoom.prompts.forEach(function (prompt) {
          var matchingPromptResults = prompt.matchKeywords(message);

          if (matchingPromptResults !== null) {
            // For now just get the first matching result and show that
            // (only one prompt / action per message is sent is supported)
            console.log('FOUND MATCHING PROMPT RESULTS: ', matchingPromptResults);

            _this.Display.show(matchingPromptResults.text); // Get items from prompt if any are found
            // Merge the second array into the first one


            if (matchingPromptResults.resultItems !== undefined) {
              Array.prototype.push.apply(_this.Player.inventory.items, matchingPromptResults.items);
            }

            if (matchingPromptResults.resultRoom !== undefined) {
              // Successful prompt leads to new room entrance (if defined in prompt)
              _this.Player.currentRoom = matchingPromptResults.room; // Check to see if player's won

              if (matchingPromptResults.Room === _this.endRoom) {
                _this.win();
              } else {
                matchingPromptResults.Room.enter(_this.Player.inventory.items);
              }
            }
          } else {
            // Player didn't say any keywords that triggered any of the current room prompts
            _this.Display.show("<p>No actions could be done from: \"".concat(message, "\". Try something else.</p>\n                              ").concat(_this.getRoom(_this.Player.currentRoom).getText, "\n          "));

            return;
          }
        });
      } else {
        // No prompts exist for the current room
        _this.Display.show("<p>There doesn't seem to be any actions at all that you can do in this room.</p>\n                        ".concat(_this.getRoom(_this.Player.currentRoom).getText, "\n      "));

        return;
      }
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
    }
  }, {
    key: "win",
    value: function win() {
      // Show final room text (win text)
      for (var i = 0; i < this.rooms.length; i++) {
        if (this.rooms[i].name === this.endRoom) {
          this.Display.show(this.rooms[i].getText);
        }
      } // Disable any more user input after winning


      this.disableInput();
    }
  }, {
    key: "resetPlayer",
    value: function resetPlayer() {// Resets player with blank inventory and back to starting room
      // this.Player = new Player(this.startRoom);
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
  }

  _createClass(Inventory, [{
    key: "examine",
    value: function examine() {
      var itemName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      // If we're examining an item
      if (itemName !== null) {
        // Display item getText
        return this.items[itemName].getText;
      } // If we're examining inventory, print out
      // list of all the items.


      return this.items.map(function (a) {
        return a.name;
      });
    }
  }, {
    key: "getItemProps",
    value: function getItemProps(itemName) {
      return this.items[itemName];
    }
  }, {
    key: "addItem",
    value: function addItem(item) {
      this.items.push(item);
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
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'player';
    var inventory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _inventory.default();
    var currentRoom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var startRoom = arguments[3];

    _classCallCheck(this, Player);

    this.name = name;
    this.inventory = inventory;
    this.startRoom = startRoom;

    if (this.currentRoom === '') {
      this.currentRoom = this.startRoom;
    }
  }

  _createClass(Player, [{
    key: "enterRoom",
    value: function enterRoom(room) {
      var res = room.enter(this.inventory.items);

      if (res[1] === false) {// Player did not have required items to enter the room
      } else {
        // Entered room successfully
        this.currentRoom = room.name;
      } // Return game text from attempted room entry


      return [res[0], res[1]];
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
  }, {
    key: "doAction",
    value: function doAction(text) {
      var item = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      // No item passed, check room prompts for actions
      if (item === null) {
        return this.currentRoom.doAction(text);
      } // Doing action on item, check item prompts


      return item.doAction(text);
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

    _classCallCheck(this, Prompt);

    this.name = name; // Keywords that can trigger the prompt (make all lower-case by default)

    this.keywords = keywords.map(function (v) {
      return v.toLowerCase();
    }); // Results that occur when this prompt is successfully triggered; 
    // the result keys comprise of “text” (required), “items” (optional),
    // and “room (optional)” 

    this.results = results;
  } // Check if input message matches any prompt keywords


  _createClass(Prompt, [{
    key: "matchKeywords",
    value: function matchKeywords(message) {
      var found = false;
      this.keywords.forEach(function (keyword) {
        if (message.includes(keyword.toLowerCase())) {
          found = true;
        }
      });

      if (found) {
        return this.results;
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

    this.prompts = prompts; // What are the actions that we can do in this room?

    this.requirements = requirements; // Any requirements (items) needed to access the room
  }

  _createClass(Room, [{
    key: "addPrompt",
    value: function addPrompt(name, keywords, results) {
      var prompt = new _prompt.default(name, keywords, results);
      this.prompts.push(prompt);
      return this.prompts;
    }
  }, {
    key: "enter",
    value: function enter() {
      var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var result = '';
      var metAllRequirements = true; // Can we enter the room?
      // The room is not accessible by default

      if (this.requirements > 0) {
        if (items.length === 0) {
          metAllRequirements = false; // Return missing requirement messages

          this.requirements.forEach(function (requirement) {
            result += "".concat(requirement.failText, ". ");
          });
        } else {
          // Check the room's requirements for matching items
          this.requirements.forEach(function (requirement) {
            var found = false;
            this.items.forEach(function (item) {
              if (item === requirement) {
                found = true;
              }
            });

            if (found === false) {
              metAllRequirements = false; // Return fail messages for missing requirements

              result += requirement.failText;
            }
          });

          if (metAllRequirements === true) {
            result = this.getText;
          }
        }
      } else {
        result = this.getText;
      } // Return text with results and whether or not room could be entered


      return [result, metAllRequirements];
    }
  }, {
    key: "doAction",
    value: function doAction(value) {
      // For now let's only do one action at a time
      var result = {};

      if (this.prompts.length === 0) {
        result['text'] = "There doesn't seem to be any actions you can do in this room.";
      }

      Object.values(this.prompts).forEach(function (key, val) {
        if (value === key) {
          result['text'] = val.resultText; // Successful action returning resulting text

          if (val.resultItems !== null) {
            result['items'] = val.resultItems; // Successful action resulting in new items
          }

          if (val.resultRoom !== null) {
            result['result'] = val.resultRoom; // Successful action resulting in a new room
          }
        }
      });
      return result;
    }
  }]);

  return Room;
}();

exports.default = Room;
module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGV4dC1ycGctZW5naW5lLy4vc3JjL2lucHV0LmpzIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS8uL3NyYy9pbnZlbnRvcnkuanMiLCJ3ZWJwYWNrOi8vdGV4dC1ycGctZW5naW5lLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvcHJvbXB0LmpzIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS8uL3NyYy9yb29tLmpzIl0sIm5hbWVzIjpbIkRpc3BsYXkiLCJodG1sIiwiZWxlbWVudElkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsIkdhbWUiLCJkYXRhcGF0aCIsInJvb21zIiwic3RhcnRSb29tIiwiZW5kUm9vbSIsIklucHV0IiwiUGxheWVyIiwiZGlzcGxheVRleHQiLCJkYXRhUGF0aCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJuYW1lIiwiY3VycmVudFJvb20iLCJpIiwiZ2V0VGV4dCIsInVuZGVmaW5lZCIsInNob3ciLCJwcm9tcHRzIiwicmVxdWlyZW1lbnRzIiwicm9vbU9iaiIsInB1c2giLCJyb29tTmFtZSIsIm5ld1Jvb21zIiwiZmlsdGVyIiwicm9vbSIsImZpbmQiLCJ4IiwibWVzc2FnZSIsInNlbmQiLCJkZWNpZGVQYXRoIiwidmFsdWUiLCJfdGhpcyIsImN1cnJSb29tIiwiZ2V0Um9vbSIsImZvckVhY2giLCJwcm9tcHQiLCJtYXRjaGluZ1Byb21wdFJlc3VsdHMiLCJtYXRjaEtleXdvcmRzIiwidGV4dCIsInJlc3VsdEl0ZW1zIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJhcHBseSIsImludmVudG9yeSIsIml0ZW1zIiwicmVzdWx0Um9vbSIsIlJvb20iLCJ3aW4iLCJlbnRlciIsImRpc2FibGUiLCJlbmFibGUiLCJkaXNhYmxlSW5wdXQiLCJnYW1lIiwiZGlzYWJsZWQiLCJ0b0xvd2VyQ2FzZSIsIkludmVudG9yeSIsIml0ZW1OYW1lIiwibWFwIiwiYSIsIml0ZW0iLCJuZXdJbnZlbnRvcnkiLCJyZXMiLCJhZGRJdGVtIiwiZHJvcEl0ZW0iLCJkb0FjdGlvbiIsIlByb21wdCIsImtleXdvcmRzIiwicmVzdWx0cyIsInYiLCJmb3VuZCIsImtleXdvcmQiLCJpbmNsdWRlcyIsInJlc3VsdCIsIm1ldEFsbFJlcXVpcmVtZW50cyIsInJlcXVpcmVtZW50IiwiZmFpbFRleHQiLCJPYmplY3QiLCJ2YWx1ZXMiLCJrZXkiLCJ2YWwiLCJyZXN1bHRUZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7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RCxZQUFJakQsS0FBSyxLQUFLZ0QsR0FBZCxFQUFtQjtBQUNqQk4sZ0JBQU0sQ0FBQyxNQUFELENBQU4sR0FBaUJPLEdBQUcsQ0FBQ0MsVUFBckIsQ0FEaUIsQ0FDZ0I7O0FBQ2pDLGNBQUlELEdBQUcsQ0FBQ3hDLFdBQUosS0FBb0IsSUFBeEIsRUFBOEI7QUFDNUJpQyxrQkFBTSxDQUFDLE9BQUQsQ0FBTixHQUFrQk8sR0FBRyxDQUFDeEMsV0FBdEIsQ0FENEIsQ0FDTztBQUNwQzs7QUFDRCxjQUFJd0MsR0FBRyxDQUFDbEMsVUFBSixLQUFtQixJQUF2QixFQUE2QjtBQUMzQjJCLGtCQUFNLENBQUMsUUFBRCxDQUFOLEdBQW1CTyxHQUFHLENBQUNsQyxVQUF2QixDQUQyQixDQUNRO0FBQ3BDO0FBQ0Y7QUFDRixPQVZEO0FBV0EsYUFBTzJCLE1BQVA7QUFDRCIsImZpbGUiOiJ0ZXh0LXJwZy1lbmdpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInRleHQtcnBnLWVuZ2luZVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ0ZXh0LXJwZy1lbmdpbmVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1widGV4dC1ycGctZW5naW5lXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGh0bWwgPSAnJywgZWxlbWVudElkID0gJ2Rpc3BsYXknKSB7XHJcbiAgICB0aGlzLmh0bWwgPSBodG1sO1xyXG4gICAgdGhpcy5lbGVtZW50SWQgPSBlbGVtZW50SWQ7XHJcbiAgfVxyXG5cclxuICBzaG93KGh0bWwgPSBudWxsKSB7XHJcbiAgICBpZiAoaHRtbCA9PT0gbnVsbCkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkuaW5uZXJIVE1MID0gdGhpcy5odG1sO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgIHRoaXMuaHRtbCA9IGh0bWw7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBEaXNwbGF5IGZyb20gJy4vZGlzcGxheSc7XHJcbmltcG9ydCBJbnB1dCBmcm9tICcuL2lucHV0JztcclxuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XHJcbmltcG9ydCBSb29tIGZyb20gJy4vcm9vbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcclxuXHJcbiAgY29uc3RydWN0b3IoZGF0YXBhdGggPSAnJywgcm9vbXMgPSBbXSwgc3RhcnRSb29tID0gJycsIGVuZFJvb20gPSAnJykge1xyXG4gICAgdGhpcy5EaXNwbGF5ID0gbmV3IERpc3BsYXkoKTtcclxuICAgIHRoaXMuSW5wdXQgPSBuZXcgSW5wdXQoKTtcclxuICAgIHRoaXMuZGF0YXBhdGggPSBkYXRhcGF0aDsgLy8gVE9ETzogQmUgYWJsZSB0byBoYXZlIGdhbWUgaW5pdGlhbGl6ZSBkYXRhIGZyb20gSlNPTiBmaWxlXHJcbiAgICB0aGlzLnJvb21zID0gcm9vbXM7IC8vIEFsbCB0aGUgcm9vbXMgaW5zaWRlIG91ciBnYW1lXHJcbiAgICB0aGlzLnN0YXJ0Um9vbSA9IHN0YXJ0Um9vbTsgLy8gV2hpY2ggcm9vbSB3aWxsIHRoZSBwbGF5ZXIgc3RhcnQgaW5cclxuICAgIHRoaXMuZW5kUm9vbSA9IGVuZFJvb207IC8vIFdoaWNoIHJvb20gXHJcbiAgICB0aGlzLlBsYXllciA9IG5ldyBQbGF5ZXIodGhpcy5zdGFydFJvb20pOyAvLyBUT0RPOiBBbGxvdyBwbGF5ZXJzIHRvIGdpdmUgdGhlaXIgY2hhcmFjdGVycyB0aGVpciBvd24gbmFtZXMgbGF0ZXJcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBsZXQgZGlzcGxheVRleHQ7XHJcbiAgICBpZiAodGhpcy5kYXRhUGF0aCAhPT0gJycpIHtcclxuICAgICAgLy8gdGhpcy5sb2FkRGF0YSh0aGlzLmRhdGFQYXRoKTtcclxuICAgICAgY29uc29sZS5sb2coJ0luaXRpYWxpemVkIGdhbWUgZnJvbTogJyArIHRoaXMuZGF0YXBhdGgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhcnRSb29tID09PSAnJyAmJiB0aGlzLnJvb21zLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5zdGFydFJvb20gPSB0aGlzLnJvb21zWzBdLm5hbWU7IFxyXG4gICAgICB0aGlzLlBsYXllci5zdGFydFJvb20gPSB0aGlzLnN0YXJ0Um9vbTtcclxuICAgICAgdGhpcy5QbGF5ZXIuY3VycmVudFJvb20gPSB0aGlzLlBsYXllci5zdGFydFJvb207XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5lbmRSb29tID09PSAnJyAmJiB0aGlzLnJvb21zLmxlbmd0aCA+IDEpIHtcclxuICAgICAgdGhpcy5lbmRSb29tID0gdGhpcy5yb29tc1t0aGlzLnJvb21zLmxlbmd0aCAtIDFdLm5hbWU7ICAgICAgXHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm9vbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMucm9vbXNbaV0ubmFtZSA9PT0gdGhpcy5zdGFydFJvb20pIHtcclxuICAgICAgICBkaXNwbGF5VGV4dCA9IHRoaXMucm9vbXNbaV0uZ2V0VGV4dDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGRpc3BsYXlUZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgZGlzcGxheVRleHQgPSAnTm8gc3RhcnRpbmcgcm9vbSB0ZXh0IGZvdW5kISc7XHJcbiAgICB9XHJcbiAgICB0aGlzLkRpc3BsYXkuc2hvdyhkaXNwbGF5VGV4dCk7XHJcbiAgfVxyXG5cclxuICBhZGRSb29tKG5hbWUsIGdldFRleHQsIHByb21wdHMgPSBbXSwgcmVxdWlyZW1lbnRzID0gW10pIHtcclxuICAgIGxldCByb29tT2JqID0gbmV3IFJvb20obmFtZSwgZ2V0VGV4dCwgcHJvbXB0cywgcmVxdWlyZW1lbnRzKTtcclxuICAgIHRoaXMucm9vbXMucHVzaChyb29tT2JqKTtcclxuICAgIHJldHVybiByb29tT2JqO1xyXG4gIH1cclxuXHJcbiAgZHJvcFJvb20ocm9vbU5hbWUpIHtcclxuICAgIGxldCBuZXdSb29tcyA9IHRoaXMucm9vbXMuZmlsdGVyKGZ1bmN0aW9uKHJvb20pIHtcclxuICAgICAgcmV0dXJuIHJvb20ubmFtZSAhPT0gcm9vbU5hbWU7XHJcbiAgICB9KTtcclxuICAgIHRoaXMucm9vbXMgPSBuZXdSb29tcztcclxuICAgIHJldHVybiB0aGlzLnJvb21zO1xyXG4gIH1cclxuXHJcbiAgZ2V0Um9vbShyb29tTmFtZSkge1xyXG4gICAgY29uc3Qgcm9vbSA9IHRoaXMucm9vbXMuZmluZCh4ID0+IHgubmFtZSA9PT0gcm9vbU5hbWUpO1xyXG4gICAgcmV0dXJuIHJvb207XHJcbiAgfVxyXG5cclxuICB1c2VyU2VuZChtZXNzYWdlKSB7XHJcbiAgICAvLyBPdXIgSW5wdXQgY2xhc3Mgd2lsbCBoYW5kbGUgY2xlYW5pbmcgLyBub3JtYWxpemluZyBzdHJpbmdzXHJcbiAgICB0aGlzLklucHV0LnNlbmQobWVzc2FnZSk7XHJcbiAgICB0aGlzLmRlY2lkZVBhdGgodGhpcy5JbnB1dC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBkZWNpZGVQYXRoKG1lc3NhZ2UpIHtcclxuICAgIC8vIENoZWNrIHRvIHNlZSBpZiBhbiBpdGVtIG5hbWUgd2FzIGluIHRoZSBtZXNzYWdlXHJcbiAgICAvLyBpZiAobWVzc2FnZS5zcGxpdCgpKVxyXG4gICAgY29uc3QgX3RoaXMgPSB0aGlzO1xyXG4gICAgY29uc3QgY3VyclJvb20gPSBfdGhpcy5nZXRSb29tKF90aGlzLlBsYXllci5jdXJyZW50Um9vbSk7XHJcbiAgICBpZiAodHlwZW9mIGN1cnJSb29tLnByb21wdHMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBjdXJyUm9vbS5wcm9tcHRzLmZvckVhY2goZnVuY3Rpb24gKHByb21wdCkge1xyXG4gICAgICAgIGNvbnN0IG1hdGNoaW5nUHJvbXB0UmVzdWx0cyA9IHByb21wdC5tYXRjaEtleXdvcmRzKG1lc3NhZ2UpO1xyXG4gICAgICAgIGlmIChtYXRjaGluZ1Byb21wdFJlc3VsdHMgIT09IG51bGwpIHtcclxuICAgICAgICAgIC8vIEZvciBub3cganVzdCBnZXQgdGhlIGZpcnN0IG1hdGNoaW5nIHJlc3VsdCBhbmQgc2hvdyB0aGF0XHJcbiAgICAgICAgICAvLyAob25seSBvbmUgcHJvbXB0IC8gYWN0aW9uIHBlciBtZXNzYWdlIGlzIHNlbnQgaXMgc3VwcG9ydGVkKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0ZPVU5EIE1BVENISU5HIFBST01QVCBSRVNVTFRTOiAnLCBtYXRjaGluZ1Byb21wdFJlc3VsdHMpO1xyXG4gICAgICAgICAgX3RoaXMuRGlzcGxheS5zaG93KG1hdGNoaW5nUHJvbXB0UmVzdWx0cy50ZXh0KTtcclxuICAgICAgICAgIC8vIEdldCBpdGVtcyBmcm9tIHByb21wdCBpZiBhbnkgYXJlIGZvdW5kXHJcbiAgICAgICAgICAvLyBNZXJnZSB0aGUgc2Vjb25kIGFycmF5IGludG8gdGhlIGZpcnN0IG9uZVxyXG4gICAgICAgICAgaWYgKG1hdGNoaW5nUHJvbXB0UmVzdWx0cy5yZXN1bHRJdGVtcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KF90aGlzLlBsYXllci5pbnZlbnRvcnkuaXRlbXMsIG1hdGNoaW5nUHJvbXB0UmVzdWx0cy5pdGVtcyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAobWF0Y2hpbmdQcm9tcHRSZXN1bHRzLnJlc3VsdFJvb20gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAvLyBTdWNjZXNzZnVsIHByb21wdCBsZWFkcyB0byBuZXcgcm9vbSBlbnRyYW5jZSAoaWYgZGVmaW5lZCBpbiBwcm9tcHQpXHJcbiAgICAgICAgICAgIF90aGlzLlBsYXllci5jdXJyZW50Um9vbSA9IG1hdGNoaW5nUHJvbXB0UmVzdWx0cy5yb29tO1xyXG4gICAgICAgICAgICAvLyBDaGVjayB0byBzZWUgaWYgcGxheWVyJ3Mgd29uXHJcbiAgICAgICAgICAgIGlmIChtYXRjaGluZ1Byb21wdFJlc3VsdHMuUm9vbSA9PT0gX3RoaXMuZW5kUm9vbSkge1xyXG4gICAgICAgICAgICAgIF90aGlzLndpbigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIG1hdGNoaW5nUHJvbXB0UmVzdWx0cy5Sb29tLmVudGVyKF90aGlzLlBsYXllci5pbnZlbnRvcnkuaXRlbXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBQbGF5ZXIgZGlkbid0IHNheSBhbnkga2V5d29yZHMgdGhhdCB0cmlnZ2VyZWQgYW55IG9mIHRoZSBjdXJyZW50IHJvb20gcHJvbXB0c1xyXG4gICAgICAgICAgX3RoaXMuRGlzcGxheS5zaG93KGA8cD5ObyBhY3Rpb25zIGNvdWxkIGJlIGRvbmUgZnJvbTogXCIke21lc3NhZ2V9XCIuIFRyeSBzb21ldGhpbmcgZWxzZS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7X3RoaXMuZ2V0Um9vbShfdGhpcy5QbGF5ZXIuY3VycmVudFJvb20pLmdldFRleHR9XHJcbiAgICAgICAgICBgKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gTm8gcHJvbXB0cyBleGlzdCBmb3IgdGhlIGN1cnJlbnQgcm9vbVxyXG4gICAgICBfdGhpcy5EaXNwbGF5LnNob3coYDxwPlRoZXJlIGRvZXNuJ3Qgc2VlbSB0byBiZSBhbnkgYWN0aW9ucyBhdCBhbGwgdGhhdCB5b3UgY2FuIGRvIGluIHRoaXMgcm9vbS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7X3RoaXMuZ2V0Um9vbShfdGhpcy5QbGF5ZXIuY3VycmVudFJvb20pLmdldFRleHR9XHJcbiAgICAgIGApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkaXNhYmxlSW5wdXQoKSB7XHJcbiAgICB0aGlzLklucHV0LmRpc2FibGUoKTtcclxuICB9XHJcblxyXG4gIGVuYWJsZUlucHV0KCkge1xyXG4gICAgdGhpcy5JbnB1dC5lbmFibGUoKTtcclxuICB9XHJcblxyXG4gIHdpbigpIHtcclxuICAgIC8vIFNob3cgZmluYWwgcm9vbSB0ZXh0ICh3aW4gdGV4dClcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb29tcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy5yb29tc1tpXS5uYW1lID09PSB0aGlzLmVuZFJvb20pIHtcclxuICAgICAgICB0aGlzLkRpc3BsYXkuc2hvdyh0aGlzLnJvb21zW2ldLmdldFRleHQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBEaXNhYmxlIGFueSBtb3JlIHVzZXIgaW5wdXQgYWZ0ZXIgd2lubmluZ1xyXG4gICAgdGhpcy5kaXNhYmxlSW5wdXQoKTtcclxuICB9XHJcblxyXG4gIHJlc2V0UGxheWVyKCkge1xyXG4gICAgLy8gUmVzZXRzIHBsYXllciB3aXRoIGJsYW5rIGludmVudG9yeSBhbmQgYmFjayB0byBzdGFydGluZyByb29tXHJcbiAgICAvLyB0aGlzLlBsYXllciA9IG5ldyBQbGF5ZXIodGhpcy5zdGFydFJvb20pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xyXG5cclxuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnYW1lO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRpc2FibGVkID0gZmFsc2UsIHZhbHVlID0gJycsIGVsZW1lbnRJZCA9ICdpbnB1dCcpIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMuZWxlbWVudElkID0gZWxlbWVudElkO1xyXG4gIH1cclxuXHJcbiAgZW5hYmxlKCkge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0JykuZGlzYWJsZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGRpc2FibGUoKSB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dCcpLmRpc2FibGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHNlbmQodmFsdWUpIHtcclxuICAgIC8vIE5vcm1hbGl6ZSBpbnB1dCB2YWx1ZXMgKGlmIGRlc2lyZWQpXHJcbiAgICB2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEludmVudG9yeSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGl0ZW1zID0gW10pIHtcclxuICAgIHRoaXMuaXRlbXMgPSBpdGVtcztcclxuICB9XHJcbiAgXHJcbiAgZXhhbWluZShpdGVtTmFtZSA9IG51bGwpIHtcclxuICAgIC8vIElmIHdlJ3JlIGV4YW1pbmluZyBhbiBpdGVtXHJcbiAgICBpZiAoaXRlbU5hbWUgIT09IG51bGwpIHtcclxuICAgICAgLy8gRGlzcGxheSBpdGVtIGdldFRleHRcclxuICAgICAgcmV0dXJuIHRoaXMuaXRlbXNbaXRlbU5hbWVdLmdldFRleHQ7XHJcbiAgICB9XHJcbiAgICAvLyBJZiB3ZSdyZSBleGFtaW5pbmcgaW52ZW50b3J5LCBwcmludCBvdXRcclxuICAgIC8vIGxpc3Qgb2YgYWxsIHRoZSBpdGVtcy5cclxuICAgIHJldHVybiB0aGlzLml0ZW1zLm1hcChhID0+IGEubmFtZSk7XHJcbiAgfVxyXG5cclxuICBnZXRJdGVtUHJvcHMoaXRlbU5hbWUpIHtcclxuICAgIHJldHVybiB0aGlzLml0ZW1zW2l0ZW1OYW1lXTtcclxuICB9XHJcblxyXG4gIGFkZEl0ZW0oaXRlbSkge1xyXG4gICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgcmV0dXJuIHRoaXMuaXRlbXM7XHJcbiAgfVxyXG5cclxuICBkcm9wSXRlbShpdGVtTmFtZSkge1xyXG4gICAgbGV0IG5ld0ludmVudG9yeSA9IHRoaXMuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgcmV0dXJuIGl0ZW0ubmFtZSAhPT0gaXRlbU5hbWU7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuaXRlbXMgPSBuZXdJbnZlbnRvcnk7XHJcbiAgICByZXR1cm4gdGhpcy5pdGVtcztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEludmVudG9yeSBmcm9tICcuL2ludmVudG9yeSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lID0gJ3BsYXllcicsIGludmVudG9yeSA9IG5ldyBJbnZlbnRvcnkoKSwgY3VycmVudFJvb20gPSAnJywgc3RhcnRSb29tKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5pbnZlbnRvcnkgPSBpbnZlbnRvcnk7XHJcbiAgICB0aGlzLnN0YXJ0Um9vbSA9IHN0YXJ0Um9vbTtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRSb29tID09PSAnJykge1xyXG4gICAgICB0aGlzLmN1cnJlbnRSb29tID0gdGhpcy5zdGFydFJvb207XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGVudGVyUm9vbShyb29tKSB7XHJcbiAgICBjb25zdCByZXMgPSByb29tLmVudGVyKHRoaXMuaW52ZW50b3J5Lml0ZW1zKTtcclxuICAgIGlmIChyZXNbMV0gPT09IGZhbHNlKSB7XHJcbiAgICAgIC8vIFBsYXllciBkaWQgbm90IGhhdmUgcmVxdWlyZWQgaXRlbXMgdG8gZW50ZXIgdGhlIHJvb21cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIEVudGVyZWQgcm9vbSBzdWNjZXNzZnVsbHlcclxuICAgICAgdGhpcy5jdXJyZW50Um9vbSA9IHJvb20ubmFtZTsgXHJcbiAgICB9XHJcbiAgICAvLyBSZXR1cm4gZ2FtZSB0ZXh0IGZyb20gYXR0ZW1wdGVkIHJvb20gZW50cnlcclxuICAgIHJldHVybiBbcmVzWzBdLCByZXNbMV1dO1xyXG4gIH1cclxuXHJcbiAgZ2V0SXRlbShpdGVtKSB7XHJcbiAgICB0aGlzLmludmVudG9yeS5hZGRJdGVtKGl0ZW0pO1xyXG4gICAgcmV0dXJuIHRoaXMuaW52ZW50b3J5O1xyXG4gIH1cclxuXHJcbiAgZHJvcEl0ZW0oaXRlbSkge1xyXG4gICAgdGhpcy5pbnZlbnRvcnkuZHJvcEl0ZW0oaXRlbSk7XHJcbiAgICByZXR1cm4gdGhpcy5pbnZlbnRvcnk7XHJcbiAgfVxyXG5cclxuICBkb0FjdGlvbih0ZXh0LCBpdGVtID0gbnVsbCkge1xyXG4gICAgLy8gTm8gaXRlbSBwYXNzZWQsIGNoZWNrIHJvb20gcHJvbXB0cyBmb3IgYWN0aW9uc1xyXG4gICAgaWYgKGl0ZW0gPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFJvb20uZG9BY3Rpb24odGV4dCk7XHJcbiAgICB9XHJcbiAgICAvLyBEb2luZyBhY3Rpb24gb24gaXRlbSwgY2hlY2sgaXRlbSBwcm9tcHRzXHJcbiAgICByZXR1cm4gaXRlbS5kb0FjdGlvbih0ZXh0KTtcclxuICB9XHJcbn1cclxuICBcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvbXB0IHtcclxuICAgXHJcbiAgY29uc3RydWN0b3IobmFtZSA9ICcnLCBrZXl3b3JkcyA9IFtdLCByZXN1bHRzID0ge30pIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAvLyBLZXl3b3JkcyB0aGF0IGNhbiB0cmlnZ2VyIHRoZSBwcm9tcHQgKG1ha2UgYWxsIGxvd2VyLWNhc2UgYnkgZGVmYXVsdClcclxuICAgIHRoaXMua2V5d29yZHMgPSBrZXl3b3Jkcy5tYXAoZnVuY3Rpb24odikgeyByZXR1cm4gdi50b0xvd2VyQ2FzZSgpO30pOyBcclxuICAgIC8vIFJlc3VsdHMgdGhhdCBvY2N1ciB3aGVuIHRoaXMgcHJvbXB0IGlzIHN1Y2Nlc3NmdWxseSB0cmlnZ2VyZWQ7IFxyXG4gICAgLy8gdGhlIHJlc3VsdCBrZXlzIGNvbXByaXNlIG9mIOKAnHRleHTigJ0gKHJlcXVpcmVkKSwg4oCcaXRlbXPigJ0gKG9wdGlvbmFsKSxcclxuICAgIC8vIGFuZCDigJxyb29tIChvcHRpb25hbCnigJ0gXHJcbiAgICB0aGlzLnJlc3VsdHMgPSByZXN1bHRzOyBcclxuICB9XHJcblxyXG4gIC8vIENoZWNrIGlmIGlucHV0IG1lc3NhZ2UgbWF0Y2hlcyBhbnkgcHJvbXB0IGtleXdvcmRzXHJcbiAgbWF0Y2hLZXl3b3JkcyhtZXNzYWdlKSB7XHJcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgIHRoaXMua2V5d29yZHMuZm9yRWFjaChmdW5jdGlvbihrZXl3b3JkKSB7XHJcbiAgICAgIGlmIChtZXNzYWdlLmluY2x1ZGVzKGtleXdvcmQudG9Mb3dlckNhc2UoKSkpIHtcclxuICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYgKGZvdW5kKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlc3VsdHM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFByb21wdCBmcm9tICcuL3Byb21wdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb29tIHtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZSA9ICcnLCBnZXRUZXh0ID0gJycsIHByb21wdHMgPSBbXSwgcmVxdWlyZW1lbnRzID0gW10pIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmdldFRleHQgPSBnZXRUZXh0OyAvLyBUaGUgdGV4dCB0aGF0IGlzIGRpc3BsYXllZCB3aGVuIHRoZSByb29tIGlzIGVudGVyZWRcclxuICAgIHRoaXMucHJvbXB0cyA9IHByb21wdHM7IC8vIFdoYXQgYXJlIHRoZSBhY3Rpb25zIHRoYXQgd2UgY2FuIGRvIGluIHRoaXMgcm9vbT9cclxuICAgIHRoaXMucmVxdWlyZW1lbnRzID0gcmVxdWlyZW1lbnRzOyAvLyBBbnkgcmVxdWlyZW1lbnRzIChpdGVtcykgbmVlZGVkIHRvIGFjY2VzcyB0aGUgcm9vbVxyXG4gIH1cclxuXHJcbiAgYWRkUHJvbXB0KG5hbWUsIGtleXdvcmRzLCByZXN1bHRzKSB7XHJcbiAgICBjb25zdCBwcm9tcHQgPSBuZXcgUHJvbXB0KG5hbWUsIGtleXdvcmRzLCByZXN1bHRzKTtcclxuICAgIHRoaXMucHJvbXB0cy5wdXNoKHByb21wdCk7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9tcHRzO1xyXG4gIH1cclxuXHJcbiAgZW50ZXIoaXRlbXMgPSBbXSkge1xyXG4gICAgbGV0IHJlc3VsdCA9ICcnO1xyXG4gICAgbGV0IG1ldEFsbFJlcXVpcmVtZW50cyA9IHRydWU7IC8vIENhbiB3ZSBlbnRlciB0aGUgcm9vbT9cclxuICAgIC8vIFRoZSByb29tIGlzIG5vdCBhY2Nlc3NpYmxlIGJ5IGRlZmF1bHRcclxuICAgIGlmICh0aGlzLnJlcXVpcmVtZW50cyA+IDApIHtcclxuICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIG1ldEFsbFJlcXVpcmVtZW50cyA9IGZhbHNlO1xyXG4gICAgICAgIC8vIFJldHVybiBtaXNzaW5nIHJlcXVpcmVtZW50IG1lc3NhZ2VzXHJcbiAgICAgICAgdGhpcy5yZXF1aXJlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAocmVxdWlyZW1lbnQpIHtcclxuICAgICAgICAgIHJlc3VsdCArPSBgJHtyZXF1aXJlbWVudC5mYWlsVGV4dH0uIGA7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gQ2hlY2sgdGhlIHJvb20ncyByZXF1aXJlbWVudHMgZm9yIG1hdGNoaW5nIGl0ZW1zXHJcbiAgICAgICAgdGhpcy5yZXF1aXJlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAocmVxdWlyZW1lbnQpIHtcclxuICAgICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtID09PSByZXF1aXJlbWVudCkge1xyXG4gICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpZiAoZm91bmQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIG1ldEFsbFJlcXVpcmVtZW50cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyBSZXR1cm4gZmFpbCBtZXNzYWdlcyBmb3IgbWlzc2luZyByZXF1aXJlbWVudHNcclxuICAgICAgICAgICAgcmVzdWx0ICs9IHJlcXVpcmVtZW50LmZhaWxUZXh0OyAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKG1ldEFsbFJlcXVpcmVtZW50cyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgcmVzdWx0ID0gdGhpcy5nZXRUZXh0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0ID0gdGhpcy5nZXRUZXh0O1xyXG4gICAgfVxyXG4gICAgLy8gUmV0dXJuIHRleHQgd2l0aCByZXN1bHRzIGFuZCB3aGV0aGVyIG9yIG5vdCByb29tIGNvdWxkIGJlIGVudGVyZWRcclxuICAgIHJldHVybiBbcmVzdWx0LCBtZXRBbGxSZXF1aXJlbWVudHNdO1xyXG4gIH1cclxuXHJcbiAgZG9BY3Rpb24odmFsdWUpIHtcclxuICAgIC8vIEZvciBub3cgbGV0J3Mgb25seSBkbyBvbmUgYWN0aW9uIGF0IGEgdGltZVxyXG4gICAgbGV0IHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKHRoaXMucHJvbXB0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmVzdWx0Wyd0ZXh0J10gPSBcIlRoZXJlIGRvZXNuJ3Qgc2VlbSB0byBiZSBhbnkgYWN0aW9ucyB5b3UgY2FuIGRvIGluIHRoaXMgcm9vbS5cIjtcclxuICAgIH1cclxuICAgIE9iamVjdC52YWx1ZXModGhpcy5wcm9tcHRzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSwgdmFsKSB7IFxyXG4gICAgICBpZiAodmFsdWUgPT09IGtleSkge1xyXG4gICAgICAgIHJlc3VsdFsndGV4dCddID0gdmFsLnJlc3VsdFRleHQ7IC8vIFN1Y2Nlc3NmdWwgYWN0aW9uIHJldHVybmluZyByZXN1bHRpbmcgdGV4dFxyXG4gICAgICAgIGlmICh2YWwucmVzdWx0SXRlbXMgIT09IG51bGwpIHtcclxuICAgICAgICAgIHJlc3VsdFsnaXRlbXMnXSA9IHZhbC5yZXN1bHRJdGVtczsgLy8gU3VjY2Vzc2Z1bCBhY3Rpb24gcmVzdWx0aW5nIGluIG5ldyBpdGVtc1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmFsLnJlc3VsdFJvb20gIT09IG51bGwpIHtcclxuICAgICAgICAgIHJlc3VsdFsncmVzdWx0J10gPSB2YWwucmVzdWx0Um9vbTsgLy8gU3VjY2Vzc2Z1bCBhY3Rpb24gcmVzdWx0aW5nIGluIGEgbmV3IHJvb21cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==