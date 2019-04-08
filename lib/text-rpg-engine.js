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
      }

      var _this = this;

      var currRoom = _this.getRoom(_this.Player.currentRoom); // Do we have actions that we can do in the room?


      if (_typeof(currRoom.prompts) !== undefined) {
        // Check every prompt action to see if it matches our input keywords
        // For now just get the first matching prompt and do that
        var foundPrompt = false;
        currRoom.prompts.forEach(function (prompt) {
          if (foundPrompt === false) {
            var matchingPromptResults = prompt.matchKeywords(message); // If we get a matching result back

            if (matchingPromptResults !== null) {
              foundPrompt = true;

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
                } // return;

              } // Failed to do prompt (missing item requirement)


              if ('fail' in matchingPromptResults) {
                console.log('fail is in matching prompt');

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
        console.log('UNDEFINED PROMPTS');

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
    }
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

    this.results = results; // Any pre-requistie items needed to do the prompt?

    this.requirements = requirements;
  } // Check if input message matches any prompt keywords


  _createClass(Prompt, [{
    key: "matchKeywords",
    value: function matchKeywords(message) {
      var items = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var foundKeyword = false;

      if (this.requirements.length > 0) {
        var missingRequirements = [];
        this.requirements.forEach(function (requirement) {
          var foundRequirement = false;
          items.forEach(function (item) {
            if (item === requirement) {
              foundRequirement = true;
            }
          });

          if (!foundRequirement) {
            missingRequirements.push(requirement);
          }
        });

        if (missingRequirements.length > 0) {
          return {
            'fail': missingRequirements
          };
        }
      }

      this.keywords.forEach(function (keyword) {
        if (message.includes(keyword.toLowerCase())) {
          foundKeyword = true;
        }
      });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGV4dC1ycGctZW5naW5lLy4vc3JjL2lucHV0LmpzIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS8uL3NyYy9pbnZlbnRvcnkuanMiLCJ3ZWJwYWNrOi8vdGV4dC1ycGctZW5naW5lLy4vc3JjL2l0ZW0uanMiLCJ3ZWJwYWNrOi8vdGV4dC1ycGctZW5naW5lLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvcHJvbXB0LmpzIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS8uL3NyYy9yb29tLmpzIl0sIm5hbWVzIjpbIkRpc3BsYXkiLCJodG1sIiwiZWxlbWVudElkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsIkdhbWUiLCJkYXRhcGF0aCIsInJvb21zIiwiaXRlbXMiLCJzdGFydFJvb20iLCJlbmRSb29tIiwiSW5wdXQiLCJQbGF5ZXIiLCJkaXNwbGF5VGV4dCIsImRhdGFQYXRoIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsIm5hbWUiLCJjdXJyZW50Um9vbSIsImkiLCJnZXRUZXh0IiwidW5kZWZpbmVkIiwic2hvdyIsInByb21wdHMiLCJyZXF1aXJlbWVudHMiLCJyb29tT2JqIiwicHVzaCIsInJvb21OYW1lIiwibmV3Um9vbXMiLCJmaWx0ZXIiLCJyb29tIiwiZmluZCIsIngiLCJpdGVtIiwiaXRlbU5hbWUiLCJuZXdJdGVtcyIsIm1lc3NhZ2UiLCJzZW5kIiwiZGVjaWRlUGF0aCIsInZhbHVlIiwicmVzZXRHYW1lIiwiX3RoaXMiLCJjdXJyUm9vbSIsImdldFJvb20iLCJmb3VuZFByb21wdCIsImZvckVhY2giLCJwcm9tcHQiLCJtYXRjaGluZ1Byb21wdFJlc3VsdHMiLCJtYXRjaEtleXdvcmRzIiwic3VjY2VzcyIsInN1Y2Nlc3NUZXh0IiwiaXRlbXNHaXZlbiIsIkFycmF5IiwicHJvdG90eXBlIiwiYXBwbHkiLCJpbnZlbnRvcnkiLCJyb29tVG9FbnRlciIsImVudGVyUm9vbVJlc3VsdFN1Y2Nlc3MiLCJlbnRlclJvb21SZXN1bHRUZXh0IiwiZW50ZXJSb29tIiwid2luIiwiYXBwZW5kIiwicmVzdWx0cyIsImZhaWxNZXNzYWdlIiwiZmFpbCIsInRvU3RyaW5nIiwiZGlzYWJsZSIsImVuYWJsZSIsImRpc2FibGVJbnB1dCIsImdhbWUiLCJkaXNhYmxlZCIsInRvTG93ZXJDYXNlIiwiSW52ZW50b3J5IiwibWFwIiwiYSIsIm5ld0ludmVudG9yeSIsIkl0ZW0iLCJyZXMiLCJlbnRlciIsImFkZEl0ZW0iLCJkcm9wSXRlbSIsInRleHQiLCJkb0FjdGlvbiIsIlByb21wdCIsImtleXdvcmRzIiwidiIsImZvdW5kS2V5d29yZCIsIm1pc3NpbmdSZXF1aXJlbWVudHMiLCJyZXF1aXJlbWVudCIsImZvdW5kUmVxdWlyZW1lbnQiLCJrZXl3b3JkIiwiaW5jbHVkZXMiLCJSb29tIiwicmVzdWx0VGV4dHMiLCJyZXN1bHRUZXh0IiwibWV0QWxsUmVxdWlyZW1lbnRzIiwiZmFpbFRleHQiLCJmb3VuZCIsIk9iamVjdCIsInZhbHVlcyIsImtleSIsInZhbCIsInJlc3VsdFRleHRUZXh0IiwicmVzdWx0VGV4dEl0ZW1zIiwicmVzdWx0VGV4dFJvb20iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7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QUE1QixFQUErQjtBQUM3QjhFLGtCQUFVLENBQUMsTUFBRCxDQUFWLEdBQXFCLCtEQUFyQjtBQUNEOztBQUNESSxZQUFNLENBQUNDLE1BQVAsQ0FBYyxLQUFLNUUsT0FBbkIsRUFBNEJzQixPQUE1QixDQUFvQyxVQUFTdUQsR0FBVCxFQUFjQyxHQUFkLEVBQW1CO0FBQ3JELFlBQUk5RCxLQUFLLEtBQUs2RCxHQUFkLEVBQW1CO0FBQ2pCTixvQkFBVSxDQUFDLE1BQUQsQ0FBVixHQUFxQk8sR0FBRyxDQUFDQyxjQUF6QixDQURpQixDQUN3Qjs7QUFDekMsY0FBSUQsR0FBRyxDQUFDRSxlQUFKLEtBQXdCLElBQTVCLEVBQWtDO0FBQ2hDVCxzQkFBVSxDQUFDLE9BQUQsQ0FBVixHQUFzQk8sR0FBRyxDQUFDRSxlQUExQixDQURnQyxDQUNXO0FBQzVDOztBQUNELGNBQUlGLEdBQUcsQ0FBQ0csY0FBSixLQUF1QixJQUEzQixFQUFpQztBQUMvQlYsc0JBQVUsQ0FBQyxZQUFELENBQVYsR0FBMkJPLEdBQUcsQ0FBQ0csY0FBL0IsQ0FEK0IsQ0FDZ0I7QUFDaEQ7QUFDRjtBQUNGLE9BVkQ7QUFXQSxhQUFPVixVQUFQO0FBQ0QiLCJmaWxlIjoidGV4dC1ycGctZW5naW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJ0ZXh0LXJwZy1lbmdpbmVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1widGV4dC1ycGctZW5naW5lXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInRleHQtcnBnLWVuZ2luZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXkge1xyXG5cclxuICBjb25zdHJ1Y3RvcihodG1sID0gJycsIGVsZW1lbnRJZCA9ICdkaXNwbGF5Jykge1xyXG4gICAgdGhpcy5odG1sID0gaHRtbDtcclxuICAgIHRoaXMuZWxlbWVudElkID0gZWxlbWVudElkO1xyXG4gIH1cclxuXHJcbiAgc2hvdyhodG1sID0gbnVsbCkge1xyXG4gICAgaWYgKGh0bWwgPT09IG51bGwpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLmlubmVySFRNTCA9IHRoaXMuaHRtbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICB0aGlzLmh0bWwgPSBodG1sO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXBwZW5kKGh0bWwpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5pbm5lckhUTUwgKz0gaHRtbDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IERpc3BsYXkgZnJvbSAnLi9kaXNwbGF5JztcclxuaW1wb3J0IElucHV0IGZyb20gJy4vaW5wdXQnO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IFJvb20gZnJvbSAnLi9yb29tJztcclxuaW1wb3J0IEludmVudG9yeSBmcm9tICcuL2ludmVudG9yeSc7XHJcbmltcG9ydCBJdGVtIGZyb20gJy4vaXRlbSc7XHJcbi8vIGltcG9ydCBJdGVtIGZyb20gJy4vaXRlbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcclxuXHJcbiAgY29uc3RydWN0b3IoZGF0YXBhdGggPSAnJywgcm9vbXMgPSBbXSwgaXRlbXMgPSBbXSwgc3RhcnRSb29tID0gJycsIGVuZFJvb20gPSAnJykge1xyXG4gICAgdGhpcy5EaXNwbGF5ID0gbmV3IERpc3BsYXkoKTtcclxuICAgIHRoaXMuSW5wdXQgPSBuZXcgSW5wdXQoKTtcclxuICAgIHRoaXMuZGF0YXBhdGggPSBkYXRhcGF0aDsgLy8gVE9ETzogQmUgYWJsZSB0byBoYXZlIGdhbWUgaW5pdGlhbGl6ZSBkYXRhIGZyb20gSlNPTiBmaWxlXHJcbiAgICB0aGlzLnJvb21zID0gcm9vbXM7IC8vIEFsbCB0aGUgcm9vbXMgaW4gb3VyIGdhbWVcclxuICAgIHRoaXMuaXRlbXMgPSBpdGVtczsgLy8gQWxsIHRoZSBpdGVtcyBpbiBvdXIgZ2FtZVxyXG4gICAgdGhpcy5zdGFydFJvb20gPSBzdGFydFJvb207IC8vIFdoaWNoIHJvb20gd2lsbCB0aGUgcGxheWVyIHN0YXJ0IGluXHJcbiAgICB0aGlzLmVuZFJvb20gPSBlbmRSb29tOyAvLyBXaGljaCByb29tIFxyXG4gICAgLy8gVE9ETzogQWxsb3cgcGxheWVycyB0byBnaXZlIHRoZWlyIGNoYXJhY3RlcnMgdGhlaXIgb3duIG5hbWVzIGxhdGVyXHJcbiAgICB0aGlzLlBsYXllciA9IG5ldyBQbGF5ZXIoc3RhcnRSb29tID0gdGhpcy5zdGFydFJvb20pOyBcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBsZXQgZGlzcGxheVRleHQ7XHJcbiAgICBpZiAodGhpcy5kYXRhUGF0aCAhPT0gJycpIHtcclxuICAgICAgLy8gdGhpcy5sb2FkRGF0YSh0aGlzLmRhdGFQYXRoKTtcclxuICAgICAgY29uc29sZS5sb2coJ0luaXRpYWxpemVkIGdhbWUgZnJvbTogJyArIHRoaXMuZGF0YXBhdGgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhcnRSb29tID09PSAnJyAmJiB0aGlzLnJvb21zLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5zdGFydFJvb20gPSB0aGlzLnJvb21zWzBdLm5hbWU7IFxyXG4gICAgICB0aGlzLlBsYXllci5zdGFydFJvb20gPSB0aGlzLnN0YXJ0Um9vbTtcclxuICAgICAgdGhpcy5QbGF5ZXIuY3VycmVudFJvb20gPSB0aGlzLlBsYXllci5zdGFydFJvb207XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5lbmRSb29tID09PSAnJyAmJiB0aGlzLnJvb21zLmxlbmd0aCA+IDEpIHtcclxuICAgICAgdGhpcy5lbmRSb29tID0gdGhpcy5yb29tc1t0aGlzLnJvb21zLmxlbmd0aCAtIDFdLm5hbWU7ICAgICAgXHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm9vbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMucm9vbXNbaV0ubmFtZSA9PT0gdGhpcy5zdGFydFJvb20pIHtcclxuICAgICAgICBkaXNwbGF5VGV4dCA9IHRoaXMucm9vbXNbaV0uZ2V0VGV4dDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGRpc3BsYXlUZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgZGlzcGxheVRleHQgPSAnTm8gc3RhcnRpbmcgcm9vbSB0ZXh0IGZvdW5kISc7XHJcbiAgICB9XHJcbiAgICB0aGlzLkRpc3BsYXkuc2hvdyhkaXNwbGF5VGV4dCk7XHJcbiAgfVxyXG5cclxuICBhZGRSb29tKG5hbWUsIGdldFRleHQsIHByb21wdHMgPSBbXSwgcmVxdWlyZW1lbnRzID0gW10pIHtcclxuICAgIGxldCByb29tT2JqID0gbmV3IFJvb20obmFtZSwgZ2V0VGV4dCwgcHJvbXB0cywgcmVxdWlyZW1lbnRzKTtcclxuICAgIHRoaXMucm9vbXMucHVzaChyb29tT2JqKTtcclxuICAgIHJldHVybiByb29tT2JqO1xyXG4gIH1cclxuXHJcbiAgZHJvcFJvb20ocm9vbU5hbWUpIHtcclxuICAgIGxldCBuZXdSb29tcyA9IHRoaXMucm9vbXMuZmlsdGVyKGZ1bmN0aW9uKHJvb20pIHtcclxuICAgICAgcmV0dXJuIHJvb20ubmFtZSAhPT0gcm9vbU5hbWU7XHJcbiAgICB9KTtcclxuICAgIHRoaXMucm9vbXMgPSBuZXdSb29tcztcclxuICAgIHJldHVybiB0aGlzLnJvb21zO1xyXG4gIH1cclxuXHJcbiAgZ2V0Um9vbShyb29tTmFtZSkge1xyXG4gICAgY29uc3Qgcm9vbSA9IHRoaXMucm9vbXMuZmluZCh4ID0+IHgubmFtZSA9PT0gcm9vbU5hbWUpO1xyXG4gICAgcmV0dXJuIHJvb207XHJcbiAgfVxyXG5cclxuICBhZGRJdGVtKG5hbWUsIGdldFRleHQpIHtcclxuICAgIGNvbnN0IGl0ZW0gPSBuZXcgSXRlbShuYW1lLCBnZXRUZXh0KTtcclxuICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcclxuICAgIHJldHVybiB0aGlzLml0ZW1zO1xyXG4gIH1cclxuXHJcbiAgZHJvcEl0ZW0oaXRlbU5hbWUpIHtcclxuICAgIGxldCBuZXdJdGVtcyA9IHRoaXMuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgcmV0dXJuIGl0ZW0ubmFtZSAhPT0gaXRlbU5hbWU7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuaXRlbXMgPSBuZXdJdGVtcztcclxuICAgIHJldHVybiB0aGlzLml0ZW1zO1xyXG4gIH1cclxuXHJcbiAgZ2V0SXRlbShpdGVtTmFtZSkge1xyXG4gICAgY29uc3QgaXRlbSA9IHRoaXMuaXRlbXMuZmluZCh4ID0+IHgubmFtZSA9PT0gaXRlbU5hbWUpO1xyXG4gICAgcmV0dXJuIGl0ZW07XHJcbiAgfVxyXG5cclxuICB1c2VyU2VuZChtZXNzYWdlKSB7XHJcbiAgICAvLyBPdXIgSW5wdXQgY2xhc3Mgd2lsbCBoYW5kbGUgY2xlYW5pbmcgLyBub3JtYWxpemluZyBzdHJpbmdzXHJcbiAgICB0aGlzLklucHV0LnNlbmQobWVzc2FnZSk7XHJcbiAgICB0aGlzLmRlY2lkZVBhdGgodGhpcy5JbnB1dC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBkZWNpZGVQYXRoKG1lc3NhZ2UpIHtcclxuICAgIGlmIChtZXNzYWdlID09PSAncmVzdGFydCcpIHtcclxuICAgICAgdGhpcy5yZXNldEdhbWUoKTtcclxuICAgIH1cclxuICAgIGNvbnN0IF90aGlzID0gdGhpcztcclxuICAgIGNvbnN0IGN1cnJSb29tID0gX3RoaXMuZ2V0Um9vbShfdGhpcy5QbGF5ZXIuY3VycmVudFJvb20pO1xyXG5cclxuICAgIC8vIERvIHdlIGhhdmUgYWN0aW9ucyB0aGF0IHdlIGNhbiBkbyBpbiB0aGUgcm9vbT9cclxuICBcclxuICAgIGlmICh0eXBlb2YgY3VyclJvb20ucHJvbXB0cyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIC8vIENoZWNrIGV2ZXJ5IHByb21wdCBhY3Rpb24gdG8gc2VlIGlmIGl0IG1hdGNoZXMgb3VyIGlucHV0IGtleXdvcmRzXHJcbiAgICAgIC8vIEZvciBub3cganVzdCBnZXQgdGhlIGZpcnN0IG1hdGNoaW5nIHByb21wdCBhbmQgZG8gdGhhdFxyXG4gICAgICBsZXQgZm91bmRQcm9tcHQgPSBmYWxzZTtcclxuICAgICAgY3VyclJvb20ucHJvbXB0cy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9tcHQpIHtcclxuICAgICAgICBpZiAoZm91bmRQcm9tcHQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICBjb25zdCBtYXRjaGluZ1Byb21wdFJlc3VsdHMgPSBwcm9tcHQubWF0Y2hLZXl3b3JkcyhtZXNzYWdlKTtcclxuICAgICAgICAgIC8vIElmIHdlIGdldCBhIG1hdGNoaW5nIHJlc3VsdCBiYWNrXHJcbiAgICAgICAgICBpZiAobWF0Y2hpbmdQcm9tcHRSZXN1bHRzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGZvdW5kUHJvbXB0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKCdzdWNjZXNzJyBpbiBtYXRjaGluZ1Byb21wdFJlc3VsdHMpIHtcclxuICAgICAgICAgICAgICBfdGhpcy5EaXNwbGF5LnNob3cobWF0Y2hpbmdQcm9tcHRSZXN1bHRzLnN1Y2Nlc3Muc3VjY2Vzc1RleHQpO1xyXG4gICAgICAgICAgICAgIC8vIEdldCBpdGVtcyBmcm9tIHByb21wdCBpZiBhbnkgYXJlIGZvdW5kXHJcbiAgICAgICAgICAgICAgaWYgKG1hdGNoaW5nUHJvbXB0UmVzdWx0cy5zdWNjZXNzLml0ZW1zR2l2ZW4gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoX3RoaXMuUGxheWVyLmludmVudG9yeS5pdGVtcywgbWF0Y2hpbmdQcm9tcHRSZXN1bHRzLnN1Y2Nlc3MuaXRlbXNHaXZlbik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8vIFN1Y2Nlc3NmdWwgcHJvbXB0IGxlYWRzIHRvIG5ldyByb29tIGVudHJhbmNlIChpZiBkZWZpbmVkIGluIHByb21wdClcclxuICAgICAgICAgICAgICBpZiAobWF0Y2hpbmdQcm9tcHRSZXN1bHRzLnN1Y2Nlc3Mucm9vbVRvRW50ZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVudGVyUm9vbVJlc3VsdFN1Y2Nlc3M7XHJcbiAgICAgICAgICAgICAgICBsZXQgZW50ZXJSb29tUmVzdWx0VGV4dDsgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgW2VudGVyUm9vbVJlc3VsdFRleHQsIGVudGVyUm9vbVJlc3VsdFN1Y2Nlc3NdID0gXHJcbiAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5QbGF5ZXIuZW50ZXJSb29tKHRoaXMuZ2V0Um9vbShtYXRjaGluZ1Byb21wdFJlc3VsdHMuc3VjY2Vzcy5yb29tVG9FbnRlcikpO1xyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHBsYXllcidzIHdvblxyXG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoaW5nUHJvbXB0UmVzdWx0cy5zdWNjZXNzLnJvb21Ub0VudGVyID09PSBfdGhpcy5lbmRSb29tKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChlbnRlclJvb21SZXN1bHRTdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU3VjY2Vzc2Z1bGx5IGVudGVyZWQgcm9vbSB0byB3aW4gZ2FtZVxyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLndpbigpO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIERpc3BsYXkgcmVzdWx0cyB0ZXh0IChmYWlsIHRvIGVudGVyIHdpbm5pbmcgcm9vbSlcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5EaXNwbGF5LmFwcGVuZChlbnRlclJvb21SZXN1bHRUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvLyByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gRmFpbGVkIHRvIGRvIHByb21wdCAobWlzc2luZyBpdGVtIHJlcXVpcmVtZW50KVxyXG4gICAgICAgICAgICBpZiAoJ2ZhaWwnIGluIG1hdGNoaW5nUHJvbXB0UmVzdWx0cykge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmYWlsIGlzIGluIG1hdGNoaW5nIHByb21wdCcpO1xyXG4gICAgICAgICAgICAgIF90aGlzLkRpc3BsYXkuc2hvdyhgJHtwcm9tcHQucmVzdWx0cy5mYWlsTWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgICBfdGhpcy5EaXNwbGF5LmFwcGVuZChgTWlzc2luZyByZXF1aXJlZCBpdGVtczogJHttYXRjaGluZ1Byb21wdFJlc3VsdHMuZmFpbC50b1N0cmluZygpfWApO1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoZm91bmRQcm9tcHQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIC8vIFBsYXllciBkaWRuJ3Qgc2F5IGFueSBrZXl3b3JkcyB0aGF0IHRyaWdnZXJlZCBhbnkgb2YgdGhlIGN1cnJlbnQgcm9vbSBwcm9tcHRzXHJcbiAgICAgICAgICAgIF90aGlzLkRpc3BsYXkuc2hvdyhgPHA+Tm8gYWN0aW9ucyBjb3VsZCBiZSBkb25lIGZyb206IFwiJHttZXNzYWdlfVwiLiBUcnkgc29tZXRoaW5nIGVsc2UuPC9wPlxyXG4gICAgICAgICAgICAke190aGlzLmdldFJvb20oX3RoaXMuUGxheWVyLmN1cnJlbnRSb29tKS5nZXRUZXh0fVxyXG4gICAgICAgICAgYCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIE5vIHByb21wdHMgZXhpc3QgZm9yIHRoZSBjdXJyZW50IHJvb21cclxuICAgICAgY29uc29sZS5sb2coJ1VOREVGSU5FRCBQUk9NUFRTJyk7XHJcbiAgICAgIF90aGlzLkRpc3BsYXkuc2hvdyhgPHA+VGhlcmUgZG9lc24ndCBzZWVtIHRvIGJlIGFueSBhY3Rpb25zIGF0IGFsbCB0aGF0IHlvdSBjYW4gZG8gaW4gdGhpcyByb29tLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtfdGhpcy5nZXRSb29tKF90aGlzLlBsYXllci5jdXJyZW50Um9vbSkuZ2V0VGV4dH1cclxuICAgICAgYCk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlLCB0aGlzLlBsYXllcik7XHJcblxyXG4gIH1cclxuXHJcbiAgZGlzYWJsZUlucHV0KCkge1xyXG4gICAgdGhpcy5JbnB1dC5kaXNhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBlbmFibGVJbnB1dCgpIHtcclxuICAgIHRoaXMuSW5wdXQuZW5hYmxlKCk7XHJcbiAgfVxyXG5cclxuICB3aW4oKSB7XHJcbiAgICAvLyBTaG93IGZpbmFsIHJvb20gdGV4dCAod2luIHRleHQpXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm9vbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMucm9vbXNbaV0ubmFtZSA9PT0gdGhpcy5lbmRSb29tKSB7XHJcbiAgICAgICAgdGhpcy5EaXNwbGF5LmFwcGVuZCh0aGlzLnJvb21zW2ldLmdldFRleHQpO1xyXG4gICAgICAgIHRoaXMuRGlzcGxheS5hcHBlbmQoJzxwPkdhbWUgZW5kLjwvcD4nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gRGlzYWJsZSBhbnkgbW9yZSB1c2VyIGlucHV0IGFmdGVyIHdpbm5pbmdcclxuICAgIHRoaXMuZGlzYWJsZUlucHV0KCk7XHJcbiAgfVxyXG5cclxuICByZXNldEdhbWUoKSB7XHJcbiAgICAvLyBSZXNldHMgcGxheWVyIHdpdGggYmxhbmsgaW52ZW50b3J5IGFuZCBiYWNrIHRvIHN0YXJ0aW5nIHJvb21cclxuICAgIHRoaXMuUGxheWVyLmludmVudG9yeSA9IG5ldyBJbnZlbnRvcnkoKTtcclxuICAgIHRoaXMuUGxheWVyLmN1cnJlbnRSb29tID0gdGhpcy5zdGFydFJvb207XHJcbiAgICBjb25zdCByb29tID0gdGhpcy5nZXRSb29tKHRoaXMuc3RhcnRSb29tKTtcclxuICAgIHRoaXMuRGlzcGxheS5zaG93KHJvb20uZ2V0VGV4dCk7XHJcbiAgICB0aGlzLklucHV0LmVuYWJsZSgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xyXG5cclxuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnYW1lO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRpc2FibGVkID0gZmFsc2UsIHZhbHVlID0gJycsIGVsZW1lbnRJZCA9ICdpbnB1dCcpIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMuZWxlbWVudElkID0gZWxlbWVudElkO1xyXG4gIH1cclxuXHJcbiAgZW5hYmxlKCkge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0JykuZGlzYWJsZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGRpc2FibGUoKSB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dCcpLmRpc2FibGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHNlbmQodmFsdWUpIHtcclxuICAgIC8vIE5vcm1hbGl6ZSBpbnB1dCB2YWx1ZXMgKGlmIGRlc2lyZWQpXHJcbiAgICB2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEludmVudG9yeSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGl0ZW1zID0gW10pIHtcclxuICAgIHRoaXMuaXRlbXMgPSBpdGVtcztcclxuICB9XHJcbiAgXHJcbiAgZXhhbWluZShpdGVtTmFtZSA9IG51bGwpIHtcclxuICAgIC8vIElmIHdlJ3JlIGV4YW1pbmluZyBhbiBpdGVtXHJcbiAgICBpZiAoaXRlbU5hbWUgIT09IG51bGwpIHtcclxuICAgICAgLy8gRGlzcGxheSBpdGVtIGdldFRleHRcclxuICAgICAgcmV0dXJuIHRoaXMuaXRlbXNbaXRlbU5hbWVdLmdldFRleHQ7XHJcbiAgICB9XHJcbiAgICAvLyBJZiB3ZSdyZSBleGFtaW5pbmcgaW52ZW50b3J5LCBwcmludCBvdXRcclxuICAgIC8vIGxpc3Qgb2YgYWxsIHRoZSBpdGVtcy5cclxuICAgIHJldHVybiB0aGlzLml0ZW1zLm1hcChhID0+IGEubmFtZSk7XHJcbiAgfVxyXG5cclxuICBhZGRJdGVtKGl0ZW0pIHtcclxuICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcclxuICAgIHJldHVybiB0aGlzLml0ZW1zO1xyXG4gIH1cclxuXHJcbiAgZHJvcEl0ZW0oaXRlbU5hbWUpIHtcclxuICAgIGxldCBuZXdJbnZlbnRvcnkgPSB0aGlzLml0ZW1zLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgIHJldHVybiBpdGVtLm5hbWUgIT09IGl0ZW1OYW1lO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLml0ZW1zID0gbmV3SW52ZW50b3J5O1xyXG4gICAgcmV0dXJuIHRoaXMuaXRlbXM7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW0ge1xyXG4gICBcclxuICBjb25zdHJ1Y3RvcihuYW1lID0gJycsIGdldFRleHQgPSAnJykge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuZ2V0VGV4dCA9IGdldFRleHQ7IC8vIFRleHQgZGlzcGxheWVkIHdoZW4gaXRlbSBpcyBnb3R0ZW5cclxuICB9XHJcblxyXG4gIGdldCgpIHtcclxuICAgIHJldHVybiB0aGlzLmdldFRleHQ7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBJbnZlbnRvcnkgZnJvbSAnLi9pbnZlbnRvcnknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZSA9ICcnLCBpbnZlbnRvcnkgPSBuZXcgSW52ZW50b3J5KCksIGN1cnJlbnRSb29tID0gJycsIHN0YXJ0Um9vbSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIGlmICh0aGlzLm5hbWUgPT09ICcnKSB7XHJcbiAgICAgIHRoaXMubmFtZSA9ICdwbGF5ZXInO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pbnZlbnRvcnkgPSBpbnZlbnRvcnk7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50Um9vbSA9PT0gJycpIHtcclxuICAgICAgdGhpcy5jdXJyZW50Um9vbSA9IHRoaXMuc3RhcnRSb29tO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdGFydFJvb20gPSBzdGFydFJvb207XHJcbiAgfVxyXG4gIFxyXG4gIGVudGVyUm9vbShyb29tKSB7XHJcbiAgICBjb25zdCByZXMgPSByb29tLmVudGVyKHRoaXMuaW52ZW50b3J5Lml0ZW1zKTtcclxuICAgIGlmIChyZXNbMV0gPT09IGZhbHNlKSB7XHJcbiAgICAgIC8vIFBsYXllciBkaWQgbm90IGhhdmUgcmVxdWlyZWQgaXRlbXMgdG8gZW50ZXIgdGhlIHJvb21cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIEVudGVyZWQgcm9vbSBzdWNjZXNzZnVsbHlcclxuICAgICAgdGhpcy5jdXJyZW50Um9vbSA9IHJvb20ubmFtZTsgXHJcbiAgICB9XHJcbiAgICAvLyBSZXR1cm4gZ2FtZSB0ZXh0IGFuZCB3aGV0aGVyIG9yIG5vdCB3ZSB3ZXJlIGFibGUgdG8gZW50ZXIgcm9vbVxyXG4gICAgcmV0dXJuIFtyZXNbMF0sIHJlc1sxXV07XHJcbiAgfVxyXG5cclxuICBnZXRJdGVtKGl0ZW0pIHtcclxuICAgIHRoaXMuaW52ZW50b3J5LmFkZEl0ZW0oaXRlbSk7XHJcbiAgICByZXR1cm4gdGhpcy5pbnZlbnRvcnk7XHJcbiAgfVxyXG5cclxuICBkcm9wSXRlbShpdGVtKSB7XHJcbiAgICB0aGlzLmludmVudG9yeS5kcm9wSXRlbShpdGVtKTtcclxuICAgIHJldHVybiB0aGlzLmludmVudG9yeTtcclxuICB9XHJcblxyXG4gIGRvQWN0aW9uKHRleHQsIGl0ZW0gPSBudWxsKSB7XHJcbiAgICAvLyBObyBpdGVtIHBhc3NlZCwgY2hlY2sgcm9vbSBwcm9tcHRzIGZvciBhY3Rpb25zXHJcbiAgICBpZiAoaXRlbSA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50Um9vbS5kb0FjdGlvbih0ZXh0KTtcclxuICAgIH1cclxuICAgIC8vIERvaW5nIGFjdGlvbiBvbiBpdGVtLCBjaGVjayBpdGVtIHByb21wdHNcclxuICAgIHJldHVybiBpdGVtLmRvQWN0aW9uKHRleHQpO1xyXG4gIH1cclxufVxyXG4gIFxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9tcHQge1xyXG4gICBcclxuICBjb25zdHJ1Y3RvcihuYW1lID0gJycsIGtleXdvcmRzID0gW10sIHJlc3VsdHMgPSB7fSwgcmVxdWlyZW1lbnRzID0gW10pIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAvLyBLZXl3b3JkcyB0aGF0IGNhbiB0cmlnZ2VyIHRoZSBwcm9tcHQgKG1ha2UgYWxsIGxvd2VyLWNhc2UgYnkgZGVmYXVsdClcclxuICAgIHRoaXMua2V5d29yZHMgPSBrZXl3b3Jkcy5tYXAoZnVuY3Rpb24odikgeyByZXR1cm4gdi50b0xvd2VyQ2FzZSgpO30pOyBcclxuICAgIC8vIFJlc3VsdHMgdGhhdCBvY2N1ciB3aGVuIHRoaXMgcHJvbXB0IGlzIHN1Y2Nlc3NmdWxseSB0cmlnZ2VyZWQ7IFxyXG4gICAgLy8gdGhlIHJlc3VsdCBrZXlzIGNvbXByaXNlIG9mIOKAnHN1Y2Nlc3NUZXh04oCdIChyZXF1aXJlZCksIFwiZmFpbFRleHRcIiAob3B0aW9uYWwpLFxyXG4gICAgLy8g4oCcaXRlbXNSZXF1aXJlZOKAnSAob3B0aW9uYWwpLCAvLyBhbmQg4oCccm9vbVRvRW50ZXJcIuKAnSBcclxuICAgIHRoaXMucmVzdWx0cyA9IHJlc3VsdHM7IFxyXG4gICAgLy8gQW55IHByZS1yZXF1aXN0aWUgaXRlbXMgbmVlZGVkIHRvIGRvIHRoZSBwcm9tcHQ/XHJcbiAgICB0aGlzLnJlcXVpcmVtZW50cyA9IHJlcXVpcmVtZW50czsgXHJcbiAgfVxyXG5cclxuICAvLyBDaGVjayBpZiBpbnB1dCBtZXNzYWdlIG1hdGNoZXMgYW55IHByb21wdCBrZXl3b3Jkc1xyXG4gIG1hdGNoS2V5d29yZHMobWVzc2FnZSwgaXRlbXMgPSBbXSkge1xyXG4gICAgbGV0IGZvdW5kS2V5d29yZCA9IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMucmVxdWlyZW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IG1pc3NpbmdSZXF1aXJlbWVudHMgPSBbXTtcclxuICAgICAgdGhpcy5yZXF1aXJlbWVudHMuZm9yRWFjaChmdW5jdGlvbihyZXF1aXJlbWVudCkge1xyXG4gICAgICAgIGxldCBmb3VuZFJlcXVpcmVtZW50ID0gZmFsc2U7XHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgICBpZiAoaXRlbSA9PT0gcmVxdWlyZW1lbnQpIHtcclxuICAgICAgICAgICAgZm91bmRSZXF1aXJlbWVudCA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKCFmb3VuZFJlcXVpcmVtZW50KSB7XHJcbiAgICAgICAgICBtaXNzaW5nUmVxdWlyZW1lbnRzLnB1c2gocmVxdWlyZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChtaXNzaW5nUmVxdWlyZW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICByZXR1cm4geydmYWlsJzogbWlzc2luZ1JlcXVpcmVtZW50c307XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMua2V5d29yZHMuZm9yRWFjaChmdW5jdGlvbihrZXl3b3JkKSB7XHJcbiAgICAgIGlmIChtZXNzYWdlLmluY2x1ZGVzKGtleXdvcmQudG9Mb3dlckNhc2UoKSkpIHtcclxuICAgICAgICBmb3VuZEtleXdvcmQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmIChmb3VuZEtleXdvcmQpIHtcclxuICAgICAgcmV0dXJuIHsnc3VjY2Vzcyc6IHRoaXMucmVzdWx0c307XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFByb21wdCBmcm9tICcuL3Byb21wdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb29tIHtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZSA9ICcnLCBnZXRUZXh0ID0gJycsIHByb21wdHMgPSBbXSwgcmVxdWlyZW1lbnRzID0gW10pIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmdldFRleHQgPSBnZXRUZXh0OyAvLyBUaGUgdGV4dCB0aGF0IGlzIGRpc3BsYXllZCB3aGVuIHRoZSByb29tIGlzIGVudGVyZWRcclxuICAgIHRoaXMucHJvbXB0cyA9IHByb21wdHM7IC8vIFdoYXQgYXJlIHRoZSBhY3Rpb25zIHRoYXQgd2UgY2FuIGRvIGluIHRoaXMgcm9vbT9cclxuICAgIHRoaXMucmVxdWlyZW1lbnRzID0gcmVxdWlyZW1lbnRzOyAvLyBBbnkgcmVxdWlyZW1lbnRzIChpdGVtcykgbmVlZGVkIHRvIGFjY2VzcyB0aGUgcm9vbVxyXG4gIH1cclxuXHJcbiAgYWRkUHJvbXB0KG5hbWUsIGtleXdvcmRzLCByZXN1bHRUZXh0cykge1xyXG4gICAgY29uc3QgcHJvbXB0ID0gbmV3IFByb21wdChuYW1lLCBrZXl3b3JkcywgcmVzdWx0VGV4dHMpO1xyXG4gICAgdGhpcy5wcm9tcHRzLnB1c2gocHJvbXB0KTtcclxuICAgIHJldHVybiB0aGlzLnByb21wdHM7XHJcbiAgfVxyXG5cclxuICBlbnRlcihpdGVtcyA9IFtdKSB7XHJcbiAgICBsZXQgcmVzdWx0VGV4dCA9ICcnO1xyXG4gICAgbGV0IG1ldEFsbFJlcXVpcmVtZW50cyA9IHRydWU7IC8vIENhbiB3ZSBlbnRlciB0aGUgcm9vbT9cclxuICAgIC8vIFRoZSByb29tIGlzIG5vdCBhY2Nlc3NpYmxlIGJ5IGRlZmF1bHRcclxuICAgIGlmICh0aGlzLnJlcXVpcmVtZW50cyA+IDApIHtcclxuICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIG1ldEFsbFJlcXVpcmVtZW50cyA9IGZhbHNlO1xyXG4gICAgICAgIC8vIFJldHVybiBtaXNzaW5nIHJlcXVpcmVtZW50IG1lc3NhZ2VzXHJcbiAgICAgICAgdGhpcy5yZXF1aXJlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAocmVxdWlyZW1lbnQpIHtcclxuICAgICAgICAgIHJlc3VsdFRleHQgKz0gYCR7cmVxdWlyZW1lbnQuZmFpbFRleHR9LiBgO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIENoZWNrIHRoZSByb29tJ3MgcmVxdWlyZW1lbnRzIGZvciBtYXRjaGluZyBpdGVtc1xyXG4gICAgICAgIHRoaXMucmVxdWlyZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKHJlcXVpcmVtZW50KSB7XHJcbiAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICBpZiAoaXRlbSA9PT0gcmVxdWlyZW1lbnQpIHtcclxuICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgaWYgKGZvdW5kID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBtZXRBbGxSZXF1aXJlbWVudHMgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gUmV0dXJuIGZhaWwgbWVzc2FnZXMgZm9yIG1pc3NpbmcgcmVxdWlyZW1lbnRzXHJcbiAgICAgICAgICAgIHJlc3VsdFRleHQgKz0gcmVxdWlyZW1lbnQuZmFpbFRleHQ7ICBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAobWV0QWxsUmVxdWlyZW1lbnRzID09PSB0cnVlKSB7XHJcbiAgICAgICAgICByZXN1bHRUZXh0ID0gdGhpcy5nZXRUZXh0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0VGV4dCA9IHRoaXMuZ2V0VGV4dDtcclxuICAgIH1cclxuICAgIC8vIFJldHVybiB0ZXh0IHdpdGggcmVzdWx0VGV4dHMgYW5kIHdoZXRoZXIgb3Igbm90IHJvb20gY291bGQgYmUgZW50ZXJlZFxyXG4gICAgcmV0dXJuIFtyZXN1bHRUZXh0LCBtZXRBbGxSZXF1aXJlbWVudHNdO1xyXG4gIH1cclxuXHJcbiAgZG9BY3Rpb24odmFsdWUpIHtcclxuICAgIC8vIEZvciBub3cgbGV0J3Mgb25seSBkbyBvbmUgYWN0aW9uIGF0IGEgdGltZVxyXG4gICAgbGV0IHJlc3VsdFRleHQgPSB7fTtcclxuICAgIGlmICh0aGlzLnByb21wdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJlc3VsdFRleHRbJ3RleHQnXSA9IFwiVGhlcmUgZG9lc24ndCBzZWVtIHRvIGJlIGFueSBhY3Rpb25zIHlvdSBjYW4gZG8gaW4gdGhpcyByb29tLlwiO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LnZhbHVlcyh0aGlzLnByb21wdHMpLmZvckVhY2goZnVuY3Rpb24oa2V5LCB2YWwpIHsgXHJcbiAgICAgIGlmICh2YWx1ZSA9PT0ga2V5KSB7XHJcbiAgICAgICAgcmVzdWx0VGV4dFsndGV4dCddID0gdmFsLnJlc3VsdFRleHRUZXh0OyAvLyBTdWNjZXNzZnVsIGFjdGlvbiByZXR1cm5pbmcgcmVzdWx0VGV4dGluZyB0ZXh0XHJcbiAgICAgICAgaWYgKHZhbC5yZXN1bHRUZXh0SXRlbXMgIT09IG51bGwpIHtcclxuICAgICAgICAgIHJlc3VsdFRleHRbJ2l0ZW1zJ10gPSB2YWwucmVzdWx0VGV4dEl0ZW1zOyAvLyBTdWNjZXNzZnVsIGFjdGlvbiByZXN1bHRUZXh0aW5nIGluIG5ldyBpdGVtc1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmFsLnJlc3VsdFRleHRSb29tICE9PSBudWxsKSB7XHJcbiAgICAgICAgICByZXN1bHRUZXh0WydyZXN1bHRUZXh0J10gPSB2YWwucmVzdWx0VGV4dFJvb207IC8vIFN1Y2Nlc3NmdWwgYWN0aW9uIHJlc3VsdFRleHRpbmcgaW4gYSBuZXcgcm9vbVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzdWx0VGV4dDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==