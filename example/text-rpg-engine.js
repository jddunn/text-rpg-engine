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
      if (message === 'restart') {
        this.resetGame();
      } // Check to see if an item name was in the message
      // if (message.split())


      var _this = this;

      var currRoom = _this.getRoom(_this.Player.currentRoom);

      if (_typeof(currRoom.prompts) !== undefined) {
        currRoom.prompts.forEach(function (prompt) {
          var matchingPromptResults = prompt.matchKeywords(message);

          if (matchingPromptResults !== null) {
            // For now just get the first matching result and show that
            // (only one prompt / action per message is sent is supported)
            // console.log('FOUND MATCHING PROMPT RESULTS: ', matchingPromptResults);
            _this.Display.show(matchingPromptResults.text); // Get items from prompt if any are found
            // Merge the second array into the first one


            if (matchingPromptResults.items !== undefined) {
              Array.prototype.push.apply(_this.Player.inventory.items, matchingPromptResults.items);
            } // Successful prompt leads to new room entrance (if defined in prompt)


            if (matchingPromptResults.room !== undefined) {
              _this.Player.currentRoom = matchingPromptResults.room; // Check to see if player's won

              var enterRoomResult;

              if (matchingPromptResults.room === _this.endRoom) {
                enterRoomResult = _this.Player.enterRoom(this.getRoom(matchingPromptResults.room));

                if (enterRoomResult[1]) {
                  // Successfully entered room to win game
                  _this.win();
                } else {
                  // Display results text (fail to enter winning room)
                  _this.Display.append(enterRoomResult[0]);
                }
              } else {
                enterRoomResult = _this.Player.enterRoom(this.getRoom(matchingPromptResults.room));

                _this.Display.append(enterRoomResult[0]);
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
          // this.Display.show(this.rooms[i].getText);
          this.Display.append(this.rooms[i].getText);
          this.Display.append('<p>Game end.</p>');
        }
      } // Disable any more user input after winning


      this.disableInput();
    }
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
      } // Return game text and whether or not we were able to enter room


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
    value: function addPrompt(name, keywords, resultTexts) {
      var prompt = new _prompt.default(name, keywords, resultTexts);
      this.prompts.push(prompt);
      return this.prompts;
    }
  }, {
    key: "enter",
    value: function enter() {
      var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var resultText = '';
      var metAllRequirements = true; // Can we enter the room?
      // The room is not accessible by default

      if (this.requirements > 0) {
        if (items.length === 0) {
          metAllRequirements = false; // Return missing requirement messages

          this.requirements.forEach(function (requirement) {
            resultText += "".concat(requirement.failText, ". ");
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

              resultText += requirement.failText;
            }
          });

          if (metAllRequirements === true) {
            resultText = this.getText;
          }
        }
      } else {
        resultText = this.getText;
      } // Return text with resultTexts and whether or not room could be entered


      return [resultText, metAllRequirements];
    }
  }, {
    key: "doAction",
    value: function doAction(value) {
      // For now let's only do one action at a time
      var resultText = {};

      if (this.prompts.length === 0) {
        resultText['text'] = "There doesn't seem to be any actions you can do in this room.";
      }

      Object.values(this.prompts).forEach(function (key, val) {
        if (value === key) {
          resultText['text'] = val.resultTextText; // Successful action returning resultTexting text

          if (val.resultTextItems !== null) {
            resultText['items'] = val.resultTextItems; // Successful action resultTexting in new items
          }

          if (val.resultTextRoom !== null) {
            resultText['resultText'] = val.resultTextRoom; // Successful action resultTexting in a new room
          }
        }
      });
      return resultText;
    }
  }]);

  return Room;
}();

