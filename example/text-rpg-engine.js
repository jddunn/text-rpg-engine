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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGV4dC1ycGctZW5naW5lLy4vc3JjL2lucHV0LmpzIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS8uL3NyYy9pbnZlbnRvcnkuanMiLCJ3ZWJwYWNrOi8vdGV4dC1ycGctZW5naW5lLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvcHJvbXB0LmpzIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS8uL3NyYy9yb29tLmpzIl0sIm5hbWVzIjpbIkRpc3BsYXkiLCJodG1sIiwiZWxlbWVudElkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsIkdhbWUiLCJkYXRhcGF0aCIsInJvb21zIiwiaXRlbXMiLCJzdGFydFJvb20iLCJlbmRSb29tIiwiSW5wdXQiLCJQbGF5ZXIiLCJkaXNwbGF5VGV4dCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJuYW1lIiwiY3VycmVudFJvb20iLCJpIiwiZ2V0VGV4dCIsInVuZGVmaW5lZCIsInNob3ciLCJwcm9tcHRzIiwicmVxdWlyZW1lbnRzIiwicm9vbU9iaiIsInB1c2giLCJyb29tTmFtZSIsIm5ld1Jvb21zIiwiZmlsdGVyIiwicm9vbSIsImZpbmQiLCJ4IiwibWVzc2FnZSIsInNlbmQiLCJkZWNpZGVQYXRoIiwidmFsdWUiLCJyZXNldEdhbWUiLCJfdGhpcyIsImN1cnJSb29tIiwiZ2V0Um9vbSIsImZvdW5kUHJvbXB0IiwiZm9yRWFjaCIsInByb21wdCIsIm1hdGNoaW5nUHJvbXB0UmVzdWx0cyIsIm1hdGNoS2V5d29yZHMiLCJpbnZlbnRvcnkiLCJzdWNjZXNzIiwic3VjY2Vzc1RleHQiLCJpdGVtc0dpdmVuIiwiYWRkSXRlbXMiLCJyb29tVG9FbnRlciIsImVudGVyUm9vbVJlc3VsdFN1Y2Nlc3MiLCJlbnRlclJvb21SZXN1bHRUZXh0IiwiZW50ZXJSb29tIiwiYXBwZW5kIiwid2luIiwiZmFpbCIsImZhaWxUZXh0IiwibWlzc2luZyIsInRvU3RyaW5nIiwiZGlzYWJsZSIsImVuYWJsZSIsImRpc2FibGVJbnB1dCIsImdhbWUiLCJkaXNhYmxlZCIsInRvTG93ZXJDYXNlIiwiSW52ZW50b3J5IiwiY29uY2F0IiwiaXRlbU5hbWUiLCJuZXdJbnZlbnRvcnkiLCJpdGVtIiwicm9vbVJlc3VsdCIsImVudGVyIiwiYWRkSXRlbSIsImRyb3BJdGVtIiwiUHJvbXB0Iiwia2V5d29yZHMiLCJyZXN1bHRzIiwibWFwIiwidiIsImZvdW5kS2V5d29yZCIsIm1pc3NpbmdSZXF1aXJlbWVudHMiLCJyZXF1aXJlbWVudCIsImZvdW5kUmVxdWlyZW1lbnQiLCJrZXl3b3JkIiwiaW5jbHVkZXMiLCJSb29tIiwicmVzdWx0VGV4dCIsIm1ldEFsbFJlcXVpcmVtZW50cyIsImZvdW5kIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5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QUFLLEdBQUcsS0FBWjtBQUNBLGlCQUFLbEYsS0FBTCxDQUFXa0MsT0FBWCxDQUFtQixVQUFVNkIsSUFBVixFQUFnQjtBQUNqQyxrQkFBSUEsSUFBSSxLQUFLWSxXQUFiLEVBQTBCO0FBQ3hCTyxxQkFBSyxHQUFHLElBQVI7QUFDRDtBQUNGLGFBSkQ7O0FBS0EsZ0JBQUlBLEtBQUssS0FBSyxLQUFkLEVBQXFCO0FBQ25CRCxnQ0FBa0IsR0FBRyxLQUFyQixDQURtQixDQUVuQjs7QUFDQUQsd0JBQVUsSUFBSUwsV0FBVyxDQUFDekIsUUFBMUI7QUFDRDtBQUNGLFdBWkQsRUFGSyxDQWVMOztBQUNBLGNBQUkrQixrQkFBa0IsS0FBSyxJQUEzQixFQUFpQztBQUMvQkQsc0JBQVUsR0FBRyxLQUFLcEUsT0FBbEI7QUFDRDtBQUNGLFNBMUJ3QixDQTJCekI7O0FBQ0QsT0E1QkQsTUE0Qk87QUFDTG9FLGtCQUFVLEdBQUcsS0FBS3BFLE9BQWxCO0FBQ0QsT0FsQ2UsQ0FtQ2hCOzs7QUFDQSxhQUFPLENBQUNvRSxVQUFELEVBQWFDLGtCQUFiLENBQVA7QUFDRCIsImZpbGUiOiJ0ZXh0LXJwZy1lbmdpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInRleHQtcnBnLWVuZ2luZVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ0ZXh0LXJwZy1lbmdpbmVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1widGV4dC1ycGctZW5naW5lXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGh0bWwgPSAnJywgZWxlbWVudElkID0gJ2Rpc3BsYXknKSB7XHJcbiAgICB0aGlzLmh0bWwgPSBodG1sO1xyXG4gICAgdGhpcy5lbGVtZW50SWQgPSBlbGVtZW50SWQ7XHJcbiAgfVxyXG5cclxuICBzaG93KGh0bWwgPSBudWxsKSB7XHJcbiAgICBpZiAoaHRtbCA9PT0gbnVsbCkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkuaW5uZXJIVE1MID0gdGhpcy5odG1sO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgIHRoaXMuaHRtbCA9IGh0bWw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBBcHBlbmQgSFRNTCBjb250ZW50IHRvIGRpc3BsYXkgc2NyZWVuXHJcbiAgYXBwZW5kKGh0bWwpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5pbm5lckhUTUwgKz0gaHRtbDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IERpc3BsYXkgZnJvbSAnLi9kaXNwbGF5JztcclxuaW1wb3J0IElucHV0IGZyb20gJy4vaW5wdXQnO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IFJvb20gZnJvbSAnLi9yb29tJztcclxuaW1wb3J0IEludmVudG9yeSBmcm9tICcuL2ludmVudG9yeSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcclxuXHJcbiAgY29uc3RydWN0b3IoZGF0YXBhdGggPSAnJywgcm9vbXMgPSBbXSwgaXRlbXMgPSBbXSwgc3RhcnRSb29tID0gJycsIGVuZFJvb20gPSAnJykge1xyXG4gICAgdGhpcy5EaXNwbGF5ID0gbmV3IERpc3BsYXkoKTtcclxuICAgIHRoaXMuSW5wdXQgPSBuZXcgSW5wdXQoKTtcclxuICAgIHRoaXMuZGF0YXBhdGggPSBkYXRhcGF0aDsgLy8gVE9ETzogQmUgYWJsZSB0byBoYXZlIGdhbWUgaW5pdGlhbGl6ZSBkYXRhIGZyb20gSlNPTiBmaWxlXHJcbiAgICB0aGlzLnJvb21zID0gcm9vbXM7IC8vIEFsbCB0aGUgcm9vbXMgaW4gb3VyIGdhbWVcclxuICAgIHRoaXMuc3RhcnRSb29tID0gc3RhcnRSb29tOyAvLyBXaGljaCByb29tIHdpbGwgdGhlIHBsYXllciBzdGFydCBpblxyXG4gICAgdGhpcy5lbmRSb29tID0gZW5kUm9vbTsgLy8gV2hpY2ggcm9vbSBpcyB0aGUgd2lubmluZyAvIGdhbWUgZW5kXHJcbiAgICB0aGlzLlBsYXllciA9IG5ldyBQbGF5ZXIoc3RhcnRSb29tID0gdGhpcy5zdGFydFJvb20pOyBcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBsZXQgZGlzcGxheVRleHQ7XHJcbiAgICBjb25zb2xlLmxvZygnSW5pdGlhbGl6ZWQgZ2FtZSBmcm9tOiAnICsgdGhpcy5kYXRhcGF0aCk7XHJcbiAgICAvLyB0aGlzLmxvYWREYXRhKHRoaXMuZGF0YVBhdGgpOyAvLyBUT0RPOiBNYWtlIGdhbWVzIGxvYWQgZnJvbSBKU09OIGRhdGFcclxuICAgIC8vIElmIGdhbWUgd2Fzbid0IGluaXRpYWxpemVkIHdpdGggYSBzdGFydFJvb20sIHNldCBpdCB0byB0aGUgZmlyc3Qgcm9vbSBcclxuICAgIGlmICh0aGlzLnN0YXJ0Um9vbSA9PT0gJycgJiYgdGhpcy5yb29tcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuc3RhcnRSb29tID0gdGhpcy5yb29tc1swXS5uYW1lOyBcclxuICAgICAgdGhpcy5QbGF5ZXIuc3RhcnRSb29tID0gdGhpcy5zdGFydFJvb207XHJcbiAgICAgIHRoaXMuUGxheWVyLmN1cnJlbnRSb29tID0gdGhpcy5QbGF5ZXIuc3RhcnRSb29tO1xyXG4gICAgfVxyXG4gICAgLy8gSWYgZ2FtZSB3YXNuJ3QgaW5pdGlhbGl6ZWQgd2l0aCBhIGVuZFJvb20sIHNldCBpdCB0byB0aGUgbGFzdCByb29tXHJcbiAgICBpZiAodGhpcy5lbmRSb29tID09PSAnJyAmJiB0aGlzLnJvb21zLmxlbmd0aCA+IDEpIHtcclxuICAgICAgdGhpcy5lbmRSb29tID0gdGhpcy5yb29tc1t0aGlzLnJvb21zLmxlbmd0aCAtIDFdLm5hbWU7ICAgICAgXHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm9vbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMucm9vbXNbaV0ubmFtZSA9PT0gdGhpcy5zdGFydFJvb20pIHtcclxuICAgICAgICBkaXNwbGF5VGV4dCA9IHRoaXMucm9vbXNbaV0uZ2V0VGV4dDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGRpc3BsYXlUZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgZGlzcGxheVRleHQgPSAnTm8gc3RhcnRpbmcgcm9vbSB0ZXh0IGZvdW5kISc7XHJcbiAgICB9XHJcbiAgICB0aGlzLkRpc3BsYXkuc2hvdyhkaXNwbGF5VGV4dCk7XHJcbiAgfVxyXG5cclxuICAvLyBNYW5hZ2Ugcm9vbXNcclxuICBhZGRSb29tKG5hbWUsIGdldFRleHQsIHByb21wdHMgPSBbXSwgcmVxdWlyZW1lbnRzID0gW10pIHtcclxuICAgIGxldCByb29tT2JqID0gbmV3IFJvb20obmFtZSwgZ2V0VGV4dCwgcHJvbXB0cywgcmVxdWlyZW1lbnRzKTtcclxuICAgIHRoaXMucm9vbXMucHVzaChyb29tT2JqKTtcclxuICAgIHJldHVybiByb29tT2JqO1xyXG4gIH1cclxuXHJcbiAgZHJvcFJvb20ocm9vbU5hbWUpIHtcclxuICAgIGxldCBuZXdSb29tcyA9IHRoaXMucm9vbXMuZmlsdGVyKGZ1bmN0aW9uKHJvb20pIHtcclxuICAgICAgcmV0dXJuIHJvb20ubmFtZSAhPT0gcm9vbU5hbWU7XHJcbiAgICB9KTtcclxuICAgIHRoaXMucm9vbXMgPSBuZXdSb29tcztcclxuICAgIHJldHVybiB0aGlzLnJvb21zO1xyXG4gIH1cclxuXHJcbiAgLy8gUmV0dXJucyByb29tIG9iamVjdCAocHJvcGVydGllcykgZ2l2ZW4gdGhlIG5hbWVcclxuICBnZXRSb29tKHJvb21OYW1lKSB7XHJcbiAgICBjb25zdCByb29tID0gdGhpcy5yb29tcy5maW5kKHggPT4geC5uYW1lID09PSByb29tTmFtZSk7XHJcbiAgICByZXR1cm4gcm9vbTtcclxuICB9XHJcblxyXG4gIC8vIFVzZXIgaW5wdXRcclxuICB1c2VyU2VuZChtZXNzYWdlKSB7XHJcbiAgICAvLyBPdXIgSW5wdXQgY2xhc3Mgd2lsbCBoYW5kbGUgY2xlYW5pbmcgLyBub3JtYWxpemluZyBzdHJpbmdzXHJcbiAgICB0aGlzLklucHV0LnNlbmQobWVzc2FnZSk7XHJcbiAgICB0aGlzLmRlY2lkZVBhdGgodGhpcy5JbnB1dC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvLyBHYW1lIEFJXHJcbiAgZGVjaWRlUGF0aChtZXNzYWdlKSB7XHJcbiAgICBpZiAobWVzc2FnZSA9PT0gJ3Jlc3RhcnQnKSB7XHJcbiAgICAgIHRoaXMucmVzZXRHYW1lKCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XHJcbiAgICBjb25zdCBjdXJyUm9vbSA9IF90aGlzLmdldFJvb20oX3RoaXMuUGxheWVyLmN1cnJlbnRSb29tKTtcclxuICAgIC8vIERvIHdlIGhhdmUgYWN0aW9ucyB0aGF0IHdlIGNhbiBkbyBpbiB0aGUgcm9vbT9cclxuICAgIGlmICh0eXBlb2YgY3VyclJvb20ucHJvbXB0cyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIC8vIENoZWNrIGV2ZXJ5IHByb21wdCBhY3Rpb24gdG8gc2VlIGlmIGl0IG1hdGNoZXMgb3VyIGlucHV0IGtleXdvcmRzXHJcbiAgICAgIC8vIEZvciBub3cganVzdCBnZXQgdGhlIGZpcnN0IG1hdGNoaW5nIHByb21wdCBhbmQgZG8gdGhhdFxyXG4gICAgICBsZXQgZm91bmRQcm9tcHQgPSBmYWxzZTtcclxuICAgICAgY3VyclJvb20ucHJvbXB0cy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9tcHQpIHtcclxuICAgICAgICBpZiAoZm91bmRQcm9tcHQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICBjb25zdCBtYXRjaGluZ1Byb21wdFJlc3VsdHMgPSBwcm9tcHQubWF0Y2hLZXl3b3JkcyhtZXNzYWdlLCBfdGhpcy5QbGF5ZXIuaW52ZW50b3J5Lml0ZW1zKTtcclxuICAgICAgICAgIC8vIElmIHdlIGdldCBhIG1hdGNoaW5nIHJlc3VsdCBiYWNrXHJcbiAgICAgICAgICBpZiAobWF0Y2hpbmdQcm9tcHRSZXN1bHRzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8vIFRoaXMgcHJvbXB0IGhhcyBrZXl3b3JkcyB0aGF0IG1hdGNoIHRoZSB1c2VyJ3MgaW5wdXRcclxuICAgICAgICAgICAgZm91bmRQcm9tcHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBJZiBwbGF5ZXIgc3VjY2VlZGVkIGluIHByb21wdCBhY3Rpb25cclxuICAgICAgICAgICAgaWYgKCdzdWNjZXNzJyBpbiBtYXRjaGluZ1Byb21wdFJlc3VsdHMpIHtcclxuICAgICAgICAgICAgICBfdGhpcy5EaXNwbGF5LnNob3coYDxwPiR7bWF0Y2hpbmdQcm9tcHRSZXN1bHRzLnN1Y2Nlc3Muc3VjY2Vzc1RleHR9PC9wPmApO1xyXG4gICAgICAgICAgICAgIC8vIEdldCBpdGVtcyBmcm9tIHByb21wdCBpZiBhbnkgYXJlIHJldHVybmVkIGFuZCBhZGQgdGhlbSB0byBpbnZlbnRvcnlcclxuICAgICAgICAgICAgICBpZiAobWF0Y2hpbmdQcm9tcHRSZXN1bHRzLnN1Y2Nlc3MuaXRlbXNHaXZlbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5QbGF5ZXIuaW52ZW50b3J5LmFkZEl0ZW1zKG1hdGNoaW5nUHJvbXB0UmVzdWx0cy5zdWNjZXNzLml0ZW1zR2l2ZW4pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvLyBJZiB0aGUgcHJvbXB0IHN1Y2Nlc3MgcmVzdWx0IGluY2x1ZGVzIGVudGVyaW5nIGEgbmV3IHJvb20uLlxyXG4gICAgICAgICAgICAgIGlmIChtYXRjaGluZ1Byb21wdFJlc3VsdHMuc3VjY2Vzcy5yb29tVG9FbnRlciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZW50ZXJSb29tUmVzdWx0U3VjY2VzcztcclxuICAgICAgICAgICAgICAgIGxldCBlbnRlclJvb21SZXN1bHRUZXh0OyAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayB0byBzZWUgaWYgcGxheWVyIGNhbiBzdWNjZXNzZnVsbHkgZW50ZXIgdGhlIHJvb20gKGdpdmVuIHRoZSBpbnZlbnRvcnkgLyByb29tIHJlcXVpcmVtZW50cylcclxuICAgICAgICAgICAgICAgIFtlbnRlclJvb21SZXN1bHRUZXh0LCBlbnRlclJvb21SZXN1bHRTdWNjZXNzXSA9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuUGxheWVyLmVudGVyUm9vbShfdGhpcy5nZXRSb29tKG1hdGNoaW5nUHJvbXB0UmVzdWx0cy5zdWNjZXNzLnJvb21Ub0VudGVyKSk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5EaXNwbGF5LmFwcGVuZChgPHA+JHtlbnRlclJvb21SZXN1bHRUZXh0fTwvcD5gKTtcclxuICAgICAgICAgICAgICAgIGlmIChlbnRlclJvb21SZXN1bHRTdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiBwbGF5ZXIgZW50ZXJlZCB3aW5uaW5nIHJvb21cclxuICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoaW5nUHJvbXB0UmVzdWx0cy5zdWNjZXNzLnJvb21Ub0VudGVyID09PSBfdGhpcy5lbmRSb29tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMud2luKCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIFBsYXllciBjb3VsZCBub3QgZW50ZXIgcm9vbSAobWlzc2luZyByZXF1aXJlZCBpdGVtcyBpbiBpbnZlbnRvcnkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFBsYXllciBmYWlsZWQgdG8gZG8gcHJvbXB0IChtaXNzaW5nIGl0ZW0gcmVxdWlyZW1lbnQpXHJcbiAgICAgICAgICAgIGlmICgnZmFpbCcgaW4gbWF0Y2hpbmdQcm9tcHRSZXN1bHRzKSB7XHJcbiAgICAgICAgICAgICAgX3RoaXMuRGlzcGxheS5zaG93KGAke21hdGNoaW5nUHJvbXB0UmVzdWx0cy5mYWlsLmZhaWxUZXh0fWApO1xyXG4gICAgICAgICAgICAgIF90aGlzLkRpc3BsYXkuYXBwZW5kKGA8cD5NaXNzaW5nIHJlcXVpcmVkIGl0ZW1zOiAke21hdGNoaW5nUHJvbXB0UmVzdWx0cy5mYWlsLm1pc3NpbmcudG9TdHJpbmcoKX0uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke190aGlzLmdldFJvb20oX3RoaXMuUGxheWVyLmN1cnJlbnRSb29tKS5nZXRUZXh0fTwvcD5gKTtcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZvdW5kUHJvbXB0ID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgLy8gUGxheWVyIGRpZG4ndCBzYXkgYW55IGtleXdvcmRzIHRoYXQgdHJpZ2dlcmVkIGFueSBvZiB0aGUgY3VycmVudCByb29tIHByb21wdHNcclxuICAgICAgICAgIF90aGlzLkRpc3BsYXkuc2hvdyhgPHA+Tm8gYWN0aW9ucyBjb3VsZCBiZSBkb25lIGZyb206IFwiJHttZXNzYWdlfVwiLiBUcnkgc29tZXRoaW5nIGVsc2UsIG9yIGJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcmUgc3BlY2lmaWMgYWJvdXQgd2hhdCB5b3UncmUgZG9pbmcuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke190aGlzLmdldFJvb20oX3RoaXMuUGxheWVyLmN1cnJlbnRSb29tKS5nZXRUZXh0fTwvcD5gKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gTm8gcHJvbXB0cyBleGlzdCBmb3IgdGhlIGN1cnJlbnQgcm9vbVxyXG4gICAgICBfdGhpcy5EaXNwbGF5LnNob3coYDxwPlRoZXJlIGRvZXNuJ3Qgc2VlbSB0byBiZSBhbnkgYWN0aW9ucyBhdCBhbGwgdGhhdCB5b3UgY2FuIGRvIGluIHRoaXMgcm9vbS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7X3RoaXMuZ2V0Um9vbShfdGhpcy5QbGF5ZXIuY3VycmVudFJvb20pLmdldFRleHR9XHJcbiAgICAgIGApO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2cobWVzc2FnZSwgdGhpcy5QbGF5ZXIpO1xyXG4gIH1cclxuXHJcbiAgZGlzYWJsZUlucHV0KCkge1xyXG4gICAgdGhpcy5JbnB1dC5kaXNhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBlbmFibGVJbnB1dCgpIHtcclxuICAgIHRoaXMuSW5wdXQuZW5hYmxlKCk7XHJcbiAgfVxyXG5cclxuICAvLyBQbGF5ZXIgd2luc1xyXG4gIHdpbigpIHtcclxuICAgIC8vIFNob3cgZmluYWwgcm9vbSB0ZXh0ICh3aW4gdGV4dClcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb29tcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy5yb29tc1tpXS5uYW1lID09PSB0aGlzLmVuZFJvb20pIHtcclxuICAgICAgICB0aGlzLkRpc3BsYXkuYXBwZW5kKCc8cD5HYW1lIGVuZC48L3A+Jyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIERpc2FibGUgYW55IG1vcmUgdXNlciBpbnB1dCBhZnRlciB3aW5uaW5nXHJcbiAgICB0aGlzLmRpc2FibGVJbnB1dCgpO1xyXG4gIH1cclxuXHJcbiAgLy8gUGxheWVyIHJlc2V0cyBnYW1lXHJcbiAgcmVzZXRHYW1lKCkge1xyXG4gICAgLy8gUmVzZXRzIHBsYXllciB3aXRoIGJsYW5rIGludmVudG9yeSBhbmQgYmFjayB0byBzdGFydGluZyByb29tXHJcbiAgICB0aGlzLlBsYXllci5pbnZlbnRvcnkgPSBuZXcgSW52ZW50b3J5KCk7XHJcbiAgICB0aGlzLlBsYXllci5jdXJyZW50Um9vbSA9IHRoaXMuc3RhcnRSb29tO1xyXG4gICAgY29uc3Qgcm9vbSA9IHRoaXMuZ2V0Um9vbSh0aGlzLnN0YXJ0Um9vbSk7XHJcbiAgICB0aGlzLkRpc3BsYXkuc2hvdyhyb29tLmdldFRleHQpO1xyXG4gICAgdGhpcy5JbnB1dC5lbmFibGUoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcclxuXHJcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2FtZTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcihkaXNhYmxlZCA9IGZhbHNlLCB2YWx1ZSA9ICcnLCBlbGVtZW50SWQgPSAnaW5wdXQnKSB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLmVsZW1lbnRJZCA9IGVsZW1lbnRJZDtcclxuICB9XHJcblxyXG4gIGVuYWJsZSgpIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dCcpLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBkaXNhYmxlKCkge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQnKS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBzZW5kKHZhbHVlKSB7XHJcbiAgICAvLyBOb3JtYWxpemUgaW5wdXQgdmFsdWVzIChpZiBkZXNpcmVkKVxyXG4gICAgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbnZlbnRvcnkge1xyXG5cclxuICBjb25zdHJ1Y3RvcihpdGVtcyA9IFtdKSB7XHJcbiAgICB0aGlzLml0ZW1zID0gaXRlbXM7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIFdlIGNhbiB1c2UgdGhpcyB0byBhZGQgc2luZ2xlIG9yIG11bHRpcGxlIGl0ZW1zLCBhcyBsb25nIGFzIHRoZSBcclxuICAvLyBwYXNzZWQgdmFsdWUgaXMgYW4gYXJyYXlcclxuICBhZGRJdGVtcyhpdGVtcykge1xyXG4gICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbXMuY29uY2F0KGl0ZW1zKTtcclxuICAgIHJldHVybiB0aGlzLml0ZW1zO1xyXG4gIH1cclxuXHJcbiAgZHJvcEl0ZW0oaXRlbU5hbWUpIHtcclxuICAgIGxldCBuZXdJbnZlbnRvcnkgPSB0aGlzLml0ZW1zLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgIHJldHVybiBpdGVtLm5hbWUgIT09IGl0ZW1OYW1lO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLml0ZW1zID0gbmV3SW52ZW50b3J5O1xyXG4gICAgcmV0dXJuIHRoaXMuaXRlbXM7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBJbnZlbnRvcnkgZnJvbSAnLi9pbnZlbnRvcnknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZSA9ICcnLCBpbnZlbnRvcnkgPSBuZXcgSW52ZW50b3J5KCksIGN1cnJlbnRSb29tID0gJycsIHN0YXJ0Um9vbSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIGlmICh0aGlzLm5hbWUgPT09ICcnKSB7XHJcbiAgICAgIHRoaXMubmFtZSA9ICdwbGF5ZXInO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pbnZlbnRvcnkgPSBpbnZlbnRvcnk7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50Um9vbSA9PT0gJycpIHtcclxuICAgICAgdGhpcy5jdXJyZW50Um9vbSA9IHRoaXMuc3RhcnRSb29tO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdGFydFJvb20gPSBzdGFydFJvb207XHJcbiAgfVxyXG4gIFxyXG4gIGVudGVyUm9vbShyb29tKSB7XHJcbiAgICBjb25zdCByb29tUmVzdWx0ID0gcm9vbS5lbnRlcih0aGlzLmludmVudG9yeS5pdGVtcyk7XHJcbiAgICBpZiAocm9vbVJlc3VsdFsxXSA9PT0gZmFsc2UpIHtcclxuICAgICAgLy8gUGxheWVyIGRpZCBub3QgaGF2ZSByZXF1aXJlZCBpdGVtcyB0byBlbnRlciB0aGUgcm9vbVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gRW50ZXJlZCByb29tIHN1Y2Nlc3NmdWxseVxyXG4gICAgICB0aGlzLmN1cnJlbnRSb29tID0gcm9vbS5uYW1lOyBcclxuICAgIH1cclxuICAgIC8vIFJldHVybiByZXN1bHRzIHRleHQgYW5kIHdoZXRoZXIgb3Igbm90IHBsYXllciBzdWNjZXNzZnVsbHkgZW50ZXJlZCByb29tXHJcbiAgICByZXR1cm4gW3Jvb21SZXN1bHRbMF0sIHJvb21SZXN1bHRbMV1dO1xyXG4gIH1cclxuXHJcbiAgZ2V0SXRlbShpdGVtKSB7XHJcbiAgICB0aGlzLmludmVudG9yeS5hZGRJdGVtKGl0ZW0pO1xyXG4gICAgcmV0dXJuIHRoaXMuaW52ZW50b3J5O1xyXG4gIH1cclxuXHJcbiAgZHJvcEl0ZW0oaXRlbSkge1xyXG4gICAgdGhpcy5pbnZlbnRvcnkuZHJvcEl0ZW0oaXRlbSk7XHJcbiAgICByZXR1cm4gdGhpcy5pbnZlbnRvcnk7XHJcbiAgfVxyXG59XHJcbiAgXHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb21wdCB7XHJcbiAgIFxyXG4gIGNvbnN0cnVjdG9yKG5hbWUgPSAnJywga2V5d29yZHMgPSBbXSwgcmVzdWx0cyA9IHt9LCByZXF1aXJlbWVudHMgPSBbXSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIC8vIEtleXdvcmRzIHRoYXQgY2FuIHRyaWdnZXIgdGhlIHByb21wdCAobWFrZSBhbGwgbG93ZXItY2FzZSBieSBkZWZhdWx0KVxyXG4gICAgdGhpcy5rZXl3b3JkcyA9IGtleXdvcmRzLm1hcChmdW5jdGlvbih2KSB7IHJldHVybiB2LnRvTG93ZXJDYXNlKCk7fSk7IFxyXG4gICAgLy8gUmVzdWx0cyB0aGF0IG9jY3VyIHdoZW4gdGhpcyBwcm9tcHQgaXMgc3VjY2Vzc2Z1bGx5IHRyaWdnZXJlZDsgXHJcbiAgICAvLyB0aGUgcmVzdWx0IGtleXMgY29tcHJpc2Ugb2Yg4oCcc3VjY2Vzc1RleHTigJ0gKHJlcXVpcmVkKSwgXCJmYWlsVGV4dFwiIChvcHRpb25hbCksXHJcbiAgICAvLyDigJxpdGVtc1JlcXVpcmVk4oCdIChvcHRpb25hbCksIGFuZCDigJxyb29tVG9FbnRlcuKAnSAob3B0aW9uYWwpXHJcbiAgICB0aGlzLnJlc3VsdHMgPSByZXN1bHRzOyBcclxuICAgIC8vIEFueSBwcmVyZXF1aXNpdGUgaXRlbXMgbmVlZGVkIHRvIGRvIHRoZSBwcm9tcHQ/XHJcbiAgICB0aGlzLnJlcXVpcmVtZW50cyA9IHJlcXVpcmVtZW50czsgXHJcbiAgfVxyXG5cclxuICAvLyBDaGVjayBpZiBpbnB1dCBtZXNzYWdlIG1hdGNoZXMgYW55IHByb21wdCBrZXl3b3JkcyBhbmQgcmV0dXJuIHJlc3VsdHNcclxuICBtYXRjaEtleXdvcmRzKG1lc3NhZ2UsIGl0ZW1zID0gW10pIHtcclxuICAgIGxldCBmb3VuZEtleXdvcmQgPSBmYWxzZTtcclxuICAgIGxldCBtaXNzaW5nUmVxdWlyZW1lbnRzID0gW107XHJcbiAgICAvLyBJZiB3ZSBoYXZlIGFueSBpdGVtIHJlcXVpcmVtZW50c1xyXG4gICAgaWYgKHRoaXMucmVxdWlyZW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgLy8gQ2hlY2sgYWxsIHRoZSByZXF1aXJlbWVudHMgYWdhaW5zdCB0aGUgaXRlbXMgcGFzc2VkXHJcbiAgICAgIHRoaXMucmVxdWlyZW1lbnRzLmZvckVhY2goZnVuY3Rpb24ocmVxdWlyZW1lbnQpIHtcclxuICAgICAgICBsZXQgZm91bmRSZXF1aXJlbWVudCA9IGZhbHNlO1xyXG4gICAgICAgIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgICAgaWYgKGl0ZW0gPT09IHJlcXVpcmVtZW50KSB7XHJcbiAgICAgICAgICAgIGZvdW5kUmVxdWlyZW1lbnQgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIElmIGEgcmVxdWlyZW1lbnQgaXNuJ3QgZm91bmQgYWRkIHRoYXQgYSBsaXN0XHJcbiAgICAgICAgaWYgKCFmb3VuZFJlcXVpcmVtZW50KSB7XHJcbiAgICAgICAgICBtaXNzaW5nUmVxdWlyZW1lbnRzLnB1c2gocmVxdWlyZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLyBPbmNlIHdlIGNoZWNrIHRvIHNlZSBpZiB0aGUgcGxheWVyJ3MgbWlzc2luZyBhbnkgaXRlbXMsXHJcbiAgICAvLyBwYXJzZSB0aGUgaW5wdXQgZm9yIG1hdGNoaW5nIGtleXdvcmRzIHRvIHRoZSBwcm9tcHRcclxuICAgIHRoaXMua2V5d29yZHMuZm9yRWFjaChmdW5jdGlvbihrZXl3b3JkKSB7XHJcbiAgICAgIGlmIChtZXNzYWdlLmluY2x1ZGVzKGtleXdvcmQudG9Mb3dlckNhc2UoKSkpIHtcclxuICAgICAgICBmb3VuZEtleXdvcmQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIElmIGFueSBrZXl3b3JkcyBoYXZlIGJlZW4gbWF0Y2hlZCBmcm9tIHRoZSB1c2VyIGlucHV0XHJcbiAgICBpZiAoZm91bmRLZXl3b3JkKSB7XHJcbiAgICAgIC8vIElmIHRoZXJlIGFyZSBhbnkgbWlzc2luZyBpdGVtIHJlcXVpcmVtZW50c1xyXG4gICAgICBpZiAobWlzc2luZ1JlcXVpcmVtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgLy8gUHJvbXB0IGZhaWxzOyByZXR1cm4gbWlzc2luZyBpdGVtcyBhbmQgZmFpbFRleHRcclxuICAgICAgICByZXR1cm4geydmYWlsJzoge1xyXG4gICAgICAgICAgJ21pc3NpbmcnOiBtaXNzaW5nUmVxdWlyZW1lbnRzLFxyXG4gICAgICAgICAgJ2ZhaWxUZXh0JzogdGhpcy5yZXN1bHRzLmZhaWxUZXh0fVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgLy8gUHJvbXB0IHN1Y2NlZWRzOyByZXR1cm4gcmVzdWx0cyBvZiB0aGUgcHJvbXB0XHJcbiAgICAgIHJldHVybiB7J3N1Y2Nlc3MnOiB0aGlzLnJlc3VsdHN9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQcm9tcHQgZnJvbSAnLi9wcm9tcHQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm9vbSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWUgPSAnJywgZ2V0VGV4dCA9ICcnLCBwcm9tcHRzID0gW10sIHJlcXVpcmVtZW50cyA9IFtdKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5nZXRUZXh0ID0gZ2V0VGV4dDsgLy8gVGhlIHRleHQgdGhhdCBpcyBkaXNwbGF5ZWQgd2hlbiB0aGUgcm9vbSBpcyBlbnRlcmVkXHJcbiAgICB0aGlzLnByb21wdHMgPSBwcm9tcHRzOyAvLyBXaGF0IGFyZSB0aGUgYWN0aW9ucyB0aGF0IHdlIGNhbiBkbyBpbiB0aGlzIHJvb20/XHJcbiAgICB0aGlzLnJlcXVpcmVtZW50cyA9IHJlcXVpcmVtZW50czsgLy8gQW55IHJlcXVpcmVtZW50cyAoaXRlbXMpIG5lZWRlZCB0byBhY2Nlc3MgdGhlIHJvb21cclxuICB9XHJcblxyXG4gIC8vIEFkZCBuZXcgcHJvbXB0IC8gaW50ZXJhY3Rpb24gdG8gcm9vbVxyXG4gIGFkZFByb21wdChuYW1lLCBrZXl3b3JkcywgcmVzdWx0cywgcmVxdWlyZW1lbnRzKSB7XHJcbiAgICBjb25zdCBwcm9tcHQgPSBuZXcgUHJvbXB0KG5hbWUsIGtleXdvcmRzLCByZXN1bHRzLCByZXF1aXJlbWVudHMpO1xyXG4gICAgdGhpcy5wcm9tcHRzLnB1c2gocHJvbXB0KTtcclxuICAgIHJldHVybiB0aGlzLnByb21wdHM7XHJcbiAgfVxyXG5cclxuICAvLyBFbnRlciB0aGUgcm9vbVxyXG4gIGVudGVyKGl0ZW1zID0gW10pIHtcclxuICAgIGxldCByZXN1bHRUZXh0ID0gJyc7XHJcbiAgICBsZXQgbWV0QWxsUmVxdWlyZW1lbnRzID0gdHJ1ZTsgLy8gQ2FuIHdlIGVudGVyIHRoZSByb29tP1xyXG4gICAgLy8gVGhlIHJvb20gaXMgbm90IGFjY2Vzc2libGUgYnkgZGVmYXVsdCBpZiB3ZSBoYXZlIG1vcmUgdGhhbiBvbmUgcmVxdWlyZW1lbnQgKGl0ZW0pXHJcbiAgICBpZiAodGhpcy5yZXF1aXJlbWVudHMgPiAwKSB7XHJcbiAgICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBtZXRBbGxSZXF1aXJlbWVudHMgPSBmYWxzZTtcclxuICAgICAgICAvLyBBcHBlbmQgbWlzc2luZyByZXF1aXJlbWVudCBtZXNzYWdlc1xyXG4gICAgICAgIHRoaXMucmVxdWlyZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKHJlcXVpcmVtZW50KSB7XHJcbiAgICAgICAgICByZXN1bHRUZXh0ICs9IGAke3JlcXVpcmVtZW50LmZhaWxUZXh0fS4gYDtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBDaGVjayB0aGUgcm9vbSdzIHJlcXVpcmVtZW50cyBhZ2FpbnN0IGl0ZW1zIHRvIHNlZSBpZiB0aGV5J3JlIGFsbCBmb3VuZFxyXG4gICAgICAgIHRoaXMucmVxdWlyZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKHJlcXVpcmVtZW50KSB7XHJcbiAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICBpZiAoaXRlbSA9PT0gcmVxdWlyZW1lbnQpIHtcclxuICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgaWYgKGZvdW5kID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBtZXRBbGxSZXF1aXJlbWVudHMgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gUmV0dXJuIGZhaWwgbWVzc2FnZXMgZm9yIG1pc3NpbmcgcmVxdWlyZW1lbnRzXHJcbiAgICAgICAgICAgIHJlc3VsdFRleHQgKz0gcmVxdWlyZW1lbnQuZmFpbFRleHQ7ICBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBJZiBhbGwgaXRlbSByZXF1aXJlbWVudHMgaGF2ZSBiZWVuIGZvdW5kLCByZXR1cm4gcm9vbSB0ZXh0XHJcbiAgICAgICAgaWYgKG1ldEFsbFJlcXVpcmVtZW50cyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgcmVzdWx0VGV4dCA9IHRoaXMuZ2V0VGV4dDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy8gTm8gaXRlbXMgcmVxdWlyZWQgdG8gZW50ZXIgdGhlIHJvb20sIHJldHVybiByb29tIHRleHRcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3VsdFRleHQgPSB0aGlzLmdldFRleHQ7XHJcbiAgICB9XHJcbiAgICAvLyBSZXR1cm4gcmVzdWx0aW5nIHRleHQgYW5kIHdoZXRoZXIgb3Igbm90IHJvb20gY291bGQgYmUgZW50ZXJlZFxyXG4gICAgcmV0dXJuIFtyZXN1bHRUZXh0LCBtZXRBbGxSZXF1aXJlbWVudHNdO1xyXG4gIH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==