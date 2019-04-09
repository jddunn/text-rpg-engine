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

    this.startRoom = startRoom; // Which room will the player start in

    this.endRoom = endRoom; // Which room is the winning / game end

    this.Player = new _player.default(startRoom = this.startRoom);
  }

  _createClass(Game, [{
    key: "init",
    value: function init() {
      var displayText;
      console.log('Initialized game from: ' + this.datapath); // this.loadData(this.dataPath); // TODO: Make games load from JSON data
      // If game wasn't initialized with a startRoom, set it to the first room 

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
          if (foundPrompt === false) {
            var matchingPromptResults = prompt.matchKeywords(message, _this.Player.inventory.items); // If we get a matching result back

            if (matchingPromptResults !== null) {
              // This prompt has keywords that match the user's input
              foundPrompt = true; // If player succeeded in prompt action

              if ('success' in matchingPromptResults) {
                _this.Display.show(matchingPromptResults.success.successText); // Get items from prompt if any are returned and add them to inventory


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

                  // Check to see if player entered winning room
                  if (matchingPromptResults.success.roomToEnter === _this.endRoom) {
                    if (enterRoomResultSuccess) {
                      _this.win();
                    } else {// Player didn't win yet (a required item is not in inventory)
                    }
                  } // Show result of room entrance


                  _this.Display.append(enterRoomResultText);
                }
              } // Player failed to do prompt (missing item requirement)


              if ('fail' in matchingPromptResults) {
                _this.Display.show("".concat(matchingPromptResults.fail.failText));

                _this.Display.append("<p>Missing required items: ".concat(matchingPromptResults.fail.missing.toString(), ".</p>\n                                    <p>").concat(_this.getRoom(_this.Player.currentRoom).getText, "</p>"));

                return;
              }
            }
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
          this.Display.append("<p>".concat(this.rooms[i].getText, "</p>"));
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
    // “itemsRequired” (optional), // and “roomToEnter"” 

    this.results = results; // Any prerequisite items needed to do the prompt?

    this.requirements = requirements;
  } // Check if input message matches any prompt keywords


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
      } // Return fail message with missing item requirements
      // If we have all our item requirements, check the user's message
      // to see if we find any matching keywords


      this.keywords.forEach(function (keyword) {
        if (message.includes(keyword.toLowerCase())) {
          foundKeyword = true;
        }
      }); // Keywords have been matched from the user input, so return results of prompt

      if (foundKeyword) {
        if (missingRequirements.length > 0) {
          return {
            'fail': {
              'missing': missingRequirements,
              'failText': this.results.failText
            }
          };
        }

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
  }]);

  return Room;
}();