exports.default = Room;
module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGV4dC1ycGctZW5naW5lLy4vc3JjL2lucHV0LmpzIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS8uL3NyYy9pbnZlbnRvcnkuanMiLCJ3ZWJwYWNrOi8vdGV4dC1ycGctZW5naW5lLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvcHJvbXB0LmpzIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS8uL3NyYy9yb29tLmpzIl0sIm5hbWVzIjpbIkRpc3BsYXkiLCJodG1sIiwiZWxlbWVudElkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsIkdhbWUiLCJkYXRhcGF0aCIsInJvb21zIiwic3RhcnRSb29tIiwiZW5kUm9vbSIsIklucHV0IiwiUGxheWVyIiwiZGlzcGxheVRleHQiLCJkYXRhUGF0aCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJuYW1lIiwiY3VycmVudFJvb20iLCJpIiwiZ2V0VGV4dCIsInVuZGVmaW5lZCIsInNob3ciLCJwcm9tcHRzIiwicmVxdWlyZW1lbnRzIiwicm9vbU9iaiIsInB1c2giLCJyb29tTmFtZSIsIm5ld1Jvb21zIiwiZmlsdGVyIiwicm9vbSIsImZpbmQiLCJ4IiwibWVzc2FnZSIsInNlbmQiLCJkZWNpZGVQYXRoIiwidmFsdWUiLCJyZXNldEdhbWUiLCJfdGhpcyIsImN1cnJSb29tIiwiZ2V0Um9vbSIsImZvckVhY2giLCJwcm9tcHQiLCJtYXRjaGluZ1Byb21wdFJlc3VsdHMiLCJtYXRjaEtleXdvcmRzIiwidGV4dCIsIml0ZW1zIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJhcHBseSIsImludmVudG9yeSIsImVudGVyUm9vbVJlc3VsdCIsImVudGVyUm9vbSIsIndpbiIsImFwcGVuZCIsImRpc2FibGUiLCJlbmFibGUiLCJkaXNhYmxlSW5wdXQiLCJnYW1lIiwiZGlzYWJsZWQiLCJ0b0xvd2VyQ2FzZSIsIkludmVudG9yeSIsIml0ZW1OYW1lIiwibWFwIiwiYSIsIml0ZW0iLCJuZXdJbnZlbnRvcnkiLCJyZXMiLCJlbnRlciIsImFkZEl0ZW0iLCJkcm9wSXRlbSIsImRvQWN0aW9uIiwiUHJvbXB0Iiwia2V5d29yZHMiLCJyZXN1bHRzIiwidiIsImZvdW5kIiwia2V5d29yZCIsImluY2x1ZGVzIiwiUm9vbSIsInJlc3VsdFRleHRzIiwicmVzdWx0VGV4dCIsIm1ldEFsbFJlcXVpcmVtZW50cyIsInJlcXVpcmVtZW50IiwiZmFpbFRleHQiLCJPYmplY3QiLCJ2YWx1ZXMiLCJrZXkiLCJ2YWwiLCJyZXN1bHRUZXh0VGV4dCIsInJlc3VsdFRleHRJdGVtcyIsInJlc3VsdFRleHRSb29tIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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LENBRGlCLENBQ3dCOztBQUN6QyxjQUFJRCxHQUFHLENBQUNFLGVBQUosS0FBd0IsSUFBNUIsRUFBa0M7QUFDaENULHNCQUFVLENBQUMsT0FBRCxDQUFWLEdBQXNCTyxHQUFHLENBQUNFLGVBQTFCLENBRGdDLENBQ1c7QUFDNUM7O0FBQ0QsY0FBSUYsR0FBRyxDQUFDRyxjQUFKLEtBQXVCLElBQTNCLEVBQWlDO0FBQy9CVixzQkFBVSxDQUFDLFlBQUQsQ0FBVixHQUEyQk8sR0FBRyxDQUFDRyxjQUEvQixDQUQrQixDQUNnQjtBQUNoRDtBQUNGO0FBQ0YsT0FWRDtBQVdBLGFBQU9WLFVBQVA7QUFDRCIsImZpbGUiOiJ0ZXh0LXJwZy1lbmdpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInRleHQtcnBnLWVuZ2luZVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ0ZXh0LXJwZy1lbmdpbmVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1widGV4dC1ycGctZW5naW5lXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGh0bWwgPSAnJywgZWxlbWVudElkID0gJ2Rpc3BsYXknKSB7XHJcbiAgICB0aGlzLmh0bWwgPSBodG1sO1xyXG4gICAgdGhpcy5lbGVtZW50SWQgPSBlbGVtZW50SWQ7XHJcbiAgfVxyXG5cclxuICBzaG93KGh0bWwgPSBudWxsKSB7XHJcbiAgICBpZiAoaHRtbCA9PT0gbnVsbCkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkuaW5uZXJIVE1MID0gdGhpcy5odG1sO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgIHRoaXMuaHRtbCA9IGh0bWw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhcHBlbmQoaHRtbCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLmlubmVySFRNTCArPSBodG1sO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgRGlzcGxheSBmcm9tICcuL2Rpc3BsYXknO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9pbnB1dCc7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xyXG5pbXBvcnQgUm9vbSBmcm9tICcuL3Jvb20nO1xyXG5pbXBvcnQgSW52ZW50b3J5IGZyb20gJy4vaW52ZW50b3J5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihkYXRhcGF0aCA9ICcnLCByb29tcyA9IFtdLCBzdGFydFJvb20gPSAnJywgZW5kUm9vbSA9ICcnKSB7XHJcbiAgICB0aGlzLkRpc3BsYXkgPSBuZXcgRGlzcGxheSgpO1xyXG4gICAgdGhpcy5JbnB1dCA9IG5ldyBJbnB1dCgpO1xyXG4gICAgdGhpcy5kYXRhcGF0aCA9IGRhdGFwYXRoOyAvLyBUT0RPOiBCZSBhYmxlIHRvIGhhdmUgZ2FtZSBpbml0aWFsaXplIGRhdGEgZnJvbSBKU09OIGZpbGVcclxuICAgIHRoaXMucm9vbXMgPSByb29tczsgLy8gQWxsIHRoZSByb29tcyBpbnNpZGUgb3VyIGdhbWVcclxuICAgIHRoaXMuc3RhcnRSb29tID0gc3RhcnRSb29tOyAvLyBXaGljaCByb29tIHdpbGwgdGhlIHBsYXllciBzdGFydCBpblxyXG4gICAgdGhpcy5lbmRSb29tID0gZW5kUm9vbTsgLy8gV2hpY2ggcm9vbSBcclxuICAgIHRoaXMuUGxheWVyID0gbmV3IFBsYXllcih0aGlzLnN0YXJ0Um9vbSk7IC8vIFRPRE86IEFsbG93IHBsYXllcnMgdG8gZ2l2ZSB0aGVpciBjaGFyYWN0ZXJzIHRoZWlyIG93biBuYW1lcyBsYXRlclxyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIGxldCBkaXNwbGF5VGV4dDtcclxuICAgIGlmICh0aGlzLmRhdGFQYXRoICE9PSAnJykge1xyXG4gICAgICAvLyB0aGlzLmxvYWREYXRhKHRoaXMuZGF0YVBhdGgpO1xyXG4gICAgICBjb25zb2xlLmxvZygnSW5pdGlhbGl6ZWQgZ2FtZSBmcm9tOiAnICsgdGhpcy5kYXRhcGF0aCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGFydFJvb20gPT09ICcnICYmIHRoaXMucm9vbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnN0YXJ0Um9vbSA9IHRoaXMucm9vbXNbMF0ubmFtZTsgXHJcbiAgICAgIHRoaXMuUGxheWVyLnN0YXJ0Um9vbSA9IHRoaXMuc3RhcnRSb29tO1xyXG4gICAgICB0aGlzLlBsYXllci5jdXJyZW50Um9vbSA9IHRoaXMuUGxheWVyLnN0YXJ0Um9vbTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmVuZFJvb20gPT09ICcnICYmIHRoaXMucm9vbXMubGVuZ3RoID4gMSkge1xyXG4gICAgICB0aGlzLmVuZFJvb20gPSB0aGlzLnJvb21zW3RoaXMucm9vbXMubGVuZ3RoIC0gMV0ubmFtZTsgICAgICBcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb29tcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy5yb29tc1tpXS5uYW1lID09PSB0aGlzLnN0YXJ0Um9vbSkge1xyXG4gICAgICAgIGRpc3BsYXlUZXh0ID0gdGhpcy5yb29tc1tpXS5nZXRUZXh0O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoZGlzcGxheVRleHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBkaXNwbGF5VGV4dCA9ICdObyBzdGFydGluZyByb29tIHRleHQgZm91bmQhJztcclxuICAgIH1cclxuICAgIHRoaXMuRGlzcGxheS5zaG93KGRpc3BsYXlUZXh0KTtcclxuICB9XHJcblxyXG4gIGFkZFJvb20obmFtZSwgZ2V0VGV4dCwgcHJvbXB0cyA9IFtdLCByZXF1aXJlbWVudHMgPSBbXSkge1xyXG4gICAgbGV0IHJvb21PYmogPSBuZXcgUm9vbShuYW1lLCBnZXRUZXh0LCBwcm9tcHRzLCByZXF1aXJlbWVudHMpO1xyXG4gICAgdGhpcy5yb29tcy5wdXNoKHJvb21PYmopO1xyXG4gICAgcmV0dXJuIHJvb21PYmo7XHJcbiAgfVxyXG5cclxuICBkcm9wUm9vbShyb29tTmFtZSkge1xyXG4gICAgbGV0IG5ld1Jvb21zID0gdGhpcy5yb29tcy5maWx0ZXIoZnVuY3Rpb24ocm9vbSkge1xyXG4gICAgICByZXR1cm4gcm9vbS5uYW1lICE9PSByb29tTmFtZTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5yb29tcyA9IG5ld1Jvb21zO1xyXG4gICAgcmV0dXJuIHRoaXMucm9vbXM7XHJcbiAgfVxyXG5cclxuICBnZXRSb29tKHJvb21OYW1lKSB7XHJcbiAgICBjb25zdCByb29tID0gdGhpcy5yb29tcy5maW5kKHggPT4geC5uYW1lID09PSByb29tTmFtZSk7XHJcbiAgICByZXR1cm4gcm9vbTtcclxuICB9XHJcblxyXG4gIHVzZXJTZW5kKG1lc3NhZ2UpIHtcclxuICAgIC8vIE91ciBJbnB1dCBjbGFzcyB3aWxsIGhhbmRsZSBjbGVhbmluZyAvIG5vcm1hbGl6aW5nIHN0cmluZ3NcclxuICAgIHRoaXMuSW5wdXQuc2VuZChtZXNzYWdlKTtcclxuICAgIHRoaXMuZGVjaWRlUGF0aCh0aGlzLklucHV0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIGRlY2lkZVBhdGgobWVzc2FnZSkge1xyXG4gICAgaWYgKG1lc3NhZ2UgPT09ICdyZXN0YXJ0Jykge1xyXG4gICAgICB0aGlzLnJlc2V0R2FtZSgpO1xyXG4gICAgfVxyXG4gICAgLy8gQ2hlY2sgdG8gc2VlIGlmIGFuIGl0ZW0gbmFtZSB3YXMgaW4gdGhlIG1lc3NhZ2VcclxuICAgIC8vIGlmIChtZXNzYWdlLnNwbGl0KCkpXHJcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XHJcbiAgICBjb25zdCBjdXJyUm9vbSA9IF90aGlzLmdldFJvb20oX3RoaXMuUGxheWVyLmN1cnJlbnRSb29tKTtcclxuICAgIGlmICh0eXBlb2YgY3VyclJvb20ucHJvbXB0cyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGN1cnJSb29tLnByb21wdHMuZm9yRWFjaChmdW5jdGlvbiAocHJvbXB0KSB7XHJcbiAgICAgICAgY29uc3QgbWF0Y2hpbmdQcm9tcHRSZXN1bHRzID0gcHJvbXB0Lm1hdGNoS2V5d29yZHMobWVzc2FnZSk7XHJcbiAgICAgICAgaWYgKG1hdGNoaW5nUHJvbXB0UmVzdWx0cyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgLy8gRm9yIG5vdyBqdXN0IGdldCB0aGUgZmlyc3QgbWF0Y2hpbmcgcmVzdWx0IGFuZCBzaG93IHRoYXRcclxuICAgICAgICAgIC8vIChvbmx5IG9uZSBwcm9tcHQgLyBhY3Rpb24gcGVyIG1lc3NhZ2UgaXMgc2VudCBpcyBzdXBwb3J0ZWQpXHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnRk9VTkQgTUFUQ0hJTkcgUFJPTVBUIFJFU1VMVFM6ICcsIG1hdGNoaW5nUHJvbXB0UmVzdWx0cyk7XHJcbiAgICAgICAgICBfdGhpcy5EaXNwbGF5LnNob3cobWF0Y2hpbmdQcm9tcHRSZXN1bHRzLnRleHQpO1xyXG4gICAgICAgICAgLy8gR2V0IGl0ZW1zIGZyb20gcHJvbXB0IGlmIGFueSBhcmUgZm91bmRcclxuICAgICAgICAgIC8vIE1lcmdlIHRoZSBzZWNvbmQgYXJyYXkgaW50byB0aGUgZmlyc3Qgb25lXHJcbiAgICAgICAgICBpZiAobWF0Y2hpbmdQcm9tcHRSZXN1bHRzLml0ZW1zICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoX3RoaXMuUGxheWVyLmludmVudG9yeS5pdGVtcywgbWF0Y2hpbmdQcm9tcHRSZXN1bHRzLml0ZW1zKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIFN1Y2Nlc3NmdWwgcHJvbXB0IGxlYWRzIHRvIG5ldyByb29tIGVudHJhbmNlIChpZiBkZWZpbmVkIGluIHByb21wdClcclxuICAgICAgICAgIGlmIChtYXRjaGluZ1Byb21wdFJlc3VsdHMucm9vbSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIF90aGlzLlBsYXllci5jdXJyZW50Um9vbSA9IG1hdGNoaW5nUHJvbXB0UmVzdWx0cy5yb29tO1xyXG4gICAgICAgICAgICAvLyBDaGVjayB0byBzZWUgaWYgcGxheWVyJ3Mgd29uXHJcbiAgICAgICAgICAgIGxldCBlbnRlclJvb21SZXN1bHQ7ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKG1hdGNoaW5nUHJvbXB0UmVzdWx0cy5yb29tID09PSBfdGhpcy5lbmRSb29tKSB7XHJcbiAgICAgICAgICAgICAgZW50ZXJSb29tUmVzdWx0ID0gX3RoaXMuUGxheWVyLmVudGVyUm9vbSh0aGlzLmdldFJvb20obWF0Y2hpbmdQcm9tcHRSZXN1bHRzLnJvb20pKTtcclxuICAgICAgICAgICAgICBpZiAoZW50ZXJSb29tUmVzdWx0WzFdKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTdWNjZXNzZnVsbHkgZW50ZXJlZCByb29tIHRvIHdpbiBnYW1lXHJcbiAgICAgICAgICAgICAgICBfdGhpcy53aW4oKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gRGlzcGxheSByZXN1bHRzIHRleHQgKGZhaWwgdG8gZW50ZXIgd2lubmluZyByb29tKVxyXG4gICAgICAgICAgICAgICAgX3RoaXMuRGlzcGxheS5hcHBlbmQoZW50ZXJSb29tUmVzdWx0WzBdKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgZW50ZXJSb29tUmVzdWx0ID0gX3RoaXMuUGxheWVyLmVudGVyUm9vbSh0aGlzLmdldFJvb20obWF0Y2hpbmdQcm9tcHRSZXN1bHRzLnJvb20pKTtcclxuICAgICAgICAgICAgICBfdGhpcy5EaXNwbGF5LmFwcGVuZChlbnRlclJvb21SZXN1bHRbMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIFBsYXllciBkaWRuJ3Qgc2F5IGFueSBrZXl3b3JkcyB0aGF0IHRyaWdnZXJlZCBhbnkgb2YgdGhlIGN1cnJlbnQgcm9vbSBwcm9tcHRzXHJcbiAgICAgICAgICBfdGhpcy5EaXNwbGF5LnNob3coYDxwPk5vIGFjdGlvbnMgY291bGQgYmUgZG9uZSBmcm9tOiBcIiR7bWVzc2FnZX1cIi4gVHJ5IHNvbWV0aGluZyBlbHNlLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtfdGhpcy5nZXRSb29tKF90aGlzLlBsYXllci5jdXJyZW50Um9vbSkuZ2V0VGV4dH1cclxuICAgICAgICAgIGApO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBObyBwcm9tcHRzIGV4aXN0IGZvciB0aGUgY3VycmVudCByb29tXHJcbiAgICAgIF90aGlzLkRpc3BsYXkuc2hvdyhgPHA+VGhlcmUgZG9lc24ndCBzZWVtIHRvIGJlIGFueSBhY3Rpb25zIGF0IGFsbCB0aGF0IHlvdSBjYW4gZG8gaW4gdGhpcyByb29tLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtfdGhpcy5nZXRSb29tKF90aGlzLlBsYXllci5jdXJyZW50Um9vbSkuZ2V0VGV4dH1cclxuICAgICAgYCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRpc2FibGVJbnB1dCgpIHtcclxuICAgIHRoaXMuSW5wdXQuZGlzYWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgZW5hYmxlSW5wdXQoKSB7XHJcbiAgICB0aGlzLklucHV0LmVuYWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgd2luKCkge1xyXG4gICAgLy8gU2hvdyBmaW5hbCByb29tIHRleHQgKHdpbiB0ZXh0KVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvb21zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLnJvb21zW2ldLm5hbWUgPT09IHRoaXMuZW5kUm9vbSkge1xyXG4gICAgICAgIC8vIHRoaXMuRGlzcGxheS5zaG93KHRoaXMucm9vbXNbaV0uZ2V0VGV4dCk7XHJcbiAgICAgICAgdGhpcy5EaXNwbGF5LmFwcGVuZCh0aGlzLnJvb21zW2ldLmdldFRleHQpO1xyXG4gICAgICAgIHRoaXMuRGlzcGxheS5hcHBlbmQoJzxwPkdhbWUgZW5kLjwvcD4nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gRGlzYWJsZSBhbnkgbW9yZSB1c2VyIGlucHV0IGFmdGVyIHdpbm5pbmdcclxuICAgIHRoaXMuZGlzYWJsZUlucHV0KCk7XHJcbiAgfVxyXG5cclxuICByZXNldEdhbWUoKSB7XHJcbiAgICAvLyBSZXNldHMgcGxheWVyIHdpdGggYmxhbmsgaW52ZW50b3J5IGFuZCBiYWNrIHRvIHN0YXJ0aW5nIHJvb21cclxuICAgIHRoaXMuUGxheWVyLmludmVudG9yeSA9IG5ldyBJbnZlbnRvcnkoKTtcclxuICAgIHRoaXMuUGxheWVyLmN1cnJlbnRSb29tID0gdGhpcy5zdGFydFJvb207XHJcbiAgICBjb25zdCByb29tID0gdGhpcy5nZXRSb29tKHRoaXMuc3RhcnRSb29tKTtcclxuICAgIHRoaXMuRGlzcGxheS5zaG93KHJvb20uZ2V0VGV4dCk7XHJcbiAgICB0aGlzLklucHV0LmVuYWJsZSgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xyXG5cclxuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnYW1lO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRpc2FibGVkID0gZmFsc2UsIHZhbHVlID0gJycsIGVsZW1lbnRJZCA9ICdpbnB1dCcpIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMuZWxlbWVudElkID0gZWxlbWVudElkO1xyXG4gIH1cclxuXHJcbiAgZW5hYmxlKCkge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0JykuZGlzYWJsZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGRpc2FibGUoKSB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dCcpLmRpc2FibGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHNlbmQodmFsdWUpIHtcclxuICAgIC8vIE5vcm1hbGl6ZSBpbnB1dCB2YWx1ZXMgKGlmIGRlc2lyZWQpXHJcbiAgICB2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEludmVudG9yeSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGl0ZW1zID0gW10pIHtcclxuICAgIHRoaXMuaXRlbXMgPSBpdGVtcztcclxuICB9XHJcbiAgXHJcbiAgZXhhbWluZShpdGVtTmFtZSA9IG51bGwpIHtcclxuICAgIC8vIElmIHdlJ3JlIGV4YW1pbmluZyBhbiBpdGVtXHJcbiAgICBpZiAoaXRlbU5hbWUgIT09IG51bGwpIHtcclxuICAgICAgLy8gRGlzcGxheSBpdGVtIGdldFRleHRcclxuICAgICAgcmV0dXJuIHRoaXMuaXRlbXNbaXRlbU5hbWVdLmdldFRleHQ7XHJcbiAgICB9XHJcbiAgICAvLyBJZiB3ZSdyZSBleGFtaW5pbmcgaW52ZW50b3J5LCBwcmludCBvdXRcclxuICAgIC8vIGxpc3Qgb2YgYWxsIHRoZSBpdGVtcy5cclxuICAgIHJldHVybiB0aGlzLml0ZW1zLm1hcChhID0+IGEubmFtZSk7XHJcbiAgfVxyXG5cclxuICBnZXRJdGVtUHJvcHMoaXRlbU5hbWUpIHtcclxuICAgIHJldHVybiB0aGlzLml0ZW1zW2l0ZW1OYW1lXTtcclxuICB9XHJcblxyXG4gIGFkZEl0ZW0oaXRlbSkge1xyXG4gICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgcmV0dXJuIHRoaXMuaXRlbXM7XHJcbiAgfVxyXG5cclxuICBkcm9wSXRlbShpdGVtTmFtZSkge1xyXG4gICAgbGV0IG5ld0ludmVudG9yeSA9IHRoaXMuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgcmV0dXJuIGl0ZW0ubmFtZSAhPT0gaXRlbU5hbWU7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuaXRlbXMgPSBuZXdJbnZlbnRvcnk7XHJcbiAgICByZXR1cm4gdGhpcy5pdGVtcztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEludmVudG9yeSBmcm9tICcuL2ludmVudG9yeSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lID0gJ3BsYXllcicsIGludmVudG9yeSA9IG5ldyBJbnZlbnRvcnkoKSwgY3VycmVudFJvb20gPSAnJywgc3RhcnRSb29tKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5pbnZlbnRvcnkgPSBpbnZlbnRvcnk7XHJcbiAgICB0aGlzLnN0YXJ0Um9vbSA9IHN0YXJ0Um9vbTtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRSb29tID09PSAnJykge1xyXG4gICAgICB0aGlzLmN1cnJlbnRSb29tID0gdGhpcy5zdGFydFJvb207XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGVudGVyUm9vbShyb29tKSB7XHJcbiAgICBjb25zdCByZXMgPSByb29tLmVudGVyKHRoaXMuaW52ZW50b3J5Lml0ZW1zKTtcclxuICAgIGlmIChyZXNbMV0gPT09IGZhbHNlKSB7XHJcbiAgICAgIC8vIFBsYXllciBkaWQgbm90IGhhdmUgcmVxdWlyZWQgaXRlbXMgdG8gZW50ZXIgdGhlIHJvb21cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIEVudGVyZWQgcm9vbSBzdWNjZXNzZnVsbHlcclxuICAgICAgdGhpcy5jdXJyZW50Um9vbSA9IHJvb20ubmFtZTsgXHJcbiAgICB9XHJcbiAgICAvLyBSZXR1cm4gZ2FtZSB0ZXh0IGFuZCB3aGV0aGVyIG9yIG5vdCB3ZSB3ZXJlIGFibGUgdG8gZW50ZXIgcm9vbVxyXG4gICAgcmV0dXJuIFtyZXNbMF0sIHJlc1sxXV07XHJcbiAgfVxyXG5cclxuICBnZXRJdGVtKGl0ZW0pIHtcclxuICAgIHRoaXMuaW52ZW50b3J5LmFkZEl0ZW0oaXRlbSk7XHJcbiAgICByZXR1cm4gdGhpcy5pbnZlbnRvcnk7XHJcbiAgfVxyXG5cclxuICBkcm9wSXRlbShpdGVtKSB7XHJcbiAgICB0aGlzLmludmVudG9yeS5kcm9wSXRlbShpdGVtKTtcclxuICAgIHJldHVybiB0aGlzLmludmVudG9yeTtcclxuICB9XHJcblxyXG4gIGRvQWN0aW9uKHRleHQsIGl0ZW0gPSBudWxsKSB7XHJcbiAgICAvLyBObyBpdGVtIHBhc3NlZCwgY2hlY2sgcm9vbSBwcm9tcHRzIGZvciBhY3Rpb25zXHJcbiAgICBpZiAoaXRlbSA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50Um9vbS5kb0FjdGlvbih0ZXh0KTtcclxuICAgIH1cclxuICAgIC8vIERvaW5nIGFjdGlvbiBvbiBpdGVtLCBjaGVjayBpdGVtIHByb21wdHNcclxuICAgIHJldHVybiBpdGVtLmRvQWN0aW9uKHRleHQpO1xyXG4gIH1cclxufVxyXG4gIFxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9tcHQge1xyXG4gICBcclxuICBjb25zdHJ1Y3RvcihuYW1lID0gJycsIGtleXdvcmRzID0gW10sIHJlc3VsdHMgPSB7fSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIC8vIEtleXdvcmRzIHRoYXQgY2FuIHRyaWdnZXIgdGhlIHByb21wdCAobWFrZSBhbGwgbG93ZXItY2FzZSBieSBkZWZhdWx0KVxyXG4gICAgdGhpcy5rZXl3b3JkcyA9IGtleXdvcmRzLm1hcChmdW5jdGlvbih2KSB7IHJldHVybiB2LnRvTG93ZXJDYXNlKCk7fSk7IFxyXG4gICAgLy8gUmVzdWx0cyB0aGF0IG9jY3VyIHdoZW4gdGhpcyBwcm9tcHQgaXMgc3VjY2Vzc2Z1bGx5IHRyaWdnZXJlZDsgXHJcbiAgICAvLyB0aGUgcmVzdWx0IGtleXMgY29tcHJpc2Ugb2Yg4oCcdGV4dOKAnSAocmVxdWlyZWQpLCDigJxpdGVtc+KAnSAob3B0aW9uYWwpLFxyXG4gICAgLy8gYW5kIOKAnHJvb20gKG9wdGlvbmFsKeKAnSBcclxuICAgIHRoaXMucmVzdWx0cyA9IHJlc3VsdHM7IFxyXG4gIH1cclxuXHJcbiAgLy8gQ2hlY2sgaWYgaW5wdXQgbWVzc2FnZSBtYXRjaGVzIGFueSBwcm9tcHQga2V5d29yZHNcclxuICBtYXRjaEtleXdvcmRzKG1lc3NhZ2UpIHtcclxuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5rZXl3b3Jkcy5mb3JFYWNoKGZ1bmN0aW9uKGtleXdvcmQpIHtcclxuICAgICAgaWYgKG1lc3NhZ2UuaW5jbHVkZXMoa2V5d29yZC50b0xvd2VyQ2FzZSgpKSkge1xyXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAoZm91bmQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVzdWx0cztcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUHJvbXB0IGZyb20gJy4vcHJvbXB0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvb20ge1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lID0gJycsIGdldFRleHQgPSAnJywgcHJvbXB0cyA9IFtdLCByZXF1aXJlbWVudHMgPSBbXSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuZ2V0VGV4dCA9IGdldFRleHQ7IC8vIFRoZSB0ZXh0IHRoYXQgaXMgZGlzcGxheWVkIHdoZW4gdGhlIHJvb20gaXMgZW50ZXJlZFxyXG4gICAgdGhpcy5wcm9tcHRzID0gcHJvbXB0czsgLy8gV2hhdCBhcmUgdGhlIGFjdGlvbnMgdGhhdCB3ZSBjYW4gZG8gaW4gdGhpcyByb29tP1xyXG4gICAgdGhpcy5yZXF1aXJlbWVudHMgPSByZXF1aXJlbWVudHM7IC8vIEFueSByZXF1aXJlbWVudHMgKGl0ZW1zKSBuZWVkZWQgdG8gYWNjZXNzIHRoZSByb29tXHJcbiAgfVxyXG5cclxuICBhZGRQcm9tcHQobmFtZSwga2V5d29yZHMsIHJlc3VsdFRleHRzKSB7XHJcbiAgICBjb25zdCBwcm9tcHQgPSBuZXcgUHJvbXB0KG5hbWUsIGtleXdvcmRzLCByZXN1bHRUZXh0cyk7XHJcbiAgICB0aGlzLnByb21wdHMucHVzaChwcm9tcHQpO1xyXG4gICAgcmV0dXJuIHRoaXMucHJvbXB0cztcclxuICB9XHJcblxyXG4gIGVudGVyKGl0ZW1zID0gW10pIHtcclxuICAgIGxldCByZXN1bHRUZXh0ID0gJyc7XHJcbiAgICBsZXQgbWV0QWxsUmVxdWlyZW1lbnRzID0gdHJ1ZTsgLy8gQ2FuIHdlIGVudGVyIHRoZSByb29tP1xyXG4gICAgLy8gVGhlIHJvb20gaXMgbm90IGFjY2Vzc2libGUgYnkgZGVmYXVsdFxyXG4gICAgaWYgKHRoaXMucmVxdWlyZW1lbnRzID4gMCkge1xyXG4gICAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgbWV0QWxsUmVxdWlyZW1lbnRzID0gZmFsc2U7XHJcbiAgICAgICAgLy8gUmV0dXJuIG1pc3NpbmcgcmVxdWlyZW1lbnQgbWVzc2FnZXNcclxuICAgICAgICB0aGlzLnJlcXVpcmVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXF1aXJlbWVudCkge1xyXG4gICAgICAgICAgcmVzdWx0VGV4dCArPSBgJHtyZXF1aXJlbWVudC5mYWlsVGV4dH0uIGA7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gQ2hlY2sgdGhlIHJvb20ncyByZXF1aXJlbWVudHMgZm9yIG1hdGNoaW5nIGl0ZW1zXHJcbiAgICAgICAgdGhpcy5yZXF1aXJlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAocmVxdWlyZW1lbnQpIHtcclxuICAgICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtID09PSByZXF1aXJlbWVudCkge1xyXG4gICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpZiAoZm91bmQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIG1ldEFsbFJlcXVpcmVtZW50cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyBSZXR1cm4gZmFpbCBtZXNzYWdlcyBmb3IgbWlzc2luZyByZXF1aXJlbWVudHNcclxuICAgICAgICAgICAgcmVzdWx0VGV4dCArPSByZXF1aXJlbWVudC5mYWlsVGV4dDsgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChtZXRBbGxSZXF1aXJlbWVudHMgPT09IHRydWUpIHtcclxuICAgICAgICAgIHJlc3VsdFRleHQgPSB0aGlzLmdldFRleHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXN1bHRUZXh0ID0gdGhpcy5nZXRUZXh0O1xyXG4gICAgfVxyXG4gICAgLy8gUmV0dXJuIHRleHQgd2l0aCByZXN1bHRUZXh0cyBhbmQgd2hldGhlciBvciBub3Qgcm9vbSBjb3VsZCBiZSBlbnRlcmVkXHJcbiAgICByZXR1cm4gW3Jlc3VsdFRleHQsIG1ldEFsbFJlcXVpcmVtZW50c107XHJcbiAgfVxyXG5cclxuICBkb0FjdGlvbih2YWx1ZSkge1xyXG4gICAgLy8gRm9yIG5vdyBsZXQncyBvbmx5IGRvIG9uZSBhY3Rpb24gYXQgYSB0aW1lXHJcbiAgICBsZXQgcmVzdWx0VGV4dCA9IHt9O1xyXG4gICAgaWYgKHRoaXMucHJvbXB0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmVzdWx0VGV4dFsndGV4dCddID0gXCJUaGVyZSBkb2Vzbid0IHNlZW0gdG8gYmUgYW55IGFjdGlvbnMgeW91IGNhbiBkbyBpbiB0aGlzIHJvb20uXCI7XHJcbiAgICB9XHJcbiAgICBPYmplY3QudmFsdWVzKHRoaXMucHJvbXB0cykuZm9yRWFjaChmdW5jdGlvbihrZXksIHZhbCkgeyBcclxuICAgICAgaWYgKHZhbHVlID09PSBrZXkpIHtcclxuICAgICAgICByZXN1bHRUZXh0Wyd0ZXh0J10gPSB2YWwucmVzdWx0VGV4dFRleHQ7IC8vIFN1Y2Nlc3NmdWwgYWN0aW9uIHJldHVybmluZyByZXN1bHRUZXh0aW5nIHRleHRcclxuICAgICAgICBpZiAodmFsLnJlc3VsdFRleHRJdGVtcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgcmVzdWx0VGV4dFsnaXRlbXMnXSA9IHZhbC5yZXN1bHRUZXh0SXRlbXM7IC8vIFN1Y2Nlc3NmdWwgYWN0aW9uIHJlc3VsdFRleHRpbmcgaW4gbmV3IGl0ZW1zXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2YWwucmVzdWx0VGV4dFJvb20gIT09IG51bGwpIHtcclxuICAgICAgICAgIHJlc3VsdFRleHRbJ3Jlc3VsdFRleHQnXSA9IHZhbC5yZXN1bHRUZXh0Um9vbTsgLy8gU3VjY2Vzc2Z1bCBhY3Rpb24gcmVzdWx0VGV4dGluZyBpbiBhIG5ldyByb29tXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXN1bHRUZXh0O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9