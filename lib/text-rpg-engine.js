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
    this.rooms = rooms; // All the rooms in our game

    this.startRoom = startRoom; // Which room will the player start in

    this.endRoom = endRoom; // Which room is the winning / game end

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGV4dC1ycGctZW5naW5lLy4vc3JjL2lucHV0LmpzIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS8uL3NyYy9pbnZlbnRvcnkuanMiLCJ3ZWJwYWNrOi8vdGV4dC1ycGctZW5naW5lLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvcHJvbXB0LmpzIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS8uL3NyYy9yb29tLmpzIl0sIm5hbWVzIjpbIkRpc3BsYXkiLCJodG1sIiwiZWxlbWVudElkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsIkdhbWUiLCJyb29tcyIsIml0ZW1zIiwic3RhcnRSb29tIiwiZW5kUm9vbSIsIklucHV0IiwiUGxheWVyIiwiZGlzcGxheVRleHQiLCJsZW5ndGgiLCJuYW1lIiwiY3VycmVudFJvb20iLCJpIiwiZ2V0VGV4dCIsInVuZGVmaW5lZCIsInNob3ciLCJnYW1lRGF0YSIsIl90aGlzIiwiZ2FtZSIsImZvckVhY2giLCJyb29tIiwicm9vbVByb21wdHMiLCJyb29tUmVxdWlyZW1lbnRzIiwicHJvbXB0cyIsInJlcXVpcmVtZW50cyIsInJlcXVpdXJlbWVudHMiLCJhZGRSb29tIiwicm9vbU9iaiIsInB1c2giLCJyb29tTmFtZSIsIm5ld1Jvb21zIiwiZmlsdGVyIiwiZmluZCIsIngiLCJtZXNzYWdlIiwic2VuZCIsImRlY2lkZVBhdGgiLCJ2YWx1ZSIsInJlc2V0R2FtZSIsImN1cnJSb29tIiwiZ2V0Um9vbSIsImZvdW5kUHJvbXB0IiwicHJvbXB0IiwibWF0Y2hpbmdQcm9tcHRSZXN1bHRzIiwibWF0Y2hLZXl3b3JkcyIsImludmVudG9yeSIsInN1Y2Nlc3MiLCJzdWNjZXNzVGV4dCIsIml0ZW1zR2l2ZW4iLCJhZGRJdGVtcyIsInJvb21Ub0VudGVyIiwiZW50ZXJSb29tUmVzdWx0U3VjY2VzcyIsImVudGVyUm9vbVJlc3VsdFRleHQiLCJlbnRlclJvb20iLCJhcHBlbmQiLCJ3aW4iLCJmYWlsIiwiZmFpbFRleHQiLCJtaXNzaW5nIiwidG9TdHJpbmciLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZGlzYWJsZSIsImVuYWJsZSIsImRpc2FibGVJbnB1dCIsImRpc2FibGVkIiwidG9Mb3dlckNhc2UiLCJJbnZlbnRvcnkiLCJjb25jYXQiLCJpdGVtTmFtZSIsIm5ld0ludmVudG9yeSIsIml0ZW0iLCJyb29tUmVzdWx0IiwiZW50ZXIiLCJhZGRJdGVtIiwiZHJvcEl0ZW0iLCJQcm9tcHQiLCJrZXl3b3JkcyIsInJlc3VsdHMiLCJtYXAiLCJ2IiwiZm91bmRLZXl3b3JkIiwibWlzc2luZ1JlcXVpcmVtZW50cyIsInJlcXVpcmVtZW50IiwiZm91bmRSZXF1aXJlbWVudCIsImtleXdvcmQiLCJpbmNsdWRlcyIsIlJvb20iLCJhZGRQcm9tcHQiLCJyZXN1bHRUZXh0IiwibWV0QWxsUmVxdWlyZW1lbnRzIiwiZm91bmQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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QUlrQyxrQkFBa0IsS0FBSyxJQUEzQixFQUFpQztBQUMvQkQsc0JBQVUsR0FBRyxLQUFLN0UsT0FBbEI7QUFDRDtBQUNGLFNBM0J3QixDQTRCekI7O0FBQ0QsT0E3QkQsTUE2Qk87QUFDTDZFLGtCQUFVLEdBQUcsS0FBSzdFLE9BQWxCO0FBQ0QsT0FwQ2UsQ0FxQ2hCOzs7QUFDQSxhQUFPLENBQUM2RSxVQUFELEVBQWFDLGtCQUFiLENBQVA7QUFDRCIsImZpbGUiOiJ0ZXh0LXJwZy1lbmdpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInRleHQtcnBnLWVuZ2luZVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ0ZXh0LXJwZy1lbmdpbmVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1widGV4dC1ycGctZW5naW5lXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiJ3VzZSBzdHJpY3QnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5IHtcclxuXHJcbiAgY29uc3RydWN0b3IoaHRtbCA9ICcnLCBlbGVtZW50SWQgPSAnZGlzcGxheScpIHtcclxuICAgIHRoaXMuaHRtbCA9IGh0bWw7XHJcbiAgICB0aGlzLmVsZW1lbnRJZCA9IGVsZW1lbnRJZDtcclxuICB9XHJcblxyXG4gIHNob3coaHRtbCA9IG51bGwpIHtcclxuICAgIGlmIChodG1sID09PSBudWxsKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgICAgdGhpcy5odG1sID0gaHRtbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEFwcGVuZCBIVE1MIGNvbnRlbnQgdG8gZGlzcGxheSBzY3JlZW5cclxuICBhcHBlbmQoaHRtbCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLmlubmVySFRNTCArPSBodG1sO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgRGlzcGxheSBmcm9tICcuL2Rpc3BsYXknO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9pbnB1dCc7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xyXG5pbXBvcnQgUm9vbSBmcm9tICcuL3Jvb20nO1xyXG5pbXBvcnQgSW52ZW50b3J5IGZyb20gJy4vaW52ZW50b3J5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihyb29tcyA9IFtdLCBpdGVtcyA9IFtdLCBzdGFydFJvb20gPSAnJywgZW5kUm9vbSA9ICcnKSB7XHJcbiAgICB0aGlzLkRpc3BsYXkgPSBuZXcgRGlzcGxheSgpO1xyXG4gICAgdGhpcy5JbnB1dCA9IG5ldyBJbnB1dCgpO1xyXG4gICAgdGhpcy5yb29tcyA9IHJvb21zOyAvLyBBbGwgdGhlIHJvb21zIGluIG91ciBnYW1lXHJcbiAgICB0aGlzLnN0YXJ0Um9vbSA9IHN0YXJ0Um9vbTsgLy8gV2hpY2ggcm9vbSB3aWxsIHRoZSBwbGF5ZXIgc3RhcnQgaW5cclxuICAgIHRoaXMuZW5kUm9vbSA9IGVuZFJvb207IC8vIFdoaWNoIHJvb20gaXMgdGhlIHdpbm5pbmcgLyBnYW1lIGVuZFxyXG4gICAgdGhpcy5QbGF5ZXIgPSBuZXcgUGxheWVyKHN0YXJ0Um9vbSA9IHRoaXMuc3RhcnRSb29tKTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBsZXQgZGlzcGxheVRleHQ7XHJcblxyXG4gICAgLy8gSWYgZ2FtZSB3YXNuJ3QgaW5pdGlhbGl6ZWQgd2l0aCBhIHN0YXJ0Um9vbSwgc2V0IGl0IHRvIHRoZSBmaXJzdCByb29tXHJcbiAgICBpZiAodGhpcy5zdGFydFJvb20gPT09ICcnICYmIHRoaXMucm9vbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnN0YXJ0Um9vbSA9IHRoaXMucm9vbXNbMF0ubmFtZTtcclxuICAgICAgdGhpcy5QbGF5ZXIuc3RhcnRSb29tID0gdGhpcy5zdGFydFJvb207XHJcbiAgICAgIHRoaXMuUGxheWVyLmN1cnJlbnRSb29tID0gdGhpcy5QbGF5ZXIuc3RhcnRSb29tO1xyXG4gICAgfVxyXG4gICAgLy8gSWYgZ2FtZSB3YXNuJ3QgaW5pdGlhbGl6ZWQgd2l0aCBhIGVuZFJvb20sIHNldCBpdCB0byB0aGUgbGFzdCByb29tXHJcbiAgICBpZiAodGhpcy5lbmRSb29tID09PSAnJyAmJiB0aGlzLnJvb21zLmxlbmd0aCA+IDEpIHtcclxuICAgICAgdGhpcy5lbmRSb29tID0gdGhpcy5yb29tc1t0aGlzLnJvb21zLmxlbmd0aCAtIDFdLm5hbWU7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm9vbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMucm9vbXNbaV0ubmFtZSA9PT0gdGhpcy5zdGFydFJvb20pIHtcclxuICAgICAgICBkaXNwbGF5VGV4dCA9IHRoaXMucm9vbXNbaV0uZ2V0VGV4dDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGRpc3BsYXlUZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgZGlzcGxheVRleHQgPSAnTm8gc3RhcnRpbmcgcm9vbSB0ZXh0IGZvdW5kISc7XHJcbiAgICB9XHJcbiAgICB0aGlzLkRpc3BsYXkuc2hvdyhkaXNwbGF5VGV4dCk7XHJcbiAgfVxyXG5cclxuICAvLyBMb2FkcyBnYW1lIGRhdGEgZnJvbSBKU09OIG9iamVjdCBwYXNzZWRcclxuICBsb2FkRGF0YShnYW1lRGF0YSkge1xyXG4gICAgY29uc3QgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIGdhbWVEYXRhLmdhbWUucm9vbXMuZm9yRWFjaChmdW5jdGlvbiAocm9vbSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhyb29tKTtcclxuICAgICAgbGV0IHJvb21Qcm9tcHRzID0gW107XHJcbiAgICAgIGxldCByb29tUmVxdWlyZW1lbnRzID0gW107XHJcblxyXG4gICAgICAvLyBSb29tIHByb21wdHMgYW5kIHJlcXVpcmVtZW50cyBhcmUgb3B0aW9uYWwgc28gaGFuZGxlIHRoYXRcclxuICAgICAgaWYgKHJvb20ucHJvbXB0cyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcm9vbVByb21wdHMgPSByb29tLnByb21wdHM7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHJvb20ucmVxdWlyZW1lbnRzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByb29tUmVxdWlyZW1lbnRzID0gcm9vbS5yZXF1aXVyZW1lbnRzO1xyXG4gICAgICB9XHJcbiAgICAgIF90aGlzLmFkZFJvb20ocm9vbS5uYW1lLCByb29tLmdldFRleHQsIHJvb21Qcm9tcHRzLCByb29tUmVxdWlyZW1lbnRzKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChnYW1lRGF0YS5zdGFydFJvb20gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnN0YXJ0Um9vbSA9IGdhbWVEYXRhLnN0YXJ0Um9vbTtcclxuICAgICAgdGhpcy5QbGF5ZXIuc3RhcnRSb29tID0gZ2FtZURhdGEuc3RhcnRSb29tO1xyXG4gICAgfVxyXG4gICAgaWYgKGdhbWVEYXRhLmVuZFJvb20gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmVuZFJvb20gPSBnYW1lRGF0YS5lbmRSb29tO1xyXG4gICAgfVxyXG4gICAgLy8gSWYgZ2FtZSB3YXNuJ3QgaW5pdGlhbGl6ZWQgd2l0aCBhIHN0YXJ0Um9vbSwgc2V0IGl0IHRvIHRoZSBmaXJzdCByb29tXHJcbiAgICBpZiAodGhpcy5zdGFydFJvb20gPT09ICcnIHx8IHRoaXMuc3RhcnRSb29tID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgaWYgKHRoaXMucm9vbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRSb29tID0gdGhpcy5yb29tc1swXS5uYW1lO1xyXG4gICAgICAgIHRoaXMuUGxheWVyLnN0YXJ0Um9vbSA9IHRoaXMuc3RhcnRSb29tO1xyXG4gICAgICAgIHRoaXMuUGxheWVyLmN1cnJlbnRSb29tID0gdGhpcy5QbGF5ZXIuc3RhcnRSb29tO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBJZiBnYW1lIHdhc24ndCBpbml0aWFsaXplZCB3aXRoIGEgZW5kUm9vbSwgc2V0IGl0IHRvIHRoZSBsYXN0IHJvb21cclxuICAgIGlmICh0aGlzLmVuZFJvb20gPT09ICcnICYmIHRoaXMuZW5kUm9vbSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGlmICh0aGlzLnJvb21zLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICB0aGlzLmVuZFJvb20gPSB0aGlzLnJvb21zW3RoaXMucm9vbXMubGVuZ3RoIC0gMV0ubmFtZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gTWFuYWdlIHJvb21zXHJcbiAgYWRkUm9vbShuYW1lLCBnZXRUZXh0LCBwcm9tcHRzID0gW10sIHJlcXVpcmVtZW50cyA9IFtdKSB7XHJcbiAgICBsZXQgcm9vbU9iaiA9IG5ldyBSb29tKG5hbWUsIGdldFRleHQsIHByb21wdHMsIHJlcXVpcmVtZW50cyk7XHJcblxyXG4gICAgdGhpcy5yb29tcy5wdXNoKHJvb21PYmopO1xyXG4gICAgcmV0dXJuIHJvb21PYmo7XHJcbiAgfVxyXG5cclxuICBkcm9wUm9vbShyb29tTmFtZSkge1xyXG4gICAgbGV0IG5ld1Jvb21zID0gdGhpcy5yb29tcy5maWx0ZXIoZnVuY3Rpb24gKHJvb20pIHtcclxuICAgICAgcmV0dXJuIHJvb20ubmFtZSAhPT0gcm9vbU5hbWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnJvb21zID0gbmV3Um9vbXM7XHJcbiAgICByZXR1cm4gdGhpcy5yb29tcztcclxuICB9XHJcblxyXG4gIC8vIFJldHVybnMgcm9vbSBvYmplY3QgKHByb3BlcnRpZXMpIGdpdmVuIHRoZSBuYW1lXHJcbiAgZ2V0Um9vbShyb29tTmFtZSkge1xyXG4gICAgY29uc3Qgcm9vbSA9IHRoaXMucm9vbXMuZmluZCh4ID0+IHgubmFtZSA9PT0gcm9vbU5hbWUpO1xyXG5cclxuICAgIHJldHVybiByb29tO1xyXG4gIH1cclxuXHJcbiAgLy8gVXNlciBpbnB1dFxyXG4gIHVzZXJTZW5kKG1lc3NhZ2UpIHtcclxuICAgIC8vIE91ciBJbnB1dCBjbGFzcyB3aWxsIGhhbmRsZSBjbGVhbmluZyAvIG5vcm1hbGl6aW5nIHN0cmluZ3NcclxuICAgIHRoaXMuSW5wdXQuc2VuZChtZXNzYWdlKTtcclxuICAgIHRoaXMuZGVjaWRlUGF0aCh0aGlzLklucHV0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8vIEdhbWUgQUlcclxuICBkZWNpZGVQYXRoKG1lc3NhZ2UpIHtcclxuICAgIGlmIChtZXNzYWdlID09PSAncmVzdGFydCcpIHtcclxuICAgICAgdGhpcy5yZXNldEdhbWUoKTtcclxuICAgIH1cclxuICAgIGNvbnN0IF90aGlzID0gdGhpcztcclxuICAgIGNvbnN0IGN1cnJSb29tID0gX3RoaXMuZ2V0Um9vbShfdGhpcy5QbGF5ZXIuY3VycmVudFJvb20pO1xyXG5cclxuICAgIC8vIERvIHdlIGhhdmUgYWN0aW9ucyB0aGF0IHdlIGNhbiBkbyBpbiB0aGUgcm9vbT9cclxuICAgIGlmICh0eXBlb2YgY3VyclJvb20ucHJvbXB0cyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIC8vIENoZWNrIGV2ZXJ5IHByb21wdCBhY3Rpb24gdG8gc2VlIGlmIGl0IG1hdGNoZXMgb3VyIGlucHV0IGtleXdvcmRzXHJcbiAgICAgIC8vIEZvciBub3cganVzdCBnZXQgdGhlIGZpcnN0IG1hdGNoaW5nIHByb21wdCBhbmQgZG8gdGhhdFxyXG4gICAgICBsZXQgZm91bmRQcm9tcHQgPSBmYWxzZTtcclxuXHJcbiAgICAgIGN1cnJSb29tLnByb21wdHMuZm9yRWFjaChmdW5jdGlvbiAocHJvbXB0KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGlmIChmb3VuZFByb21wdCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2hpbmdQcm9tcHRSZXN1bHRzID0gcHJvbXB0Lm1hdGNoS2V5d29yZHMobWVzc2FnZSwgX3RoaXMuUGxheWVyLmludmVudG9yeS5pdGVtcyk7XHJcblxyXG4gICAgICAgICAgICAvLyBJZiB3ZSBnZXQgYSBtYXRjaGluZyByZXN1bHQgYmFja1xyXG4gICAgICAgICAgICBpZiAobWF0Y2hpbmdQcm9tcHRSZXN1bHRzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgLy8gVGhpcyBwcm9tcHQgaGFzIGtleXdvcmRzIHRoYXQgbWF0Y2ggdGhlIHVzZXIncyBpbnB1dFxyXG4gICAgICAgICAgICAgIGZvdW5kUHJvbXB0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAvLyBJZiBwbGF5ZXIgc3VjY2VlZGVkIGluIHByb21wdCBhY3Rpb25cclxuICAgICAgICAgICAgICBpZiAoJ3N1Y2Nlc3MnIGluIG1hdGNoaW5nUHJvbXB0UmVzdWx0cykge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuRGlzcGxheS5zaG93KGA8cD4ke21hdGNoaW5nUHJvbXB0UmVzdWx0cy5zdWNjZXNzLnN1Y2Nlc3NUZXh0fTwvcD5gKTtcclxuICAgICAgICAgICAgICAgIC8vIEdldCBpdGVtcyBmcm9tIHByb21wdCBpZiBhbnkgYXJlIHJldHVybmVkIGFuZCBhZGQgdGhlbSB0byBpbnZlbnRvcnlcclxuICAgICAgICAgICAgICAgIGlmIChtYXRjaGluZ1Byb21wdFJlc3VsdHMuc3VjY2Vzcy5pdGVtc0dpdmVuICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgX3RoaXMuUGxheWVyLmludmVudG9yeS5hZGRJdGVtcyhtYXRjaGluZ1Byb21wdFJlc3VsdHMuc3VjY2Vzcy5pdGVtc0dpdmVuKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBwcm9tcHQgc3VjY2VzcyByZXN1bHQgaW5jbHVkZXMgZW50ZXJpbmcgYSBuZXcgcm9vbS4uXHJcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hpbmdQcm9tcHRSZXN1bHRzLnN1Y2Nlc3Mucm9vbVRvRW50ZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICBsZXQgZW50ZXJSb29tUmVzdWx0U3VjY2VzcztcclxuICAgICAgICAgICAgICAgICAgbGV0IGVudGVyUm9vbVJlc3VsdFRleHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAvLyBDaGVjayB0byBzZWUgaWYgcGxheWVyIGNhbiBzdWNjZXNzZnVsbHkgZW50ZXIgdGhlIHJvb20gKGdpdmVuIHRoZSBpbnZlbnRvcnkgLyByb29tIHJlcXVpcmVtZW50cylcclxuICAgICAgICAgICAgICAgICAgW2VudGVyUm9vbVJlc3VsdFRleHQsIGVudGVyUm9vbVJlc3VsdFN1Y2Nlc3NdID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuUGxheWVyLmVudGVyUm9vbShfdGhpcy5nZXRSb29tKG1hdGNoaW5nUHJvbXB0UmVzdWx0cy5zdWNjZXNzLnJvb21Ub0VudGVyKSk7XHJcbiAgICAgICAgICAgICAgICAgIF90aGlzLkRpc3BsYXkuYXBwZW5kKGA8cD4ke2VudGVyUm9vbVJlc3VsdFRleHR9PC9wPmApO1xyXG4gICAgICAgICAgICAgICAgICBpZiAoZW50ZXJSb29tUmVzdWx0U3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiBwbGF5ZXIgZW50ZXJlZCB3aW5uaW5nIHJvb21cclxuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hpbmdQcm9tcHRSZXN1bHRzLnN1Y2Nlc3Mucm9vbVRvRW50ZXIgPT09IF90aGlzLmVuZFJvb20pIHtcclxuICAgICAgICAgICAgICAgICAgICAgIF90aGlzLndpbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBQbGF5ZXIgY291bGQgbm90IGVudGVyIHJvb20gKG1pc3NpbmcgcmVxdWlyZWQgaXRlbXMgaW4gaW52ZW50b3J5KVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8vIFBsYXllciBmYWlsZWQgdG8gZG8gcHJvbXB0IChtaXNzaW5nIGl0ZW0gcmVxdWlyZW1lbnQpXHJcbiAgICAgICAgICAgICAgaWYgKCdmYWlsJyBpbiBtYXRjaGluZ1Byb21wdFJlc3VsdHMpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLkRpc3BsYXkuc2hvdyhgJHttYXRjaGluZ1Byb21wdFJlc3VsdHMuZmFpbC5mYWlsVGV4dH1gKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLkRpc3BsYXkuYXBwZW5kKGA8cD5NaXNzaW5nIHJlcXVpcmVkIGl0ZW1zOiAke21hdGNoaW5nUHJvbXB0UmVzdWx0cy5mYWlsLm1pc3NpbmcudG9TdHJpbmcoKX0uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7X3RoaXMuZ2V0Um9vbShfdGhpcy5QbGF5ZXIuY3VycmVudFJvb20pLmdldFRleHR9PC9wPmApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZvdW5kUHJvbXB0ID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgLy8gUGxheWVyIGRpZG4ndCBzYXkgYW55IGtleXdvcmRzIHRoYXQgdHJpZ2dlcmVkIGFueSBvZiB0aGUgY3VycmVudCByb29tIHByb21wdHNcclxuICAgICAgICAgIF90aGlzLkRpc3BsYXkuc2hvdyhgPHA+Tm8gYWN0aW9ucyBjb3VsZCBiZSBkb25lIGZyb206IFwiJHttZXNzYWdlfVwiLiBUcnkgc29tZXRoaW5nIGVsc2UsIG9yIGJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcmUgc3BlY2lmaWMgYWJvdXQgd2hhdCB5b3UncmUgZG9pbmcuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke190aGlzLmdldFJvb20oX3RoaXMuUGxheWVyLmN1cnJlbnRSb29tKS5nZXRUZXh0fTwvcD5gKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gTm8gcHJvbXB0cyBleGlzdCBmb3IgdGhlIGN1cnJlbnQgcm9vbVxyXG4gICAgICBfdGhpcy5EaXNwbGF5LnNob3coYDxwPlRoZXJlIGRvZXNuJ3Qgc2VlbSB0byBiZSBhbnkgYWN0aW9ucyBhdCBhbGwgdGhhdCB5b3UgY2FuIGRvIGluIHRoaXMgcm9vbS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7X3RoaXMuZ2V0Um9vbShfdGhpcy5QbGF5ZXIuY3VycmVudFJvb20pLmdldFRleHR9XHJcbiAgICAgIGApO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2cobWVzc2FnZSwgdGhpcy5QbGF5ZXIpO1xyXG4gIH1cclxuXHJcbiAgZGlzYWJsZUlucHV0KCkge1xyXG4gICAgdGhpcy5JbnB1dC5kaXNhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBlbmFibGVJbnB1dCgpIHtcclxuICAgIHRoaXMuSW5wdXQuZW5hYmxlKCk7XHJcbiAgfVxyXG5cclxuICAvLyBQbGF5ZXIgd2luc1xyXG4gIHdpbigpIHtcclxuICAgIC8vIFNob3cgZmluYWwgcm9vbSB0ZXh0ICh3aW4gdGV4dClcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb29tcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy5yb29tc1tpXS5uYW1lID09PSB0aGlzLmVuZFJvb20pIHtcclxuICAgICAgICB0aGlzLkRpc3BsYXkuYXBwZW5kKCc8cD5HYW1lIGVuZC48L3A+Jyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIERpc2FibGUgYW55IG1vcmUgdXNlciBpbnB1dCBhZnRlciB3aW5uaW5nXHJcbiAgICB0aGlzLmRpc2FibGVJbnB1dCgpO1xyXG4gIH1cclxuXHJcbiAgLy8gUGxheWVyIHJlc2V0cyBnYW1lXHJcbiAgcmVzZXRHYW1lKCkge1xyXG4gICAgLy8gUmVzZXRzIHBsYXllciB3aXRoIGJsYW5rIGludmVudG9yeSBhbmQgYmFjayB0byBzdGFydGluZyByb29tXHJcbiAgICB0aGlzLlBsYXllci5pbnZlbnRvcnkgPSBuZXcgSW52ZW50b3J5KCk7XHJcbiAgICB0aGlzLlBsYXllci5jdXJyZW50Um9vbSA9IHRoaXMuc3RhcnRSb29tO1xyXG4gICAgY29uc3Qgcm9vbSA9IHRoaXMuZ2V0Um9vbSh0aGlzLnN0YXJ0Um9vbSk7XHJcblxyXG4gICAgdGhpcy5EaXNwbGF5LnNob3cocm9vbS5nZXRUZXh0KTtcclxuICAgIHRoaXMuSW5wdXQuZW5hYmxlKCk7XHJcbiAgfVxyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcclxuXHJcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2FtZTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcihkaXNhYmxlZCA9IGZhbHNlLCB2YWx1ZSA9ICcnLCBlbGVtZW50SWQgPSAnaW5wdXQnKSB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLmVsZW1lbnRJZCA9IGVsZW1lbnRJZDtcclxuICB9XHJcblxyXG4gIGVuYWJsZSgpIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dCcpLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBkaXNhYmxlKCkge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQnKS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBzZW5kKHZhbHVlKSB7XHJcbiAgICAvLyBOb3JtYWxpemUgaW5wdXQgdmFsdWVzIChpZiBkZXNpcmVkKVxyXG4gICAgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxufVxyXG5cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52ZW50b3J5IHtcclxuXHJcbiAgY29uc3RydWN0b3IoaXRlbXMgPSBbXSkge1xyXG4gICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xyXG4gIH1cclxuXHJcbiAgLy8gV2UgY2FuIHVzZSB0aGlzIHRvIGFkZCBzaW5nbGUgb3IgbXVsdGlwbGUgaXRlbXMsIGFzIGxvbmcgYXMgdGhlXHJcbiAgLy8gcGFzc2VkIHZhbHVlIGlzIGFuIGFycmF5XHJcbiAgYWRkSXRlbXMoaXRlbXMpIHtcclxuICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1zLmNvbmNhdChpdGVtcyk7XHJcbiAgICByZXR1cm4gdGhpcy5pdGVtcztcclxuICB9XHJcblxyXG4gIGRyb3BJdGVtKGl0ZW1OYW1lKSB7XHJcbiAgICBsZXQgbmV3SW52ZW50b3J5ID0gdGhpcy5pdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgcmV0dXJuIGl0ZW0ubmFtZSAhPT0gaXRlbU5hbWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLml0ZW1zID0gbmV3SW52ZW50b3J5O1xyXG4gICAgcmV0dXJuIHRoaXMuaXRlbXM7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBJbnZlbnRvcnkgZnJvbSAnLi9pbnZlbnRvcnknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZSA9ICcnLCBpbnZlbnRvcnkgPSBuZXcgSW52ZW50b3J5KCksIGN1cnJlbnRSb29tID0gJycsIHN0YXJ0Um9vbSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIGlmICh0aGlzLm5hbWUgPT09ICcnKSB7XHJcbiAgICAgIHRoaXMubmFtZSA9ICdwbGF5ZXInO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pbnZlbnRvcnkgPSBpbnZlbnRvcnk7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50Um9vbSA9PT0gJycpIHtcclxuICAgICAgdGhpcy5jdXJyZW50Um9vbSA9IHRoaXMuc3RhcnRSb29tO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdGFydFJvb20gPSBzdGFydFJvb207XHJcbiAgfVxyXG5cclxuICBlbnRlclJvb20ocm9vbSkge1xyXG4gICAgY29uc3Qgcm9vbVJlc3VsdCA9IHJvb20uZW50ZXIodGhpcy5pbnZlbnRvcnkuaXRlbXMpO1xyXG5cclxuICAgIGlmIChyb29tUmVzdWx0WzFdID09PSBmYWxzZSkge1xyXG4gICAgICAvLyBQbGF5ZXIgZGlkIG5vdCBoYXZlIHJlcXVpcmVkIGl0ZW1zIHRvIGVudGVyIHRoZSByb29tXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBFbnRlcmVkIHJvb20gc3VjY2Vzc2Z1bGx5XHJcbiAgICAgIHRoaXMuY3VycmVudFJvb20gPSByb29tLm5hbWU7XHJcbiAgICB9XHJcbiAgICAvLyBSZXR1cm4gcmVzdWx0cyB0ZXh0IGFuZCB3aGV0aGVyIG9yIG5vdCBwbGF5ZXIgc3VjY2Vzc2Z1bGx5IGVudGVyZWQgcm9vbVxyXG4gICAgcmV0dXJuIFtyb29tUmVzdWx0WzBdLCByb29tUmVzdWx0WzFdXTtcclxuICB9XHJcblxyXG4gIGdldEl0ZW0oaXRlbSkge1xyXG4gICAgdGhpcy5pbnZlbnRvcnkuYWRkSXRlbShpdGVtKTtcclxuICAgIHJldHVybiB0aGlzLmludmVudG9yeTtcclxuICB9XHJcblxyXG4gIGRyb3BJdGVtKGl0ZW0pIHtcclxuICAgIHRoaXMuaW52ZW50b3J5LmRyb3BJdGVtKGl0ZW0pO1xyXG4gICAgcmV0dXJuIHRoaXMuaW52ZW50b3J5O1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9tcHQge1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lID0gJycsIGtleXdvcmRzID0gW10sIHJlc3VsdHMgPSB7fSwgcmVxdWlyZW1lbnRzID0gW10pIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAvLyBLZXl3b3JkcyB0aGF0IGNhbiB0cmlnZ2VyIHRoZSBwcm9tcHQgKG1ha2UgYWxsIGxvd2VyLWNhc2UgYnkgZGVmYXVsdClcclxuICAgIHRoaXMua2V5d29yZHMgPSBrZXl3b3Jkcy5tYXAoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHYudG9Mb3dlckNhc2UoKTt9KTtcclxuICAgIC8vIFJlc3VsdHMgdGhhdCBvY2N1ciB3aGVuIHRoaXMgcHJvbXB0IGlzIHN1Y2Nlc3NmdWxseSB0cmlnZ2VyZWQ7XHJcbiAgICAvLyB0aGUgcmVzdWx0IGtleXMgY29tcHJpc2Ugb2Yg4oCcc3VjY2Vzc1RleHTigJ0gKHJlcXVpcmVkKSwgXCJmYWlsVGV4dFwiIChvcHRpb25hbCksXHJcbiAgICAvLyDigJxpdGVtc1JlcXVpcmVk4oCdIChvcHRpb25hbCksIGFuZCDigJxyb29tVG9FbnRlcuKAnSAob3B0aW9uYWwpXHJcbiAgICB0aGlzLnJlc3VsdHMgPSByZXN1bHRzO1xyXG4gICAgLy8gQW55IHByZXJlcXVpc2l0ZSBpdGVtcyBuZWVkZWQgdG8gZG8gdGhlIHByb21wdD9cclxuICAgIHRoaXMucmVxdWlyZW1lbnRzID0gcmVxdWlyZW1lbnRzO1xyXG4gIH1cclxuXHJcbiAgLy8gQ2hlY2sgaWYgaW5wdXQgbWVzc2FnZSBtYXRjaGVzIGFueSBwcm9tcHQga2V5d29yZHMgYW5kIHJldHVybiByZXN1bHRzXHJcbiAgbWF0Y2hLZXl3b3JkcyhtZXNzYWdlLCBpdGVtcyA9IFtdKSB7XHJcbiAgICBsZXQgZm91bmRLZXl3b3JkID0gZmFsc2U7XHJcbiAgICBsZXQgbWlzc2luZ1JlcXVpcmVtZW50cyA9IFtdO1xyXG5cclxuICAgIC8vIElmIHdlIGhhdmUgYW55IGl0ZW0gcmVxdWlyZW1lbnRzXHJcbiAgICBpZiAodGhpcy5yZXF1aXJlbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAvLyBDaGVjayBhbGwgdGhlIHJlcXVpcmVtZW50cyBhZ2FpbnN0IHRoZSBpdGVtcyBwYXNzZWRcclxuICAgICAgdGhpcy5yZXF1aXJlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAocmVxdWlyZW1lbnQpIHtcclxuICAgICAgICBsZXQgZm91bmRSZXF1aXJlbWVudCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICBpZiAoaXRlbSA9PT0gcmVxdWlyZW1lbnQpIHtcclxuICAgICAgICAgICAgZm91bmRSZXF1aXJlbWVudCA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gSWYgYSByZXF1aXJlbWVudCBpc24ndCBmb3VuZCBhZGQgdGhhdCBhIGxpc3RcclxuICAgICAgICBpZiAoIWZvdW5kUmVxdWlyZW1lbnQpIHtcclxuICAgICAgICAgIG1pc3NpbmdSZXF1aXJlbWVudHMucHVzaChyZXF1aXJlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vIE9uY2Ugd2UgY2hlY2sgdG8gc2VlIGlmIHRoZSBwbGF5ZXIncyBtaXNzaW5nIGFueSBpdGVtcyxcclxuICAgIC8vIHBhcnNlIHRoZSBpbnB1dCBmb3IgbWF0Y2hpbmcga2V5d29yZHMgdG8gdGhlIHByb21wdFxyXG4gICAgdGhpcy5rZXl3b3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChrZXl3b3JkKSB7XHJcbiAgICAgIGlmIChtZXNzYWdlLmluY2x1ZGVzKGtleXdvcmQudG9Mb3dlckNhc2UoKSkpIHtcclxuICAgICAgICBmb3VuZEtleXdvcmQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIElmIGFueSBrZXl3b3JkcyBoYXZlIGJlZW4gbWF0Y2hlZCBmcm9tIHRoZSB1c2VyIGlucHV0XHJcbiAgICBpZiAoZm91bmRLZXl3b3JkKSB7XHJcbiAgICAgIC8vIElmIHRoZXJlIGFyZSBhbnkgbWlzc2luZyBpdGVtIHJlcXVpcmVtZW50c1xyXG4gICAgICBpZiAobWlzc2luZ1JlcXVpcmVtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgLy8gUHJvbXB0IGZhaWxzOyByZXR1cm4gbWlzc2luZyBpdGVtcyBhbmQgZmFpbFRleHRcclxuICAgICAgICByZXR1cm4geydmYWlsJzoge1xyXG4gICAgICAgICAgJ21pc3NpbmcnOiBtaXNzaW5nUmVxdWlyZW1lbnRzLFxyXG4gICAgICAgICAgJ2ZhaWxUZXh0JzogdGhpcy5yZXN1bHRzLmZhaWxUZXh0fVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgLy8gUHJvbXB0IHN1Y2NlZWRzOyByZXR1cm4gcmVzdWx0cyBvZiB0aGUgcHJvbXB0XHJcbiAgICAgIHJldHVybiB7J3N1Y2Nlc3MnOiB0aGlzLnJlc3VsdHN9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQcm9tcHQgZnJvbSAnLi9wcm9tcHQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm9vbSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWUgPSAnJywgZ2V0VGV4dCA9ICcnLCBwcm9tcHRzID0gW10sIHJlcXVpcmVtZW50cyA9IFtdKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5nZXRUZXh0ID0gZ2V0VGV4dDsgLy8gVGhlIHRleHQgdGhhdCBpcyBkaXNwbGF5ZWQgd2hlbiB0aGUgcm9vbSBpcyBlbnRlcmVkXHJcbiAgICAvLyB0aGlzLnByb21wdHMgPSBwcm9tcHRzOyAvLyBXaGF0IGFyZSB0aGUgYWN0aW9ucyB0aGF0IHdlIGNhbiBkbyBpbiB0aGlzIHJvb20/XHJcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgdGhpcy5wcm9tcHRzID0gW107XHJcblxyXG4gICAgcHJvbXB0cy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9tcHQpIHtcclxuICAgICAgX3RoaXMuYWRkUHJvbXB0KHByb21wdC5uYW1lLCBwcm9tcHQua2V5d29yZHMsIHByb21wdC5yZXN1bHRzLCBwcm9tcHQucmVxdWlyZW1lbnRzKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5yZXF1aXJlbWVudHMgPSByZXF1aXJlbWVudHM7IC8vIEFueSByZXF1aXJlbWVudHMgKGl0ZW1zKSBuZWVkZWQgdG8gYWNjZXNzIHRoZSByb29tXHJcbiAgfVxyXG5cclxuICAvLyBBZGQgbmV3IHByb21wdCAvIGludGVyYWN0aW9uIHRvIHJvb21cclxuICBhZGRQcm9tcHQobmFtZSwga2V5d29yZHMsIHJlc3VsdHMsIHJlcXVpcmVtZW50cykge1xyXG4gICAgY29uc3QgcHJvbXB0ID0gbmV3IFByb21wdChuYW1lLCBrZXl3b3JkcywgcmVzdWx0cywgcmVxdWlyZW1lbnRzKTtcclxuXHJcbiAgICB0aGlzLnByb21wdHMucHVzaChwcm9tcHQpO1xyXG4gICAgcmV0dXJuIHRoaXMucHJvbXB0cztcclxuICB9XHJcblxyXG4gIC8vIEVudGVyIHRoZSByb29tXHJcbiAgZW50ZXIoaXRlbXMgPSBbXSkge1xyXG4gICAgbGV0IHJlc3VsdFRleHQgPSAnJztcclxuICAgIGxldCBtZXRBbGxSZXF1aXJlbWVudHMgPSB0cnVlOyAvLyBDYW4gd2UgZW50ZXIgdGhlIHJvb20/XHJcblxyXG4gICAgLy8gVGhlIHJvb20gaXMgbm90IGFjY2Vzc2libGUgYnkgZGVmYXVsdCBpZiB3ZSBoYXZlIG1vcmUgdGhhbiBvbmUgcmVxdWlyZW1lbnQgKGl0ZW0pXHJcbiAgICBpZiAodGhpcy5yZXF1aXJlbWVudHMgPiAwKSB7XHJcbiAgICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBtZXRBbGxSZXF1aXJlbWVudHMgPSBmYWxzZTtcclxuICAgICAgICAvLyBBcHBlbmQgbWlzc2luZyByZXF1aXJlbWVudCBtZXNzYWdlc1xyXG4gICAgICAgIHRoaXMucmVxdWlyZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKHJlcXVpcmVtZW50KSB7XHJcbiAgICAgICAgICByZXN1bHRUZXh0ICs9IGAke3JlcXVpcmVtZW50LmZhaWxUZXh0fS4gYDtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBDaGVjayB0aGUgcm9vbSdzIHJlcXVpcmVtZW50cyBhZ2FpbnN0IGl0ZW1zIHRvIHNlZSBpZiB0aGV5J3JlIGFsbCBmb3VuZFxyXG4gICAgICAgIHRoaXMucmVxdWlyZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKHJlcXVpcmVtZW50KSB7XHJcbiAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0gPT09IHJlcXVpcmVtZW50KSB7XHJcbiAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGlmIChmb3VuZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgbWV0QWxsUmVxdWlyZW1lbnRzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIFJldHVybiBmYWlsIG1lc3NhZ2VzIGZvciBtaXNzaW5nIHJlcXVpcmVtZW50c1xyXG4gICAgICAgICAgICByZXN1bHRUZXh0ICs9IHJlcXVpcmVtZW50LmZhaWxUZXh0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIElmIGFsbCBpdGVtIHJlcXVpcmVtZW50cyBoYXZlIGJlZW4gZm91bmQsIHJldHVybiByb29tIHRleHRcclxuICAgICAgICBpZiAobWV0QWxsUmVxdWlyZW1lbnRzID09PSB0cnVlKSB7XHJcbiAgICAgICAgICByZXN1bHRUZXh0ID0gdGhpcy5nZXRUZXh0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvLyBObyBpdGVtcyByZXF1aXJlZCB0byBlbnRlciB0aGUgcm9vbSwgcmV0dXJuIHJvb20gdGV4dFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0VGV4dCA9IHRoaXMuZ2V0VGV4dDtcclxuICAgIH1cclxuICAgIC8vIFJldHVybiByZXN1bHRpbmcgdGV4dCBhbmQgd2hldGhlciBvciBub3Qgcm9vbSBjb3VsZCBiZSBlbnRlcmVkXHJcbiAgICByZXR1cm4gW3Jlc3VsdFRleHQsIG1ldEFsbFJlcXVpcmVtZW50c107XHJcbiAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9