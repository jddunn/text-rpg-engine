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

var _item = _interopRequireDefault(__webpack_require__(/*! ./item */ "./src/item.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import Item from './item';
var Game =
/*#__PURE__*/
function () {
  function Game() {
    var datapath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var rooms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var items = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var startRoom = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
    var endRoom = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';

    _classCallCheck(this, Game);

    this.Display = new _display.default();
    this.Input = new _input.default();
    this.datapath = datapath; // TODO: Be able to have game initialize data from JSON file

    this.rooms = rooms; // All the rooms in our game

    this.items = items; // All the items in our game

    this.startRoom = startRoom; // Which room will the player start in

    this.endRoom = endRoom; // Which room 
    // TODO: Allow players to give their characters their own names later

    this.Player = new _player.default(startRoom = this.startRoom);
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
    }
  }, {
    key: "getRoom",
    value: function getRoom(roomName) {
      var room = this.rooms.find(function (x) {
        return x.name === roomName;
      });
      return room;
    } // Manage items

  }, {
    key: "addItem",
    value: function addItem(name, getText) {
      var item = new _item.default(name, getText);
      this.items.push(item);
      return this.items;
    }
  }, {
    key: "dropItem",
    value: function dropItem(itemName) {
      var newItems = this.items.filter(function (item) {
        return item.name !== itemName;
      });
      this.items = newItems;
      return this.items;
    }
  }, {
    key: "getItem",
    value: function getItem(itemName) {
      var item = this.items.find(function (x) {
        return x.name === itemName;
      });
      return item;
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
          if (foundPrompt === false) {
            var matchingPromptResults = prompt.matchKeywords(message, _this.Player.inventory.items); // If we get a matching result back

            if (matchingPromptResults !== null) {
              foundPrompt = true; // If player succeeded in prompt action

              if ('success' in matchingPromptResults) {
                _this.Display.show(matchingPromptResults.success.successText); // Get items from prompt if any are found


                if (matchingPromptResults.success.itemsGiven !== undefined) {
                  Array.prototype.push.apply(_this.Player.inventory.items, matchingPromptResults.success.itemsGiven);
                } // Successful prompt leads to new room entrance (if defined in prompt)


                if (matchingPromptResults.success.roomToEnter !== undefined) {
                  var enterRoomResultSuccess;
                  var enterRoomResultText;

                  var _this$Player$enterRoo = _this.Player.enterRoom(this.getRoom(matchingPromptResults.success.roomToEnter));

                  var _this$Player$enterRoo2 = _slicedToArray(_this$Player$enterRoo, 2);

                  enterRoomResultText = _this$Player$enterRoo2[0];
                  enterRoomResultSuccess = _this$Player$enterRoo2[1];

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
              } // Player failed to do prompt (missing item requirement)


              if ('fail' in matchingPromptResults) {
                _this.Display.show("".concat(prompt.results.failMessage));

                _this.Display.append("Missing required items: ".concat(matchingPromptResults.fail.toString()));

                return;
              }
            }
          } else {
            if (foundPrompt === false) {
              // Player didn't say any keywords that triggered any of the current room prompts
              _this.Display.show("<p>No actions could be done from: \"".concat(message, "\". Try something else.</p>\n            ").concat(_this.getRoom(_this.Player.currentRoom).getText, "\n          "));
            }
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
          this.Display.append(this.rooms[i].getText);
          this.Display.append('<p>Game end.</p>');
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

/***/ "./src/item.js":
/*!*********************!*\
  !*** ./src/item.js ***!
  \*********************/
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

var Item =
/*#__PURE__*/
function () {
  function Item() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var getText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    _classCallCheck(this, Item);

    this.name = name;
    this.getText = getText; // Text displayed when item is gotten
  }

  _createClass(Item, [{
    key: "get",
    value: function get() {
      return this.getText;
    }
  }]);

  return Item;
}();

exports.default = Item;
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
    var requirements = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

    _classCallCheck(this, Prompt);

    this.name = name; // Keywords that can trigger the prompt (make all lower-case by default)

    this.keywords = keywords.map(function (v) {
      return v.toLowerCase();
    }); // Results that occur when this prompt is successfully triggered; 
    // the result keys comprise of “successText” (required), "failText" (optional),
    // “itemsRequired” (optional), // and “roomToEnter"” 

    this.results = results; // Any prerequisite items needed to do the prompt?

    this.requirements = requirements;
  } // Check if input message matches any prompt keywords


  _createClass(Prompt, [{
    key: "matchKeywords",
    value: function matchKeywords(message) {
      var items = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var foundKeyword = false; // If we have any item requirements

      if (this.requirements.length > 0) {
        var missingRequirements = []; // Check all the requirements against the items passed

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
        }); // Return fail message with missing item requirements

        if (missingRequirements.length > 0) {
          return {
            'fail': missingRequirements
          };
        }
      } // If we have all our item requirements, check the user's message
      // to see if we find any matching keywords


      this.keywords.forEach(function (keyword) {
        if (message.includes(keyword.toLowerCase())) {
          foundKeyword = true;
        }
      }); // Keywords have been matched from the user input, so return results of prompt

      if (foundKeyword) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGV4dC1ycGctZW5naW5lLy4vc3JjL2lucHV0LmpzIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS8uL3NyYy9pbnZlbnRvcnkuanMiLCJ3ZWJwYWNrOi8vdGV4dC1ycGctZW5naW5lLy4vc3JjL2l0ZW0uanMiLCJ3ZWJwYWNrOi8vdGV4dC1ycGctZW5naW5lLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvcHJvbXB0LmpzIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS8uL3NyYy9yb29tLmpzIl0sIm5hbWVzIjpbIkRpc3BsYXkiLCJodG1sIiwiZWxlbWVudElkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsIkdhbWUiLCJkYXRhcGF0aCIsInJvb21zIiwiaXRlbXMiLCJzdGFydFJvb20iLCJlbmRSb29tIiwiSW5wdXQiLCJQbGF5ZXIiLCJkaXNwbGF5VGV4dCIsImRhdGFQYXRoIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsIm5hbWUiLCJjdXJyZW50Um9vbSIsImkiLCJnZXRUZXh0IiwidW5kZWZpbmVkIiwic2hvdyIsInByb21wdHMiLCJyZXF1aXJlbWVudHMiLCJyb29tT2JqIiwicHVzaCIsInJvb21OYW1lIiwibmV3Um9vbXMiLCJmaWx0ZXIiLCJyb29tIiwiZmluZCIsIngiLCJpdGVtIiwiaXRlbU5hbWUiLCJuZXdJdGVtcyIsIm1lc3NhZ2UiLCJzZW5kIiwiZGVjaWRlUGF0aCIsInZhbHVlIiwicmVzZXRHYW1lIiwiX3RoaXMiLCJjdXJyUm9vbSIsImdldFJvb20iLCJmb3VuZFByb21wdCIsImZvckVhY2giLCJwcm9tcHQiLCJtYXRjaGluZ1Byb21wdFJlc3VsdHMiLCJtYXRjaEtleXdvcmRzIiwiaW52ZW50b3J5Iiwic3VjY2VzcyIsInN1Y2Nlc3NUZXh0IiwiaXRlbXNHaXZlbiIsIkFycmF5IiwicHJvdG90eXBlIiwiYXBwbHkiLCJyb29tVG9FbnRlciIsImVudGVyUm9vbVJlc3VsdFN1Y2Nlc3MiLCJlbnRlclJvb21SZXN1bHRUZXh0IiwiZW50ZXJSb29tIiwid2luIiwiYXBwZW5kIiwicmVzdWx0cyIsImZhaWxNZXNzYWdlIiwiZmFpbCIsInRvU3RyaW5nIiwiZGlzYWJsZSIsImVuYWJsZSIsImRpc2FibGVJbnB1dCIsImdhbWUiLCJkaXNhYmxlZCIsInRvTG93ZXJDYXNlIiwiSW52ZW50b3J5IiwibWFwIiwiYSIsIm5ld0ludmVudG9yeSIsIkl0ZW0iLCJyZXMiLCJlbnRlciIsImFkZEl0ZW0iLCJkcm9wSXRlbSIsInRleHQiLCJkb0FjdGlvbiIsIlByb21wdCIsImtleXdvcmRzIiwidiIsImZvdW5kS2V5d29yZCIsIm1pc3NpbmdSZXF1aXJlbWVudHMiLCJyZXF1aXJlbWVudCIsImZvdW5kUmVxdWlyZW1lbnQiLCJrZXl3b3JkIiwiaW5jbHVkZXMiLCJSb29tIiwicmVzdWx0VGV4dHMiLCJyZXN1bHRUZXh0IiwibWV0QWxsUmVxdWlyZW1lbnRzIiwiZmFpbFRleHQiLCJmb3VuZCIsIk9iamVjdCIsInZhbHVlcyIsImtleSIsInZhbCIsInJlc3VsdFRleHRUZXh0IiwicmVzdWx0VGV4dEl0ZW1zIiwicmVzdWx0VGV4dFJvb20iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2xGcUJBLE87OztBQUVuQixxQkFBOEM7QUFBQSxRQUFsQ0MsSUFBa0MsdUVBQTNCLEVBQTJCO0FBQUEsUUFBdkJDLFNBQXVCLHVFQUFYLFNBQVc7O0FBQUE7O0FBQzVDLFNBQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0Q7Ozs7MkJBRWlCO0FBQUEsVUFBYkQsSUFBYSx1RUFBTixJQUFNOztBQUNoQixVQUFJQSxJQUFJLEtBQUssSUFBYixFQUFtQjtBQUNqQkUsZ0JBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUFLRixTQUE3QixFQUF3Q0csU0FBeEMsR0FBb0QsS0FBS0osSUFBekQ7QUFDRCxPQUZELE1BRU87QUFDTEUsZ0JBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUFLRixTQUE3QixFQUF3Q0csU0FBeEMsR0FBb0RKLElBQXBEO0FBQ0EsYUFBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7QUFDRjs7OzJCQUVNQSxJLEVBQU07QUFDWEUsY0FBUSxDQUFDQyxjQUFULENBQXdCLEtBQUtGLFNBQTdCLEVBQXdDRyxTQUF4QyxJQUFxREosSUFBckQ7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkg7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7SUFFcUJLLEk7OztBQUVuQixrQkFBaUY7QUFBQSxRQUFyRUMsUUFBcUUsdUVBQTFELEVBQTBEO0FBQUEsUUFBdERDLEtBQXNELHVFQUE5QyxFQUE4QztBQUFBLFFBQTFDQyxLQUEwQyx1RUFBbEMsRUFBa0M7QUFBQSxRQUE5QkMsU0FBOEIsdUVBQWxCLEVBQWtCO0FBQUEsUUFBZEMsT0FBYyx1RUFBSixFQUFJOztBQUFBOztBQUMvRSxTQUFLWCxPQUFMLEdBQWUsc0JBQWY7QUFDQSxTQUFLWSxLQUFMLEdBQWEsb0JBQWI7QUFDQSxTQUFLTCxRQUFMLEdBQWdCQSxRQUFoQixDQUgrRSxDQUdyRDs7QUFDMUIsU0FBS0MsS0FBTCxHQUFhQSxLQUFiLENBSitFLENBSTNEOztBQUNwQixTQUFLQyxLQUFMLEdBQWFBLEtBQWIsQ0FMK0UsQ0FLM0Q7O0FBQ3BCLFNBQUtDLFNBQUwsR0FBaUJBLFNBQWpCLENBTitFLENBTW5EOztBQUM1QixTQUFLQyxPQUFMLEdBQWVBLE9BQWYsQ0FQK0UsQ0FPdkQ7QUFDeEI7O0FBQ0EsU0FBS0UsTUFBTCxHQUFjLG9CQUFXSCxTQUFTLEdBQUcsS0FBS0EsU0FBNUIsQ0FBZDtBQUNEOzs7OzJCQUVNO0FBQ0wsVUFBSUksV0FBSjs7QUFDQSxVQUFJLEtBQUtDLFFBQUwsS0FBa0IsRUFBdEIsRUFBMEI7QUFDeEI7QUFDQUMsZUFBTyxDQUFDQyxHQUFSLENBQVksNEJBQTRCLEtBQUtWLFFBQTdDO0FBQ0Q7O0FBQ0QsVUFBSSxLQUFLRyxTQUFMLEtBQW1CLEVBQW5CLElBQXlCLEtBQUtGLEtBQUwsQ0FBV1UsTUFBWCxHQUFvQixDQUFqRCxFQUFvRDtBQUNsRCxhQUFLUixTQUFMLEdBQWlCLEtBQUtGLEtBQUwsQ0FBVyxDQUFYLEVBQWNXLElBQS9CO0FBQ0EsYUFBS04sTUFBTCxDQUFZSCxTQUFaLEdBQXdCLEtBQUtBLFNBQTdCO0FBQ0EsYUFBS0csTUFBTCxDQUFZTyxXQUFaLEdBQTBCLEtBQUtQLE1BQUwsQ0FBWUgsU0FBdEM7QUFDRDs7QUFDRCxVQUFJLEtBQUtDLE9BQUwsS0FBaUIsRUFBakIsSUFBdUIsS0FBS0gsS0FBTCxDQUFXVSxNQUFYLEdBQW9CLENBQS9DLEVBQWtEO0FBQ2hELGFBQUtQLE9BQUwsR0FBZSxLQUFLSCxLQUFMLENBQVcsS0FBS0EsS0FBTCxDQUFXVSxNQUFYLEdBQW9CLENBQS9CLEVBQWtDQyxJQUFqRDtBQUNEOztBQUNELFdBQUssSUFBSUUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLYixLQUFMLENBQVdVLE1BQS9CLEVBQXVDRyxDQUFDLEVBQXhDLEVBQTRDO0FBQzFDLFlBQUksS0FBS2IsS0FBTCxDQUFXYSxDQUFYLEVBQWNGLElBQWQsS0FBdUIsS0FBS1QsU0FBaEMsRUFBMkM7QUFDekNJLHFCQUFXLEdBQUcsS0FBS04sS0FBTCxDQUFXYSxDQUFYLEVBQWNDLE9BQTVCO0FBQ0E7QUFDRDtBQUNGOztBQUNELFVBQUlSLFdBQVcsS0FBS1MsU0FBcEIsRUFBK0I7QUFDN0JULG1CQUFXLEdBQUcsOEJBQWQ7QUFDRDs7QUFDRCxXQUFLZCxPQUFMLENBQWF3QixJQUFiLENBQWtCVixXQUFsQjtBQUNELEssQ0FFRDs7Ozs0QkFDUUssSSxFQUFNRyxPLEVBQTBDO0FBQUEsVUFBakNHLE9BQWlDLHVFQUF2QixFQUF1QjtBQUFBLFVBQW5CQyxZQUFtQix1RUFBSixFQUFJO0FBQ3RELFVBQUlDLE9BQU8sR0FBRyxrQkFBU1IsSUFBVCxFQUFlRyxPQUFmLEVBQXdCRyxPQUF4QixFQUFpQ0MsWUFBakMsQ0FBZDtBQUNBLFdBQUtsQixLQUFMLENBQVdvQixJQUFYLENBQWdCRCxPQUFoQjtBQUNBLGFBQU9BLE9BQVA7QUFDRDs7OzZCQUVRRSxRLEVBQVU7QUFDakIsVUFBSUMsUUFBUSxHQUFHLEtBQUt0QixLQUFMLENBQVd1QixNQUFYLENBQWtCLFVBQVNDLElBQVQsRUFBZTtBQUM5QyxlQUFPQSxJQUFJLENBQUNiLElBQUwsS0FBY1UsUUFBckI7QUFDRCxPQUZjLENBQWY7QUFHQSxXQUFLckIsS0FBTCxHQUFhc0IsUUFBYjtBQUNBLGFBQU8sS0FBS3RCLEtBQVo7QUFDRDs7OzRCQUVPcUIsUSxFQUFVO0FBQ2hCLFVBQU1HLElBQUksR0FBRyxLQUFLeEIsS0FBTCxDQUFXeUIsSUFBWCxDQUFnQixVQUFBQyxDQUFDO0FBQUEsZUFBSUEsQ0FBQyxDQUFDZixJQUFGLEtBQVdVLFFBQWY7QUFBQSxPQUFqQixDQUFiO0FBQ0EsYUFBT0csSUFBUDtBQUNELEssQ0FFRDs7Ozs0QkFDUWIsSSxFQUFNRyxPLEVBQVM7QUFDckIsVUFBTWEsSUFBSSxHQUFHLGtCQUFTaEIsSUFBVCxFQUFlRyxPQUFmLENBQWI7QUFDQSxXQUFLYixLQUFMLENBQVdtQixJQUFYLENBQWdCTyxJQUFoQjtBQUNBLGFBQU8sS0FBSzFCLEtBQVo7QUFDRDs7OzZCQUVRMkIsUSxFQUFVO0FBQ2pCLFVBQUlDLFFBQVEsR0FBRyxLQUFLNUIsS0FBTCxDQUFXc0IsTUFBWCxDQUFrQixVQUFTSSxJQUFULEVBQWU7QUFDOUMsZUFBT0EsSUFBSSxDQUFDaEIsSUFBTCxLQUFjaUIsUUFBckI7QUFDRCxPQUZjLENBQWY7QUFHQSxXQUFLM0IsS0FBTCxHQUFhNEIsUUFBYjtBQUNBLGFBQU8sS0FBSzVCLEtBQVo7QUFDRDs7OzRCQUVPMkIsUSxFQUFVO0FBQ2hCLFVBQU1ELElBQUksR0FBRyxLQUFLMUIsS0FBTCxDQUFXd0IsSUFBWCxDQUFnQixVQUFBQyxDQUFDO0FBQUEsZUFBSUEsQ0FBQyxDQUFDZixJQUFGLEtBQVdpQixRQUFmO0FBQUEsT0FBakIsQ0FBYjtBQUNBLGFBQU9ELElBQVA7QUFDRCxLLENBRUQ7Ozs7NkJBQ1NHLE8sRUFBUztBQUNoQjtBQUNBLFdBQUsxQixLQUFMLENBQVcyQixJQUFYLENBQWdCRCxPQUFoQjtBQUNBLFdBQUtFLFVBQUwsQ0FBZ0IsS0FBSzVCLEtBQUwsQ0FBVzZCLEtBQTNCO0FBQ0QsSyxDQUVEOzs7OytCQUNXSCxPLEVBQVM7QUFDbEIsVUFBSUEsT0FBTyxLQUFLLFNBQWhCLEVBQTJCO0FBQ3pCLGFBQUtJLFNBQUw7QUFDRDs7QUFDRCxVQUFNQyxLQUFLLEdBQUcsSUFBZDs7QUFDQSxVQUFNQyxRQUFRLEdBQUdELEtBQUssQ0FBQ0UsT0FBTixDQUFjRixLQUFLLENBQUM5QixNQUFOLENBQWFPLFdBQTNCLENBQWpCLENBTGtCLENBTWxCOzs7QUFDQSxVQUFJLFFBQU93QixRQUFRLENBQUNuQixPQUFoQixNQUE0QkYsU0FBaEMsRUFBMkM7QUFDekM7QUFDQTtBQUNBLFlBQUl1QixXQUFXLEdBQUcsS0FBbEI7QUFDQUYsZ0JBQVEsQ0FBQ25CLE9BQVQsQ0FBaUJzQixPQUFqQixDQUF5QixVQUFVQyxNQUFWLEVBQWtCO0FBQ3pDLGNBQUlGLFdBQVcsS0FBSyxLQUFwQixFQUEyQjtBQUN6QixnQkFBTUcscUJBQXFCLEdBQUdELE1BQU0sQ0FBQ0UsYUFBUCxDQUFxQlosT0FBckIsRUFBOEJLLEtBQUssQ0FBQzlCLE1BQU4sQ0FBYXNDLFNBQWIsQ0FBdUIxQyxLQUFyRCxDQUE5QixDQUR5QixDQUV6Qjs7QUFDQSxnQkFBSXdDLHFCQUFxQixLQUFLLElBQTlCLEVBQW9DO0FBQ2xDSCx5QkFBVyxHQUFHLElBQWQsQ0FEa0MsQ0FFbEM7O0FBQ0Esa0JBQUksYUFBYUcscUJBQWpCLEVBQXdDO0FBQ3RDTixxQkFBSyxDQUFDM0MsT0FBTixDQUFjd0IsSUFBZCxDQUFtQnlCLHFCQUFxQixDQUFDRyxPQUF0QixDQUE4QkMsV0FBakQsRUFEc0MsQ0FFdEM7OztBQUNBLG9CQUFJSixxQkFBcUIsQ0FBQ0csT0FBdEIsQ0FBOEJFLFVBQTlCLEtBQTZDL0IsU0FBakQsRUFBNEQ7QUFDMURnQyx1QkFBSyxDQUFDQyxTQUFOLENBQWdCNUIsSUFBaEIsQ0FBcUI2QixLQUFyQixDQUEyQmQsS0FBSyxDQUFDOUIsTUFBTixDQUFhc0MsU0FBYixDQUF1QjFDLEtBQWxELEVBQXlEd0MscUJBQXFCLENBQUNHLE9BQXRCLENBQThCRSxVQUF2RjtBQUNELGlCQUxxQyxDQU10Qzs7O0FBQ0Esb0JBQUlMLHFCQUFxQixDQUFDRyxPQUF0QixDQUE4Qk0sV0FBOUIsS0FBOENuQyxTQUFsRCxFQUE2RDtBQUMzRCxzQkFBSW9DLHNCQUFKO0FBQ0Esc0JBQUlDLG1CQUFKOztBQUYyRCw4Q0FJckRqQixLQUFLLENBQUM5QixNQUFOLENBQWFnRCxTQUFiLENBQXVCLEtBQUtoQixPQUFMLENBQWFJLHFCQUFxQixDQUFDRyxPQUF0QixDQUE4Qk0sV0FBM0MsQ0FBdkIsQ0FKcUQ7O0FBQUE7O0FBRzFERSxxQ0FIMEQ7QUFHckNELHdDQUhxQzs7QUFLM0Q7QUFDQSxzQkFBSVYscUJBQXFCLENBQUNHLE9BQXRCLENBQThCTSxXQUE5QixLQUE4Q2YsS0FBSyxDQUFDaEMsT0FBeEQsRUFBaUU7QUFDL0Qsd0JBQUlnRCxzQkFBSixFQUE0QjtBQUMxQjtBQUNBaEIsMkJBQUssQ0FBQ21CLEdBQU47QUFDRCxxQkFIRCxNQUdPO0FBQ0w7QUFDQW5CLDJCQUFLLENBQUMzQyxPQUFOLENBQWMrRCxNQUFkLENBQXFCSCxtQkFBckI7QUFDRDtBQUNGO0FBQ0Y7QUFDRixlQTFCaUMsQ0EyQmxDOzs7QUFDQSxrQkFBSSxVQUFVWCxxQkFBZCxFQUFxQztBQUNuQ04scUJBQUssQ0FBQzNDLE9BQU4sQ0FBY3dCLElBQWQsV0FBc0J3QixNQUFNLENBQUNnQixPQUFQLENBQWVDLFdBQXJDOztBQUNBdEIscUJBQUssQ0FBQzNDLE9BQU4sQ0FBYytELE1BQWQsbUNBQWdEZCxxQkFBcUIsQ0FBQ2lCLElBQXRCLENBQTJCQyxRQUEzQixFQUFoRDs7QUFDQTtBQUNEO0FBQ0Y7QUFDRixXQXJDRCxNQXFDTztBQUNMLGdCQUFJckIsV0FBVyxLQUFLLEtBQXBCLEVBQTJCO0FBQ3pCO0FBQ0FILG1CQUFLLENBQUMzQyxPQUFOLENBQWN3QixJQUFkLCtDQUF5RGMsT0FBekQsc0RBQ0VLLEtBQUssQ0FBQ0UsT0FBTixDQUFjRixLQUFLLENBQUM5QixNQUFOLENBQWFPLFdBQTNCLEVBQXdDRSxPQUQxQztBQUdEO0FBQ0Y7QUFDRixTQTlDRDtBQStDRCxPQW5ERCxNQW1ETztBQUNMO0FBQ0FxQixhQUFLLENBQUMzQyxPQUFOLENBQWN3QixJQUFkLHFIQUNvQm1CLEtBQUssQ0FBQ0UsT0FBTixDQUFjRixLQUFLLENBQUM5QixNQUFOLENBQWFPLFdBQTNCLEVBQXdDRSxPQUQ1RDtBQUdEOztBQUNETixhQUFPLENBQUNDLEdBQVIsQ0FBWXFCLE9BQVosRUFBcUIsS0FBS3pCLE1BQTFCO0FBQ0Q7OzttQ0FFYztBQUNiLFdBQUtELEtBQUwsQ0FBV3dELE9BQVg7QUFDRDs7O2tDQUVhO0FBQ1osV0FBS3hELEtBQUwsQ0FBV3lELE1BQVg7QUFDRCxLLENBRUQ7Ozs7MEJBQ007QUFDSjtBQUNBLFdBQUssSUFBSWhELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS2IsS0FBTCxDQUFXVSxNQUEvQixFQUF1Q0csQ0FBQyxFQUF4QyxFQUE0QztBQUMxQyxZQUFJLEtBQUtiLEtBQUwsQ0FBV2EsQ0FBWCxFQUFjRixJQUFkLEtBQXVCLEtBQUtSLE9BQWhDLEVBQXlDO0FBQ3ZDLGVBQUtYLE9BQUwsQ0FBYStELE1BQWIsQ0FBb0IsS0FBS3ZELEtBQUwsQ0FBV2EsQ0FBWCxFQUFjQyxPQUFsQztBQUNBLGVBQUt0QixPQUFMLENBQWErRCxNQUFiLENBQW9CLGtCQUFwQjtBQUNEO0FBQ0YsT0FQRyxDQVFKOzs7QUFDQSxXQUFLTyxZQUFMO0FBQ0QsSyxDQUVEOzs7O2dDQUNZO0FBQ1Y7QUFDQSxXQUFLekQsTUFBTCxDQUFZc0MsU0FBWixHQUF3Qix3QkFBeEI7QUFDQSxXQUFLdEMsTUFBTCxDQUFZTyxXQUFaLEdBQTBCLEtBQUtWLFNBQS9CO0FBQ0EsVUFBTXNCLElBQUksR0FBRyxLQUFLYSxPQUFMLENBQWEsS0FBS25DLFNBQWxCLENBQWI7QUFDQSxXQUFLVixPQUFMLENBQWF3QixJQUFiLENBQWtCUSxJQUFJLENBQUNWLE9BQXZCO0FBQ0EsV0FBS1YsS0FBTCxDQUFXeUQsTUFBWDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hNSDs7OztBQUVBLElBQU1FLElBQUksR0FBRyxtQkFBYjtlQUVlQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNKTTNELEs7OztBQUVuQixtQkFBK0Q7QUFBQSxRQUFuRDRELFFBQW1ELHVFQUF4QyxLQUF3QztBQUFBLFFBQWpDL0IsS0FBaUMsdUVBQXpCLEVBQXlCO0FBQUEsUUFBckJ2QyxTQUFxQix1RUFBVCxPQUFTOztBQUFBOztBQUM3RCxTQUFLc0UsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLL0IsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS3ZDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0Q7Ozs7NkJBRVE7QUFDUCxXQUFLc0UsUUFBTCxHQUFnQixLQUFoQjtBQUNBckUsY0FBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLEVBQWlDb0UsUUFBakMsR0FBNEMsS0FBNUM7QUFDRDs7OzhCQUVTO0FBQ1IsV0FBS0EsUUFBTCxHQUFnQixJQUFoQjtBQUNBckUsY0FBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLEVBQWlDb0UsUUFBakMsR0FBNEMsSUFBNUM7QUFDRDs7O3lCQUVJL0IsSyxFQUFPO0FBQ1Y7QUFDQUEsV0FBSyxHQUFHQSxLQUFLLENBQUNnQyxXQUFOLEVBQVI7QUFDQSxXQUFLaEMsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDdEJrQmlDLFM7OztBQUVuQix1QkFBd0I7QUFBQSxRQUFaakUsS0FBWSx1RUFBSixFQUFJOztBQUFBOztBQUN0QixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7Ozs4QkFFd0I7QUFBQSxVQUFqQjJCLFFBQWlCLHVFQUFOLElBQU07O0FBQ3ZCO0FBQ0EsVUFBSUEsUUFBUSxLQUFLLElBQWpCLEVBQXVCO0FBQ3JCO0FBQ0EsZUFBTyxLQUFLM0IsS0FBTCxDQUFXMkIsUUFBWCxFQUFxQmQsT0FBNUI7QUFDRCxPQUxzQixDQU12QjtBQUNBOzs7QUFDQSxhQUFPLEtBQUtiLEtBQUwsQ0FBV2tFLEdBQVgsQ0FBZSxVQUFBQyxDQUFDO0FBQUEsZUFBSUEsQ0FBQyxDQUFDekQsSUFBTjtBQUFBLE9BQWhCLENBQVA7QUFDRDs7OzRCQUVPZ0IsSSxFQUFNO0FBQ1osV0FBSzFCLEtBQUwsQ0FBV21CLElBQVgsQ0FBZ0JPLElBQWhCO0FBQ0EsYUFBTyxLQUFLMUIsS0FBWjtBQUNEOzs7NkJBRVEyQixRLEVBQVU7QUFDakIsVUFBSXlDLFlBQVksR0FBRyxLQUFLcEUsS0FBTCxDQUFXc0IsTUFBWCxDQUFrQixVQUFTSSxJQUFULEVBQWU7QUFDbEQsZUFBT0EsSUFBSSxDQUFDaEIsSUFBTCxLQUFjaUIsUUFBckI7QUFDRCxPQUZrQixDQUFuQjtBQUdBLFdBQUszQixLQUFMLEdBQWFvRSxZQUFiO0FBQ0EsYUFBTyxLQUFLcEUsS0FBWjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQzVCa0JxRSxJOzs7QUFFbkIsa0JBQXFDO0FBQUEsUUFBekIzRCxJQUF5Qix1RUFBbEIsRUFBa0I7QUFBQSxRQUFkRyxPQUFjLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ25DLFNBQUtILElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtHLE9BQUwsR0FBZUEsT0FBZixDQUZtQyxDQUVYO0FBQ3pCOzs7OzBCQUVLO0FBQ0osYUFBTyxLQUFLQSxPQUFaO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEg7Ozs7Ozs7Ozs7SUFFcUJULE07OztBQUVuQixvQkFBaUY7QUFBQSxRQUFyRU0sSUFBcUUsdUVBQTlELEVBQThEO0FBQUEsUUFBMURnQyxTQUEwRCx1RUFBOUMsd0JBQThDO0FBQUEsUUFBN0IvQixXQUE2Qix1RUFBZixFQUFlO0FBQUEsUUFBWFYsU0FBVzs7QUFBQTs7QUFDL0UsU0FBS1MsSUFBTCxHQUFZQSxJQUFaOztBQUNBLFFBQUksS0FBS0EsSUFBTCxLQUFjLEVBQWxCLEVBQXNCO0FBQ3BCLFdBQUtBLElBQUwsR0FBWSxRQUFaO0FBQ0Q7O0FBQ0QsU0FBS2dDLFNBQUwsR0FBaUJBLFNBQWpCOztBQUNBLFFBQUksS0FBSy9CLFdBQUwsS0FBcUIsRUFBekIsRUFBNkI7QUFDM0IsV0FBS0EsV0FBTCxHQUFtQixLQUFLVixTQUF4QjtBQUNEOztBQUNELFNBQUtBLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0Q7Ozs7OEJBRVNzQixJLEVBQU07QUFDZCxVQUFNK0MsR0FBRyxHQUFHL0MsSUFBSSxDQUFDZ0QsS0FBTCxDQUFXLEtBQUs3QixTQUFMLENBQWUxQyxLQUExQixDQUFaOztBQUNBLFVBQUlzRSxHQUFHLENBQUMsQ0FBRCxDQUFILEtBQVcsS0FBZixFQUFzQixDQUNwQjtBQUNELE9BRkQsTUFFTztBQUNMO0FBQ0EsYUFBSzNELFdBQUwsR0FBbUJZLElBQUksQ0FBQ2IsSUFBeEI7QUFDRCxPQVBhLENBUWQ7OztBQUNBLGFBQU8sQ0FBQzRELEdBQUcsQ0FBQyxDQUFELENBQUosRUFBU0EsR0FBRyxDQUFDLENBQUQsQ0FBWixDQUFQO0FBQ0Q7Ozs0QkFFTzVDLEksRUFBTTtBQUNaLFdBQUtnQixTQUFMLENBQWU4QixPQUFmLENBQXVCOUMsSUFBdkI7QUFDQSxhQUFPLEtBQUtnQixTQUFaO0FBQ0Q7Ozs2QkFFUWhCLEksRUFBTTtBQUNiLFdBQUtnQixTQUFMLENBQWUrQixRQUFmLENBQXdCL0MsSUFBeEI7QUFDQSxhQUFPLEtBQUtnQixTQUFaO0FBQ0Q7Ozs2QkFFUWdDLEksRUFBbUI7QUFBQSxVQUFiaEQsSUFBYSx1RUFBTixJQUFNOztBQUMxQjtBQUNBLFVBQUlBLElBQUksS0FBSyxJQUFiLEVBQW1CO0FBQ2pCLGVBQU8sS0FBS2YsV0FBTCxDQUFpQmdFLFFBQWpCLENBQTBCRCxJQUExQixDQUFQO0FBQ0QsT0FKeUIsQ0FLMUI7OztBQUNBLGFBQU9oRCxJQUFJLENBQUNpRCxRQUFMLENBQWNELElBQWQsQ0FBUDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQzdDa0JFLE07OztBQUVuQixvQkFBdUU7QUFBQSxRQUEzRGxFLElBQTJELHVFQUFwRCxFQUFvRDtBQUFBLFFBQWhEbUUsUUFBZ0QsdUVBQXJDLEVBQXFDO0FBQUEsUUFBakN0QixPQUFpQyx1RUFBdkIsRUFBdUI7QUFBQSxRQUFuQnRDLFlBQW1CLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ3JFLFNBQUtQLElBQUwsR0FBWUEsSUFBWixDQURxRSxDQUVyRTs7QUFDQSxTQUFLbUUsUUFBTCxHQUFnQkEsUUFBUSxDQUFDWCxHQUFULENBQWEsVUFBU1ksQ0FBVCxFQUFZO0FBQUUsYUFBT0EsQ0FBQyxDQUFDZCxXQUFGLEVBQVA7QUFBd0IsS0FBbkQsQ0FBaEIsQ0FIcUUsQ0FJckU7QUFDQTtBQUNBOztBQUNBLFNBQUtULE9BQUwsR0FBZUEsT0FBZixDQVBxRSxDQVFyRTs7QUFDQSxTQUFLdEMsWUFBTCxHQUFvQkEsWUFBcEI7QUFDRCxHLENBRUQ7Ozs7O2tDQUNjWSxPLEVBQXFCO0FBQUEsVUFBWjdCLEtBQVksdUVBQUosRUFBSTtBQUNqQyxVQUFJK0UsWUFBWSxHQUFHLEtBQW5CLENBRGlDLENBRWpDOztBQUNBLFVBQUksS0FBSzlELFlBQUwsQ0FBa0JSLE1BQWxCLEdBQTJCLENBQS9CLEVBQWtDO0FBQ2hDLFlBQUl1RSxtQkFBbUIsR0FBRyxFQUExQixDQURnQyxDQUVoQzs7QUFDQSxhQUFLL0QsWUFBTCxDQUFrQnFCLE9BQWxCLENBQTBCLFVBQVMyQyxXQUFULEVBQXNCO0FBQzlDLGNBQUlDLGdCQUFnQixHQUFHLEtBQXZCO0FBQ0FsRixlQUFLLENBQUNzQyxPQUFOLENBQWMsVUFBU1osSUFBVCxFQUFlO0FBQzNCLGdCQUFJQSxJQUFJLEtBQUt1RCxXQUFiLEVBQTBCO0FBQ3hCQyw4QkFBZ0IsR0FBRyxJQUFuQjtBQUNEO0FBQ0YsV0FKRCxFQUY4QyxDQU85Qzs7QUFDQSxjQUFJLENBQUNBLGdCQUFMLEVBQXVCO0FBQ3JCRiwrQkFBbUIsQ0FBQzdELElBQXBCLENBQXlCOEQsV0FBekI7QUFDRDtBQUNGLFNBWEQsRUFIZ0MsQ0FlaEM7O0FBQ0EsWUFBSUQsbUJBQW1CLENBQUN2RSxNQUFwQixHQUE2QixDQUFqQyxFQUFvQztBQUNsQyxpQkFBTztBQUFDLG9CQUFRdUU7QUFBVCxXQUFQO0FBQ0Q7QUFDRixPQXRCZ0MsQ0F1QmpDO0FBQ0E7OztBQUNBLFdBQUtILFFBQUwsQ0FBY3ZDLE9BQWQsQ0FBc0IsVUFBUzZDLE9BQVQsRUFBa0I7QUFDdEMsWUFBSXRELE9BQU8sQ0FBQ3VELFFBQVIsQ0FBaUJELE9BQU8sQ0FBQ25CLFdBQVIsRUFBakIsQ0FBSixFQUE2QztBQUMzQ2Usc0JBQVksR0FBRyxJQUFmO0FBQ0Q7QUFDRixPQUpELEVBekJpQyxDQThCakM7O0FBQ0EsVUFBSUEsWUFBSixFQUFrQjtBQUNoQixlQUFPO0FBQUMscUJBQVcsS0FBS3hCO0FBQWpCLFNBQVA7QUFDRDs7QUFDRCxhQUFPLElBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsREg7Ozs7Ozs7Ozs7SUFFcUI4QixJOzs7QUFFbkIsa0JBQXNFO0FBQUEsUUFBMUQzRSxJQUEwRCx1RUFBbkQsRUFBbUQ7QUFBQSxRQUEvQ0csT0FBK0MsdUVBQXJDLEVBQXFDO0FBQUEsUUFBakNHLE9BQWlDLHVFQUF2QixFQUF1QjtBQUFBLFFBQW5CQyxZQUFtQix1RUFBSixFQUFJOztBQUFBOztBQUNwRSxTQUFLUCxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLRyxPQUFMLEdBQWVBLE9BQWYsQ0FGb0UsQ0FFNUM7O0FBQ3hCLFNBQUtHLE9BQUwsR0FBZUEsT0FBZixDQUhvRSxDQUc1Qzs7QUFDeEIsU0FBS0MsWUFBTCxHQUFvQkEsWUFBcEIsQ0FKb0UsQ0FJbEM7QUFDbkM7Ozs7OEJBRVNQLEksRUFBTW1FLFEsRUFBVVMsVyxFQUFhO0FBQ3JDLFVBQU0vQyxNQUFNLEdBQUcsb0JBQVc3QixJQUFYLEVBQWlCbUUsUUFBakIsRUFBMkJTLFdBQTNCLENBQWY7QUFDQSxXQUFLdEUsT0FBTCxDQUFhRyxJQUFiLENBQWtCb0IsTUFBbEI7QUFDQSxhQUFPLEtBQUt2QixPQUFaO0FBQ0Q7Ozs0QkFFaUI7QUFBQSxVQUFaaEIsS0FBWSx1RUFBSixFQUFJO0FBQ2hCLFVBQUl1RixVQUFVLEdBQUcsRUFBakI7QUFDQSxVQUFJQyxrQkFBa0IsR0FBRyxJQUF6QixDQUZnQixDQUVlO0FBQy9COztBQUNBLFVBQUksS0FBS3ZFLFlBQUwsR0FBb0IsQ0FBeEIsRUFBMkI7QUFDekIsWUFBSWpCLEtBQUssQ0FBQ1MsTUFBTixLQUFpQixDQUFyQixFQUF3QjtBQUN0QitFLDRCQUFrQixHQUFHLEtBQXJCLENBRHNCLENBRXRCOztBQUNBLGVBQUt2RSxZQUFMLENBQWtCcUIsT0FBbEIsQ0FBMEIsVUFBVTJDLFdBQVYsRUFBdUI7QUFDL0NNLHNCQUFVLGNBQU9OLFdBQVcsQ0FBQ1EsUUFBbkIsT0FBVjtBQUNELFdBRkQ7QUFHRCxTQU5ELE1BTU87QUFDTDtBQUNBLGVBQUt4RSxZQUFMLENBQWtCcUIsT0FBbEIsQ0FBMEIsVUFBVTJDLFdBQVYsRUFBdUI7QUFDL0MsZ0JBQUlTLEtBQUssR0FBRyxLQUFaO0FBQ0EsaUJBQUsxRixLQUFMLENBQVdzQyxPQUFYLENBQW1CLFVBQVVaLElBQVYsRUFBZ0I7QUFDakMsa0JBQUlBLElBQUksS0FBS3VELFdBQWIsRUFBMEI7QUFDeEJTLHFCQUFLLEdBQUcsSUFBUjtBQUNEO0FBQ0YsYUFKRDs7QUFLQSxnQkFBSUEsS0FBSyxLQUFLLEtBQWQsRUFBcUI7QUFDbkJGLGdDQUFrQixHQUFHLEtBQXJCLENBRG1CLENBRW5COztBQUNBRCx3QkFBVSxJQUFJTixXQUFXLENBQUNRLFFBQTFCO0FBQ0Q7QUFDRixXQVpEOztBQWFBLGNBQUlELGtCQUFrQixLQUFLLElBQTNCLEVBQWlDO0FBQy9CRCxzQkFBVSxHQUFHLEtBQUsxRSxPQUFsQjtBQUNEO0FBQ0Y7QUFDRixPQTFCRCxNQTBCTztBQUNMMEUsa0JBQVUsR0FBRyxLQUFLMUUsT0FBbEI7QUFDRCxPQWhDZSxDQWlDaEI7OztBQUNBLGFBQU8sQ0FBQzBFLFVBQUQsRUFBYUMsa0JBQWIsQ0FBUDtBQUNEOzs7NkJBRVF4RCxLLEVBQU87QUFDZDtBQUNBLFVBQUl1RCxVQUFVLEdBQUcsRUFBakI7O0FBQ0EsVUFBSSxLQUFLdkUsT0FBTCxDQUFhUCxNQUFiLEtBQXdCLENBQTVCLEVBQStCO0FBQzdCOEUsa0JBQVUsQ0FBQyxNQUFELENBQVYsR0FBcUIsK0RBQXJCO0FBQ0Q7O0FBQ0RJLFlBQU0sQ0FBQ0MsTUFBUCxDQUFjLEtBQUs1RSxPQUFuQixFQUE0QnNCLE9BQTVCLENBQW9DLFVBQVN1RCxHQUFULEVBQWNDLEdBQWQsRUFBbUI7QUFDckQsWUFBSTlELEtBQUssS0FBSzZELEdBQWQsRUFBbUI7QUFDakJOLG9CQUFVLENBQUMsTUFBRCxDQUFWLEdBQXFCTyxHQUFHLENBQUNDLGNBQXpCLENBRGlCLENBQ3dCOztBQUN6QyxjQUFJRCxHQUFHLENBQUNFLGVBQUosS0FBd0IsSUFBNUIsRUFBa0M7QUFDaENULHNCQUFVLENBQUMsT0FBRCxDQUFWLEdBQXNCTyxHQUFHLENBQUNFLGVBQTFCLENBRGdDLENBQ1c7QUFDNUM7O0FBQ0QsY0FBSUYsR0FBRyxDQUFDRyxjQUFKLEtBQXVCLElBQTNCLEVBQWlDO0FBQy9CVixzQkFBVSxDQUFDLFlBQUQsQ0FBVixHQUEyQk8sR0FBRyxDQUFDRyxjQUEvQixDQUQrQixDQUNnQjtBQUNoRDtBQUNGO0FBQ0YsT0FWRDtBQVdBLGFBQU9WLFVBQVA7QUFDRCIsImZpbGUiOiJ0ZXh0LXJwZy1lbmdpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInRleHQtcnBnLWVuZ2luZVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ0ZXh0LXJwZy1lbmdpbmVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1widGV4dC1ycGctZW5naW5lXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGh0bWwgPSAnJywgZWxlbWVudElkID0gJ2Rpc3BsYXknKSB7XHJcbiAgICB0aGlzLmh0bWwgPSBodG1sO1xyXG4gICAgdGhpcy5lbGVtZW50SWQgPSBlbGVtZW50SWQ7XHJcbiAgfVxyXG5cclxuICBzaG93KGh0bWwgPSBudWxsKSB7XHJcbiAgICBpZiAoaHRtbCA9PT0gbnVsbCkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkuaW5uZXJIVE1MID0gdGhpcy5odG1sO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgIHRoaXMuaHRtbCA9IGh0bWw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhcHBlbmQoaHRtbCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLmlubmVySFRNTCArPSBodG1sO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgRGlzcGxheSBmcm9tICcuL2Rpc3BsYXknO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9pbnB1dCc7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xyXG5pbXBvcnQgUm9vbSBmcm9tICcuL3Jvb20nO1xyXG5pbXBvcnQgSW52ZW50b3J5IGZyb20gJy4vaW52ZW50b3J5JztcclxuaW1wb3J0IEl0ZW0gZnJvbSAnLi9pdGVtJztcclxuLy8gaW1wb3J0IEl0ZW0gZnJvbSAnLi9pdGVtJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihkYXRhcGF0aCA9ICcnLCByb29tcyA9IFtdLCBpdGVtcyA9IFtdLCBzdGFydFJvb20gPSAnJywgZW5kUm9vbSA9ICcnKSB7XHJcbiAgICB0aGlzLkRpc3BsYXkgPSBuZXcgRGlzcGxheSgpO1xyXG4gICAgdGhpcy5JbnB1dCA9IG5ldyBJbnB1dCgpO1xyXG4gICAgdGhpcy5kYXRhcGF0aCA9IGRhdGFwYXRoOyAvLyBUT0RPOiBCZSBhYmxlIHRvIGhhdmUgZ2FtZSBpbml0aWFsaXplIGRhdGEgZnJvbSBKU09OIGZpbGVcclxuICAgIHRoaXMucm9vbXMgPSByb29tczsgLy8gQWxsIHRoZSByb29tcyBpbiBvdXIgZ2FtZVxyXG4gICAgdGhpcy5pdGVtcyA9IGl0ZW1zOyAvLyBBbGwgdGhlIGl0ZW1zIGluIG91ciBnYW1lXHJcbiAgICB0aGlzLnN0YXJ0Um9vbSA9IHN0YXJ0Um9vbTsgLy8gV2hpY2ggcm9vbSB3aWxsIHRoZSBwbGF5ZXIgc3RhcnQgaW5cclxuICAgIHRoaXMuZW5kUm9vbSA9IGVuZFJvb207IC8vIFdoaWNoIHJvb20gXHJcbiAgICAvLyBUT0RPOiBBbGxvdyBwbGF5ZXJzIHRvIGdpdmUgdGhlaXIgY2hhcmFjdGVycyB0aGVpciBvd24gbmFtZXMgbGF0ZXJcclxuICAgIHRoaXMuUGxheWVyID0gbmV3IFBsYXllcihzdGFydFJvb20gPSB0aGlzLnN0YXJ0Um9vbSk7IFxyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIGxldCBkaXNwbGF5VGV4dDtcclxuICAgIGlmICh0aGlzLmRhdGFQYXRoICE9PSAnJykge1xyXG4gICAgICAvLyB0aGlzLmxvYWREYXRhKHRoaXMuZGF0YVBhdGgpO1xyXG4gICAgICBjb25zb2xlLmxvZygnSW5pdGlhbGl6ZWQgZ2FtZSBmcm9tOiAnICsgdGhpcy5kYXRhcGF0aCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGFydFJvb20gPT09ICcnICYmIHRoaXMucm9vbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnN0YXJ0Um9vbSA9IHRoaXMucm9vbXNbMF0ubmFtZTsgXHJcbiAgICAgIHRoaXMuUGxheWVyLnN0YXJ0Um9vbSA9IHRoaXMuc3RhcnRSb29tO1xyXG4gICAgICB0aGlzLlBsYXllci5jdXJyZW50Um9vbSA9IHRoaXMuUGxheWVyLnN0YXJ0Um9vbTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmVuZFJvb20gPT09ICcnICYmIHRoaXMucm9vbXMubGVuZ3RoID4gMSkge1xyXG4gICAgICB0aGlzLmVuZFJvb20gPSB0aGlzLnJvb21zW3RoaXMucm9vbXMubGVuZ3RoIC0gMV0ubmFtZTsgICAgICBcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb29tcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy5yb29tc1tpXS5uYW1lID09PSB0aGlzLnN0YXJ0Um9vbSkge1xyXG4gICAgICAgIGRpc3BsYXlUZXh0ID0gdGhpcy5yb29tc1tpXS5nZXRUZXh0O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoZGlzcGxheVRleHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBkaXNwbGF5VGV4dCA9ICdObyBzdGFydGluZyByb29tIHRleHQgZm91bmQhJztcclxuICAgIH1cclxuICAgIHRoaXMuRGlzcGxheS5zaG93KGRpc3BsYXlUZXh0KTtcclxuICB9XHJcblxyXG4gIC8vIE1hbmFnZSByb29tc1xyXG4gIGFkZFJvb20obmFtZSwgZ2V0VGV4dCwgcHJvbXB0cyA9IFtdLCByZXF1aXJlbWVudHMgPSBbXSkge1xyXG4gICAgbGV0IHJvb21PYmogPSBuZXcgUm9vbShuYW1lLCBnZXRUZXh0LCBwcm9tcHRzLCByZXF1aXJlbWVudHMpO1xyXG4gICAgdGhpcy5yb29tcy5wdXNoKHJvb21PYmopO1xyXG4gICAgcmV0dXJuIHJvb21PYmo7XHJcbiAgfVxyXG5cclxuICBkcm9wUm9vbShyb29tTmFtZSkge1xyXG4gICAgbGV0IG5ld1Jvb21zID0gdGhpcy5yb29tcy5maWx0ZXIoZnVuY3Rpb24ocm9vbSkge1xyXG4gICAgICByZXR1cm4gcm9vbS5uYW1lICE9PSByb29tTmFtZTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5yb29tcyA9IG5ld1Jvb21zO1xyXG4gICAgcmV0dXJuIHRoaXMucm9vbXM7XHJcbiAgfVxyXG5cclxuICBnZXRSb29tKHJvb21OYW1lKSB7XHJcbiAgICBjb25zdCByb29tID0gdGhpcy5yb29tcy5maW5kKHggPT4geC5uYW1lID09PSByb29tTmFtZSk7XHJcbiAgICByZXR1cm4gcm9vbTtcclxuICB9XHJcblxyXG4gIC8vIE1hbmFnZSBpdGVtc1xyXG4gIGFkZEl0ZW0obmFtZSwgZ2V0VGV4dCkge1xyXG4gICAgY29uc3QgaXRlbSA9IG5ldyBJdGVtKG5hbWUsIGdldFRleHQpO1xyXG4gICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgcmV0dXJuIHRoaXMuaXRlbXM7XHJcbiAgfVxyXG5cclxuICBkcm9wSXRlbShpdGVtTmFtZSkge1xyXG4gICAgbGV0IG5ld0l0ZW1zID0gdGhpcy5pdGVtcy5maWx0ZXIoZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICByZXR1cm4gaXRlbS5uYW1lICE9PSBpdGVtTmFtZTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5pdGVtcyA9IG5ld0l0ZW1zO1xyXG4gICAgcmV0dXJuIHRoaXMuaXRlbXM7XHJcbiAgfVxyXG5cclxuICBnZXRJdGVtKGl0ZW1OYW1lKSB7XHJcbiAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtcy5maW5kKHggPT4geC5uYW1lID09PSBpdGVtTmFtZSk7XHJcbiAgICByZXR1cm4gaXRlbTtcclxuICB9XHJcblxyXG4gIC8vIFVzZXIgaW5wdXRcclxuICB1c2VyU2VuZChtZXNzYWdlKSB7XHJcbiAgICAvLyBPdXIgSW5wdXQgY2xhc3Mgd2lsbCBoYW5kbGUgY2xlYW5pbmcgLyBub3JtYWxpemluZyBzdHJpbmdzXHJcbiAgICB0aGlzLklucHV0LnNlbmQobWVzc2FnZSk7XHJcbiAgICB0aGlzLmRlY2lkZVBhdGgodGhpcy5JbnB1dC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvLyBHYW1lIEFJXHJcbiAgZGVjaWRlUGF0aChtZXNzYWdlKSB7XHJcbiAgICBpZiAobWVzc2FnZSA9PT0gJ3Jlc3RhcnQnKSB7XHJcbiAgICAgIHRoaXMucmVzZXRHYW1lKCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XHJcbiAgICBjb25zdCBjdXJyUm9vbSA9IF90aGlzLmdldFJvb20oX3RoaXMuUGxheWVyLmN1cnJlbnRSb29tKTtcclxuICAgIC8vIERvIHdlIGhhdmUgYWN0aW9ucyB0aGF0IHdlIGNhbiBkbyBpbiB0aGUgcm9vbT9cclxuICAgIGlmICh0eXBlb2YgY3VyclJvb20ucHJvbXB0cyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIC8vIENoZWNrIGV2ZXJ5IHByb21wdCBhY3Rpb24gdG8gc2VlIGlmIGl0IG1hdGNoZXMgb3VyIGlucHV0IGtleXdvcmRzXHJcbiAgICAgIC8vIEZvciBub3cganVzdCBnZXQgdGhlIGZpcnN0IG1hdGNoaW5nIHByb21wdCBhbmQgZG8gdGhhdFxyXG4gICAgICBsZXQgZm91bmRQcm9tcHQgPSBmYWxzZTtcclxuICAgICAgY3VyclJvb20ucHJvbXB0cy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9tcHQpIHtcclxuICAgICAgICBpZiAoZm91bmRQcm9tcHQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICBjb25zdCBtYXRjaGluZ1Byb21wdFJlc3VsdHMgPSBwcm9tcHQubWF0Y2hLZXl3b3JkcyhtZXNzYWdlLCBfdGhpcy5QbGF5ZXIuaW52ZW50b3J5Lml0ZW1zKTtcclxuICAgICAgICAgIC8vIElmIHdlIGdldCBhIG1hdGNoaW5nIHJlc3VsdCBiYWNrXHJcbiAgICAgICAgICBpZiAobWF0Y2hpbmdQcm9tcHRSZXN1bHRzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGZvdW5kUHJvbXB0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gSWYgcGxheWVyIHN1Y2NlZWRlZCBpbiBwcm9tcHQgYWN0aW9uXHJcbiAgICAgICAgICAgIGlmICgnc3VjY2VzcycgaW4gbWF0Y2hpbmdQcm9tcHRSZXN1bHRzKSB7XHJcbiAgICAgICAgICAgICAgX3RoaXMuRGlzcGxheS5zaG93KG1hdGNoaW5nUHJvbXB0UmVzdWx0cy5zdWNjZXNzLnN1Y2Nlc3NUZXh0KTtcclxuICAgICAgICAgICAgICAvLyBHZXQgaXRlbXMgZnJvbSBwcm9tcHQgaWYgYW55IGFyZSBmb3VuZFxyXG4gICAgICAgICAgICAgIGlmIChtYXRjaGluZ1Byb21wdFJlc3VsdHMuc3VjY2Vzcy5pdGVtc0dpdmVuICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KF90aGlzLlBsYXllci5pbnZlbnRvcnkuaXRlbXMsIG1hdGNoaW5nUHJvbXB0UmVzdWx0cy5zdWNjZXNzLml0ZW1zR2l2ZW4pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvLyBTdWNjZXNzZnVsIHByb21wdCBsZWFkcyB0byBuZXcgcm9vbSBlbnRyYW5jZSAoaWYgZGVmaW5lZCBpbiBwcm9tcHQpXHJcbiAgICAgICAgICAgICAgaWYgKG1hdGNoaW5nUHJvbXB0UmVzdWx0cy5zdWNjZXNzLnJvb21Ub0VudGVyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBlbnRlclJvb21SZXN1bHRTdWNjZXNzO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVudGVyUm9vbVJlc3VsdFRleHQ7ICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFtlbnRlclJvb21SZXN1bHRUZXh0LCBlbnRlclJvb21SZXN1bHRTdWNjZXNzXSA9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgX3RoaXMuUGxheWVyLmVudGVyUm9vbSh0aGlzLmdldFJvb20obWF0Y2hpbmdQcm9tcHRSZXN1bHRzLnN1Y2Nlc3Mucm9vbVRvRW50ZXIpKTtcclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiBwbGF5ZXIncyB3b25cclxuICAgICAgICAgICAgICAgIGlmIChtYXRjaGluZ1Byb21wdFJlc3VsdHMuc3VjY2Vzcy5yb29tVG9FbnRlciA9PT0gX3RoaXMuZW5kUm9vbSkge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoZW50ZXJSb29tUmVzdWx0U3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFN1Y2Nlc3NmdWxseSBlbnRlcmVkIHJvb20gdG8gd2luIGdhbWVcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy53aW4oKTtcclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBEaXNwbGF5IHJlc3VsdHMgdGV4dCAoZmFpbCB0byBlbnRlciB3aW5uaW5nIHJvb20pXHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuRGlzcGxheS5hcHBlbmQoZW50ZXJSb29tUmVzdWx0VGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gUGxheWVyIGZhaWxlZCB0byBkbyBwcm9tcHQgKG1pc3NpbmcgaXRlbSByZXF1aXJlbWVudClcclxuICAgICAgICAgICAgaWYgKCdmYWlsJyBpbiBtYXRjaGluZ1Byb21wdFJlc3VsdHMpIHtcclxuICAgICAgICAgICAgICBfdGhpcy5EaXNwbGF5LnNob3coYCR7cHJvbXB0LnJlc3VsdHMuZmFpbE1lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgICAgX3RoaXMuRGlzcGxheS5hcHBlbmQoYE1pc3NpbmcgcmVxdWlyZWQgaXRlbXM6ICR7bWF0Y2hpbmdQcm9tcHRSZXN1bHRzLmZhaWwudG9TdHJpbmcoKX1gKTtcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKGZvdW5kUHJvbXB0ID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAvLyBQbGF5ZXIgZGlkbid0IHNheSBhbnkga2V5d29yZHMgdGhhdCB0cmlnZ2VyZWQgYW55IG9mIHRoZSBjdXJyZW50IHJvb20gcHJvbXB0c1xyXG4gICAgICAgICAgICBfdGhpcy5EaXNwbGF5LnNob3coYDxwPk5vIGFjdGlvbnMgY291bGQgYmUgZG9uZSBmcm9tOiBcIiR7bWVzc2FnZX1cIi4gVHJ5IHNvbWV0aGluZyBlbHNlLjwvcD5cclxuICAgICAgICAgICAgJHtfdGhpcy5nZXRSb29tKF90aGlzLlBsYXllci5jdXJyZW50Um9vbSkuZ2V0VGV4dH1cclxuICAgICAgICAgIGApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBObyBwcm9tcHRzIGV4aXN0IGZvciB0aGUgY3VycmVudCByb29tXHJcbiAgICAgIF90aGlzLkRpc3BsYXkuc2hvdyhgPHA+VGhlcmUgZG9lc24ndCBzZWVtIHRvIGJlIGFueSBhY3Rpb25zIGF0IGFsbCB0aGF0IHlvdSBjYW4gZG8gaW4gdGhpcyByb29tLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtfdGhpcy5nZXRSb29tKF90aGlzLlBsYXllci5jdXJyZW50Um9vbSkuZ2V0VGV4dH1cclxuICAgICAgYCk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlLCB0aGlzLlBsYXllcik7XHJcbiAgfVxyXG5cclxuICBkaXNhYmxlSW5wdXQoKSB7XHJcbiAgICB0aGlzLklucHV0LmRpc2FibGUoKTtcclxuICB9XHJcblxyXG4gIGVuYWJsZUlucHV0KCkge1xyXG4gICAgdGhpcy5JbnB1dC5lbmFibGUoKTtcclxuICB9XHJcblxyXG4gIC8vIFBsYXllciB3aW5zXHJcbiAgd2luKCkge1xyXG4gICAgLy8gU2hvdyBmaW5hbCByb29tIHRleHQgKHdpbiB0ZXh0KVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvb21zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLnJvb21zW2ldLm5hbWUgPT09IHRoaXMuZW5kUm9vbSkge1xyXG4gICAgICAgIHRoaXMuRGlzcGxheS5hcHBlbmQodGhpcy5yb29tc1tpXS5nZXRUZXh0KTtcclxuICAgICAgICB0aGlzLkRpc3BsYXkuYXBwZW5kKCc8cD5HYW1lIGVuZC48L3A+Jyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIERpc2FibGUgYW55IG1vcmUgdXNlciBpbnB1dCBhZnRlciB3aW5uaW5nXHJcbiAgICB0aGlzLmRpc2FibGVJbnB1dCgpO1xyXG4gIH1cclxuXHJcbiAgLy8gUGxheWVyIHJlc2V0cyBnYW1lXHJcbiAgcmVzZXRHYW1lKCkge1xyXG4gICAgLy8gUmVzZXRzIHBsYXllciB3aXRoIGJsYW5rIGludmVudG9yeSBhbmQgYmFjayB0byBzdGFydGluZyByb29tXHJcbiAgICB0aGlzLlBsYXllci5pbnZlbnRvcnkgPSBuZXcgSW52ZW50b3J5KCk7XHJcbiAgICB0aGlzLlBsYXllci5jdXJyZW50Um9vbSA9IHRoaXMuc3RhcnRSb29tO1xyXG4gICAgY29uc3Qgcm9vbSA9IHRoaXMuZ2V0Um9vbSh0aGlzLnN0YXJ0Um9vbSk7XHJcbiAgICB0aGlzLkRpc3BsYXkuc2hvdyhyb29tLmdldFRleHQpO1xyXG4gICAgdGhpcy5JbnB1dC5lbmFibGUoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcclxuXHJcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2FtZTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcihkaXNhYmxlZCA9IGZhbHNlLCB2YWx1ZSA9ICcnLCBlbGVtZW50SWQgPSAnaW5wdXQnKSB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLmVsZW1lbnRJZCA9IGVsZW1lbnRJZDtcclxuICB9XHJcblxyXG4gIGVuYWJsZSgpIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dCcpLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBkaXNhYmxlKCkge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQnKS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBzZW5kKHZhbHVlKSB7XHJcbiAgICAvLyBOb3JtYWxpemUgaW5wdXQgdmFsdWVzIChpZiBkZXNpcmVkKVxyXG4gICAgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbnZlbnRvcnkge1xyXG5cclxuICBjb25zdHJ1Y3RvcihpdGVtcyA9IFtdKSB7XHJcbiAgICB0aGlzLml0ZW1zID0gaXRlbXM7XHJcbiAgfVxyXG4gIFxyXG4gIGV4YW1pbmUoaXRlbU5hbWUgPSBudWxsKSB7XHJcbiAgICAvLyBJZiB3ZSdyZSBleGFtaW5pbmcgYW4gaXRlbVxyXG4gICAgaWYgKGl0ZW1OYW1lICE9PSBudWxsKSB7XHJcbiAgICAgIC8vIERpc3BsYXkgaXRlbSBnZXRUZXh0XHJcbiAgICAgIHJldHVybiB0aGlzLml0ZW1zW2l0ZW1OYW1lXS5nZXRUZXh0O1xyXG4gICAgfVxyXG4gICAgLy8gSWYgd2UncmUgZXhhbWluaW5nIGludmVudG9yeSwgcHJpbnQgb3V0XHJcbiAgICAvLyBsaXN0IG9mIGFsbCB0aGUgaXRlbXMuXHJcbiAgICByZXR1cm4gdGhpcy5pdGVtcy5tYXAoYSA9PiBhLm5hbWUpO1xyXG4gIH1cclxuXHJcbiAgYWRkSXRlbShpdGVtKSB7XHJcbiAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICByZXR1cm4gdGhpcy5pdGVtcztcclxuICB9XHJcblxyXG4gIGRyb3BJdGVtKGl0ZW1OYW1lKSB7XHJcbiAgICBsZXQgbmV3SW52ZW50b3J5ID0gdGhpcy5pdGVtcy5maWx0ZXIoZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICByZXR1cm4gaXRlbS5uYW1lICE9PSBpdGVtTmFtZTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5pdGVtcyA9IG5ld0ludmVudG9yeTtcclxuICAgIHJldHVybiB0aGlzLml0ZW1zO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtIHtcclxuICAgXHJcbiAgY29uc3RydWN0b3IobmFtZSA9ICcnLCBnZXRUZXh0ID0gJycpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmdldFRleHQgPSBnZXRUZXh0OyAvLyBUZXh0IGRpc3BsYXllZCB3aGVuIGl0ZW0gaXMgZ290dGVuXHJcbiAgfVxyXG5cclxuICBnZXQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRUZXh0O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgSW52ZW50b3J5IGZyb20gJy4vaW52ZW50b3J5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWUgPSAnJywgaW52ZW50b3J5ID0gbmV3IEludmVudG9yeSgpLCBjdXJyZW50Um9vbSA9ICcnLCBzdGFydFJvb20pIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICBpZiAodGhpcy5uYW1lID09PSAnJykge1xyXG4gICAgICB0aGlzLm5hbWUgPSAncGxheWVyJztcclxuICAgIH1cclxuICAgIHRoaXMuaW52ZW50b3J5ID0gaW52ZW50b3J5O1xyXG4gICAgaWYgKHRoaXMuY3VycmVudFJvb20gPT09ICcnKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFJvb20gPSB0aGlzLnN0YXJ0Um9vbTtcclxuICAgIH1cclxuICAgIHRoaXMuc3RhcnRSb29tID0gc3RhcnRSb29tO1xyXG4gIH1cclxuICBcclxuICBlbnRlclJvb20ocm9vbSkge1xyXG4gICAgY29uc3QgcmVzID0gcm9vbS5lbnRlcih0aGlzLmludmVudG9yeS5pdGVtcyk7XHJcbiAgICBpZiAocmVzWzFdID09PSBmYWxzZSkge1xyXG4gICAgICAvLyBQbGF5ZXIgZGlkIG5vdCBoYXZlIHJlcXVpcmVkIGl0ZW1zIHRvIGVudGVyIHRoZSByb29tXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBFbnRlcmVkIHJvb20gc3VjY2Vzc2Z1bGx5XHJcbiAgICAgIHRoaXMuY3VycmVudFJvb20gPSByb29tLm5hbWU7IFxyXG4gICAgfVxyXG4gICAgLy8gUmV0dXJuIGdhbWUgdGV4dCBhbmQgd2hldGhlciBvciBub3Qgd2Ugd2VyZSBhYmxlIHRvIGVudGVyIHJvb21cclxuICAgIHJldHVybiBbcmVzWzBdLCByZXNbMV1dO1xyXG4gIH1cclxuXHJcbiAgZ2V0SXRlbShpdGVtKSB7XHJcbiAgICB0aGlzLmludmVudG9yeS5hZGRJdGVtKGl0ZW0pO1xyXG4gICAgcmV0dXJuIHRoaXMuaW52ZW50b3J5O1xyXG4gIH1cclxuXHJcbiAgZHJvcEl0ZW0oaXRlbSkge1xyXG4gICAgdGhpcy5pbnZlbnRvcnkuZHJvcEl0ZW0oaXRlbSk7XHJcbiAgICByZXR1cm4gdGhpcy5pbnZlbnRvcnk7XHJcbiAgfVxyXG5cclxuICBkb0FjdGlvbih0ZXh0LCBpdGVtID0gbnVsbCkge1xyXG4gICAgLy8gTm8gaXRlbSBwYXNzZWQsIGNoZWNrIHJvb20gcHJvbXB0cyBmb3IgYWN0aW9uc1xyXG4gICAgaWYgKGl0ZW0gPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFJvb20uZG9BY3Rpb24odGV4dCk7XHJcbiAgICB9XHJcbiAgICAvLyBEb2luZyBhY3Rpb24gb24gaXRlbSwgY2hlY2sgaXRlbSBwcm9tcHRzXHJcbiAgICByZXR1cm4gaXRlbS5kb0FjdGlvbih0ZXh0KTtcclxuICB9XHJcbn1cclxuICBcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvbXB0IHtcclxuICAgXHJcbiAgY29uc3RydWN0b3IobmFtZSA9ICcnLCBrZXl3b3JkcyA9IFtdLCByZXN1bHRzID0ge30sIHJlcXVpcmVtZW50cyA9IFtdKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgLy8gS2V5d29yZHMgdGhhdCBjYW4gdHJpZ2dlciB0aGUgcHJvbXB0IChtYWtlIGFsbCBsb3dlci1jYXNlIGJ5IGRlZmF1bHQpXHJcbiAgICB0aGlzLmtleXdvcmRzID0ga2V5d29yZHMubWFwKGZ1bmN0aW9uKHYpIHsgcmV0dXJuIHYudG9Mb3dlckNhc2UoKTt9KTsgXHJcbiAgICAvLyBSZXN1bHRzIHRoYXQgb2NjdXIgd2hlbiB0aGlzIHByb21wdCBpcyBzdWNjZXNzZnVsbHkgdHJpZ2dlcmVkOyBcclxuICAgIC8vIHRoZSByZXN1bHQga2V5cyBjb21wcmlzZSBvZiDigJxzdWNjZXNzVGV4dOKAnSAocmVxdWlyZWQpLCBcImZhaWxUZXh0XCIgKG9wdGlvbmFsKSxcclxuICAgIC8vIOKAnGl0ZW1zUmVxdWlyZWTigJ0gKG9wdGlvbmFsKSwgLy8gYW5kIOKAnHJvb21Ub0VudGVyXCLigJ0gXHJcbiAgICB0aGlzLnJlc3VsdHMgPSByZXN1bHRzOyBcclxuICAgIC8vIEFueSBwcmVyZXF1aXNpdGUgaXRlbXMgbmVlZGVkIHRvIGRvIHRoZSBwcm9tcHQ/XHJcbiAgICB0aGlzLnJlcXVpcmVtZW50cyA9IHJlcXVpcmVtZW50czsgXHJcbiAgfVxyXG5cclxuICAvLyBDaGVjayBpZiBpbnB1dCBtZXNzYWdlIG1hdGNoZXMgYW55IHByb21wdCBrZXl3b3Jkc1xyXG4gIG1hdGNoS2V5d29yZHMobWVzc2FnZSwgaXRlbXMgPSBbXSkge1xyXG4gICAgbGV0IGZvdW5kS2V5d29yZCA9IGZhbHNlO1xyXG4gICAgLy8gSWYgd2UgaGF2ZSBhbnkgaXRlbSByZXF1aXJlbWVudHNcclxuICAgIGlmICh0aGlzLnJlcXVpcmVtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCBtaXNzaW5nUmVxdWlyZW1lbnRzID0gW107XHJcbiAgICAgIC8vIENoZWNrIGFsbCB0aGUgcmVxdWlyZW1lbnRzIGFnYWluc3QgdGhlIGl0ZW1zIHBhc3NlZFxyXG4gICAgICB0aGlzLnJlcXVpcmVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKHJlcXVpcmVtZW50KSB7XHJcbiAgICAgICAgbGV0IGZvdW5kUmVxdWlyZW1lbnQgPSBmYWxzZTtcclxuICAgICAgICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICAgIGlmIChpdGVtID09PSByZXF1aXJlbWVudCkge1xyXG4gICAgICAgICAgICBmb3VuZFJlcXVpcmVtZW50ID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBJZiBhIHJlcXVpcmVtZW50IGlzbid0IGZvdW5kIGFkZCB0aGF0IGEgbGlzdFxyXG4gICAgICAgIGlmICghZm91bmRSZXF1aXJlbWVudCkge1xyXG4gICAgICAgICAgbWlzc2luZ1JlcXVpcmVtZW50cy5wdXNoKHJlcXVpcmVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBSZXR1cm4gZmFpbCBtZXNzYWdlIHdpdGggbWlzc2luZyBpdGVtIHJlcXVpcmVtZW50c1xyXG4gICAgICBpZiAobWlzc2luZ1JlcXVpcmVtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHsnZmFpbCc6IG1pc3NpbmdSZXF1aXJlbWVudHN9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBJZiB3ZSBoYXZlIGFsbCBvdXIgaXRlbSByZXF1aXJlbWVudHMsIGNoZWNrIHRoZSB1c2VyJ3MgbWVzc2FnZVxyXG4gICAgLy8gdG8gc2VlIGlmIHdlIGZpbmQgYW55IG1hdGNoaW5nIGtleXdvcmRzXHJcbiAgICB0aGlzLmtleXdvcmRzLmZvckVhY2goZnVuY3Rpb24oa2V5d29yZCkge1xyXG4gICAgICBpZiAobWVzc2FnZS5pbmNsdWRlcyhrZXl3b3JkLnRvTG93ZXJDYXNlKCkpKSB7XHJcbiAgICAgICAgZm91bmRLZXl3b3JkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBLZXl3b3JkcyBoYXZlIGJlZW4gbWF0Y2hlZCBmcm9tIHRoZSB1c2VyIGlucHV0LCBzbyByZXR1cm4gcmVzdWx0cyBvZiBwcm9tcHRcclxuICAgIGlmIChmb3VuZEtleXdvcmQpIHtcclxuICAgICAgcmV0dXJuIHsnc3VjY2Vzcyc6IHRoaXMucmVzdWx0c307XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFByb21wdCBmcm9tICcuL3Byb21wdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb29tIHtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZSA9ICcnLCBnZXRUZXh0ID0gJycsIHByb21wdHMgPSBbXSwgcmVxdWlyZW1lbnRzID0gW10pIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmdldFRleHQgPSBnZXRUZXh0OyAvLyBUaGUgdGV4dCB0aGF0IGlzIGRpc3BsYXllZCB3aGVuIHRoZSByb29tIGlzIGVudGVyZWRcclxuICAgIHRoaXMucHJvbXB0cyA9IHByb21wdHM7IC8vIFdoYXQgYXJlIHRoZSBhY3Rpb25zIHRoYXQgd2UgY2FuIGRvIGluIHRoaXMgcm9vbT9cclxuICAgIHRoaXMucmVxdWlyZW1lbnRzID0gcmVxdWlyZW1lbnRzOyAvLyBBbnkgcmVxdWlyZW1lbnRzIChpdGVtcykgbmVlZGVkIHRvIGFjY2VzcyB0aGUgcm9vbVxyXG4gIH1cclxuXHJcbiAgYWRkUHJvbXB0KG5hbWUsIGtleXdvcmRzLCByZXN1bHRUZXh0cykge1xyXG4gICAgY29uc3QgcHJvbXB0ID0gbmV3IFByb21wdChuYW1lLCBrZXl3b3JkcywgcmVzdWx0VGV4dHMpO1xyXG4gICAgdGhpcy5wcm9tcHRzLnB1c2gocHJvbXB0KTtcclxuICAgIHJldHVybiB0aGlzLnByb21wdHM7XHJcbiAgfVxyXG5cclxuICBlbnRlcihpdGVtcyA9IFtdKSB7XHJcbiAgICBsZXQgcmVzdWx0VGV4dCA9ICcnO1xyXG4gICAgbGV0IG1ldEFsbFJlcXVpcmVtZW50cyA9IHRydWU7IC8vIENhbiB3ZSBlbnRlciB0aGUgcm9vbT9cclxuICAgIC8vIFRoZSByb29tIGlzIG5vdCBhY2Nlc3NpYmxlIGJ5IGRlZmF1bHRcclxuICAgIGlmICh0aGlzLnJlcXVpcmVtZW50cyA+IDApIHtcclxuICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIG1ldEFsbFJlcXVpcmVtZW50cyA9IGZhbHNlO1xyXG4gICAgICAgIC8vIFJldHVybiBtaXNzaW5nIHJlcXVpcmVtZW50IG1lc3NhZ2VzXHJcbiAgICAgICAgdGhpcy5yZXF1aXJlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAocmVxdWlyZW1lbnQpIHtcclxuICAgICAgICAgIHJlc3VsdFRleHQgKz0gYCR7cmVxdWlyZW1lbnQuZmFpbFRleHR9LiBgO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIENoZWNrIHRoZSByb29tJ3MgcmVxdWlyZW1lbnRzIGZvciBtYXRjaGluZyBpdGVtc1xyXG4gICAgICAgIHRoaXMucmVxdWlyZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKHJlcXVpcmVtZW50KSB7XHJcbiAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICBpZiAoaXRlbSA9PT0gcmVxdWlyZW1lbnQpIHtcclxuICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgaWYgKGZvdW5kID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBtZXRBbGxSZXF1aXJlbWVudHMgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gUmV0dXJuIGZhaWwgbWVzc2FnZXMgZm9yIG1pc3NpbmcgcmVxdWlyZW1lbnRzXHJcbiAgICAgICAgICAgIHJlc3VsdFRleHQgKz0gcmVxdWlyZW1lbnQuZmFpbFRleHQ7ICBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAobWV0QWxsUmVxdWlyZW1lbnRzID09PSB0cnVlKSB7XHJcbiAgICAgICAgICByZXN1bHRUZXh0ID0gdGhpcy5nZXRUZXh0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0VGV4dCA9IHRoaXMuZ2V0VGV4dDtcclxuICAgIH1cclxuICAgIC8vIFJldHVybiB0ZXh0IHdpdGggcmVzdWx0VGV4dHMgYW5kIHdoZXRoZXIgb3Igbm90IHJvb20gY291bGQgYmUgZW50ZXJlZFxyXG4gICAgcmV0dXJuIFtyZXN1bHRUZXh0LCBtZXRBbGxSZXF1aXJlbWVudHNdO1xyXG4gIH1cclxuXHJcbiAgZG9BY3Rpb24odmFsdWUpIHtcclxuICAgIC8vIEZvciBub3cgbGV0J3Mgb25seSBkbyBvbmUgYWN0aW9uIGF0IGEgdGltZVxyXG4gICAgbGV0IHJlc3VsdFRleHQgPSB7fTtcclxuICAgIGlmICh0aGlzLnByb21wdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJlc3VsdFRleHRbJ3RleHQnXSA9IFwiVGhlcmUgZG9lc24ndCBzZWVtIHRvIGJlIGFueSBhY3Rpb25zIHlvdSBjYW4gZG8gaW4gdGhpcyByb29tLlwiO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LnZhbHVlcyh0aGlzLnByb21wdHMpLmZvckVhY2goZnVuY3Rpb24oa2V5LCB2YWwpIHsgXHJcbiAgICAgIGlmICh2YWx1ZSA9PT0ga2V5KSB7XHJcbiAgICAgICAgcmVzdWx0VGV4dFsndGV4dCddID0gdmFsLnJlc3VsdFRleHRUZXh0OyAvLyBTdWNjZXNzZnVsIGFjdGlvbiByZXR1cm5pbmcgcmVzdWx0VGV4dGluZyB0ZXh0XHJcbiAgICAgICAgaWYgKHZhbC5yZXN1bHRUZXh0SXRlbXMgIT09IG51bGwpIHtcclxuICAgICAgICAgIHJlc3VsdFRleHRbJ2l0ZW1zJ10gPSB2YWwucmVzdWx0VGV4dEl0ZW1zOyAvLyBTdWNjZXNzZnVsIGFjdGlvbiByZXN1bHRUZXh0aW5nIGluIG5ldyBpdGVtc1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmFsLnJlc3VsdFRleHRSb29tICE9PSBudWxsKSB7XHJcbiAgICAgICAgICByZXN1bHRUZXh0WydyZXN1bHRUZXh0J10gPSB2YWwucmVzdWx0VGV4dFJvb207IC8vIFN1Y2Nlc3NmdWwgYWN0aW9uIHJlc3VsdFRleHRpbmcgaW4gYSBuZXcgcm9vbVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzdWx0VGV4dDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==