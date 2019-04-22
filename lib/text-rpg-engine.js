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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGV4dC1ycGctZW5naW5lLy4vc3JjL2lucHV0LmpzIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS8uL3NyYy9pbnZlbnRvcnkuanMiLCJ3ZWJwYWNrOi8vdGV4dC1ycGctZW5naW5lLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvcHJvbXB0LmpzIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS8uL3NyYy9yb29tLmpzIl0sIm5hbWVzIjpbIkRpc3BsYXkiLCJodG1sIiwiZWxlbWVudElkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsIkdhbWUiLCJyb29tcyIsIml0ZW1zIiwic3RhcnRSb29tIiwiZW5kUm9vbSIsIklucHV0IiwiUGxheWVyIiwiZGlzcGxheVRleHQiLCJsZW5ndGgiLCJuYW1lIiwiY3VycmVudFJvb20iLCJpIiwiZ2V0VGV4dCIsInVuZGVmaW5lZCIsInNob3ciLCJnYW1lRGF0YSIsIl90aGlzIiwiZ2FtZSIsImZvckVhY2giLCJyb29tIiwicm9vbVByb21wdHMiLCJyb29tUmVxdWlyZW1lbnRzIiwicHJvbXB0cyIsInJlcXVpcmVtZW50cyIsInJlcXVpdXJlbWVudHMiLCJhZGRSb29tIiwicm9vbU9iaiIsInB1c2giLCJyb29tTmFtZSIsIm5ld1Jvb21zIiwiZmlsdGVyIiwiZmluZCIsIngiLCJtZXNzYWdlIiwic2VuZCIsImRlY2lkZVBhdGgiLCJ2YWx1ZSIsInJlc2V0R2FtZSIsImN1cnJSb29tIiwiZ2V0Um9vbSIsImZvdW5kUHJvbXB0IiwicHJvbXB0IiwibWF0Y2hpbmdQcm9tcHRSZXN1bHRzIiwibWF0Y2hLZXl3b3JkcyIsImludmVudG9yeSIsInN1Y2Nlc3MiLCJzdWNjZXNzVGV4dCIsIml0ZW1zR2l2ZW4iLCJhZGRJdGVtcyIsInJvb21Ub0VudGVyIiwiZW50ZXJSb29tUmVzdWx0U3VjY2VzcyIsImVudGVyUm9vbVJlc3VsdFRleHQiLCJlbnRlclJvb20iLCJhcHBlbmQiLCJ3aW4iLCJmYWlsIiwiZmFpbFRleHQiLCJtaXNzaW5nIiwidG9TdHJpbmciLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZGlzYWJsZSIsImVuYWJsZSIsImRpc2FibGVJbnB1dCIsImRpc2FibGVkIiwidG9Mb3dlckNhc2UiLCJJbnZlbnRvcnkiLCJjb25jYXQiLCJpdGVtTmFtZSIsIm5ld0ludmVudG9yeSIsIml0ZW0iLCJyb29tUmVzdWx0IiwiZW50ZXIiLCJhZGRJdGVtIiwiZHJvcEl0ZW0iLCJQcm9tcHQiLCJrZXl3b3JkcyIsInJlc3VsdHMiLCJtYXAiLCJ2IiwiZm91bmRLZXl3b3JkIiwibWlzc2luZ1JlcXVpcmVtZW50cyIsInJlcXVpcmVtZW50IiwiZm91bmRSZXF1aXJlbWVudCIsImtleXdvcmQiLCJpbmNsdWRlcyIsIlJvb20iLCJhZGRQcm9tcHQiLCJyZXN1bHRUZXh0IiwibWV0QWxsUmVxdWlyZW1lbnRzIiwiZm91bmQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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LEtBQUssS0FBSyxLQUFkLEVBQXFCO0FBQ25CRCxnQ0FBa0IsR0FBRyxLQUFyQixDQURtQixDQUVuQjs7QUFDQUQsd0JBQVUsSUFBSU4sV0FBVyxDQUFDM0IsUUFBMUI7QUFDRDtBQUNGLFdBYkQsRUFGSyxDQWdCTDs7QUFDQSxjQUFJa0Msa0JBQWtCLEtBQUssSUFBM0IsRUFBaUM7QUFDL0JELHNCQUFVLEdBQUcsS0FBSzdFLE9BQWxCO0FBQ0Q7QUFDRixTQTNCd0IsQ0E0QnpCOztBQUNELE9BN0JELE1BNkJPO0FBQ0w2RSxrQkFBVSxHQUFHLEtBQUs3RSxPQUFsQjtBQUNELE9BcENlLENBcUNoQjs7O0FBQ0EsYUFBTyxDQUFDNkUsVUFBRCxFQUFhQyxrQkFBYixDQUFQO0FBQ0QiLCJmaWxlIjoidGV4dC1ycGctZW5naW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJ0ZXh0LXJwZy1lbmdpbmVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1widGV4dC1ycGctZW5naW5lXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInRleHQtcnBnLWVuZ2luZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIid1c2Ugc3RyaWN0JztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGh0bWwgPSAnJywgZWxlbWVudElkID0gJ2Rpc3BsYXknKSB7XHJcbiAgICB0aGlzLmh0bWwgPSBodG1sO1xyXG4gICAgdGhpcy5lbGVtZW50SWQgPSBlbGVtZW50SWQ7XHJcbiAgfVxyXG5cclxuICBzaG93KGh0bWwgPSBudWxsKSB7XHJcbiAgICBpZiAoaHRtbCA9PT0gbnVsbCkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkuaW5uZXJIVE1MID0gdGhpcy5odG1sO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgIHRoaXMuaHRtbCA9IGh0bWw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBBcHBlbmQgSFRNTCBjb250ZW50IHRvIGRpc3BsYXkgc2NyZWVuXHJcbiAgYXBwZW5kKGh0bWwpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5pbm5lckhUTUwgKz0gaHRtbDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IERpc3BsYXkgZnJvbSAnLi9kaXNwbGF5JztcclxuaW1wb3J0IElucHV0IGZyb20gJy4vaW5wdXQnO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IFJvb20gZnJvbSAnLi9yb29tJztcclxuaW1wb3J0IEludmVudG9yeSBmcm9tICcuL2ludmVudG9yeSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcclxuXHJcbiAgY29uc3RydWN0b3Iocm9vbXMgPSBbXSwgaXRlbXMgPSBbXSwgc3RhcnRSb29tID0gJycsIGVuZFJvb20gPSAnJykge1xyXG4gICAgdGhpcy5EaXNwbGF5ID0gbmV3IERpc3BsYXkoKTtcclxuICAgIHRoaXMuSW5wdXQgPSBuZXcgSW5wdXQoKTtcclxuICAgIHRoaXMucm9vbXMgPSByb29tczsgLy8gQWxsIHRoZSByb29tcyBpbiBvdXIgZ2FtZVxyXG4gICAgdGhpcy5zdGFydFJvb20gPSBzdGFydFJvb207IC8vIFdoaWNoIHJvb20gd2lsbCB0aGUgcGxheWVyIHN0YXJ0IGluXHJcbiAgICB0aGlzLmVuZFJvb20gPSBlbmRSb29tOyAvLyBXaGljaCByb29tIGlzIHRoZSB3aW5uaW5nIC8gZ2FtZSBlbmRcclxuICAgIHRoaXMuUGxheWVyID0gbmV3IFBsYXllcihzdGFydFJvb20gPSB0aGlzLnN0YXJ0Um9vbSk7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgbGV0IGRpc3BsYXlUZXh0O1xyXG5cclxuICAgIC8vIElmIGdhbWUgd2Fzbid0IGluaXRpYWxpemVkIHdpdGggYSBzdGFydFJvb20sIHNldCBpdCB0byB0aGUgZmlyc3Qgcm9vbVxyXG4gICAgaWYgKHRoaXMuc3RhcnRSb29tID09PSAnJyAmJiB0aGlzLnJvb21zLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5zdGFydFJvb20gPSB0aGlzLnJvb21zWzBdLm5hbWU7XHJcbiAgICAgIHRoaXMuUGxheWVyLnN0YXJ0Um9vbSA9IHRoaXMuc3RhcnRSb29tO1xyXG4gICAgICB0aGlzLlBsYXllci5jdXJyZW50Um9vbSA9IHRoaXMuUGxheWVyLnN0YXJ0Um9vbTtcclxuICAgIH1cclxuICAgIC8vIElmIGdhbWUgd2Fzbid0IGluaXRpYWxpemVkIHdpdGggYSBlbmRSb29tLCBzZXQgaXQgdG8gdGhlIGxhc3Qgcm9vbVxyXG4gICAgaWYgKHRoaXMuZW5kUm9vbSA9PT0gJycgJiYgdGhpcy5yb29tcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgIHRoaXMuZW5kUm9vbSA9IHRoaXMucm9vbXNbdGhpcy5yb29tcy5sZW5ndGggLSAxXS5uYW1lO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvb21zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLnJvb21zW2ldLm5hbWUgPT09IHRoaXMuc3RhcnRSb29tKSB7XHJcbiAgICAgICAgZGlzcGxheVRleHQgPSB0aGlzLnJvb21zW2ldLmdldFRleHQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChkaXNwbGF5VGV4dCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGRpc3BsYXlUZXh0ID0gJ05vIHN0YXJ0aW5nIHJvb20gdGV4dCBmb3VuZCEnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5EaXNwbGF5LnNob3coZGlzcGxheVRleHQpO1xyXG4gIH1cclxuXHJcbiAgLy8gTG9hZHMgZ2FtZSBkYXRhIGZyb20gSlNPTiBvYmplY3QgcGFzc2VkXHJcbiAgbG9hZERhdGEoZ2FtZURhdGEpIHtcclxuICAgIGNvbnN0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICBnYW1lRGF0YS5nYW1lLnJvb21zLmZvckVhY2goZnVuY3Rpb24gKHJvb20pIHtcclxuICAgICAgLy8gY29uc29sZS5sb2cocm9vbSk7XHJcbiAgICAgIGxldCByb29tUHJvbXB0cyA9IFtdO1xyXG4gICAgICBsZXQgcm9vbVJlcXVpcmVtZW50cyA9IFtdO1xyXG5cclxuICAgICAgLy8gUm9vbSBwcm9tcHRzIGFuZCByZXF1aXJlbWVudHMgYXJlIG9wdGlvbmFsIHNvIGhhbmRsZSB0aGF0XHJcbiAgICAgIGlmIChyb29tLnByb21wdHMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJvb21Qcm9tcHRzID0gcm9vbS5wcm9tcHRzO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChyb29tLnJlcXVpcmVtZW50cyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcm9vbVJlcXVpcmVtZW50cyA9IHJvb20ucmVxdWl1cmVtZW50cztcclxuICAgICAgfVxyXG4gICAgICBfdGhpcy5hZGRSb29tKHJvb20ubmFtZSwgcm9vbS5nZXRUZXh0LCByb29tUHJvbXB0cywgcm9vbVJlcXVpcmVtZW50cyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIE1hbmFnZSByb29tc1xyXG4gIGFkZFJvb20obmFtZSwgZ2V0VGV4dCwgcHJvbXB0cyA9IFtdLCByZXF1aXJlbWVudHMgPSBbXSkge1xyXG4gICAgbGV0IHJvb21PYmogPSBuZXcgUm9vbShuYW1lLCBnZXRUZXh0LCBwcm9tcHRzLCByZXF1aXJlbWVudHMpO1xyXG5cclxuICAgIHRoaXMucm9vbXMucHVzaChyb29tT2JqKTtcclxuICAgIHJldHVybiByb29tT2JqO1xyXG4gIH1cclxuXHJcbiAgZHJvcFJvb20ocm9vbU5hbWUpIHtcclxuICAgIGxldCBuZXdSb29tcyA9IHRoaXMucm9vbXMuZmlsdGVyKGZ1bmN0aW9uIChyb29tKSB7XHJcbiAgICAgIHJldHVybiByb29tLm5hbWUgIT09IHJvb21OYW1lO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5yb29tcyA9IG5ld1Jvb21zO1xyXG4gICAgcmV0dXJuIHRoaXMucm9vbXM7XHJcbiAgfVxyXG5cclxuICAvLyBSZXR1cm5zIHJvb20gb2JqZWN0IChwcm9wZXJ0aWVzKSBnaXZlbiB0aGUgbmFtZVxyXG4gIGdldFJvb20ocm9vbU5hbWUpIHtcclxuICAgIGNvbnN0IHJvb20gPSB0aGlzLnJvb21zLmZpbmQoeCA9PiB4Lm5hbWUgPT09IHJvb21OYW1lKTtcclxuXHJcbiAgICByZXR1cm4gcm9vbTtcclxuICB9XHJcblxyXG4gIC8vIFVzZXIgaW5wdXRcclxuICB1c2VyU2VuZChtZXNzYWdlKSB7XHJcbiAgICAvLyBPdXIgSW5wdXQgY2xhc3Mgd2lsbCBoYW5kbGUgY2xlYW5pbmcgLyBub3JtYWxpemluZyBzdHJpbmdzXHJcbiAgICB0aGlzLklucHV0LnNlbmQobWVzc2FnZSk7XHJcbiAgICB0aGlzLmRlY2lkZVBhdGgodGhpcy5JbnB1dC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvLyBHYW1lIEFJXHJcbiAgZGVjaWRlUGF0aChtZXNzYWdlKSB7XHJcbiAgICBpZiAobWVzc2FnZSA9PT0gJ3Jlc3RhcnQnKSB7XHJcbiAgICAgIHRoaXMucmVzZXRHYW1lKCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XHJcbiAgICBjb25zdCBjdXJyUm9vbSA9IF90aGlzLmdldFJvb20oX3RoaXMuUGxheWVyLmN1cnJlbnRSb29tKTtcclxuXHJcbiAgICAvLyBEbyB3ZSBoYXZlIGFjdGlvbnMgdGhhdCB3ZSBjYW4gZG8gaW4gdGhlIHJvb20/XHJcbiAgICBpZiAodHlwZW9mIGN1cnJSb29tLnByb21wdHMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAvLyBDaGVjayBldmVyeSBwcm9tcHQgYWN0aW9uIHRvIHNlZSBpZiBpdCBtYXRjaGVzIG91ciBpbnB1dCBrZXl3b3Jkc1xyXG4gICAgICAvLyBGb3Igbm93IGp1c3QgZ2V0IHRoZSBmaXJzdCBtYXRjaGluZyBwcm9tcHQgYW5kIGRvIHRoYXRcclxuICAgICAgbGV0IGZvdW5kUHJvbXB0ID0gZmFsc2U7XHJcblxyXG4gICAgICBjdXJyUm9vbS5wcm9tcHRzLmZvckVhY2goZnVuY3Rpb24gKHByb21wdCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBpZiAoZm91bmRQcm9tcHQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoaW5nUHJvbXB0UmVzdWx0cyA9IHByb21wdC5tYXRjaEtleXdvcmRzKG1lc3NhZ2UsIF90aGlzLlBsYXllci5pbnZlbnRvcnkuaXRlbXMpO1xyXG5cclxuICAgICAgICAgICAgLy8gSWYgd2UgZ2V0IGEgbWF0Y2hpbmcgcmVzdWx0IGJhY2tcclxuICAgICAgICAgICAgaWYgKG1hdGNoaW5nUHJvbXB0UmVzdWx0cyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgIC8vIFRoaXMgcHJvbXB0IGhhcyBrZXl3b3JkcyB0aGF0IG1hdGNoIHRoZSB1c2VyJ3MgaW5wdXRcclxuICAgICAgICAgICAgICBmb3VuZFByb21wdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgLy8gSWYgcGxheWVyIHN1Y2NlZWRlZCBpbiBwcm9tcHQgYWN0aW9uXHJcbiAgICAgICAgICAgICAgaWYgKCdzdWNjZXNzJyBpbiBtYXRjaGluZ1Byb21wdFJlc3VsdHMpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLkRpc3BsYXkuc2hvdyhgPHA+JHttYXRjaGluZ1Byb21wdFJlc3VsdHMuc3VjY2Vzcy5zdWNjZXNzVGV4dH08L3A+YCk7XHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgaXRlbXMgZnJvbSBwcm9tcHQgaWYgYW55IGFyZSByZXR1cm5lZCBhbmQgYWRkIHRoZW0gdG8gaW52ZW50b3J5XHJcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hpbmdQcm9tcHRSZXN1bHRzLnN1Y2Nlc3MuaXRlbXNHaXZlbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgIF90aGlzLlBsYXllci5pbnZlbnRvcnkuYWRkSXRlbXMobWF0Y2hpbmdQcm9tcHRSZXN1bHRzLnN1Y2Nlc3MuaXRlbXNHaXZlbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcHJvbXB0IHN1Y2Nlc3MgcmVzdWx0IGluY2x1ZGVzIGVudGVyaW5nIGEgbmV3IHJvb20uLlxyXG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoaW5nUHJvbXB0UmVzdWx0cy5zdWNjZXNzLnJvb21Ub0VudGVyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgbGV0IGVudGVyUm9vbVJlc3VsdFN1Y2Nlc3M7XHJcbiAgICAgICAgICAgICAgICAgIGxldCBlbnRlclJvb21SZXN1bHRUZXh0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHBsYXllciBjYW4gc3VjY2Vzc2Z1bGx5IGVudGVyIHRoZSByb29tIChnaXZlbiB0aGUgaW52ZW50b3J5IC8gcm9vbSByZXF1aXJlbWVudHMpXHJcbiAgICAgICAgICAgICAgICAgIFtlbnRlclJvb21SZXN1bHRUZXh0LCBlbnRlclJvb21SZXN1bHRTdWNjZXNzXSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLlBsYXllci5lbnRlclJvb20oX3RoaXMuZ2V0Um9vbShtYXRjaGluZ1Byb21wdFJlc3VsdHMuc3VjY2Vzcy5yb29tVG9FbnRlcikpO1xyXG4gICAgICAgICAgICAgICAgICBfdGhpcy5EaXNwbGF5LmFwcGVuZChgPHA+JHtlbnRlclJvb21SZXN1bHRUZXh0fTwvcD5gKTtcclxuICAgICAgICAgICAgICAgICAgaWYgKGVudGVyUm9vbVJlc3VsdFN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayB0byBzZWUgaWYgcGxheWVyIGVudGVyZWQgd2lubmluZyByb29tXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoaW5nUHJvbXB0UmVzdWx0cy5zdWNjZXNzLnJvb21Ub0VudGVyID09PSBfdGhpcy5lbmRSb29tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBfdGhpcy53aW4oKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUGxheWVyIGNvdWxkIG5vdCBlbnRlciByb29tIChtaXNzaW5nIHJlcXVpcmVkIGl0ZW1zIGluIGludmVudG9yeSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvLyBQbGF5ZXIgZmFpbGVkIHRvIGRvIHByb21wdCAobWlzc2luZyBpdGVtIHJlcXVpcmVtZW50KVxyXG4gICAgICAgICAgICAgIGlmICgnZmFpbCcgaW4gbWF0Y2hpbmdQcm9tcHRSZXN1bHRzKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5EaXNwbGF5LnNob3coYCR7bWF0Y2hpbmdQcm9tcHRSZXN1bHRzLmZhaWwuZmFpbFRleHR9YCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5EaXNwbGF5LmFwcGVuZChgPHA+TWlzc2luZyByZXF1aXJlZCBpdGVtczogJHttYXRjaGluZ1Byb21wdFJlc3VsdHMuZmFpbC5taXNzaW5nLnRvU3RyaW5nKCl9LjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke190aGlzLmdldFJvb20oX3RoaXMuUGxheWVyLmN1cnJlbnRSb29tKS5nZXRUZXh0fTwvcD5gKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmb3VuZFByb21wdCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIC8vIFBsYXllciBkaWRuJ3Qgc2F5IGFueSBrZXl3b3JkcyB0aGF0IHRyaWdnZXJlZCBhbnkgb2YgdGhlIGN1cnJlbnQgcm9vbSBwcm9tcHRzXHJcbiAgICAgICAgICBfdGhpcy5EaXNwbGF5LnNob3coYDxwPk5vIGFjdGlvbnMgY291bGQgYmUgZG9uZSBmcm9tOiBcIiR7bWVzc2FnZX1cIi4gVHJ5IHNvbWV0aGluZyBlbHNlLCBvciBiZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3JlIHNwZWNpZmljIGFib3V0IHdoYXQgeW91J3JlIGRvaW5nLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtfdGhpcy5nZXRSb29tKF90aGlzLlBsYXllci5jdXJyZW50Um9vbSkuZ2V0VGV4dH08L3A+YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIE5vIHByb21wdHMgZXhpc3QgZm9yIHRoZSBjdXJyZW50IHJvb21cclxuICAgICAgX3RoaXMuRGlzcGxheS5zaG93KGA8cD5UaGVyZSBkb2Vzbid0IHNlZW0gdG8gYmUgYW55IGFjdGlvbnMgYXQgYWxsIHRoYXQgeW91IGNhbiBkbyBpbiB0aGlzIHJvb20uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke190aGlzLmdldFJvb20oX3RoaXMuUGxheWVyLmN1cnJlbnRSb29tKS5nZXRUZXh0fVxyXG4gICAgICBgKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UsIHRoaXMuUGxheWVyKTtcclxuICB9XHJcblxyXG4gIGRpc2FibGVJbnB1dCgpIHtcclxuICAgIHRoaXMuSW5wdXQuZGlzYWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgZW5hYmxlSW5wdXQoKSB7XHJcbiAgICB0aGlzLklucHV0LmVuYWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gUGxheWVyIHdpbnNcclxuICB3aW4oKSB7XHJcbiAgICAvLyBTaG93IGZpbmFsIHJvb20gdGV4dCAod2luIHRleHQpXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm9vbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMucm9vbXNbaV0ubmFtZSA9PT0gdGhpcy5lbmRSb29tKSB7XHJcbiAgICAgICAgdGhpcy5EaXNwbGF5LmFwcGVuZCgnPHA+R2FtZSBlbmQuPC9wPicpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBEaXNhYmxlIGFueSBtb3JlIHVzZXIgaW5wdXQgYWZ0ZXIgd2lubmluZ1xyXG4gICAgdGhpcy5kaXNhYmxlSW5wdXQoKTtcclxuICB9XHJcblxyXG4gIC8vIFBsYXllciByZXNldHMgZ2FtZVxyXG4gIHJlc2V0R2FtZSgpIHtcclxuICAgIC8vIFJlc2V0cyBwbGF5ZXIgd2l0aCBibGFuayBpbnZlbnRvcnkgYW5kIGJhY2sgdG8gc3RhcnRpbmcgcm9vbVxyXG4gICAgdGhpcy5QbGF5ZXIuaW52ZW50b3J5ID0gbmV3IEludmVudG9yeSgpO1xyXG4gICAgdGhpcy5QbGF5ZXIuY3VycmVudFJvb20gPSB0aGlzLnN0YXJ0Um9vbTtcclxuICAgIGNvbnN0IHJvb20gPSB0aGlzLmdldFJvb20odGhpcy5zdGFydFJvb20pO1xyXG5cclxuICAgIHRoaXMuRGlzcGxheS5zaG93KHJvb20uZ2V0VGV4dCk7XHJcbiAgICB0aGlzLklucHV0LmVuYWJsZSgpO1xyXG4gIH1cclxufVxyXG4iLCIndXNlIHN0cmljdCc7XHJcbmltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XHJcblxyXG5jb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdhbWU7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoZGlzYWJsZWQgPSBmYWxzZSwgdmFsdWUgPSAnJywgZWxlbWVudElkID0gJ2lucHV0Jykge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGRpc2FibGVkO1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5lbGVtZW50SWQgPSBlbGVtZW50SWQ7XHJcbiAgfVxyXG5cclxuICBlbmFibGUoKSB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQnKS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZGlzYWJsZSgpIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0JykuZGlzYWJsZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc2VuZCh2YWx1ZSkge1xyXG4gICAgLy8gTm9ybWFsaXplIGlucHV0IHZhbHVlcyAoaWYgZGVzaXJlZClcclxuICAgIHZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcbn1cclxuXHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEludmVudG9yeSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGl0ZW1zID0gW10pIHtcclxuICAgIHRoaXMuaXRlbXMgPSBpdGVtcztcclxuICB9XHJcblxyXG4gIC8vIFdlIGNhbiB1c2UgdGhpcyB0byBhZGQgc2luZ2xlIG9yIG11bHRpcGxlIGl0ZW1zLCBhcyBsb25nIGFzIHRoZVxyXG4gIC8vIHBhc3NlZCB2YWx1ZSBpcyBhbiBhcnJheVxyXG4gIGFkZEl0ZW1zKGl0ZW1zKSB7XHJcbiAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtcy5jb25jYXQoaXRlbXMpO1xyXG4gICAgcmV0dXJuIHRoaXMuaXRlbXM7XHJcbiAgfVxyXG5cclxuICBkcm9wSXRlbShpdGVtTmFtZSkge1xyXG4gICAgbGV0IG5ld0ludmVudG9yeSA9IHRoaXMuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgIHJldHVybiBpdGVtLm5hbWUgIT09IGl0ZW1OYW1lO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5pdGVtcyA9IG5ld0ludmVudG9yeTtcclxuICAgIHJldHVybiB0aGlzLml0ZW1zO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgSW52ZW50b3J5IGZyb20gJy4vaW52ZW50b3J5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWUgPSAnJywgaW52ZW50b3J5ID0gbmV3IEludmVudG9yeSgpLCBjdXJyZW50Um9vbSA9ICcnLCBzdGFydFJvb20pIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICBpZiAodGhpcy5uYW1lID09PSAnJykge1xyXG4gICAgICB0aGlzLm5hbWUgPSAncGxheWVyJztcclxuICAgIH1cclxuICAgIHRoaXMuaW52ZW50b3J5ID0gaW52ZW50b3J5O1xyXG4gICAgaWYgKHRoaXMuY3VycmVudFJvb20gPT09ICcnKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFJvb20gPSB0aGlzLnN0YXJ0Um9vbTtcclxuICAgIH1cclxuICAgIHRoaXMuc3RhcnRSb29tID0gc3RhcnRSb29tO1xyXG4gIH1cclxuXHJcbiAgZW50ZXJSb29tKHJvb20pIHtcclxuICAgIGNvbnN0IHJvb21SZXN1bHQgPSByb29tLmVudGVyKHRoaXMuaW52ZW50b3J5Lml0ZW1zKTtcclxuXHJcbiAgICBpZiAocm9vbVJlc3VsdFsxXSA9PT0gZmFsc2UpIHtcclxuICAgICAgLy8gUGxheWVyIGRpZCBub3QgaGF2ZSByZXF1aXJlZCBpdGVtcyB0byBlbnRlciB0aGUgcm9vbVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gRW50ZXJlZCByb29tIHN1Y2Nlc3NmdWxseVxyXG4gICAgICB0aGlzLmN1cnJlbnRSb29tID0gcm9vbS5uYW1lO1xyXG4gICAgfVxyXG4gICAgLy8gUmV0dXJuIHJlc3VsdHMgdGV4dCBhbmQgd2hldGhlciBvciBub3QgcGxheWVyIHN1Y2Nlc3NmdWxseSBlbnRlcmVkIHJvb21cclxuICAgIHJldHVybiBbcm9vbVJlc3VsdFswXSwgcm9vbVJlc3VsdFsxXV07XHJcbiAgfVxyXG5cclxuICBnZXRJdGVtKGl0ZW0pIHtcclxuICAgIHRoaXMuaW52ZW50b3J5LmFkZEl0ZW0oaXRlbSk7XHJcbiAgICByZXR1cm4gdGhpcy5pbnZlbnRvcnk7XHJcbiAgfVxyXG5cclxuICBkcm9wSXRlbShpdGVtKSB7XHJcbiAgICB0aGlzLmludmVudG9yeS5kcm9wSXRlbShpdGVtKTtcclxuICAgIHJldHVybiB0aGlzLmludmVudG9yeTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvbXB0IHtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZSA9ICcnLCBrZXl3b3JkcyA9IFtdLCByZXN1bHRzID0ge30sIHJlcXVpcmVtZW50cyA9IFtdKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgLy8gS2V5d29yZHMgdGhhdCBjYW4gdHJpZ2dlciB0aGUgcHJvbXB0IChtYWtlIGFsbCBsb3dlci1jYXNlIGJ5IGRlZmF1bHQpXHJcbiAgICB0aGlzLmtleXdvcmRzID0ga2V5d29yZHMubWFwKGZ1bmN0aW9uICh2KSB7IHJldHVybiB2LnRvTG93ZXJDYXNlKCk7fSk7XHJcbiAgICAvLyBSZXN1bHRzIHRoYXQgb2NjdXIgd2hlbiB0aGlzIHByb21wdCBpcyBzdWNjZXNzZnVsbHkgdHJpZ2dlcmVkO1xyXG4gICAgLy8gdGhlIHJlc3VsdCBrZXlzIGNvbXByaXNlIG9mIOKAnHN1Y2Nlc3NUZXh04oCdIChyZXF1aXJlZCksIFwiZmFpbFRleHRcIiAob3B0aW9uYWwpLFxyXG4gICAgLy8g4oCcaXRlbXNSZXF1aXJlZOKAnSAob3B0aW9uYWwpLCBhbmQg4oCccm9vbVRvRW50ZXLigJ0gKG9wdGlvbmFsKVxyXG4gICAgdGhpcy5yZXN1bHRzID0gcmVzdWx0cztcclxuICAgIC8vIEFueSBwcmVyZXF1aXNpdGUgaXRlbXMgbmVlZGVkIHRvIGRvIHRoZSBwcm9tcHQ/XHJcbiAgICB0aGlzLnJlcXVpcmVtZW50cyA9IHJlcXVpcmVtZW50cztcclxuICB9XHJcblxyXG4gIC8vIENoZWNrIGlmIGlucHV0IG1lc3NhZ2UgbWF0Y2hlcyBhbnkgcHJvbXB0IGtleXdvcmRzIGFuZCByZXR1cm4gcmVzdWx0c1xyXG4gIG1hdGNoS2V5d29yZHMobWVzc2FnZSwgaXRlbXMgPSBbXSkge1xyXG4gICAgbGV0IGZvdW5kS2V5d29yZCA9IGZhbHNlO1xyXG4gICAgbGV0IG1pc3NpbmdSZXF1aXJlbWVudHMgPSBbXTtcclxuXHJcbiAgICAvLyBJZiB3ZSBoYXZlIGFueSBpdGVtIHJlcXVpcmVtZW50c1xyXG4gICAgaWYgKHRoaXMucmVxdWlyZW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgLy8gQ2hlY2sgYWxsIHRoZSByZXF1aXJlbWVudHMgYWdhaW5zdCB0aGUgaXRlbXMgcGFzc2VkXHJcbiAgICAgIHRoaXMucmVxdWlyZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKHJlcXVpcmVtZW50KSB7XHJcbiAgICAgICAgbGV0IGZvdW5kUmVxdWlyZW1lbnQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgaWYgKGl0ZW0gPT09IHJlcXVpcmVtZW50KSB7XHJcbiAgICAgICAgICAgIGZvdW5kUmVxdWlyZW1lbnQgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIElmIGEgcmVxdWlyZW1lbnQgaXNuJ3QgZm91bmQgYWRkIHRoYXQgYSBsaXN0XHJcbiAgICAgICAgaWYgKCFmb3VuZFJlcXVpcmVtZW50KSB7XHJcbiAgICAgICAgICBtaXNzaW5nUmVxdWlyZW1lbnRzLnB1c2gocmVxdWlyZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLyBPbmNlIHdlIGNoZWNrIHRvIHNlZSBpZiB0aGUgcGxheWVyJ3MgbWlzc2luZyBhbnkgaXRlbXMsXHJcbiAgICAvLyBwYXJzZSB0aGUgaW5wdXQgZm9yIG1hdGNoaW5nIGtleXdvcmRzIHRvIHRoZSBwcm9tcHRcclxuICAgIHRoaXMua2V5d29yZHMuZm9yRWFjaChmdW5jdGlvbiAoa2V5d29yZCkge1xyXG4gICAgICBpZiAobWVzc2FnZS5pbmNsdWRlcyhrZXl3b3JkLnRvTG93ZXJDYXNlKCkpKSB7XHJcbiAgICAgICAgZm91bmRLZXl3b3JkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBJZiBhbnkga2V5d29yZHMgaGF2ZSBiZWVuIG1hdGNoZWQgZnJvbSB0aGUgdXNlciBpbnB1dFxyXG4gICAgaWYgKGZvdW5kS2V5d29yZCkge1xyXG4gICAgICAvLyBJZiB0aGVyZSBhcmUgYW55IG1pc3NpbmcgaXRlbSByZXF1aXJlbWVudHNcclxuICAgICAgaWYgKG1pc3NpbmdSZXF1aXJlbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIC8vIFByb21wdCBmYWlsczsgcmV0dXJuIG1pc3NpbmcgaXRlbXMgYW5kIGZhaWxUZXh0XHJcbiAgICAgICAgcmV0dXJuIHsnZmFpbCc6IHtcclxuICAgICAgICAgICdtaXNzaW5nJzogbWlzc2luZ1JlcXVpcmVtZW50cyxcclxuICAgICAgICAgICdmYWlsVGV4dCc6IHRoaXMucmVzdWx0cy5mYWlsVGV4dH1cclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIC8vIFByb21wdCBzdWNjZWVkczsgcmV0dXJuIHJlc3VsdHMgb2YgdGhlIHByb21wdFxyXG4gICAgICByZXR1cm4geydzdWNjZXNzJzogdGhpcy5yZXN1bHRzfTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUHJvbXB0IGZyb20gJy4vcHJvbXB0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvb20ge1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lID0gJycsIGdldFRleHQgPSAnJywgcHJvbXB0cyA9IFtdLCByZXF1aXJlbWVudHMgPSBbXSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuZ2V0VGV4dCA9IGdldFRleHQ7IC8vIFRoZSB0ZXh0IHRoYXQgaXMgZGlzcGxheWVkIHdoZW4gdGhlIHJvb20gaXMgZW50ZXJlZFxyXG4gICAgLy8gdGhpcy5wcm9tcHRzID0gcHJvbXB0czsgLy8gV2hhdCBhcmUgdGhlIGFjdGlvbnMgdGhhdCB3ZSBjYW4gZG8gaW4gdGhpcyByb29tP1xyXG4gICAgY29uc3QgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIHRoaXMucHJvbXB0cyA9IFtdO1xyXG5cclxuICAgIHByb21wdHMuZm9yRWFjaChmdW5jdGlvbiAocHJvbXB0KSB7XHJcbiAgICAgIF90aGlzLmFkZFByb21wdChwcm9tcHQubmFtZSwgcHJvbXB0LmtleXdvcmRzLCBwcm9tcHQucmVzdWx0cywgcHJvbXB0LnJlcXVpcmVtZW50cyk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMucmVxdWlyZW1lbnRzID0gcmVxdWlyZW1lbnRzOyAvLyBBbnkgcmVxdWlyZW1lbnRzIChpdGVtcykgbmVlZGVkIHRvIGFjY2VzcyB0aGUgcm9vbVxyXG4gIH1cclxuXHJcbiAgLy8gQWRkIG5ldyBwcm9tcHQgLyBpbnRlcmFjdGlvbiB0byByb29tXHJcbiAgYWRkUHJvbXB0KG5hbWUsIGtleXdvcmRzLCByZXN1bHRzLCByZXF1aXJlbWVudHMpIHtcclxuICAgIGNvbnN0IHByb21wdCA9IG5ldyBQcm9tcHQobmFtZSwga2V5d29yZHMsIHJlc3VsdHMsIHJlcXVpcmVtZW50cyk7XHJcblxyXG4gICAgdGhpcy5wcm9tcHRzLnB1c2gocHJvbXB0KTtcclxuICAgIHJldHVybiB0aGlzLnByb21wdHM7XHJcbiAgfVxyXG5cclxuICAvLyBFbnRlciB0aGUgcm9vbVxyXG4gIGVudGVyKGl0ZW1zID0gW10pIHtcclxuICAgIGxldCByZXN1bHRUZXh0ID0gJyc7XHJcbiAgICBsZXQgbWV0QWxsUmVxdWlyZW1lbnRzID0gdHJ1ZTsgLy8gQ2FuIHdlIGVudGVyIHRoZSByb29tP1xyXG5cclxuICAgIC8vIFRoZSByb29tIGlzIG5vdCBhY2Nlc3NpYmxlIGJ5IGRlZmF1bHQgaWYgd2UgaGF2ZSBtb3JlIHRoYW4gb25lIHJlcXVpcmVtZW50IChpdGVtKVxyXG4gICAgaWYgKHRoaXMucmVxdWlyZW1lbnRzID4gMCkge1xyXG4gICAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgbWV0QWxsUmVxdWlyZW1lbnRzID0gZmFsc2U7XHJcbiAgICAgICAgLy8gQXBwZW5kIG1pc3NpbmcgcmVxdWlyZW1lbnQgbWVzc2FnZXNcclxuICAgICAgICB0aGlzLnJlcXVpcmVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXF1aXJlbWVudCkge1xyXG4gICAgICAgICAgcmVzdWx0VGV4dCArPSBgJHtyZXF1aXJlbWVudC5mYWlsVGV4dH0uIGA7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gQ2hlY2sgdGhlIHJvb20ncyByZXF1aXJlbWVudHMgYWdhaW5zdCBpdGVtcyB0byBzZWUgaWYgdGhleSdyZSBhbGwgZm91bmRcclxuICAgICAgICB0aGlzLnJlcXVpcmVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXF1aXJlbWVudCkge1xyXG4gICAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtID09PSByZXF1aXJlbWVudCkge1xyXG4gICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpZiAoZm91bmQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIG1ldEFsbFJlcXVpcmVtZW50cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyBSZXR1cm4gZmFpbCBtZXNzYWdlcyBmb3IgbWlzc2luZyByZXF1aXJlbWVudHNcclxuICAgICAgICAgICAgcmVzdWx0VGV4dCArPSByZXF1aXJlbWVudC5mYWlsVGV4dDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBJZiBhbGwgaXRlbSByZXF1aXJlbWVudHMgaGF2ZSBiZWVuIGZvdW5kLCByZXR1cm4gcm9vbSB0ZXh0XHJcbiAgICAgICAgaWYgKG1ldEFsbFJlcXVpcmVtZW50cyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgcmVzdWx0VGV4dCA9IHRoaXMuZ2V0VGV4dDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy8gTm8gaXRlbXMgcmVxdWlyZWQgdG8gZW50ZXIgdGhlIHJvb20sIHJldHVybiByb29tIHRleHRcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3VsdFRleHQgPSB0aGlzLmdldFRleHQ7XHJcbiAgICB9XHJcbiAgICAvLyBSZXR1cm4gcmVzdWx0aW5nIHRleHQgYW5kIHdoZXRoZXIgb3Igbm90IHJvb20gY291bGQgYmUgZW50ZXJlZFxyXG4gICAgcmV0dXJuIFtyZXN1bHRUZXh0LCBtZXRBbGxSZXF1aXJlbWVudHNdO1xyXG4gIH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==