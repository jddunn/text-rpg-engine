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

              var enterRoomResultSuccess;
              var enterRoomResultText;

              var _this$Player$enterRoo = _this.Player.enterRoom(this.getRoom(matchingPromptResults.room));

              var _this$Player$enterRoo2 = _slicedToArray(_this$Player$enterRoo, 2);

              enterRoomResultText = _this$Player$enterRoo2[0];
              enterRoomResultSuccess = _this$Player$enterRoo2[1];

              if (matchingPromptResults.room === _this.endRoom) {
                if (enterRoomResultSuccess) {
                  // Successfully entered room to win game
                  _this.win();
                } else {
                  // Display results text (fail to enter winning room)
                  _this.Display.append(enterRoomResultText);
                }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGV4dC1ycGctZW5naW5lLy4vc3JjL2lucHV0LmpzIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS8uL3NyYy9pbnZlbnRvcnkuanMiLCJ3ZWJwYWNrOi8vdGV4dC1ycGctZW5naW5lLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvcHJvbXB0LmpzIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS8uL3NyYy9yb29tLmpzIl0sIm5hbWVzIjpbIkRpc3BsYXkiLCJodG1sIiwiZWxlbWVudElkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsIkdhbWUiLCJkYXRhcGF0aCIsInJvb21zIiwic3RhcnRSb29tIiwiZW5kUm9vbSIsIklucHV0IiwiUGxheWVyIiwiZGlzcGxheVRleHQiLCJkYXRhUGF0aCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJuYW1lIiwiY3VycmVudFJvb20iLCJpIiwiZ2V0VGV4dCIsInVuZGVmaW5lZCIsInNob3ciLCJwcm9tcHRzIiwicmVxdWlyZW1lbnRzIiwicm9vbU9iaiIsInB1c2giLCJyb29tTmFtZSIsIm5ld1Jvb21zIiwiZmlsdGVyIiwicm9vbSIsImZpbmQiLCJ4IiwibWVzc2FnZSIsInNlbmQiLCJkZWNpZGVQYXRoIiwidmFsdWUiLCJyZXNldEdhbWUiLCJfdGhpcyIsImN1cnJSb29tIiwiZ2V0Um9vbSIsImZvckVhY2giLCJwcm9tcHQiLCJtYXRjaGluZ1Byb21wdFJlc3VsdHMiLCJtYXRjaEtleXdvcmRzIiwidGV4dCIsIml0ZW1zIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJhcHBseSIsImludmVudG9yeSIsImVudGVyUm9vbVJlc3VsdFN1Y2Nlc3MiLCJlbnRlclJvb21SZXN1bHRUZXh0IiwiZW50ZXJSb29tIiwid2luIiwiYXBwZW5kIiwiZGlzYWJsZSIsImVuYWJsZSIsImRpc2FibGVJbnB1dCIsImdhbWUiLCJkaXNhYmxlZCIsInRvTG93ZXJDYXNlIiwiSW52ZW50b3J5IiwiaXRlbU5hbWUiLCJtYXAiLCJhIiwiaXRlbSIsIm5ld0ludmVudG9yeSIsInJlcyIsImVudGVyIiwiYWRkSXRlbSIsImRyb3BJdGVtIiwiZG9BY3Rpb24iLCJQcm9tcHQiLCJrZXl3b3JkcyIsInJlc3VsdHMiLCJ2IiwiZm91bmQiLCJrZXl3b3JkIiwiaW5jbHVkZXMiLCJSb29tIiwicmVzdWx0VGV4dHMiLCJyZXN1bHRUZXh0IiwibWV0QWxsUmVxdWlyZW1lbnRzIiwicmVxdWlyZW1lbnQiLCJmYWlsVGV4dCIsIk9iamVjdCIsInZhbHVlcyIsImtleSIsInZhbCIsInJlc3VsdFRleHRUZXh0IiwicmVzdWx0VGV4dEl0ZW1zIiwicmVzdWx0VGV4dFJvb20iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztB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R0FBRyxDQUFDQyxjQUF6QixDQURpQixDQUN3Qjs7QUFDekMsY0FBSUQsR0FBRyxDQUFDRSxlQUFKLEtBQXdCLElBQTVCLEVBQWtDO0FBQ2hDVCxzQkFBVSxDQUFDLE9BQUQsQ0FBVixHQUFzQk8sR0FBRyxDQUFDRSxlQUExQixDQURnQyxDQUNXO0FBQzVDOztBQUNELGNBQUlGLEdBQUcsQ0FBQ0csY0FBSixLQUF1QixJQUEzQixFQUFpQztBQUMvQlYsc0JBQVUsQ0FBQyxZQUFELENBQVYsR0FBMkJPLEdBQUcsQ0FBQ0csY0FBL0IsQ0FEK0IsQ0FDZ0I7QUFDaEQ7QUFDRjtBQUNGLE9BVkQ7QUFXQSxhQUFPVixVQUFQO0FBQ0QiLCJmaWxlIjoidGV4dC1ycGctZW5naW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJ0ZXh0LXJwZy1lbmdpbmVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1widGV4dC1ycGctZW5naW5lXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInRleHQtcnBnLWVuZ2luZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXkge1xyXG5cclxuICBjb25zdHJ1Y3RvcihodG1sID0gJycsIGVsZW1lbnRJZCA9ICdkaXNwbGF5Jykge1xyXG4gICAgdGhpcy5odG1sID0gaHRtbDtcclxuICAgIHRoaXMuZWxlbWVudElkID0gZWxlbWVudElkO1xyXG4gIH1cclxuXHJcbiAgc2hvdyhodG1sID0gbnVsbCkge1xyXG4gICAgaWYgKGh0bWwgPT09IG51bGwpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLmlubmVySFRNTCA9IHRoaXMuaHRtbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICB0aGlzLmh0bWwgPSBodG1sO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXBwZW5kKGh0bWwpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5pbm5lckhUTUwgKz0gaHRtbDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IERpc3BsYXkgZnJvbSAnLi9kaXNwbGF5JztcclxuaW1wb3J0IElucHV0IGZyb20gJy4vaW5wdXQnO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IFJvb20gZnJvbSAnLi9yb29tJztcclxuaW1wb3J0IEludmVudG9yeSBmcm9tICcuL2ludmVudG9yeSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcclxuXHJcbiAgY29uc3RydWN0b3IoZGF0YXBhdGggPSAnJywgcm9vbXMgPSBbXSwgc3RhcnRSb29tID0gJycsIGVuZFJvb20gPSAnJykge1xyXG4gICAgdGhpcy5EaXNwbGF5ID0gbmV3IERpc3BsYXkoKTtcclxuICAgIHRoaXMuSW5wdXQgPSBuZXcgSW5wdXQoKTtcclxuICAgIHRoaXMuZGF0YXBhdGggPSBkYXRhcGF0aDsgLy8gVE9ETzogQmUgYWJsZSB0byBoYXZlIGdhbWUgaW5pdGlhbGl6ZSBkYXRhIGZyb20gSlNPTiBmaWxlXHJcbiAgICB0aGlzLnJvb21zID0gcm9vbXM7IC8vIEFsbCB0aGUgcm9vbXMgaW5zaWRlIG91ciBnYW1lXHJcbiAgICB0aGlzLnN0YXJ0Um9vbSA9IHN0YXJ0Um9vbTsgLy8gV2hpY2ggcm9vbSB3aWxsIHRoZSBwbGF5ZXIgc3RhcnQgaW5cclxuICAgIHRoaXMuZW5kUm9vbSA9IGVuZFJvb207IC8vIFdoaWNoIHJvb20gXHJcbiAgICAvLyBUT0RPOiBBbGxvdyBwbGF5ZXJzIHRvIGdpdmUgdGhlaXIgY2hhcmFjdGVycyB0aGVpciBvd24gbmFtZXMgbGF0ZXJcclxuICAgIHRoaXMuUGxheWVyID0gbmV3IFBsYXllcihzdGFydFJvb20gPSB0aGlzLnN0YXJ0Um9vbSk7IFxyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIGxldCBkaXNwbGF5VGV4dDtcclxuICAgIGlmICh0aGlzLmRhdGFQYXRoICE9PSAnJykge1xyXG4gICAgICAvLyB0aGlzLmxvYWREYXRhKHRoaXMuZGF0YVBhdGgpO1xyXG4gICAgICBjb25zb2xlLmxvZygnSW5pdGlhbGl6ZWQgZ2FtZSBmcm9tOiAnICsgdGhpcy5kYXRhcGF0aCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGFydFJvb20gPT09ICcnICYmIHRoaXMucm9vbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnN0YXJ0Um9vbSA9IHRoaXMucm9vbXNbMF0ubmFtZTsgXHJcbiAgICAgIHRoaXMuUGxheWVyLnN0YXJ0Um9vbSA9IHRoaXMuc3RhcnRSb29tO1xyXG4gICAgICB0aGlzLlBsYXllci5jdXJyZW50Um9vbSA9IHRoaXMuUGxheWVyLnN0YXJ0Um9vbTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmVuZFJvb20gPT09ICcnICYmIHRoaXMucm9vbXMubGVuZ3RoID4gMSkge1xyXG4gICAgICB0aGlzLmVuZFJvb20gPSB0aGlzLnJvb21zW3RoaXMucm9vbXMubGVuZ3RoIC0gMV0ubmFtZTsgICAgICBcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb29tcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy5yb29tc1tpXS5uYW1lID09PSB0aGlzLnN0YXJ0Um9vbSkge1xyXG4gICAgICAgIGRpc3BsYXlUZXh0ID0gdGhpcy5yb29tc1tpXS5nZXRUZXh0O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoZGlzcGxheVRleHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBkaXNwbGF5VGV4dCA9ICdObyBzdGFydGluZyByb29tIHRleHQgZm91bmQhJztcclxuICAgIH1cclxuICAgIHRoaXMuRGlzcGxheS5zaG93KGRpc3BsYXlUZXh0KTtcclxuICB9XHJcblxyXG4gIGFkZFJvb20obmFtZSwgZ2V0VGV4dCwgcHJvbXB0cyA9IFtdLCByZXF1aXJlbWVudHMgPSBbXSkge1xyXG4gICAgbGV0IHJvb21PYmogPSBuZXcgUm9vbShuYW1lLCBnZXRUZXh0LCBwcm9tcHRzLCByZXF1aXJlbWVudHMpO1xyXG4gICAgdGhpcy5yb29tcy5wdXNoKHJvb21PYmopO1xyXG4gICAgcmV0dXJuIHJvb21PYmo7XHJcbiAgfVxyXG5cclxuICBkcm9wUm9vbShyb29tTmFtZSkge1xyXG4gICAgbGV0IG5ld1Jvb21zID0gdGhpcy5yb29tcy5maWx0ZXIoZnVuY3Rpb24ocm9vbSkge1xyXG4gICAgICByZXR1cm4gcm9vbS5uYW1lICE9PSByb29tTmFtZTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5yb29tcyA9IG5ld1Jvb21zO1xyXG4gICAgcmV0dXJuIHRoaXMucm9vbXM7XHJcbiAgfVxyXG5cclxuICBnZXRSb29tKHJvb21OYW1lKSB7XHJcbiAgICBjb25zdCByb29tID0gdGhpcy5yb29tcy5maW5kKHggPT4geC5uYW1lID09PSByb29tTmFtZSk7XHJcbiAgICByZXR1cm4gcm9vbTtcclxuICB9XHJcblxyXG4gIHVzZXJTZW5kKG1lc3NhZ2UpIHtcclxuICAgIC8vIE91ciBJbnB1dCBjbGFzcyB3aWxsIGhhbmRsZSBjbGVhbmluZyAvIG5vcm1hbGl6aW5nIHN0cmluZ3NcclxuICAgIHRoaXMuSW5wdXQuc2VuZChtZXNzYWdlKTtcclxuICAgIHRoaXMuZGVjaWRlUGF0aCh0aGlzLklucHV0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIGRlY2lkZVBhdGgobWVzc2FnZSkge1xyXG4gICAgaWYgKG1lc3NhZ2UgPT09ICdyZXN0YXJ0Jykge1xyXG4gICAgICB0aGlzLnJlc2V0R2FtZSgpO1xyXG4gICAgfVxyXG4gICAgLy8gQ2hlY2sgdG8gc2VlIGlmIGFuIGl0ZW0gbmFtZSB3YXMgaW4gdGhlIG1lc3NhZ2VcclxuICAgIC8vIGlmIChtZXNzYWdlLnNwbGl0KCkpXHJcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XHJcbiAgICBjb25zdCBjdXJyUm9vbSA9IF90aGlzLmdldFJvb20oX3RoaXMuUGxheWVyLmN1cnJlbnRSb29tKTtcclxuICAgIGlmICh0eXBlb2YgY3VyclJvb20ucHJvbXB0cyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGN1cnJSb29tLnByb21wdHMuZm9yRWFjaChmdW5jdGlvbiAocHJvbXB0KSB7XHJcbiAgICAgICAgY29uc3QgbWF0Y2hpbmdQcm9tcHRSZXN1bHRzID0gcHJvbXB0Lm1hdGNoS2V5d29yZHMobWVzc2FnZSk7XHJcbiAgICAgICAgaWYgKG1hdGNoaW5nUHJvbXB0UmVzdWx0cyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgLy8gRm9yIG5vdyBqdXN0IGdldCB0aGUgZmlyc3QgbWF0Y2hpbmcgcmVzdWx0IGFuZCBzaG93IHRoYXRcclxuICAgICAgICAgIC8vIChvbmx5IG9uZSBwcm9tcHQgLyBhY3Rpb24gcGVyIG1lc3NhZ2UgaXMgc2VudCBpcyBzdXBwb3J0ZWQpXHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnRk9VTkQgTUFUQ0hJTkcgUFJPTVBUIFJFU1VMVFM6ICcsIG1hdGNoaW5nUHJvbXB0UmVzdWx0cyk7XHJcbiAgICAgICAgICBfdGhpcy5EaXNwbGF5LnNob3cobWF0Y2hpbmdQcm9tcHRSZXN1bHRzLnRleHQpO1xyXG4gICAgICAgICAgLy8gR2V0IGl0ZW1zIGZyb20gcHJvbXB0IGlmIGFueSBhcmUgZm91bmRcclxuICAgICAgICAgIC8vIE1lcmdlIHRoZSBzZWNvbmQgYXJyYXkgaW50byB0aGUgZmlyc3Qgb25lXHJcbiAgICAgICAgICBpZiAobWF0Y2hpbmdQcm9tcHRSZXN1bHRzLml0ZW1zICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoX3RoaXMuUGxheWVyLmludmVudG9yeS5pdGVtcywgbWF0Y2hpbmdQcm9tcHRSZXN1bHRzLml0ZW1zKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIFN1Y2Nlc3NmdWwgcHJvbXB0IGxlYWRzIHRvIG5ldyByb29tIGVudHJhbmNlIChpZiBkZWZpbmVkIGluIHByb21wdClcclxuICAgICAgICAgIGlmIChtYXRjaGluZ1Byb21wdFJlc3VsdHMucm9vbSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIF90aGlzLlBsYXllci5jdXJyZW50Um9vbSA9IG1hdGNoaW5nUHJvbXB0UmVzdWx0cy5yb29tO1xyXG4gICAgICAgICAgICAvLyBDaGVjayB0byBzZWUgaWYgcGxheWVyJ3Mgd29uXHJcbiAgICAgICAgICAgIGxldCBlbnRlclJvb21SZXN1bHRTdWNjZXNzO1xyXG4gICAgICAgICAgICBsZXQgZW50ZXJSb29tUmVzdWx0VGV4dDsgICAgICAgICAgIFxyXG4gICAgICAgICAgICBbZW50ZXJSb29tUmVzdWx0VGV4dCwgZW50ZXJSb29tUmVzdWx0U3VjY2Vzc10gPSBcclxuICAgICAgICAgICAgICBfdGhpcy5QbGF5ZXIuZW50ZXJSb29tKHRoaXMuZ2V0Um9vbShtYXRjaGluZ1Byb21wdFJlc3VsdHMucm9vbSkpO1xyXG4gICAgICAgICAgICBpZiAobWF0Y2hpbmdQcm9tcHRSZXN1bHRzLnJvb20gPT09IF90aGlzLmVuZFJvb20pIHtcclxuICAgICAgICAgICAgICBpZiAoZW50ZXJSb29tUmVzdWx0U3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgLy8gU3VjY2Vzc2Z1bGx5IGVudGVyZWQgcm9vbSB0byB3aW4gZ2FtZVxyXG4gICAgICAgICAgICAgICAgX3RoaXMud2luKCk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIERpc3BsYXkgcmVzdWx0cyB0ZXh0IChmYWlsIHRvIGVudGVyIHdpbm5pbmcgcm9vbSlcclxuICAgICAgICAgICAgICAgIF90aGlzLkRpc3BsYXkuYXBwZW5kKGVudGVyUm9vbVJlc3VsdFRleHQpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBQbGF5ZXIgZGlkbid0IHNheSBhbnkga2V5d29yZHMgdGhhdCB0cmlnZ2VyZWQgYW55IG9mIHRoZSBjdXJyZW50IHJvb20gcHJvbXB0c1xyXG4gICAgICAgICAgX3RoaXMuRGlzcGxheS5zaG93KGA8cD5ObyBhY3Rpb25zIGNvdWxkIGJlIGRvbmUgZnJvbTogXCIke21lc3NhZ2V9XCIuIFRyeSBzb21ldGhpbmcgZWxzZS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7X3RoaXMuZ2V0Um9vbShfdGhpcy5QbGF5ZXIuY3VycmVudFJvb20pLmdldFRleHR9XHJcbiAgICAgICAgICBgKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gTm8gcHJvbXB0cyBleGlzdCBmb3IgdGhlIGN1cnJlbnQgcm9vbVxyXG4gICAgICBfdGhpcy5EaXNwbGF5LnNob3coYDxwPlRoZXJlIGRvZXNuJ3Qgc2VlbSB0byBiZSBhbnkgYWN0aW9ucyBhdCBhbGwgdGhhdCB5b3UgY2FuIGRvIGluIHRoaXMgcm9vbS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7X3RoaXMuZ2V0Um9vbShfdGhpcy5QbGF5ZXIuY3VycmVudFJvb20pLmdldFRleHR9XHJcbiAgICAgIGApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlLCB0aGlzLlBsYXllcik7XHJcbiAgfVxyXG5cclxuICBkaXNhYmxlSW5wdXQoKSB7XHJcbiAgICB0aGlzLklucHV0LmRpc2FibGUoKTtcclxuICB9XHJcblxyXG4gIGVuYWJsZUlucHV0KCkge1xyXG4gICAgdGhpcy5JbnB1dC5lbmFibGUoKTtcclxuICB9XHJcblxyXG4gIHdpbigpIHtcclxuICAgIC8vIFNob3cgZmluYWwgcm9vbSB0ZXh0ICh3aW4gdGV4dClcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb29tcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy5yb29tc1tpXS5uYW1lID09PSB0aGlzLmVuZFJvb20pIHtcclxuICAgICAgICAvLyB0aGlzLkRpc3BsYXkuc2hvdyh0aGlzLnJvb21zW2ldLmdldFRleHQpO1xyXG4gICAgICAgIHRoaXMuRGlzcGxheS5hcHBlbmQodGhpcy5yb29tc1tpXS5nZXRUZXh0KTtcclxuICAgICAgICB0aGlzLkRpc3BsYXkuYXBwZW5kKCc8cD5HYW1lIGVuZC48L3A+Jyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIERpc2FibGUgYW55IG1vcmUgdXNlciBpbnB1dCBhZnRlciB3aW5uaW5nXHJcbiAgICB0aGlzLmRpc2FibGVJbnB1dCgpO1xyXG4gIH1cclxuXHJcbiAgcmVzZXRHYW1lKCkge1xyXG4gICAgLy8gUmVzZXRzIHBsYXllciB3aXRoIGJsYW5rIGludmVudG9yeSBhbmQgYmFjayB0byBzdGFydGluZyByb29tXHJcbiAgICB0aGlzLlBsYXllci5pbnZlbnRvcnkgPSBuZXcgSW52ZW50b3J5KCk7XHJcbiAgICB0aGlzLlBsYXllci5jdXJyZW50Um9vbSA9IHRoaXMuc3RhcnRSb29tO1xyXG4gICAgY29uc3Qgcm9vbSA9IHRoaXMuZ2V0Um9vbSh0aGlzLnN0YXJ0Um9vbSk7XHJcbiAgICB0aGlzLkRpc3BsYXkuc2hvdyhyb29tLmdldFRleHQpO1xyXG4gICAgdGhpcy5JbnB1dC5lbmFibGUoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcclxuXHJcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2FtZTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcihkaXNhYmxlZCA9IGZhbHNlLCB2YWx1ZSA9ICcnLCBlbGVtZW50SWQgPSAnaW5wdXQnKSB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLmVsZW1lbnRJZCA9IGVsZW1lbnRJZDtcclxuICB9XHJcblxyXG4gIGVuYWJsZSgpIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dCcpLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBkaXNhYmxlKCkge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQnKS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBzZW5kKHZhbHVlKSB7XHJcbiAgICAvLyBOb3JtYWxpemUgaW5wdXQgdmFsdWVzIChpZiBkZXNpcmVkKVxyXG4gICAgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbnZlbnRvcnkge1xyXG5cclxuICBjb25zdHJ1Y3RvcihpdGVtcyA9IFtdKSB7XHJcbiAgICB0aGlzLml0ZW1zID0gaXRlbXM7XHJcbiAgfVxyXG4gIFxyXG4gIGV4YW1pbmUoaXRlbU5hbWUgPSBudWxsKSB7XHJcbiAgICAvLyBJZiB3ZSdyZSBleGFtaW5pbmcgYW4gaXRlbVxyXG4gICAgaWYgKGl0ZW1OYW1lICE9PSBudWxsKSB7XHJcbiAgICAgIC8vIERpc3BsYXkgaXRlbSBnZXRUZXh0XHJcbiAgICAgIHJldHVybiB0aGlzLml0ZW1zW2l0ZW1OYW1lXS5nZXRUZXh0O1xyXG4gICAgfVxyXG4gICAgLy8gSWYgd2UncmUgZXhhbWluaW5nIGludmVudG9yeSwgcHJpbnQgb3V0XHJcbiAgICAvLyBsaXN0IG9mIGFsbCB0aGUgaXRlbXMuXHJcbiAgICByZXR1cm4gdGhpcy5pdGVtcy5tYXAoYSA9PiBhLm5hbWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SXRlbVByb3BzKGl0ZW1OYW1lKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pdGVtc1tpdGVtTmFtZV07XHJcbiAgfVxyXG5cclxuICBhZGRJdGVtKGl0ZW0pIHtcclxuICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcclxuICAgIHJldHVybiB0aGlzLml0ZW1zO1xyXG4gIH1cclxuXHJcbiAgZHJvcEl0ZW0oaXRlbU5hbWUpIHtcclxuICAgIGxldCBuZXdJbnZlbnRvcnkgPSB0aGlzLml0ZW1zLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgIHJldHVybiBpdGVtLm5hbWUgIT09IGl0ZW1OYW1lO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLml0ZW1zID0gbmV3SW52ZW50b3J5O1xyXG4gICAgcmV0dXJuIHRoaXMuaXRlbXM7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBJbnZlbnRvcnkgZnJvbSAnLi9pbnZlbnRvcnknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZSA9ICcnLCBpbnZlbnRvcnkgPSBuZXcgSW52ZW50b3J5KCksIGN1cnJlbnRSb29tID0gJycsIHN0YXJ0Um9vbSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIGlmICh0aGlzLm5hbWUgPT09ICcnKSB7XHJcbiAgICAgIHRoaXMubmFtZSA9ICdwbGF5ZXInO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pbnZlbnRvcnkgPSBpbnZlbnRvcnk7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50Um9vbSA9PT0gJycpIHtcclxuICAgICAgdGhpcy5jdXJyZW50Um9vbSA9IHRoaXMuc3RhcnRSb29tO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdGFydFJvb20gPSBzdGFydFJvb207XHJcbiAgfVxyXG4gIFxyXG4gIGVudGVyUm9vbShyb29tKSB7XHJcbiAgICBjb25zdCByZXMgPSByb29tLmVudGVyKHRoaXMuaW52ZW50b3J5Lml0ZW1zKTtcclxuICAgIGlmIChyZXNbMV0gPT09IGZhbHNlKSB7XHJcbiAgICAgIC8vIFBsYXllciBkaWQgbm90IGhhdmUgcmVxdWlyZWQgaXRlbXMgdG8gZW50ZXIgdGhlIHJvb21cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIEVudGVyZWQgcm9vbSBzdWNjZXNzZnVsbHlcclxuICAgICAgdGhpcy5jdXJyZW50Um9vbSA9IHJvb20ubmFtZTsgXHJcbiAgICB9XHJcbiAgICAvLyBSZXR1cm4gZ2FtZSB0ZXh0IGFuZCB3aGV0aGVyIG9yIG5vdCB3ZSB3ZXJlIGFibGUgdG8gZW50ZXIgcm9vbVxyXG4gICAgcmV0dXJuIFtyZXNbMF0sIHJlc1sxXV07XHJcbiAgfVxyXG5cclxuICBnZXRJdGVtKGl0ZW0pIHtcclxuICAgIHRoaXMuaW52ZW50b3J5LmFkZEl0ZW0oaXRlbSk7XHJcbiAgICByZXR1cm4gdGhpcy5pbnZlbnRvcnk7XHJcbiAgfVxyXG5cclxuICBkcm9wSXRlbShpdGVtKSB7XHJcbiAgICB0aGlzLmludmVudG9yeS5kcm9wSXRlbShpdGVtKTtcclxuICAgIHJldHVybiB0aGlzLmludmVudG9yeTtcclxuICB9XHJcblxyXG4gIGRvQWN0aW9uKHRleHQsIGl0ZW0gPSBudWxsKSB7XHJcbiAgICAvLyBObyBpdGVtIHBhc3NlZCwgY2hlY2sgcm9vbSBwcm9tcHRzIGZvciBhY3Rpb25zXHJcbiAgICBpZiAoaXRlbSA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50Um9vbS5kb0FjdGlvbih0ZXh0KTtcclxuICAgIH1cclxuICAgIC8vIERvaW5nIGFjdGlvbiBvbiBpdGVtLCBjaGVjayBpdGVtIHByb21wdHNcclxuICAgIHJldHVybiBpdGVtLmRvQWN0aW9uKHRleHQpO1xyXG4gIH1cclxufVxyXG4gIFxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9tcHQge1xyXG4gICBcclxuICBjb25zdHJ1Y3RvcihuYW1lID0gJycsIGtleXdvcmRzID0gW10sIHJlc3VsdHMgPSB7fSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIC8vIEtleXdvcmRzIHRoYXQgY2FuIHRyaWdnZXIgdGhlIHByb21wdCAobWFrZSBhbGwgbG93ZXItY2FzZSBieSBkZWZhdWx0KVxyXG4gICAgdGhpcy5rZXl3b3JkcyA9IGtleXdvcmRzLm1hcChmdW5jdGlvbih2KSB7IHJldHVybiB2LnRvTG93ZXJDYXNlKCk7fSk7IFxyXG4gICAgLy8gUmVzdWx0cyB0aGF0IG9jY3VyIHdoZW4gdGhpcyBwcm9tcHQgaXMgc3VjY2Vzc2Z1bGx5IHRyaWdnZXJlZDsgXHJcbiAgICAvLyB0aGUgcmVzdWx0IGtleXMgY29tcHJpc2Ugb2Yg4oCcdGV4dOKAnSAocmVxdWlyZWQpLCDigJxpdGVtc+KAnSAob3B0aW9uYWwpLFxyXG4gICAgLy8gYW5kIOKAnHJvb20gKG9wdGlvbmFsKeKAnSBcclxuICAgIHRoaXMucmVzdWx0cyA9IHJlc3VsdHM7IFxyXG4gIH1cclxuXHJcbiAgLy8gQ2hlY2sgaWYgaW5wdXQgbWVzc2FnZSBtYXRjaGVzIGFueSBwcm9tcHQga2V5d29yZHNcclxuICBtYXRjaEtleXdvcmRzKG1lc3NhZ2UpIHtcclxuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5rZXl3b3Jkcy5mb3JFYWNoKGZ1bmN0aW9uKGtleXdvcmQpIHtcclxuICAgICAgaWYgKG1lc3NhZ2UuaW5jbHVkZXMoa2V5d29yZC50b0xvd2VyQ2FzZSgpKSkge1xyXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAoZm91bmQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVzdWx0cztcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUHJvbXB0IGZyb20gJy4vcHJvbXB0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvb20ge1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lID0gJycsIGdldFRleHQgPSAnJywgcHJvbXB0cyA9IFtdLCByZXF1aXJlbWVudHMgPSBbXSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuZ2V0VGV4dCA9IGdldFRleHQ7IC8vIFRoZSB0ZXh0IHRoYXQgaXMgZGlzcGxheWVkIHdoZW4gdGhlIHJvb20gaXMgZW50ZXJlZFxyXG4gICAgdGhpcy5wcm9tcHRzID0gcHJvbXB0czsgLy8gV2hhdCBhcmUgdGhlIGFjdGlvbnMgdGhhdCB3ZSBjYW4gZG8gaW4gdGhpcyByb29tP1xyXG4gICAgdGhpcy5yZXF1aXJlbWVudHMgPSByZXF1aXJlbWVudHM7IC8vIEFueSByZXF1aXJlbWVudHMgKGl0ZW1zKSBuZWVkZWQgdG8gYWNjZXNzIHRoZSByb29tXHJcbiAgfVxyXG5cclxuICBhZGRQcm9tcHQobmFtZSwga2V5d29yZHMsIHJlc3VsdFRleHRzKSB7XHJcbiAgICBjb25zdCBwcm9tcHQgPSBuZXcgUHJvbXB0KG5hbWUsIGtleXdvcmRzLCByZXN1bHRUZXh0cyk7XHJcbiAgICB0aGlzLnByb21wdHMucHVzaChwcm9tcHQpO1xyXG4gICAgcmV0dXJuIHRoaXMucHJvbXB0cztcclxuICB9XHJcblxyXG4gIGVudGVyKGl0ZW1zID0gW10pIHtcclxuICAgIGxldCByZXN1bHRUZXh0ID0gJyc7XHJcbiAgICBsZXQgbWV0QWxsUmVxdWlyZW1lbnRzID0gdHJ1ZTsgLy8gQ2FuIHdlIGVudGVyIHRoZSByb29tP1xyXG4gICAgLy8gVGhlIHJvb20gaXMgbm90IGFjY2Vzc2libGUgYnkgZGVmYXVsdFxyXG4gICAgaWYgKHRoaXMucmVxdWlyZW1lbnRzID4gMCkge1xyXG4gICAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgbWV0QWxsUmVxdWlyZW1lbnRzID0gZmFsc2U7XHJcbiAgICAgICAgLy8gUmV0dXJuIG1pc3NpbmcgcmVxdWlyZW1lbnQgbWVzc2FnZXNcclxuICAgICAgICB0aGlzLnJlcXVpcmVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXF1aXJlbWVudCkge1xyXG4gICAgICAgICAgcmVzdWx0VGV4dCArPSBgJHtyZXF1aXJlbWVudC5mYWlsVGV4dH0uIGA7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gQ2hlY2sgdGhlIHJvb20ncyByZXF1aXJlbWVudHMgZm9yIG1hdGNoaW5nIGl0ZW1zXHJcbiAgICAgICAgdGhpcy5yZXF1aXJlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAocmVxdWlyZW1lbnQpIHtcclxuICAgICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtID09PSByZXF1aXJlbWVudCkge1xyXG4gICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpZiAoZm91bmQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIG1ldEFsbFJlcXVpcmVtZW50cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyBSZXR1cm4gZmFpbCBtZXNzYWdlcyBmb3IgbWlzc2luZyByZXF1aXJlbWVudHNcclxuICAgICAgICAgICAgcmVzdWx0VGV4dCArPSByZXF1aXJlbWVudC5mYWlsVGV4dDsgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChtZXRBbGxSZXF1aXJlbWVudHMgPT09IHRydWUpIHtcclxuICAgICAgICAgIHJlc3VsdFRleHQgPSB0aGlzLmdldFRleHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXN1bHRUZXh0ID0gdGhpcy5nZXRUZXh0O1xyXG4gICAgfVxyXG4gICAgLy8gUmV0dXJuIHRleHQgd2l0aCByZXN1bHRUZXh0cyBhbmQgd2hldGhlciBvciBub3Qgcm9vbSBjb3VsZCBiZSBlbnRlcmVkXHJcbiAgICByZXR1cm4gW3Jlc3VsdFRleHQsIG1ldEFsbFJlcXVpcmVtZW50c107XHJcbiAgfVxyXG5cclxuICBkb0FjdGlvbih2YWx1ZSkge1xyXG4gICAgLy8gRm9yIG5vdyBsZXQncyBvbmx5IGRvIG9uZSBhY3Rpb24gYXQgYSB0aW1lXHJcbiAgICBsZXQgcmVzdWx0VGV4dCA9IHt9O1xyXG4gICAgaWYgKHRoaXMucHJvbXB0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmVzdWx0VGV4dFsndGV4dCddID0gXCJUaGVyZSBkb2Vzbid0IHNlZW0gdG8gYmUgYW55IGFjdGlvbnMgeW91IGNhbiBkbyBpbiB0aGlzIHJvb20uXCI7XHJcbiAgICB9XHJcbiAgICBPYmplY3QudmFsdWVzKHRoaXMucHJvbXB0cykuZm9yRWFjaChmdW5jdGlvbihrZXksIHZhbCkgeyBcclxuICAgICAgaWYgKHZhbHVlID09PSBrZXkpIHtcclxuICAgICAgICByZXN1bHRUZXh0Wyd0ZXh0J10gPSB2YWwucmVzdWx0VGV4dFRleHQ7IC8vIFN1Y2Nlc3NmdWwgYWN0aW9uIHJldHVybmluZyByZXN1bHRUZXh0aW5nIHRleHRcclxuICAgICAgICBpZiAodmFsLnJlc3VsdFRleHRJdGVtcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgcmVzdWx0VGV4dFsnaXRlbXMnXSA9IHZhbC5yZXN1bHRUZXh0SXRlbXM7IC8vIFN1Y2Nlc3NmdWwgYWN0aW9uIHJlc3VsdFRleHRpbmcgaW4gbmV3IGl0ZW1zXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2YWwucmVzdWx0VGV4dFJvb20gIT09IG51bGwpIHtcclxuICAgICAgICAgIHJlc3VsdFRleHRbJ3Jlc3VsdFRleHQnXSA9IHZhbC5yZXN1bHRUZXh0Um9vbTsgLy8gU3VjY2Vzc2Z1bCBhY3Rpb24gcmVzdWx0VGV4dGluZyBpbiBhIG5ldyByb29tXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXN1bHRUZXh0O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9