exports.default = Room;
module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGV4dC1ycGctZW5naW5lLy4vc3JjL2lucHV0LmpzIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS8uL3NyYy9pbnZlbnRvcnkuanMiLCJ3ZWJwYWNrOi8vdGV4dC1ycGctZW5naW5lLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvcHJvbXB0LmpzIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS8uL3NyYy9yb29tLmpzIl0sIm5hbWVzIjpbIkRpc3BsYXkiLCJodG1sIiwiZWxlbWVudElkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsIkdhbWUiLCJkYXRhcGF0aCIsInJvb21zIiwiaXRlbXMiLCJzdGFydFJvb20iLCJlbmRSb29tIiwiSW5wdXQiLCJQbGF5ZXIiLCJkaXNwbGF5VGV4dCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJuYW1lIiwiY3VycmVudFJvb20iLCJpIiwiZ2V0VGV4dCIsInVuZGVmaW5lZCIsInNob3ciLCJwcm9tcHRzIiwicmVxdWlyZW1lbnRzIiwicm9vbU9iaiIsInB1c2giLCJyb29tTmFtZSIsIm5ld1Jvb21zIiwiZmlsdGVyIiwicm9vbSIsImZpbmQiLCJ4IiwibWVzc2FnZSIsInNlbmQiLCJkZWNpZGVQYXRoIiwidmFsdWUiLCJyZXNldEdhbWUiLCJfdGhpcyIsImN1cnJSb29tIiwiZ2V0Um9vbSIsImZvdW5kUHJvbXB0IiwiZm9yRWFjaCIsInByb21wdCIsIm1hdGNoaW5nUHJvbXB0UmVzdWx0cyIsIm1hdGNoS2V5d29yZHMiLCJpbnZlbnRvcnkiLCJzdWNjZXNzIiwic3VjY2Vzc1RleHQiLCJpdGVtc0dpdmVuIiwiYWRkSXRlbXMiLCJyb29tVG9FbnRlciIsImVudGVyUm9vbVJlc3VsdFN1Y2Nlc3MiLCJlbnRlclJvb21SZXN1bHRUZXh0IiwiZW50ZXJSb29tIiwid2luIiwiYXBwZW5kIiwiZmFpbCIsImZhaWxUZXh0IiwibWlzc2luZyIsInRvU3RyaW5nIiwiZGlzYWJsZSIsImVuYWJsZSIsImRpc2FibGVJbnB1dCIsImdhbWUiLCJkaXNhYmxlZCIsInRvTG93ZXJDYXNlIiwiSW52ZW50b3J5IiwiY29uY2F0IiwiaXRlbU5hbWUiLCJuZXdJbnZlbnRvcnkiLCJpdGVtIiwicm9vbVJlc3VsdCIsImVudGVyIiwiYWRkSXRlbSIsImRyb3BJdGVtIiwiUHJvbXB0Iiwia2V5d29yZHMiLCJyZXN1bHRzIiwibWFwIiwidiIsImZvdW5kS2V5d29yZCIsIm1pc3NpbmdSZXF1aXJlbWVudHMiLCJyZXF1aXJlbWVudCIsImZvdW5kUmVxdWlyZW1lbnQiLCJrZXl3b3JkIiwiaW5jbHVkZXMiLCJSb29tIiwicmVzdWx0VGV4dCIsIm1ldEFsbFJlcXVpcmVtZW50cyIsImZvdW5kIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5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QUNBLGVBQUtsQyxZQUFMLENBQWtCa0IsT0FBbEIsQ0FBMEIsVUFBVXlDLFdBQVYsRUFBdUI7QUFDL0MsZ0JBQUlPLEtBQUssR0FBRyxLQUFaO0FBQ0EsaUJBQUtsRixLQUFMLENBQVdrQyxPQUFYLENBQW1CLFVBQVU2QixJQUFWLEVBQWdCO0FBQ2pDLGtCQUFJQSxJQUFJLEtBQUtZLFdBQWIsRUFBMEI7QUFDeEJPLHFCQUFLLEdBQUcsSUFBUjtBQUNEO0FBQ0YsYUFKRDs7QUFLQSxnQkFBSUEsS0FBSyxLQUFLLEtBQWQsRUFBcUI7QUFDbkJELGdDQUFrQixHQUFHLEtBQXJCLENBRG1CLENBRW5COztBQUNBRCx3QkFBVSxJQUFJTCxXQUFXLENBQUN6QixRQUExQjtBQUNEO0FBQ0YsV0FaRDs7QUFhQSxjQUFJK0Isa0JBQWtCLEtBQUssSUFBM0IsRUFBaUM7QUFDL0JELHNCQUFVLEdBQUcsS0FBS3BFLE9BQWxCO0FBQ0Q7QUFDRjtBQUNGLE9BMUJELE1BMEJPO0FBQ0xvRSxrQkFBVSxHQUFHLEtBQUtwRSxPQUFsQjtBQUNELE9BaENlLENBaUNoQjs7O0FBQ0EsYUFBTyxDQUFDb0UsVUFBRCxFQUFhQyxrQkFBYixDQUFQO0FBQ0QiLCJmaWxlIjoidGV4dC1ycGctZW5naW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJ0ZXh0LXJwZy1lbmdpbmVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1widGV4dC1ycGctZW5naW5lXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInRleHQtcnBnLWVuZ2luZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXkge1xyXG5cclxuICBjb25zdHJ1Y3RvcihodG1sID0gJycsIGVsZW1lbnRJZCA9ICdkaXNwbGF5Jykge1xyXG4gICAgdGhpcy5odG1sID0gaHRtbDtcclxuICAgIHRoaXMuZWxlbWVudElkID0gZWxlbWVudElkO1xyXG4gIH1cclxuXHJcbiAgc2hvdyhodG1sID0gbnVsbCkge1xyXG4gICAgaWYgKGh0bWwgPT09IG51bGwpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLmlubmVySFRNTCA9IHRoaXMuaHRtbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICB0aGlzLmh0bWwgPSBodG1sO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQXBwZW5kIEhUTUwgY29udGVudCB0byBkaXNwbGF5IHNjcmVlblxyXG4gIGFwcGVuZChodG1sKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkuaW5uZXJIVE1MICs9IGh0bWw7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBEaXNwbGF5IGZyb20gJy4vZGlzcGxheSc7XHJcbmltcG9ydCBJbnB1dCBmcm9tICcuL2lucHV0JztcclxuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XHJcbmltcG9ydCBSb29tIGZyb20gJy4vcm9vbSc7XHJcbmltcG9ydCBJbnZlbnRvcnkgZnJvbSAnLi9pbnZlbnRvcnknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRhdGFwYXRoID0gJycsIHJvb21zID0gW10sIGl0ZW1zID0gW10sIHN0YXJ0Um9vbSA9ICcnLCBlbmRSb29tID0gJycpIHtcclxuICAgIHRoaXMuRGlzcGxheSA9IG5ldyBEaXNwbGF5KCk7XHJcbiAgICB0aGlzLklucHV0ID0gbmV3IElucHV0KCk7XHJcbiAgICB0aGlzLmRhdGFwYXRoID0gZGF0YXBhdGg7IC8vIFRPRE86IEJlIGFibGUgdG8gaGF2ZSBnYW1lIGluaXRpYWxpemUgZGF0YSBmcm9tIEpTT04gZmlsZVxyXG4gICAgdGhpcy5yb29tcyA9IHJvb21zOyAvLyBBbGwgdGhlIHJvb21zIGluIG91ciBnYW1lXHJcbiAgICB0aGlzLnN0YXJ0Um9vbSA9IHN0YXJ0Um9vbTsgLy8gV2hpY2ggcm9vbSB3aWxsIHRoZSBwbGF5ZXIgc3RhcnQgaW5cclxuICAgIHRoaXMuZW5kUm9vbSA9IGVuZFJvb207IC8vIFdoaWNoIHJvb20gaXMgdGhlIHdpbm5pbmcgLyBnYW1lIGVuZFxyXG4gICAgdGhpcy5QbGF5ZXIgPSBuZXcgUGxheWVyKHN0YXJ0Um9vbSA9IHRoaXMuc3RhcnRSb29tKTsgXHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgbGV0IGRpc3BsYXlUZXh0O1xyXG4gICAgY29uc29sZS5sb2coJ0luaXRpYWxpemVkIGdhbWUgZnJvbTogJyArIHRoaXMuZGF0YXBhdGgpO1xyXG4gICAgLy8gdGhpcy5sb2FkRGF0YSh0aGlzLmRhdGFQYXRoKTsgLy8gVE9ETzogTWFrZSBnYW1lcyBsb2FkIGZyb20gSlNPTiBkYXRhXHJcbiAgICAvLyBJZiBnYW1lIHdhc24ndCBpbml0aWFsaXplZCB3aXRoIGEgc3RhcnRSb29tLCBzZXQgaXQgdG8gdGhlIGZpcnN0IHJvb20gXHJcbiAgICBpZiAodGhpcy5zdGFydFJvb20gPT09ICcnICYmIHRoaXMucm9vbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnN0YXJ0Um9vbSA9IHRoaXMucm9vbXNbMF0ubmFtZTsgXHJcbiAgICAgIHRoaXMuUGxheWVyLnN0YXJ0Um9vbSA9IHRoaXMuc3RhcnRSb29tO1xyXG4gICAgICB0aGlzLlBsYXllci5jdXJyZW50Um9vbSA9IHRoaXMuUGxheWVyLnN0YXJ0Um9vbTtcclxuICAgIH1cclxuICAgIC8vIElmIGdhbWUgd2Fzbid0IGluaXRpYWxpemVkIHdpdGggYSBlbmRSb29tLCBzZXQgaXQgdG8gdGhlIGxhc3Qgcm9vbVxyXG4gICAgaWYgKHRoaXMuZW5kUm9vbSA9PT0gJycgJiYgdGhpcy5yb29tcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgIHRoaXMuZW5kUm9vbSA9IHRoaXMucm9vbXNbdGhpcy5yb29tcy5sZW5ndGggLSAxXS5uYW1lOyAgICAgIFxyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvb21zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLnJvb21zW2ldLm5hbWUgPT09IHRoaXMuc3RhcnRSb29tKSB7XHJcbiAgICAgICAgZGlzcGxheVRleHQgPSB0aGlzLnJvb21zW2ldLmdldFRleHQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChkaXNwbGF5VGV4dCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGRpc3BsYXlUZXh0ID0gJ05vIHN0YXJ0aW5nIHJvb20gdGV4dCBmb3VuZCEnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5EaXNwbGF5LnNob3coZGlzcGxheVRleHQpO1xyXG4gIH1cclxuXHJcbiAgLy8gTWFuYWdlIHJvb21zXHJcbiAgYWRkUm9vbShuYW1lLCBnZXRUZXh0LCBwcm9tcHRzID0gW10sIHJlcXVpcmVtZW50cyA9IFtdKSB7XHJcbiAgICBsZXQgcm9vbU9iaiA9IG5ldyBSb29tKG5hbWUsIGdldFRleHQsIHByb21wdHMsIHJlcXVpcmVtZW50cyk7XHJcbiAgICB0aGlzLnJvb21zLnB1c2gocm9vbU9iaik7XHJcbiAgICByZXR1cm4gcm9vbU9iajtcclxuICB9XHJcblxyXG4gIGRyb3BSb29tKHJvb21OYW1lKSB7XHJcbiAgICBsZXQgbmV3Um9vbXMgPSB0aGlzLnJvb21zLmZpbHRlcihmdW5jdGlvbihyb29tKSB7XHJcbiAgICAgIHJldHVybiByb29tLm5hbWUgIT09IHJvb21OYW1lO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnJvb21zID0gbmV3Um9vbXM7XHJcbiAgICByZXR1cm4gdGhpcy5yb29tcztcclxuICB9XHJcblxyXG4gIC8vIFJldHVybnMgcm9vbSBvYmplY3QgKHByb3BlcnRpZXMpIGdpdmVuIHRoZSBuYW1lXHJcbiAgZ2V0Um9vbShyb29tTmFtZSkge1xyXG4gICAgY29uc3Qgcm9vbSA9IHRoaXMucm9vbXMuZmluZCh4ID0+IHgubmFtZSA9PT0gcm9vbU5hbWUpO1xyXG4gICAgcmV0dXJuIHJvb207XHJcbiAgfVxyXG5cclxuICAvLyBVc2VyIGlucHV0XHJcbiAgdXNlclNlbmQobWVzc2FnZSkge1xyXG4gICAgLy8gT3VyIElucHV0IGNsYXNzIHdpbGwgaGFuZGxlIGNsZWFuaW5nIC8gbm9ybWFsaXppbmcgc3RyaW5nc1xyXG4gICAgdGhpcy5JbnB1dC5zZW5kKG1lc3NhZ2UpO1xyXG4gICAgdGhpcy5kZWNpZGVQYXRoKHRoaXMuSW5wdXQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLy8gR2FtZSBBSVxyXG4gIGRlY2lkZVBhdGgobWVzc2FnZSkge1xyXG4gICAgaWYgKG1lc3NhZ2UgPT09ICdyZXN0YXJ0Jykge1xyXG4gICAgICB0aGlzLnJlc2V0R2FtZSgpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgX3RoaXMgPSB0aGlzO1xyXG4gICAgY29uc3QgY3VyclJvb20gPSBfdGhpcy5nZXRSb29tKF90aGlzLlBsYXllci5jdXJyZW50Um9vbSk7XHJcbiAgICAvLyBEbyB3ZSBoYXZlIGFjdGlvbnMgdGhhdCB3ZSBjYW4gZG8gaW4gdGhlIHJvb20/XHJcbiAgICBpZiAodHlwZW9mIGN1cnJSb29tLnByb21wdHMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAvLyBDaGVjayBldmVyeSBwcm9tcHQgYWN0aW9uIHRvIHNlZSBpZiBpdCBtYXRjaGVzIG91ciBpbnB1dCBrZXl3b3Jkc1xyXG4gICAgICAvLyBGb3Igbm93IGp1c3QgZ2V0IHRoZSBmaXJzdCBtYXRjaGluZyBwcm9tcHQgYW5kIGRvIHRoYXRcclxuICAgICAgbGV0IGZvdW5kUHJvbXB0ID0gZmFsc2U7XHJcbiAgICAgIGN1cnJSb29tLnByb21wdHMuZm9yRWFjaChmdW5jdGlvbiAocHJvbXB0KSB7XHJcbiAgICAgICAgaWYgKGZvdW5kUHJvbXB0ID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgY29uc3QgbWF0Y2hpbmdQcm9tcHRSZXN1bHRzID0gcHJvbXB0Lm1hdGNoS2V5d29yZHMobWVzc2FnZSwgX3RoaXMuUGxheWVyLmludmVudG9yeS5pdGVtcyk7XHJcbiAgICAgICAgICAvLyBJZiB3ZSBnZXQgYSBtYXRjaGluZyByZXN1bHQgYmFja1xyXG4gICAgICAgICAgaWYgKG1hdGNoaW5nUHJvbXB0UmVzdWx0cyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAvLyBUaGlzIHByb21wdCBoYXMga2V5d29yZHMgdGhhdCBtYXRjaCB0aGUgdXNlcidzIGlucHV0XHJcbiAgICAgICAgICAgIGZvdW5kUHJvbXB0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gSWYgcGxheWVyIHN1Y2NlZWRlZCBpbiBwcm9tcHQgYWN0aW9uXHJcbiAgICAgICAgICAgIGlmICgnc3VjY2VzcycgaW4gbWF0Y2hpbmdQcm9tcHRSZXN1bHRzKSB7XHJcbiAgICAgICAgICAgICAgX3RoaXMuRGlzcGxheS5zaG93KG1hdGNoaW5nUHJvbXB0UmVzdWx0cy5zdWNjZXNzLnN1Y2Nlc3NUZXh0KTtcclxuICAgICAgICAgICAgICAvLyBHZXQgaXRlbXMgZnJvbSBwcm9tcHQgaWYgYW55IGFyZSByZXR1cm5lZCBhbmQgYWRkIHRoZW0gdG8gaW52ZW50b3J5XHJcbiAgICAgICAgICAgICAgaWYgKG1hdGNoaW5nUHJvbXB0UmVzdWx0cy5zdWNjZXNzLml0ZW1zR2l2ZW4gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuUGxheWVyLmludmVudG9yeS5hZGRJdGVtcyhtYXRjaGluZ1Byb21wdFJlc3VsdHMuc3VjY2Vzcy5pdGVtc0dpdmVuKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLy8gSWYgdGhlIHByb21wdCBzdWNjZXNzIHJlc3VsdCBpbmNsdWRlcyBlbnRlcmluZyBhIG5ldyByb29tLi5cclxuICAgICAgICAgICAgICBpZiAobWF0Y2hpbmdQcm9tcHRSZXN1bHRzLnN1Y2Nlc3Mucm9vbVRvRW50ZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVudGVyUm9vbVJlc3VsdFN1Y2Nlc3M7XHJcbiAgICAgICAgICAgICAgICBsZXQgZW50ZXJSb29tUmVzdWx0VGV4dDsgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHBsYXllciBjYW4gc3VjY2Vzc2Z1bGx5IGVudGVyIHRoZSByb29tIChnaXZlbiB0aGUgaW52ZW50b3J5IC8gcm9vbSByZXF1aXJlbWVudHMpXHJcbiAgICAgICAgICAgICAgICBbZW50ZXJSb29tUmVzdWx0VGV4dCwgZW50ZXJSb29tUmVzdWx0U3VjY2Vzc10gPSBcclxuICAgICAgICAgICAgICAgICAgICAgIF90aGlzLlBsYXllci5lbnRlclJvb20oX3RoaXMuZ2V0Um9vbShtYXRjaGluZ1Byb21wdFJlc3VsdHMuc3VjY2Vzcy5yb29tVG9FbnRlcikpO1xyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHBsYXllciBlbnRlcmVkIHdpbm5pbmcgcm9vbVxyXG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoaW5nUHJvbXB0UmVzdWx0cy5zdWNjZXNzLnJvb21Ub0VudGVyID09PSBfdGhpcy5lbmRSb29tKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChlbnRlclJvb21SZXN1bHRTdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMud2luKCk7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUGxheWVyIGRpZG4ndCB3aW4geWV0IChhIHJlcXVpcmVkIGl0ZW0gaXMgbm90IGluIGludmVudG9yeSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gU2hvdyByZXN1bHQgb2Ygcm9vbSBlbnRyYW5jZVxyXG4gICAgICAgICAgICAgICAgX3RoaXMuRGlzcGxheS5hcHBlbmQoZW50ZXJSb29tUmVzdWx0VGV4dCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFBsYXllciBmYWlsZWQgdG8gZG8gcHJvbXB0IChtaXNzaW5nIGl0ZW0gcmVxdWlyZW1lbnQpXHJcbiAgICAgICAgICAgIGlmICgnZmFpbCcgaW4gbWF0Y2hpbmdQcm9tcHRSZXN1bHRzKSB7XHJcbiAgICAgICAgICAgICAgX3RoaXMuRGlzcGxheS5zaG93KGAke21hdGNoaW5nUHJvbXB0UmVzdWx0cy5mYWlsLmZhaWxUZXh0fWApO1xyXG4gICAgICAgICAgICAgIF90aGlzLkRpc3BsYXkuYXBwZW5kKGA8cD5NaXNzaW5nIHJlcXVpcmVkIGl0ZW1zOiAke21hdGNoaW5nUHJvbXB0UmVzdWx0cy5mYWlsLm1pc3NpbmcudG9TdHJpbmcoKX0uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke190aGlzLmdldFJvb20oX3RoaXMuUGxheWVyLmN1cnJlbnRSb29tKS5nZXRUZXh0fTwvcD5gKTtcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZvdW5kUHJvbXB0ID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgLy8gUGxheWVyIGRpZG4ndCBzYXkgYW55IGtleXdvcmRzIHRoYXQgdHJpZ2dlcmVkIGFueSBvZiB0aGUgY3VycmVudCByb29tIHByb21wdHNcclxuICAgICAgICAgIF90aGlzLkRpc3BsYXkuc2hvdyhgPHA+Tm8gYWN0aW9ucyBjb3VsZCBiZSBkb25lIGZyb206IFwiJHttZXNzYWdlfVwiLiBUcnkgc29tZXRoaW5nIGVsc2UsIG9yIGJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcmUgc3BlY2lmaWMgYWJvdXQgd2hhdCB5b3UncmUgZG9pbmcuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke190aGlzLmdldFJvb20oX3RoaXMuUGxheWVyLmN1cnJlbnRSb29tKS5nZXRUZXh0fTwvcD5gKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gTm8gcHJvbXB0cyBleGlzdCBmb3IgdGhlIGN1cnJlbnQgcm9vbVxyXG4gICAgICBfdGhpcy5EaXNwbGF5LnNob3coYDxwPlRoZXJlIGRvZXNuJ3Qgc2VlbSB0byBiZSBhbnkgYWN0aW9ucyBhdCBhbGwgdGhhdCB5b3UgY2FuIGRvIGluIHRoaXMgcm9vbS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7X3RoaXMuZ2V0Um9vbShfdGhpcy5QbGF5ZXIuY3VycmVudFJvb20pLmdldFRleHR9XHJcbiAgICAgIGApO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2cobWVzc2FnZSwgdGhpcy5QbGF5ZXIpO1xyXG4gIH1cclxuXHJcbiAgZGlzYWJsZUlucHV0KCkge1xyXG4gICAgdGhpcy5JbnB1dC5kaXNhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBlbmFibGVJbnB1dCgpIHtcclxuICAgIHRoaXMuSW5wdXQuZW5hYmxlKCk7XHJcbiAgfVxyXG5cclxuICAvLyBQbGF5ZXIgd2luc1xyXG4gIHdpbigpIHtcclxuICAgIC8vIFNob3cgZmluYWwgcm9vbSB0ZXh0ICh3aW4gdGV4dClcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb29tcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy5yb29tc1tpXS5uYW1lID09PSB0aGlzLmVuZFJvb20pIHtcclxuICAgICAgICB0aGlzLkRpc3BsYXkuYXBwZW5kKGA8cD4ke3RoaXMucm9vbXNbaV0uZ2V0VGV4dH08L3A+YCk7XHJcbiAgICAgICAgdGhpcy5EaXNwbGF5LmFwcGVuZCgnPHA+R2FtZSBlbmQuPC9wPicpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBEaXNhYmxlIGFueSBtb3JlIHVzZXIgaW5wdXQgYWZ0ZXIgd2lubmluZ1xyXG4gICAgdGhpcy5kaXNhYmxlSW5wdXQoKTtcclxuICB9XHJcblxyXG4gIC8vIFBsYXllciByZXNldHMgZ2FtZVxyXG4gIHJlc2V0R2FtZSgpIHtcclxuICAgIC8vIFJlc2V0cyBwbGF5ZXIgd2l0aCBibGFuayBpbnZlbnRvcnkgYW5kIGJhY2sgdG8gc3RhcnRpbmcgcm9vbVxyXG4gICAgdGhpcy5QbGF5ZXIuaW52ZW50b3J5ID0gbmV3IEludmVudG9yeSgpO1xyXG4gICAgdGhpcy5QbGF5ZXIuY3VycmVudFJvb20gPSB0aGlzLnN0YXJ0Um9vbTtcclxuICAgIGNvbnN0IHJvb20gPSB0aGlzLmdldFJvb20odGhpcy5zdGFydFJvb20pO1xyXG4gICAgdGhpcy5EaXNwbGF5LnNob3cocm9vbS5nZXRUZXh0KTtcclxuICAgIHRoaXMuSW5wdXQuZW5hYmxlKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XHJcblxyXG5jb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdhbWU7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoZGlzYWJsZWQgPSBmYWxzZSwgdmFsdWUgPSAnJywgZWxlbWVudElkID0gJ2lucHV0Jykge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGRpc2FibGVkO1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5lbGVtZW50SWQgPSBlbGVtZW50SWQ7XHJcbiAgfVxyXG5cclxuICBlbmFibGUoKSB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQnKS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZGlzYWJsZSgpIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0JykuZGlzYWJsZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc2VuZCh2YWx1ZSkge1xyXG4gICAgLy8gTm9ybWFsaXplIGlucHV0IHZhbHVlcyAoaWYgZGVzaXJlZClcclxuICAgIHZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52ZW50b3J5IHtcclxuXHJcbiAgY29uc3RydWN0b3IoaXRlbXMgPSBbXSkge1xyXG4gICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xyXG4gIH1cclxuICBcclxuICAvLyBXZSBjYW4gdXNlIHRoaXMgdG8gYWRkIHNpbmdsZSBvciBtdWx0aXBsZSBpdGVtcywgYXMgbG9uZyBhcyB0aGUgXHJcbiAgLy8gcGFzc2VkIHZhbHVlIGlzIGFuIGFycmF5XHJcbiAgYWRkSXRlbXMoaXRlbXMpIHtcclxuICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1zLmNvbmNhdChpdGVtcyk7XHJcbiAgICByZXR1cm4gdGhpcy5pdGVtcztcclxuICB9XHJcblxyXG4gIGRyb3BJdGVtKGl0ZW1OYW1lKSB7XHJcbiAgICBsZXQgbmV3SW52ZW50b3J5ID0gdGhpcy5pdGVtcy5maWx0ZXIoZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICByZXR1cm4gaXRlbS5uYW1lICE9PSBpdGVtTmFtZTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5pdGVtcyA9IG5ld0ludmVudG9yeTtcclxuICAgIHJldHVybiB0aGlzLml0ZW1zO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgSW52ZW50b3J5IGZyb20gJy4vaW52ZW50b3J5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWUgPSAnJywgaW52ZW50b3J5ID0gbmV3IEludmVudG9yeSgpLCBjdXJyZW50Um9vbSA9ICcnLCBzdGFydFJvb20pIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICBpZiAodGhpcy5uYW1lID09PSAnJykge1xyXG4gICAgICB0aGlzLm5hbWUgPSAncGxheWVyJztcclxuICAgIH1cclxuICAgIHRoaXMuaW52ZW50b3J5ID0gaW52ZW50b3J5O1xyXG4gICAgaWYgKHRoaXMuY3VycmVudFJvb20gPT09ICcnKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFJvb20gPSB0aGlzLnN0YXJ0Um9vbTtcclxuICAgIH1cclxuICAgIHRoaXMuc3RhcnRSb29tID0gc3RhcnRSb29tO1xyXG4gIH1cclxuICBcclxuICBlbnRlclJvb20ocm9vbSkge1xyXG4gICAgY29uc3Qgcm9vbVJlc3VsdCA9IHJvb20uZW50ZXIodGhpcy5pbnZlbnRvcnkuaXRlbXMpO1xyXG4gICAgaWYgKHJvb21SZXN1bHRbMV0gPT09IGZhbHNlKSB7XHJcbiAgICAgIC8vIFBsYXllciBkaWQgbm90IGhhdmUgcmVxdWlyZWQgaXRlbXMgdG8gZW50ZXIgdGhlIHJvb21cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIEVudGVyZWQgcm9vbSBzdWNjZXNzZnVsbHlcclxuICAgICAgdGhpcy5jdXJyZW50Um9vbSA9IHJvb20ubmFtZTsgXHJcbiAgICB9XHJcbiAgICAvLyBSZXR1cm4gcmVzdWx0cyB0ZXh0IGFuZCB3aGV0aGVyIG9yIG5vdCBwbGF5ZXIgc3VjY2Vzc2Z1bGx5IGVudGVyZWQgcm9vbVxyXG4gICAgcmV0dXJuIFtyb29tUmVzdWx0WzBdLCByb29tUmVzdWx0WzFdXTtcclxuICB9XHJcblxyXG4gIGdldEl0ZW0oaXRlbSkge1xyXG4gICAgdGhpcy5pbnZlbnRvcnkuYWRkSXRlbShpdGVtKTtcclxuICAgIHJldHVybiB0aGlzLmludmVudG9yeTtcclxuICB9XHJcblxyXG4gIGRyb3BJdGVtKGl0ZW0pIHtcclxuICAgIHRoaXMuaW52ZW50b3J5LmRyb3BJdGVtKGl0ZW0pO1xyXG4gICAgcmV0dXJuIHRoaXMuaW52ZW50b3J5O1xyXG4gIH1cclxufVxyXG4gIFxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9tcHQge1xyXG4gICBcclxuICBjb25zdHJ1Y3RvcihuYW1lID0gJycsIGtleXdvcmRzID0gW10sIHJlc3VsdHMgPSB7fSwgcmVxdWlyZW1lbnRzID0gW10pIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAvLyBLZXl3b3JkcyB0aGF0IGNhbiB0cmlnZ2VyIHRoZSBwcm9tcHQgKG1ha2UgYWxsIGxvd2VyLWNhc2UgYnkgZGVmYXVsdClcclxuICAgIHRoaXMua2V5d29yZHMgPSBrZXl3b3Jkcy5tYXAoZnVuY3Rpb24odikgeyByZXR1cm4gdi50b0xvd2VyQ2FzZSgpO30pOyBcclxuICAgIC8vIFJlc3VsdHMgdGhhdCBvY2N1ciB3aGVuIHRoaXMgcHJvbXB0IGlzIHN1Y2Nlc3NmdWxseSB0cmlnZ2VyZWQ7IFxyXG4gICAgLy8gdGhlIHJlc3VsdCBrZXlzIGNvbXByaXNlIG9mIOKAnHN1Y2Nlc3NUZXh04oCdIChyZXF1aXJlZCksIFwiZmFpbFRleHRcIiAob3B0aW9uYWwpLFxyXG4gICAgLy8g4oCcaXRlbXNSZXF1aXJlZOKAnSAob3B0aW9uYWwpLCAvLyBhbmQg4oCccm9vbVRvRW50ZXJcIuKAnSBcclxuICAgIHRoaXMucmVzdWx0cyA9IHJlc3VsdHM7IFxyXG4gICAgLy8gQW55IHByZXJlcXVpc2l0ZSBpdGVtcyBuZWVkZWQgdG8gZG8gdGhlIHByb21wdD9cclxuICAgIHRoaXMucmVxdWlyZW1lbnRzID0gcmVxdWlyZW1lbnRzOyBcclxuICB9XHJcblxyXG4gIC8vIENoZWNrIGlmIGlucHV0IG1lc3NhZ2UgbWF0Y2hlcyBhbnkgcHJvbXB0IGtleXdvcmRzXHJcbiAgbWF0Y2hLZXl3b3JkcyhtZXNzYWdlLCBpdGVtcyA9IFtdKSB7XHJcbiAgICBsZXQgZm91bmRLZXl3b3JkID0gZmFsc2U7XHJcbiAgICBsZXQgbWlzc2luZ1JlcXVpcmVtZW50cyA9IFtdO1xyXG4gICAgLy8gSWYgd2UgaGF2ZSBhbnkgaXRlbSByZXF1aXJlbWVudHNcclxuICAgIGlmICh0aGlzLnJlcXVpcmVtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIC8vIENoZWNrIGFsbCB0aGUgcmVxdWlyZW1lbnRzIGFnYWluc3QgdGhlIGl0ZW1zIHBhc3NlZFxyXG4gICAgICB0aGlzLnJlcXVpcmVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKHJlcXVpcmVtZW50KSB7XHJcbiAgICAgICAgbGV0IGZvdW5kUmVxdWlyZW1lbnQgPSBmYWxzZTtcclxuICAgICAgICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICAgIGlmIChpdGVtID09PSByZXF1aXJlbWVudCkge1xyXG4gICAgICAgICAgICBmb3VuZFJlcXVpcmVtZW50ID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBJZiBhIHJlcXVpcmVtZW50IGlzbid0IGZvdW5kIGFkZCB0aGF0IGEgbGlzdFxyXG4gICAgICAgIGlmICghZm91bmRSZXF1aXJlbWVudCkge1xyXG4gICAgICAgICAgbWlzc2luZ1JlcXVpcmVtZW50cy5wdXNoKHJlcXVpcmVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gUmV0dXJuIGZhaWwgbWVzc2FnZSB3aXRoIG1pc3NpbmcgaXRlbSByZXF1aXJlbWVudHNcclxuICAgIC8vIElmIHdlIGhhdmUgYWxsIG91ciBpdGVtIHJlcXVpcmVtZW50cywgY2hlY2sgdGhlIHVzZXIncyBtZXNzYWdlXHJcbiAgICAvLyB0byBzZWUgaWYgd2UgZmluZCBhbnkgbWF0Y2hpbmcga2V5d29yZHNcclxuICAgIHRoaXMua2V5d29yZHMuZm9yRWFjaChmdW5jdGlvbihrZXl3b3JkKSB7XHJcbiAgICAgIGlmIChtZXNzYWdlLmluY2x1ZGVzKGtleXdvcmQudG9Mb3dlckNhc2UoKSkpIHtcclxuICAgICAgICBmb3VuZEtleXdvcmQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIEtleXdvcmRzIGhhdmUgYmVlbiBtYXRjaGVkIGZyb20gdGhlIHVzZXIgaW5wdXQsIHNvIHJldHVybiByZXN1bHRzIG9mIHByb21wdFxyXG4gICAgaWYgKGZvdW5kS2V5d29yZCkge1xyXG4gICAgICBpZiAobWlzc2luZ1JlcXVpcmVtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHsnZmFpbCc6IHtcclxuICAgICAgICAgICdtaXNzaW5nJzogbWlzc2luZ1JlcXVpcmVtZW50cyxcclxuICAgICAgICAgICdmYWlsVGV4dCc6IHRoaXMucmVzdWx0cy5mYWlsVGV4dH1cclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7J3N1Y2Nlc3MnOiB0aGlzLnJlc3VsdHN9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQcm9tcHQgZnJvbSAnLi9wcm9tcHQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm9vbSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWUgPSAnJywgZ2V0VGV4dCA9ICcnLCBwcm9tcHRzID0gW10sIHJlcXVpcmVtZW50cyA9IFtdKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5nZXRUZXh0ID0gZ2V0VGV4dDsgLy8gVGhlIHRleHQgdGhhdCBpcyBkaXNwbGF5ZWQgd2hlbiB0aGUgcm9vbSBpcyBlbnRlcmVkXHJcbiAgICB0aGlzLnByb21wdHMgPSBwcm9tcHRzOyAvLyBXaGF0IGFyZSB0aGUgYWN0aW9ucyB0aGF0IHdlIGNhbiBkbyBpbiB0aGlzIHJvb20/XHJcbiAgICB0aGlzLnJlcXVpcmVtZW50cyA9IHJlcXVpcmVtZW50czsgLy8gQW55IHJlcXVpcmVtZW50cyAoaXRlbXMpIG5lZWRlZCB0byBhY2Nlc3MgdGhlIHJvb21cclxuICB9XHJcblxyXG4gIC8vIEFkZCBuZXcgcHJvbXB0IC8gaW50ZXJhY3Rpb24gdG8gcm9vbVxyXG4gIGFkZFByb21wdChuYW1lLCBrZXl3b3JkcywgcmVzdWx0cywgcmVxdWlyZW1lbnRzKSB7XHJcbiAgICBjb25zdCBwcm9tcHQgPSBuZXcgUHJvbXB0KG5hbWUsIGtleXdvcmRzLCByZXN1bHRzLCByZXF1aXJlbWVudHMpO1xyXG4gICAgdGhpcy5wcm9tcHRzLnB1c2gocHJvbXB0KTtcclxuICAgIHJldHVybiB0aGlzLnByb21wdHM7XHJcbiAgfVxyXG5cclxuICAvLyBFbnRlciB0aGUgcm9vbVxyXG4gIGVudGVyKGl0ZW1zID0gW10pIHtcclxuICAgIGxldCByZXN1bHRUZXh0ID0gJyc7XHJcbiAgICBsZXQgbWV0QWxsUmVxdWlyZW1lbnRzID0gdHJ1ZTsgLy8gQ2FuIHdlIGVudGVyIHRoZSByb29tP1xyXG4gICAgLy8gVGhlIHJvb20gaXMgbm90IGFjY2Vzc2libGUgYnkgZGVmYXVsdFxyXG4gICAgaWYgKHRoaXMucmVxdWlyZW1lbnRzID4gMCkge1xyXG4gICAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgbWV0QWxsUmVxdWlyZW1lbnRzID0gZmFsc2U7XHJcbiAgICAgICAgLy8gUmV0dXJuIG1pc3NpbmcgcmVxdWlyZW1lbnQgbWVzc2FnZXNcclxuICAgICAgICB0aGlzLnJlcXVpcmVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXF1aXJlbWVudCkge1xyXG4gICAgICAgICAgcmVzdWx0VGV4dCArPSBgJHtyZXF1aXJlbWVudC5mYWlsVGV4dH0uIGA7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gQ2hlY2sgdGhlIHJvb20ncyByZXF1aXJlbWVudHMgZm9yIG1hdGNoaW5nIGl0ZW1zXHJcbiAgICAgICAgdGhpcy5yZXF1aXJlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAocmVxdWlyZW1lbnQpIHtcclxuICAgICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtID09PSByZXF1aXJlbWVudCkge1xyXG4gICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpZiAoZm91bmQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIG1ldEFsbFJlcXVpcmVtZW50cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyBSZXR1cm4gZmFpbCBtZXNzYWdlcyBmb3IgbWlzc2luZyByZXF1aXJlbWVudHNcclxuICAgICAgICAgICAgcmVzdWx0VGV4dCArPSByZXF1aXJlbWVudC5mYWlsVGV4dDsgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChtZXRBbGxSZXF1aXJlbWVudHMgPT09IHRydWUpIHtcclxuICAgICAgICAgIHJlc3VsdFRleHQgPSB0aGlzLmdldFRleHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXN1bHRUZXh0ID0gdGhpcy5nZXRUZXh0O1xyXG4gICAgfVxyXG4gICAgLy8gUmV0dXJuIHRleHQgd2l0aCByZXN1bHRUZXh0cyBhbmQgd2hldGhlciBvciBub3Qgcm9vbSBjb3VsZCBiZSBlbnRlcmVkXHJcbiAgICByZXR1cm4gW3Jlc3VsdFRleHQsIG1ldEFsbFJlcXVpcmVtZW50c107XHJcbiAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9