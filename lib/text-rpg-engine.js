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
                  if (enterRoomResultSuccess) {
                    if (matchingPromptResults.success.roomToEnter === _this.endRoom) {
                      _this.win();
                    }
                  } else {// Player could not enter room
                  }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGV4dC1ycGctZW5naW5lLy4vc3JjL2lucHV0LmpzIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS8uL3NyYy9pbnZlbnRvcnkuanMiLCJ3ZWJwYWNrOi8vdGV4dC1ycGctZW5naW5lLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvcHJvbXB0LmpzIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS8uL3NyYy9yb29tLmpzIl0sIm5hbWVzIjpbIkRpc3BsYXkiLCJodG1sIiwiZWxlbWVudElkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsIkdhbWUiLCJkYXRhcGF0aCIsInJvb21zIiwiaXRlbXMiLCJzdGFydFJvb20iLCJlbmRSb29tIiwiSW5wdXQiLCJQbGF5ZXIiLCJkaXNwbGF5VGV4dCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJuYW1lIiwiY3VycmVudFJvb20iLCJpIiwiZ2V0VGV4dCIsInVuZGVmaW5lZCIsInNob3ciLCJwcm9tcHRzIiwicmVxdWlyZW1lbnRzIiwicm9vbU9iaiIsInB1c2giLCJyb29tTmFtZSIsIm5ld1Jvb21zIiwiZmlsdGVyIiwicm9vbSIsImZpbmQiLCJ4IiwibWVzc2FnZSIsInNlbmQiLCJkZWNpZGVQYXRoIiwidmFsdWUiLCJyZXNldEdhbWUiLCJfdGhpcyIsImN1cnJSb29tIiwiZ2V0Um9vbSIsImZvdW5kUHJvbXB0IiwiZm9yRWFjaCIsInByb21wdCIsIm1hdGNoaW5nUHJvbXB0UmVzdWx0cyIsIm1hdGNoS2V5d29yZHMiLCJpbnZlbnRvcnkiLCJzdWNjZXNzIiwic3VjY2Vzc1RleHQiLCJpdGVtc0dpdmVuIiwiYWRkSXRlbXMiLCJyb29tVG9FbnRlciIsImVudGVyUm9vbVJlc3VsdFN1Y2Nlc3MiLCJlbnRlclJvb21SZXN1bHRUZXh0IiwiZW50ZXJSb29tIiwid2luIiwiYXBwZW5kIiwiZmFpbCIsImZhaWxUZXh0IiwibWlzc2luZyIsInRvU3RyaW5nIiwiZGlzYWJsZSIsImVuYWJsZSIsImRpc2FibGVJbnB1dCIsImdhbWUiLCJkaXNhYmxlZCIsInRvTG93ZXJDYXNlIiwiSW52ZW50b3J5IiwiY29uY2F0IiwiaXRlbU5hbWUiLCJuZXdJbnZlbnRvcnkiLCJpdGVtIiwicm9vbVJlc3VsdCIsImVudGVyIiwiYWRkSXRlbSIsImRyb3BJdGVtIiwiUHJvbXB0Iiwia2V5d29yZHMiLCJyZXN1bHRzIiwibWFwIiwidiIsImZvdW5kS2V5d29yZCIsIm1pc3NpbmdSZXF1aXJlbWVudHMiLCJyZXF1aXJlbWVudCIsImZvdW5kUmVxdWlyZW1lbnQiLCJrZXl3b3JkIiwiaW5jbHVkZXMiLCJSb29tIiwicmVzdWx0VGV4dCIsIm1ldEFsbFJlcXVpcmVtZW50cyIsImZvdW5kIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5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TCxDQUFrQmtCLE9BQWxCLENBQTBCLFVBQVV5QyxXQUFWLEVBQXVCO0FBQy9DLGdCQUFJTyxLQUFLLEdBQUcsS0FBWjtBQUNBLGlCQUFLbEYsS0FBTCxDQUFXa0MsT0FBWCxDQUFtQixVQUFVNkIsSUFBVixFQUFnQjtBQUNqQyxrQkFBSUEsSUFBSSxLQUFLWSxXQUFiLEVBQTBCO0FBQ3hCTyxxQkFBSyxHQUFHLElBQVI7QUFDRDtBQUNGLGFBSkQ7O0FBS0EsZ0JBQUlBLEtBQUssS0FBSyxLQUFkLEVBQXFCO0FBQ25CRCxnQ0FBa0IsR0FBRyxLQUFyQixDQURtQixDQUVuQjs7QUFDQUQsd0JBQVUsSUFBSUwsV0FBVyxDQUFDekIsUUFBMUI7QUFDRDtBQUNGLFdBWkQ7O0FBYUEsY0FBSStCLGtCQUFrQixLQUFLLElBQTNCLEVBQWlDO0FBQy9CRCxzQkFBVSxHQUFHLEtBQUtwRSxPQUFsQjtBQUNEO0FBQ0Y7QUFDRixPQTFCRCxNQTBCTztBQUNMb0Usa0JBQVUsR0FBRyxLQUFLcEUsT0FBbEI7QUFDRCxPQWhDZSxDQWlDaEI7OztBQUNBLGFBQU8sQ0FBQ29FLFVBQUQsRUFBYUMsa0JBQWIsQ0FBUDtBQUNEIiwiZmlsZSI6InRleHQtcnBnLWVuZ2luZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwidGV4dC1ycGctZW5naW5lXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInRleHQtcnBnLWVuZ2luZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ0ZXh0LXJwZy1lbmdpbmVcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5IHtcclxuXHJcbiAgY29uc3RydWN0b3IoaHRtbCA9ICcnLCBlbGVtZW50SWQgPSAnZGlzcGxheScpIHtcclxuICAgIHRoaXMuaHRtbCA9IGh0bWw7XHJcbiAgICB0aGlzLmVsZW1lbnRJZCA9IGVsZW1lbnRJZDtcclxuICB9XHJcblxyXG4gIHNob3coaHRtbCA9IG51bGwpIHtcclxuICAgIGlmIChodG1sID09PSBudWxsKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgICAgdGhpcy5odG1sID0gaHRtbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEFwcGVuZCBIVE1MIGNvbnRlbnQgdG8gZGlzcGxheSBzY3JlZW5cclxuICBhcHBlbmQoaHRtbCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLmlubmVySFRNTCArPSBodG1sO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgRGlzcGxheSBmcm9tICcuL2Rpc3BsYXknO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9pbnB1dCc7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xyXG5pbXBvcnQgUm9vbSBmcm9tICcuL3Jvb20nO1xyXG5pbXBvcnQgSW52ZW50b3J5IGZyb20gJy4vaW52ZW50b3J5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihkYXRhcGF0aCA9ICcnLCByb29tcyA9IFtdLCBpdGVtcyA9IFtdLCBzdGFydFJvb20gPSAnJywgZW5kUm9vbSA9ICcnKSB7XHJcbiAgICB0aGlzLkRpc3BsYXkgPSBuZXcgRGlzcGxheSgpO1xyXG4gICAgdGhpcy5JbnB1dCA9IG5ldyBJbnB1dCgpO1xyXG4gICAgdGhpcy5kYXRhcGF0aCA9IGRhdGFwYXRoOyAvLyBUT0RPOiBCZSBhYmxlIHRvIGhhdmUgZ2FtZSBpbml0aWFsaXplIGRhdGEgZnJvbSBKU09OIGZpbGVcclxuICAgIHRoaXMucm9vbXMgPSByb29tczsgLy8gQWxsIHRoZSByb29tcyBpbiBvdXIgZ2FtZVxyXG4gICAgdGhpcy5zdGFydFJvb20gPSBzdGFydFJvb207IC8vIFdoaWNoIHJvb20gd2lsbCB0aGUgcGxheWVyIHN0YXJ0IGluXHJcbiAgICB0aGlzLmVuZFJvb20gPSBlbmRSb29tOyAvLyBXaGljaCByb29tIGlzIHRoZSB3aW5uaW5nIC8gZ2FtZSBlbmRcclxuICAgIHRoaXMuUGxheWVyID0gbmV3IFBsYXllcihzdGFydFJvb20gPSB0aGlzLnN0YXJ0Um9vbSk7IFxyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIGxldCBkaXNwbGF5VGV4dDtcclxuICAgIGNvbnNvbGUubG9nKCdJbml0aWFsaXplZCBnYW1lIGZyb206ICcgKyB0aGlzLmRhdGFwYXRoKTtcclxuICAgIC8vIHRoaXMubG9hZERhdGEodGhpcy5kYXRhUGF0aCk7IC8vIFRPRE86IE1ha2UgZ2FtZXMgbG9hZCBmcm9tIEpTT04gZGF0YVxyXG4gICAgLy8gSWYgZ2FtZSB3YXNuJ3QgaW5pdGlhbGl6ZWQgd2l0aCBhIHN0YXJ0Um9vbSwgc2V0IGl0IHRvIHRoZSBmaXJzdCByb29tIFxyXG4gICAgaWYgKHRoaXMuc3RhcnRSb29tID09PSAnJyAmJiB0aGlzLnJvb21zLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5zdGFydFJvb20gPSB0aGlzLnJvb21zWzBdLm5hbWU7IFxyXG4gICAgICB0aGlzLlBsYXllci5zdGFydFJvb20gPSB0aGlzLnN0YXJ0Um9vbTtcclxuICAgICAgdGhpcy5QbGF5ZXIuY3VycmVudFJvb20gPSB0aGlzLlBsYXllci5zdGFydFJvb207XHJcbiAgICB9XHJcbiAgICAvLyBJZiBnYW1lIHdhc24ndCBpbml0aWFsaXplZCB3aXRoIGEgZW5kUm9vbSwgc2V0IGl0IHRvIHRoZSBsYXN0IHJvb21cclxuICAgIGlmICh0aGlzLmVuZFJvb20gPT09ICcnICYmIHRoaXMucm9vbXMubGVuZ3RoID4gMSkge1xyXG4gICAgICB0aGlzLmVuZFJvb20gPSB0aGlzLnJvb21zW3RoaXMucm9vbXMubGVuZ3RoIC0gMV0ubmFtZTsgICAgICBcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb29tcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy5yb29tc1tpXS5uYW1lID09PSB0aGlzLnN0YXJ0Um9vbSkge1xyXG4gICAgICAgIGRpc3BsYXlUZXh0ID0gdGhpcy5yb29tc1tpXS5nZXRUZXh0O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoZGlzcGxheVRleHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBkaXNwbGF5VGV4dCA9ICdObyBzdGFydGluZyByb29tIHRleHQgZm91bmQhJztcclxuICAgIH1cclxuICAgIHRoaXMuRGlzcGxheS5zaG93KGRpc3BsYXlUZXh0KTtcclxuICB9XHJcblxyXG4gIC8vIE1hbmFnZSByb29tc1xyXG4gIGFkZFJvb20obmFtZSwgZ2V0VGV4dCwgcHJvbXB0cyA9IFtdLCByZXF1aXJlbWVudHMgPSBbXSkge1xyXG4gICAgbGV0IHJvb21PYmogPSBuZXcgUm9vbShuYW1lLCBnZXRUZXh0LCBwcm9tcHRzLCByZXF1aXJlbWVudHMpO1xyXG4gICAgdGhpcy5yb29tcy5wdXNoKHJvb21PYmopO1xyXG4gICAgcmV0dXJuIHJvb21PYmo7XHJcbiAgfVxyXG5cclxuICBkcm9wUm9vbShyb29tTmFtZSkge1xyXG4gICAgbGV0IG5ld1Jvb21zID0gdGhpcy5yb29tcy5maWx0ZXIoZnVuY3Rpb24ocm9vbSkge1xyXG4gICAgICByZXR1cm4gcm9vbS5uYW1lICE9PSByb29tTmFtZTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5yb29tcyA9IG5ld1Jvb21zO1xyXG4gICAgcmV0dXJuIHRoaXMucm9vbXM7XHJcbiAgfVxyXG5cclxuICAvLyBSZXR1cm5zIHJvb20gb2JqZWN0IChwcm9wZXJ0aWVzKSBnaXZlbiB0aGUgbmFtZVxyXG4gIGdldFJvb20ocm9vbU5hbWUpIHtcclxuICAgIGNvbnN0IHJvb20gPSB0aGlzLnJvb21zLmZpbmQoeCA9PiB4Lm5hbWUgPT09IHJvb21OYW1lKTtcclxuICAgIHJldHVybiByb29tO1xyXG4gIH1cclxuXHJcbiAgLy8gVXNlciBpbnB1dFxyXG4gIHVzZXJTZW5kKG1lc3NhZ2UpIHtcclxuICAgIC8vIE91ciBJbnB1dCBjbGFzcyB3aWxsIGhhbmRsZSBjbGVhbmluZyAvIG5vcm1hbGl6aW5nIHN0cmluZ3NcclxuICAgIHRoaXMuSW5wdXQuc2VuZChtZXNzYWdlKTtcclxuICAgIHRoaXMuZGVjaWRlUGF0aCh0aGlzLklucHV0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8vIEdhbWUgQUlcclxuICBkZWNpZGVQYXRoKG1lc3NhZ2UpIHtcclxuICAgIGlmIChtZXNzYWdlID09PSAncmVzdGFydCcpIHtcclxuICAgICAgdGhpcy5yZXNldEdhbWUoKTtcclxuICAgIH1cclxuICAgIGNvbnN0IF90aGlzID0gdGhpcztcclxuICAgIGNvbnN0IGN1cnJSb29tID0gX3RoaXMuZ2V0Um9vbShfdGhpcy5QbGF5ZXIuY3VycmVudFJvb20pO1xyXG4gICAgLy8gRG8gd2UgaGF2ZSBhY3Rpb25zIHRoYXQgd2UgY2FuIGRvIGluIHRoZSByb29tP1xyXG4gICAgaWYgKHR5cGVvZiBjdXJyUm9vbS5wcm9tcHRzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgLy8gQ2hlY2sgZXZlcnkgcHJvbXB0IGFjdGlvbiB0byBzZWUgaWYgaXQgbWF0Y2hlcyBvdXIgaW5wdXQga2V5d29yZHNcclxuICAgICAgLy8gRm9yIG5vdyBqdXN0IGdldCB0aGUgZmlyc3QgbWF0Y2hpbmcgcHJvbXB0IGFuZCBkbyB0aGF0XHJcbiAgICAgIGxldCBmb3VuZFByb21wdCA9IGZhbHNlO1xyXG4gICAgICBjdXJyUm9vbS5wcm9tcHRzLmZvckVhY2goZnVuY3Rpb24gKHByb21wdCkge1xyXG4gICAgICAgIGlmIChmb3VuZFByb21wdCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIGNvbnN0IG1hdGNoaW5nUHJvbXB0UmVzdWx0cyA9IHByb21wdC5tYXRjaEtleXdvcmRzKG1lc3NhZ2UsIF90aGlzLlBsYXllci5pbnZlbnRvcnkuaXRlbXMpO1xyXG4gICAgICAgICAgLy8gSWYgd2UgZ2V0IGEgbWF0Y2hpbmcgcmVzdWx0IGJhY2tcclxuICAgICAgICAgIGlmIChtYXRjaGluZ1Byb21wdFJlc3VsdHMgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgLy8gVGhpcyBwcm9tcHQgaGFzIGtleXdvcmRzIHRoYXQgbWF0Y2ggdGhlIHVzZXIncyBpbnB1dFxyXG4gICAgICAgICAgICBmb3VuZFByb21wdCA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIElmIHBsYXllciBzdWNjZWVkZWQgaW4gcHJvbXB0IGFjdGlvblxyXG4gICAgICAgICAgICBpZiAoJ3N1Y2Nlc3MnIGluIG1hdGNoaW5nUHJvbXB0UmVzdWx0cykge1xyXG4gICAgICAgICAgICAgIF90aGlzLkRpc3BsYXkuc2hvdyhtYXRjaGluZ1Byb21wdFJlc3VsdHMuc3VjY2Vzcy5zdWNjZXNzVGV4dCk7XHJcbiAgICAgICAgICAgICAgLy8gR2V0IGl0ZW1zIGZyb20gcHJvbXB0IGlmIGFueSBhcmUgcmV0dXJuZWQgYW5kIGFkZCB0aGVtIHRvIGludmVudG9yeVxyXG4gICAgICAgICAgICAgIGlmIChtYXRjaGluZ1Byb21wdFJlc3VsdHMuc3VjY2Vzcy5pdGVtc0dpdmVuICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLlBsYXllci5pbnZlbnRvcnkuYWRkSXRlbXMobWF0Y2hpbmdQcm9tcHRSZXN1bHRzLnN1Y2Nlc3MuaXRlbXNHaXZlbik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8vIElmIHRoZSBwcm9tcHQgc3VjY2VzcyByZXN1bHQgaW5jbHVkZXMgZW50ZXJpbmcgYSBuZXcgcm9vbS4uXHJcbiAgICAgICAgICAgICAgaWYgKG1hdGNoaW5nUHJvbXB0UmVzdWx0cy5zdWNjZXNzLnJvb21Ub0VudGVyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBlbnRlclJvb21SZXN1bHRTdWNjZXNzO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVudGVyUm9vbVJlc3VsdFRleHQ7ICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiBwbGF5ZXIgY2FuIHN1Y2Nlc3NmdWxseSBlbnRlciB0aGUgcm9vbSAoZ2l2ZW4gdGhlIGludmVudG9yeSAvIHJvb20gcmVxdWlyZW1lbnRzKVxyXG4gICAgICAgICAgICAgICAgW2VudGVyUm9vbVJlc3VsdFRleHQsIGVudGVyUm9vbVJlc3VsdFN1Y2Nlc3NdID0gXHJcbiAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5QbGF5ZXIuZW50ZXJSb29tKF90aGlzLmdldFJvb20obWF0Y2hpbmdQcm9tcHRSZXN1bHRzLnN1Y2Nlc3Mucm9vbVRvRW50ZXIpKTtcclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiBwbGF5ZXIgZW50ZXJlZCB3aW5uaW5nIHJvb21cclxuICAgICAgICAgICAgICAgIGlmIChlbnRlclJvb21SZXN1bHRTdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGluZ1Byb21wdFJlc3VsdHMuc3VjY2Vzcy5yb29tVG9FbnRlciA9PT0gX3RoaXMuZW5kUm9vbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLndpbigpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAvLyBQbGF5ZXIgY291bGQgbm90IGVudGVyIHJvb21cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF90aGlzLkRpc3BsYXkuYXBwZW5kKGVudGVyUm9vbVJlc3VsdFRleHQpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBQbGF5ZXIgZmFpbGVkIHRvIGRvIHByb21wdCAobWlzc2luZyBpdGVtIHJlcXVpcmVtZW50KVxyXG4gICAgICAgICAgICBpZiAoJ2ZhaWwnIGluIG1hdGNoaW5nUHJvbXB0UmVzdWx0cykge1xyXG4gICAgICAgICAgICAgIF90aGlzLkRpc3BsYXkuc2hvdyhgJHttYXRjaGluZ1Byb21wdFJlc3VsdHMuZmFpbC5mYWlsVGV4dH1gKTtcclxuICAgICAgICAgICAgICBfdGhpcy5EaXNwbGF5LmFwcGVuZChgPHA+TWlzc2luZyByZXF1aXJlZCBpdGVtczogJHttYXRjaGluZ1Byb21wdFJlc3VsdHMuZmFpbC5taXNzaW5nLnRvU3RyaW5nKCl9LjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtfdGhpcy5nZXRSb29tKF90aGlzLlBsYXllci5jdXJyZW50Um9vbSkuZ2V0VGV4dH08L3A+YCk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmb3VuZFByb21wdCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIC8vIFBsYXllciBkaWRuJ3Qgc2F5IGFueSBrZXl3b3JkcyB0aGF0IHRyaWdnZXJlZCBhbnkgb2YgdGhlIGN1cnJlbnQgcm9vbSBwcm9tcHRzXHJcbiAgICAgICAgICBfdGhpcy5EaXNwbGF5LnNob3coYDxwPk5vIGFjdGlvbnMgY291bGQgYmUgZG9uZSBmcm9tOiBcIiR7bWVzc2FnZX1cIi4gVHJ5IHNvbWV0aGluZyBlbHNlLCBvciBiZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3JlIHNwZWNpZmljIGFib3V0IHdoYXQgeW91J3JlIGRvaW5nLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtfdGhpcy5nZXRSb29tKF90aGlzLlBsYXllci5jdXJyZW50Um9vbSkuZ2V0VGV4dH08L3A+YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIE5vIHByb21wdHMgZXhpc3QgZm9yIHRoZSBjdXJyZW50IHJvb21cclxuICAgICAgX3RoaXMuRGlzcGxheS5zaG93KGA8cD5UaGVyZSBkb2Vzbid0IHNlZW0gdG8gYmUgYW55IGFjdGlvbnMgYXQgYWxsIHRoYXQgeW91IGNhbiBkbyBpbiB0aGlzIHJvb20uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke190aGlzLmdldFJvb20oX3RoaXMuUGxheWVyLmN1cnJlbnRSb29tKS5nZXRUZXh0fVxyXG4gICAgICBgKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UsIHRoaXMuUGxheWVyKTtcclxuICB9XHJcblxyXG4gIGRpc2FibGVJbnB1dCgpIHtcclxuICAgIHRoaXMuSW5wdXQuZGlzYWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgZW5hYmxlSW5wdXQoKSB7XHJcbiAgICB0aGlzLklucHV0LmVuYWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gUGxheWVyIHdpbnNcclxuICB3aW4oKSB7XHJcbiAgICAvLyBTaG93IGZpbmFsIHJvb20gdGV4dCAod2luIHRleHQpXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm9vbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMucm9vbXNbaV0ubmFtZSA9PT0gdGhpcy5lbmRSb29tKSB7XHJcbiAgICAgICAgdGhpcy5EaXNwbGF5LmFwcGVuZChgPHA+JHt0aGlzLnJvb21zW2ldLmdldFRleHR9PC9wPmApO1xyXG4gICAgICAgIHRoaXMuRGlzcGxheS5hcHBlbmQoJzxwPkdhbWUgZW5kLjwvcD4nKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gRGlzYWJsZSBhbnkgbW9yZSB1c2VyIGlucHV0IGFmdGVyIHdpbm5pbmdcclxuICAgIHRoaXMuZGlzYWJsZUlucHV0KCk7XHJcbiAgfVxyXG5cclxuICAvLyBQbGF5ZXIgcmVzZXRzIGdhbWVcclxuICByZXNldEdhbWUoKSB7XHJcbiAgICAvLyBSZXNldHMgcGxheWVyIHdpdGggYmxhbmsgaW52ZW50b3J5IGFuZCBiYWNrIHRvIHN0YXJ0aW5nIHJvb21cclxuICAgIHRoaXMuUGxheWVyLmludmVudG9yeSA9IG5ldyBJbnZlbnRvcnkoKTtcclxuICAgIHRoaXMuUGxheWVyLmN1cnJlbnRSb29tID0gdGhpcy5zdGFydFJvb207XHJcbiAgICBjb25zdCByb29tID0gdGhpcy5nZXRSb29tKHRoaXMuc3RhcnRSb29tKTtcclxuICAgIHRoaXMuRGlzcGxheS5zaG93KHJvb20uZ2V0VGV4dCk7XHJcbiAgICB0aGlzLklucHV0LmVuYWJsZSgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xyXG5cclxuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnYW1lO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRpc2FibGVkID0gZmFsc2UsIHZhbHVlID0gJycsIGVsZW1lbnRJZCA9ICdpbnB1dCcpIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMuZWxlbWVudElkID0gZWxlbWVudElkO1xyXG4gIH1cclxuXHJcbiAgZW5hYmxlKCkge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0JykuZGlzYWJsZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGRpc2FibGUoKSB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dCcpLmRpc2FibGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHNlbmQodmFsdWUpIHtcclxuICAgIC8vIE5vcm1hbGl6ZSBpbnB1dCB2YWx1ZXMgKGlmIGRlc2lyZWQpXHJcbiAgICB2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEludmVudG9yeSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGl0ZW1zID0gW10pIHtcclxuICAgIHRoaXMuaXRlbXMgPSBpdGVtcztcclxuICB9XHJcbiAgXHJcbiAgLy8gV2UgY2FuIHVzZSB0aGlzIHRvIGFkZCBzaW5nbGUgb3IgbXVsdGlwbGUgaXRlbXMsIGFzIGxvbmcgYXMgdGhlIFxyXG4gIC8vIHBhc3NlZCB2YWx1ZSBpcyBhbiBhcnJheVxyXG4gIGFkZEl0ZW1zKGl0ZW1zKSB7XHJcbiAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtcy5jb25jYXQoaXRlbXMpO1xyXG4gICAgcmV0dXJuIHRoaXMuaXRlbXM7XHJcbiAgfVxyXG5cclxuICBkcm9wSXRlbShpdGVtTmFtZSkge1xyXG4gICAgbGV0IG5ld0ludmVudG9yeSA9IHRoaXMuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgcmV0dXJuIGl0ZW0ubmFtZSAhPT0gaXRlbU5hbWU7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuaXRlbXMgPSBuZXdJbnZlbnRvcnk7XHJcbiAgICByZXR1cm4gdGhpcy5pdGVtcztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEludmVudG9yeSBmcm9tICcuL2ludmVudG9yeSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lID0gJycsIGludmVudG9yeSA9IG5ldyBJbnZlbnRvcnkoKSwgY3VycmVudFJvb20gPSAnJywgc3RhcnRSb29tKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgaWYgKHRoaXMubmFtZSA9PT0gJycpIHtcclxuICAgICAgdGhpcy5uYW1lID0gJ3BsYXllcic7XHJcbiAgICB9XHJcbiAgICB0aGlzLmludmVudG9yeSA9IGludmVudG9yeTtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRSb29tID09PSAnJykge1xyXG4gICAgICB0aGlzLmN1cnJlbnRSb29tID0gdGhpcy5zdGFydFJvb207XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0YXJ0Um9vbSA9IHN0YXJ0Um9vbTtcclxuICB9XHJcbiAgXHJcbiAgZW50ZXJSb29tKHJvb20pIHtcclxuICAgIGNvbnN0IHJvb21SZXN1bHQgPSByb29tLmVudGVyKHRoaXMuaW52ZW50b3J5Lml0ZW1zKTtcclxuICAgIGlmIChyb29tUmVzdWx0WzFdID09PSBmYWxzZSkge1xyXG4gICAgICAvLyBQbGF5ZXIgZGlkIG5vdCBoYXZlIHJlcXVpcmVkIGl0ZW1zIHRvIGVudGVyIHRoZSByb29tXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBFbnRlcmVkIHJvb20gc3VjY2Vzc2Z1bGx5XHJcbiAgICAgIHRoaXMuY3VycmVudFJvb20gPSByb29tLm5hbWU7IFxyXG4gICAgfVxyXG4gICAgLy8gUmV0dXJuIHJlc3VsdHMgdGV4dCBhbmQgd2hldGhlciBvciBub3QgcGxheWVyIHN1Y2Nlc3NmdWxseSBlbnRlcmVkIHJvb21cclxuICAgIHJldHVybiBbcm9vbVJlc3VsdFswXSwgcm9vbVJlc3VsdFsxXV07XHJcbiAgfVxyXG5cclxuICBnZXRJdGVtKGl0ZW0pIHtcclxuICAgIHRoaXMuaW52ZW50b3J5LmFkZEl0ZW0oaXRlbSk7XHJcbiAgICByZXR1cm4gdGhpcy5pbnZlbnRvcnk7XHJcbiAgfVxyXG5cclxuICBkcm9wSXRlbShpdGVtKSB7XHJcbiAgICB0aGlzLmludmVudG9yeS5kcm9wSXRlbShpdGVtKTtcclxuICAgIHJldHVybiB0aGlzLmludmVudG9yeTtcclxuICB9XHJcbn1cclxuICBcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvbXB0IHtcclxuICAgXHJcbiAgY29uc3RydWN0b3IobmFtZSA9ICcnLCBrZXl3b3JkcyA9IFtdLCByZXN1bHRzID0ge30sIHJlcXVpcmVtZW50cyA9IFtdKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgLy8gS2V5d29yZHMgdGhhdCBjYW4gdHJpZ2dlciB0aGUgcHJvbXB0IChtYWtlIGFsbCBsb3dlci1jYXNlIGJ5IGRlZmF1bHQpXHJcbiAgICB0aGlzLmtleXdvcmRzID0ga2V5d29yZHMubWFwKGZ1bmN0aW9uKHYpIHsgcmV0dXJuIHYudG9Mb3dlckNhc2UoKTt9KTsgXHJcbiAgICAvLyBSZXN1bHRzIHRoYXQgb2NjdXIgd2hlbiB0aGlzIHByb21wdCBpcyBzdWNjZXNzZnVsbHkgdHJpZ2dlcmVkOyBcclxuICAgIC8vIHRoZSByZXN1bHQga2V5cyBjb21wcmlzZSBvZiDigJxzdWNjZXNzVGV4dOKAnSAocmVxdWlyZWQpLCBcImZhaWxUZXh0XCIgKG9wdGlvbmFsKSxcclxuICAgIC8vIOKAnGl0ZW1zUmVxdWlyZWTigJ0gKG9wdGlvbmFsKSwgLy8gYW5kIOKAnHJvb21Ub0VudGVyXCLigJ0gXHJcbiAgICB0aGlzLnJlc3VsdHMgPSByZXN1bHRzOyBcclxuICAgIC8vIEFueSBwcmVyZXF1aXNpdGUgaXRlbXMgbmVlZGVkIHRvIGRvIHRoZSBwcm9tcHQ/XHJcbiAgICB0aGlzLnJlcXVpcmVtZW50cyA9IHJlcXVpcmVtZW50czsgXHJcbiAgfVxyXG5cclxuICAvLyBDaGVjayBpZiBpbnB1dCBtZXNzYWdlIG1hdGNoZXMgYW55IHByb21wdCBrZXl3b3Jkc1xyXG4gIG1hdGNoS2V5d29yZHMobWVzc2FnZSwgaXRlbXMgPSBbXSkge1xyXG4gICAgbGV0IGZvdW5kS2V5d29yZCA9IGZhbHNlO1xyXG4gICAgbGV0IG1pc3NpbmdSZXF1aXJlbWVudHMgPSBbXTtcclxuICAgIC8vIElmIHdlIGhhdmUgYW55IGl0ZW0gcmVxdWlyZW1lbnRzXHJcbiAgICBpZiAodGhpcy5yZXF1aXJlbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAvLyBDaGVjayBhbGwgdGhlIHJlcXVpcmVtZW50cyBhZ2FpbnN0IHRoZSBpdGVtcyBwYXNzZWRcclxuICAgICAgdGhpcy5yZXF1aXJlbWVudHMuZm9yRWFjaChmdW5jdGlvbihyZXF1aXJlbWVudCkge1xyXG4gICAgICAgIGxldCBmb3VuZFJlcXVpcmVtZW50ID0gZmFsc2U7XHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgICBpZiAoaXRlbSA9PT0gcmVxdWlyZW1lbnQpIHtcclxuICAgICAgICAgICAgZm91bmRSZXF1aXJlbWVudCA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gSWYgYSByZXF1aXJlbWVudCBpc24ndCBmb3VuZCBhZGQgdGhhdCBhIGxpc3RcclxuICAgICAgICBpZiAoIWZvdW5kUmVxdWlyZW1lbnQpIHtcclxuICAgICAgICAgIG1pc3NpbmdSZXF1aXJlbWVudHMucHVzaChyZXF1aXJlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vIFJldHVybiBmYWlsIG1lc3NhZ2Ugd2l0aCBtaXNzaW5nIGl0ZW0gcmVxdWlyZW1lbnRzXHJcbiAgICAvLyBJZiB3ZSBoYXZlIGFsbCBvdXIgaXRlbSByZXF1aXJlbWVudHMsIGNoZWNrIHRoZSB1c2VyJ3MgbWVzc2FnZVxyXG4gICAgLy8gdG8gc2VlIGlmIHdlIGZpbmQgYW55IG1hdGNoaW5nIGtleXdvcmRzXHJcbiAgICB0aGlzLmtleXdvcmRzLmZvckVhY2goZnVuY3Rpb24oa2V5d29yZCkge1xyXG4gICAgICBpZiAobWVzc2FnZS5pbmNsdWRlcyhrZXl3b3JkLnRvTG93ZXJDYXNlKCkpKSB7XHJcbiAgICAgICAgZm91bmRLZXl3b3JkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBLZXl3b3JkcyBoYXZlIGJlZW4gbWF0Y2hlZCBmcm9tIHRoZSB1c2VyIGlucHV0LCBzbyByZXR1cm4gcmVzdWx0cyBvZiBwcm9tcHRcclxuICAgIGlmIChmb3VuZEtleXdvcmQpIHtcclxuICAgICAgaWYgKG1pc3NpbmdSZXF1aXJlbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHJldHVybiB7J2ZhaWwnOiB7XHJcbiAgICAgICAgICAnbWlzc2luZyc6IG1pc3NpbmdSZXF1aXJlbWVudHMsXHJcbiAgICAgICAgICAnZmFpbFRleHQnOiB0aGlzLnJlc3VsdHMuZmFpbFRleHR9XHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4geydzdWNjZXNzJzogdGhpcy5yZXN1bHRzfTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUHJvbXB0IGZyb20gJy4vcHJvbXB0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvb20ge1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lID0gJycsIGdldFRleHQgPSAnJywgcHJvbXB0cyA9IFtdLCByZXF1aXJlbWVudHMgPSBbXSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuZ2V0VGV4dCA9IGdldFRleHQ7IC8vIFRoZSB0ZXh0IHRoYXQgaXMgZGlzcGxheWVkIHdoZW4gdGhlIHJvb20gaXMgZW50ZXJlZFxyXG4gICAgdGhpcy5wcm9tcHRzID0gcHJvbXB0czsgLy8gV2hhdCBhcmUgdGhlIGFjdGlvbnMgdGhhdCB3ZSBjYW4gZG8gaW4gdGhpcyByb29tP1xyXG4gICAgdGhpcy5yZXF1aXJlbWVudHMgPSByZXF1aXJlbWVudHM7IC8vIEFueSByZXF1aXJlbWVudHMgKGl0ZW1zKSBuZWVkZWQgdG8gYWNjZXNzIHRoZSByb29tXHJcbiAgfVxyXG5cclxuICAvLyBBZGQgbmV3IHByb21wdCAvIGludGVyYWN0aW9uIHRvIHJvb21cclxuICBhZGRQcm9tcHQobmFtZSwga2V5d29yZHMsIHJlc3VsdHMsIHJlcXVpcmVtZW50cykge1xyXG4gICAgY29uc3QgcHJvbXB0ID0gbmV3IFByb21wdChuYW1lLCBrZXl3b3JkcywgcmVzdWx0cywgcmVxdWlyZW1lbnRzKTtcclxuICAgIHRoaXMucHJvbXB0cy5wdXNoKHByb21wdCk7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9tcHRzO1xyXG4gIH1cclxuXHJcbiAgLy8gRW50ZXIgdGhlIHJvb21cclxuICBlbnRlcihpdGVtcyA9IFtdKSB7XHJcbiAgICBsZXQgcmVzdWx0VGV4dCA9ICcnO1xyXG4gICAgbGV0IG1ldEFsbFJlcXVpcmVtZW50cyA9IHRydWU7IC8vIENhbiB3ZSBlbnRlciB0aGUgcm9vbT9cclxuICAgIC8vIFRoZSByb29tIGlzIG5vdCBhY2Nlc3NpYmxlIGJ5IGRlZmF1bHRcclxuICAgIGlmICh0aGlzLnJlcXVpcmVtZW50cyA+IDApIHtcclxuICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIG1ldEFsbFJlcXVpcmVtZW50cyA9IGZhbHNlO1xyXG4gICAgICAgIC8vIFJldHVybiBtaXNzaW5nIHJlcXVpcmVtZW50IG1lc3NhZ2VzXHJcbiAgICAgICAgdGhpcy5yZXF1aXJlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAocmVxdWlyZW1lbnQpIHtcclxuICAgICAgICAgIHJlc3VsdFRleHQgKz0gYCR7cmVxdWlyZW1lbnQuZmFpbFRleHR9LiBgO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIENoZWNrIHRoZSByb29tJ3MgcmVxdWlyZW1lbnRzIGZvciBtYXRjaGluZyBpdGVtc1xyXG4gICAgICAgIHRoaXMucmVxdWlyZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKHJlcXVpcmVtZW50KSB7XHJcbiAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICBpZiAoaXRlbSA9PT0gcmVxdWlyZW1lbnQpIHtcclxuICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgaWYgKGZvdW5kID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBtZXRBbGxSZXF1aXJlbWVudHMgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gUmV0dXJuIGZhaWwgbWVzc2FnZXMgZm9yIG1pc3NpbmcgcmVxdWlyZW1lbnRzXHJcbiAgICAgICAgICAgIHJlc3VsdFRleHQgKz0gcmVxdWlyZW1lbnQuZmFpbFRleHQ7ICBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAobWV0QWxsUmVxdWlyZW1lbnRzID09PSB0cnVlKSB7XHJcbiAgICAgICAgICByZXN1bHRUZXh0ID0gdGhpcy5nZXRUZXh0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0VGV4dCA9IHRoaXMuZ2V0VGV4dDtcclxuICAgIH1cclxuICAgIC8vIFJldHVybiB0ZXh0IHdpdGggcmVzdWx0VGV4dHMgYW5kIHdoZXRoZXIgb3Igbm90IHJvb20gY291bGQgYmUgZW50ZXJlZFxyXG4gICAgcmV0dXJuIFtyZXN1bHRUZXh0LCBtZXRBbGxSZXF1aXJlbWVudHNdO1xyXG4gIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==