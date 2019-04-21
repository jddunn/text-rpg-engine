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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGV4dC1ycGctZW5naW5lLy4vc3JjL2lucHV0LmpzIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS8uL3NyYy9pbnZlbnRvcnkuanMiLCJ3ZWJwYWNrOi8vdGV4dC1ycGctZW5naW5lLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvcHJvbXB0LmpzIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS8uL3NyYy9yb29tLmpzIl0sIm5hbWVzIjpbIkRpc3BsYXkiLCJodG1sIiwiZWxlbWVudElkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsIkdhbWUiLCJkYXRhcGF0aCIsInJvb21zIiwiaXRlbXMiLCJzdGFydFJvb20iLCJlbmRSb29tIiwiSW5wdXQiLCJQbGF5ZXIiLCJkaXNwbGF5VGV4dCIsImxlbmd0aCIsIm5hbWUiLCJjdXJyZW50Um9vbSIsImkiLCJnZXRUZXh0IiwidW5kZWZpbmVkIiwic2hvdyIsInByb21wdHMiLCJyZXF1aXJlbWVudHMiLCJyb29tT2JqIiwicHVzaCIsInJvb21OYW1lIiwibmV3Um9vbXMiLCJmaWx0ZXIiLCJyb29tIiwiZmluZCIsIngiLCJtZXNzYWdlIiwic2VuZCIsImRlY2lkZVBhdGgiLCJ2YWx1ZSIsInJlc2V0R2FtZSIsIl90aGlzIiwiY3VyclJvb20iLCJnZXRSb29tIiwiZm91bmRQcm9tcHQiLCJmb3JFYWNoIiwicHJvbXB0IiwibWF0Y2hpbmdQcm9tcHRSZXN1bHRzIiwibWF0Y2hLZXl3b3JkcyIsImludmVudG9yeSIsInN1Y2Nlc3MiLCJzdWNjZXNzVGV4dCIsIml0ZW1zR2l2ZW4iLCJhZGRJdGVtcyIsInJvb21Ub0VudGVyIiwiZW50ZXJSb29tUmVzdWx0U3VjY2VzcyIsImVudGVyUm9vbVJlc3VsdFRleHQiLCJlbnRlclJvb20iLCJhcHBlbmQiLCJ3aW4iLCJmYWlsIiwiZmFpbFRleHQiLCJtaXNzaW5nIiwidG9TdHJpbmciLCJjb25zb2xlIiwibG9nIiwiZGlzYWJsZSIsImVuYWJsZSIsImRpc2FibGVJbnB1dCIsImdhbWUiLCJkaXNhYmxlZCIsInRvTG93ZXJDYXNlIiwiSW52ZW50b3J5IiwiY29uY2F0IiwiaXRlbU5hbWUiLCJuZXdJbnZlbnRvcnkiLCJpdGVtIiwicm9vbVJlc3VsdCIsImVudGVyIiwiYWRkSXRlbSIsImRyb3BJdGVtIiwiUHJvbXB0Iiwia2V5d29yZHMiLCJyZXN1bHRzIiwibWFwIiwidiIsImZvdW5kS2V5d29yZCIsIm1pc3NpbmdSZXF1aXJlbWVudHMiLCJyZXF1aXJlbWVudCIsImZvdW5kUmVxdWlyZW1lbnQiLCJrZXl3b3JkIiwiaW5jbHVkZXMiLCJSb29tIiwicmVzdWx0VGV4dCIsIm1ldEFsbFJlcXVpcmVtZW50cyIsImZvdW5kIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5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LEtBQUtZLFdBQWIsRUFBMEI7QUFDeEJPLHFCQUFLLEdBQUcsSUFBUjtBQUNEO0FBQ0YsYUFKRDs7QUFLQSxnQkFBSUEsS0FBSyxLQUFLLEtBQWQsRUFBcUI7QUFDbkJELGdDQUFrQixHQUFHLEtBQXJCLENBRG1CLENBRW5COztBQUNBRCx3QkFBVSxJQUFJTCxXQUFXLENBQUMzQixRQUExQjtBQUNEO0FBQ0YsV0FiRCxFQUZLLENBZ0JMOztBQUNBLGNBQUlpQyxrQkFBa0IsS0FBSyxJQUEzQixFQUFpQztBQUMvQkQsc0JBQVUsR0FBRyxLQUFLdEUsT0FBbEI7QUFDRDtBQUNGLFNBM0J3QixDQTRCekI7O0FBQ0QsT0E3QkQsTUE2Qk87QUFDTHNFLGtCQUFVLEdBQUcsS0FBS3RFLE9BQWxCO0FBQ0QsT0FwQ2UsQ0FxQ2hCOzs7QUFDQSxhQUFPLENBQUNzRSxVQUFELEVBQWFDLGtCQUFiLENBQVA7QUFDRCIsImZpbGUiOiJ0ZXh0LXJwZy1lbmdpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInRleHQtcnBnLWVuZ2luZVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ0ZXh0LXJwZy1lbmdpbmVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1widGV4dC1ycGctZW5naW5lXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGh0bWwgPSAnJywgZWxlbWVudElkID0gJ2Rpc3BsYXknKSB7XHJcbiAgICB0aGlzLmh0bWwgPSBodG1sO1xyXG4gICAgdGhpcy5lbGVtZW50SWQgPSBlbGVtZW50SWQ7XHJcbiAgfVxyXG5cclxuICBzaG93KGh0bWwgPSBudWxsKSB7XHJcbiAgICBpZiAoaHRtbCA9PT0gbnVsbCkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkuaW5uZXJIVE1MID0gdGhpcy5odG1sO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgIHRoaXMuaHRtbCA9IGh0bWw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBBcHBlbmQgSFRNTCBjb250ZW50IHRvIGRpc3BsYXkgc2NyZWVuXHJcbiAgYXBwZW5kKGh0bWwpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5pbm5lckhUTUwgKz0gaHRtbDtcclxuICB9XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgRGlzcGxheSBmcm9tICcuL2Rpc3BsYXknO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9pbnB1dCc7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xyXG5pbXBvcnQgUm9vbSBmcm9tICcuL3Jvb20nO1xyXG5pbXBvcnQgSW52ZW50b3J5IGZyb20gJy4vaW52ZW50b3J5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihkYXRhcGF0aCA9ICcnLCByb29tcyA9IFtdLCBpdGVtcyA9IFtdLCBzdGFydFJvb20gPSAnJywgZW5kUm9vbSA9ICcnKSB7XHJcbiAgICB0aGlzLkRpc3BsYXkgPSBuZXcgRGlzcGxheSgpO1xyXG4gICAgdGhpcy5JbnB1dCA9IG5ldyBJbnB1dCgpO1xyXG4gICAgdGhpcy5yb29tcyA9IHJvb21zOyAvLyBBbGwgdGhlIHJvb21zIGluIG91ciBnYW1lXHJcbiAgICB0aGlzLnN0YXJ0Um9vbSA9IHN0YXJ0Um9vbTsgLy8gV2hpY2ggcm9vbSB3aWxsIHRoZSBwbGF5ZXIgc3RhcnQgaW5cclxuICAgIHRoaXMuZW5kUm9vbSA9IGVuZFJvb207IC8vIFdoaWNoIHJvb20gaXMgdGhlIHdpbm5pbmcgLyBnYW1lIGVuZFxyXG4gICAgdGhpcy5QbGF5ZXIgPSBuZXcgUGxheWVyKHN0YXJ0Um9vbSA9IHRoaXMuc3RhcnRSb29tKTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBsZXQgZGlzcGxheVRleHQ7XHJcblxyXG4gICAgLy8gSWYgZ2FtZSB3YXNuJ3QgaW5pdGlhbGl6ZWQgd2l0aCBhIHN0YXJ0Um9vbSwgc2V0IGl0IHRvIHRoZSBmaXJzdCByb29tXHJcbiAgICBpZiAodGhpcy5zdGFydFJvb20gPT09ICcnICYmIHRoaXMucm9vbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnN0YXJ0Um9vbSA9IHRoaXMucm9vbXNbMF0ubmFtZTtcclxuICAgICAgdGhpcy5QbGF5ZXIuc3RhcnRSb29tID0gdGhpcy5zdGFydFJvb207XHJcbiAgICAgIHRoaXMuUGxheWVyLmN1cnJlbnRSb29tID0gdGhpcy5QbGF5ZXIuc3RhcnRSb29tO1xyXG4gICAgfVxyXG4gICAgLy8gSWYgZ2FtZSB3YXNuJ3QgaW5pdGlhbGl6ZWQgd2l0aCBhIGVuZFJvb20sIHNldCBpdCB0byB0aGUgbGFzdCByb29tXHJcbiAgICBpZiAodGhpcy5lbmRSb29tID09PSAnJyAmJiB0aGlzLnJvb21zLmxlbmd0aCA+IDEpIHtcclxuICAgICAgdGhpcy5lbmRSb29tID0gdGhpcy5yb29tc1t0aGlzLnJvb21zLmxlbmd0aCAtIDFdLm5hbWU7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm9vbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMucm9vbXNbaV0ubmFtZSA9PT0gdGhpcy5zdGFydFJvb20pIHtcclxuICAgICAgICBkaXNwbGF5VGV4dCA9IHRoaXMucm9vbXNbaV0uZ2V0VGV4dDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGRpc3BsYXlUZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgZGlzcGxheVRleHQgPSAnTm8gc3RhcnRpbmcgcm9vbSB0ZXh0IGZvdW5kISc7XHJcbiAgICB9XHJcbiAgICB0aGlzLkRpc3BsYXkuc2hvdyhkaXNwbGF5VGV4dCk7XHJcbiAgfVxyXG5cclxuICAvLyBNYW5hZ2Ugcm9vbXNcclxuICBhZGRSb29tKG5hbWUsIGdldFRleHQsIHByb21wdHMgPSBbXSwgcmVxdWlyZW1lbnRzID0gW10pIHtcclxuICAgIGxldCByb29tT2JqID0gbmV3IFJvb20obmFtZSwgZ2V0VGV4dCwgcHJvbXB0cywgcmVxdWlyZW1lbnRzKTtcclxuXHJcbiAgICB0aGlzLnJvb21zLnB1c2gocm9vbU9iaik7XHJcbiAgICByZXR1cm4gcm9vbU9iajtcclxuICB9XHJcblxyXG4gIGRyb3BSb29tKHJvb21OYW1lKSB7XHJcbiAgICBsZXQgbmV3Um9vbXMgPSB0aGlzLnJvb21zLmZpbHRlcihmdW5jdGlvbiAocm9vbSkge1xyXG4gICAgICByZXR1cm4gcm9vbS5uYW1lICE9PSByb29tTmFtZTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMucm9vbXMgPSBuZXdSb29tcztcclxuICAgIHJldHVybiB0aGlzLnJvb21zO1xyXG4gIH1cclxuXHJcbiAgLy8gUmV0dXJucyByb29tIG9iamVjdCAocHJvcGVydGllcykgZ2l2ZW4gdGhlIG5hbWVcclxuICBnZXRSb29tKHJvb21OYW1lKSB7XHJcbiAgICBjb25zdCByb29tID0gdGhpcy5yb29tcy5maW5kKHggPT4geC5uYW1lID09PSByb29tTmFtZSk7XHJcblxyXG4gICAgcmV0dXJuIHJvb207XHJcbiAgfVxyXG5cclxuICAvLyBVc2VyIGlucHV0XHJcbiAgdXNlclNlbmQobWVzc2FnZSkge1xyXG4gICAgLy8gT3VyIElucHV0IGNsYXNzIHdpbGwgaGFuZGxlIGNsZWFuaW5nIC8gbm9ybWFsaXppbmcgc3RyaW5nc1xyXG4gICAgdGhpcy5JbnB1dC5zZW5kKG1lc3NhZ2UpO1xyXG4gICAgdGhpcy5kZWNpZGVQYXRoKHRoaXMuSW5wdXQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLy8gR2FtZSBBSVxyXG4gIGRlY2lkZVBhdGgobWVzc2FnZSkge1xyXG4gICAgaWYgKG1lc3NhZ2UgPT09ICdyZXN0YXJ0Jykge1xyXG4gICAgICB0aGlzLnJlc2V0R2FtZSgpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgX3RoaXMgPSB0aGlzO1xyXG4gICAgY29uc3QgY3VyclJvb20gPSBfdGhpcy5nZXRSb29tKF90aGlzLlBsYXllci5jdXJyZW50Um9vbSk7XHJcblxyXG4gICAgLy8gRG8gd2UgaGF2ZSBhY3Rpb25zIHRoYXQgd2UgY2FuIGRvIGluIHRoZSByb29tP1xyXG4gICAgaWYgKHR5cGVvZiBjdXJyUm9vbS5wcm9tcHRzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgLy8gQ2hlY2sgZXZlcnkgcHJvbXB0IGFjdGlvbiB0byBzZWUgaWYgaXQgbWF0Y2hlcyBvdXIgaW5wdXQga2V5d29yZHNcclxuICAgICAgLy8gRm9yIG5vdyBqdXN0IGdldCB0aGUgZmlyc3QgbWF0Y2hpbmcgcHJvbXB0IGFuZCBkbyB0aGF0XHJcbiAgICAgIGxldCBmb3VuZFByb21wdCA9IGZhbHNlO1xyXG5cclxuICAgICAgY3VyclJvb20ucHJvbXB0cy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9tcHQpIHtcclxuICAgICAgICBpZiAoZm91bmRQcm9tcHQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICBjb25zdCBtYXRjaGluZ1Byb21wdFJlc3VsdHMgPSBwcm9tcHQubWF0Y2hLZXl3b3JkcyhtZXNzYWdlLCBfdGhpcy5QbGF5ZXIuaW52ZW50b3J5Lml0ZW1zKTtcclxuXHJcbiAgICAgICAgICAvLyBJZiB3ZSBnZXQgYSBtYXRjaGluZyByZXN1bHQgYmFja1xyXG4gICAgICAgICAgaWYgKG1hdGNoaW5nUHJvbXB0UmVzdWx0cyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAvLyBUaGlzIHByb21wdCBoYXMga2V5d29yZHMgdGhhdCBtYXRjaCB0aGUgdXNlcidzIGlucHV0XHJcbiAgICAgICAgICAgIGZvdW5kUHJvbXB0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gSWYgcGxheWVyIHN1Y2NlZWRlZCBpbiBwcm9tcHQgYWN0aW9uXHJcbiAgICAgICAgICAgIGlmICgnc3VjY2VzcycgaW4gbWF0Y2hpbmdQcm9tcHRSZXN1bHRzKSB7XHJcbiAgICAgICAgICAgICAgX3RoaXMuRGlzcGxheS5zaG93KGA8cD4ke21hdGNoaW5nUHJvbXB0UmVzdWx0cy5zdWNjZXNzLnN1Y2Nlc3NUZXh0fTwvcD5gKTtcclxuICAgICAgICAgICAgICAvLyBHZXQgaXRlbXMgZnJvbSBwcm9tcHQgaWYgYW55IGFyZSByZXR1cm5lZCBhbmQgYWRkIHRoZW0gdG8gaW52ZW50b3J5XHJcbiAgICAgICAgICAgICAgaWYgKG1hdGNoaW5nUHJvbXB0UmVzdWx0cy5zdWNjZXNzLml0ZW1zR2l2ZW4gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuUGxheWVyLmludmVudG9yeS5hZGRJdGVtcyhtYXRjaGluZ1Byb21wdFJlc3VsdHMuc3VjY2Vzcy5pdGVtc0dpdmVuKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLy8gSWYgdGhlIHByb21wdCBzdWNjZXNzIHJlc3VsdCBpbmNsdWRlcyBlbnRlcmluZyBhIG5ldyByb29tLi5cclxuICAgICAgICAgICAgICBpZiAobWF0Y2hpbmdQcm9tcHRSZXN1bHRzLnN1Y2Nlc3Mucm9vbVRvRW50ZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVudGVyUm9vbVJlc3VsdFN1Y2Nlc3M7XHJcbiAgICAgICAgICAgICAgICBsZXQgZW50ZXJSb29tUmVzdWx0VGV4dDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayB0byBzZWUgaWYgcGxheWVyIGNhbiBzdWNjZXNzZnVsbHkgZW50ZXIgdGhlIHJvb20gKGdpdmVuIHRoZSBpbnZlbnRvcnkgLyByb29tIHJlcXVpcmVtZW50cylcclxuICAgICAgICAgICAgICAgIFtlbnRlclJvb21SZXN1bHRUZXh0LCBlbnRlclJvb21SZXN1bHRTdWNjZXNzXSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5QbGF5ZXIuZW50ZXJSb29tKF90aGlzLmdldFJvb20obWF0Y2hpbmdQcm9tcHRSZXN1bHRzLnN1Y2Nlc3Mucm9vbVRvRW50ZXIpKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLkRpc3BsYXkuYXBwZW5kKGA8cD4ke2VudGVyUm9vbVJlc3VsdFRleHR9PC9wPmApO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVudGVyUm9vbVJlc3VsdFN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHBsYXllciBlbnRlcmVkIHdpbm5pbmcgcm9vbVxyXG4gICAgICAgICAgICAgICAgICBpZiAobWF0Y2hpbmdQcm9tcHRSZXN1bHRzLnN1Y2Nlc3Mucm9vbVRvRW50ZXIgPT09IF90aGlzLmVuZFJvb20pIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy53aW4oKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgLy8gUGxheWVyIGNvdWxkIG5vdCBlbnRlciByb29tIChtaXNzaW5nIHJlcXVpcmVkIGl0ZW1zIGluIGludmVudG9yeSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gUGxheWVyIGZhaWxlZCB0byBkbyBwcm9tcHQgKG1pc3NpbmcgaXRlbSByZXF1aXJlbWVudClcclxuICAgICAgICAgICAgaWYgKCdmYWlsJyBpbiBtYXRjaGluZ1Byb21wdFJlc3VsdHMpIHtcclxuICAgICAgICAgICAgICBfdGhpcy5EaXNwbGF5LnNob3coYCR7bWF0Y2hpbmdQcm9tcHRSZXN1bHRzLmZhaWwuZmFpbFRleHR9YCk7XHJcbiAgICAgICAgICAgICAgX3RoaXMuRGlzcGxheS5hcHBlbmQoYDxwPk1pc3NpbmcgcmVxdWlyZWQgaXRlbXM6ICR7bWF0Y2hpbmdQcm9tcHRSZXN1bHRzLmZhaWwubWlzc2luZy50b1N0cmluZygpfS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7X3RoaXMuZ2V0Um9vbShfdGhpcy5QbGF5ZXIuY3VycmVudFJvb20pLmdldFRleHR9PC9wPmApO1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZm91bmRQcm9tcHQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAvLyBQbGF5ZXIgZGlkbid0IHNheSBhbnkga2V5d29yZHMgdGhhdCB0cmlnZ2VyZWQgYW55IG9mIHRoZSBjdXJyZW50IHJvb20gcHJvbXB0c1xyXG4gICAgICAgICAgX3RoaXMuRGlzcGxheS5zaG93KGA8cD5ObyBhY3Rpb25zIGNvdWxkIGJlIGRvbmUgZnJvbTogXCIke21lc3NhZ2V9XCIuIFRyeSBzb21ldGhpbmcgZWxzZSwgb3IgYmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9yZSBzcGVjaWZpYyBhYm91dCB3aGF0IHlvdSdyZSBkb2luZy48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7X3RoaXMuZ2V0Um9vbShfdGhpcy5QbGF5ZXIuY3VycmVudFJvb20pLmdldFRleHR9PC9wPmApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBObyBwcm9tcHRzIGV4aXN0IGZvciB0aGUgY3VycmVudCByb29tXHJcbiAgICAgIF90aGlzLkRpc3BsYXkuc2hvdyhgPHA+VGhlcmUgZG9lc24ndCBzZWVtIHRvIGJlIGFueSBhY3Rpb25zIGF0IGFsbCB0aGF0IHlvdSBjYW4gZG8gaW4gdGhpcyByb29tLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtfdGhpcy5nZXRSb29tKF90aGlzLlBsYXllci5jdXJyZW50Um9vbSkuZ2V0VGV4dH1cclxuICAgICAgYCk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlLCB0aGlzLlBsYXllcik7XHJcbiAgfVxyXG5cclxuICBkaXNhYmxlSW5wdXQoKSB7XHJcbiAgICB0aGlzLklucHV0LmRpc2FibGUoKTtcclxuICB9XHJcblxyXG4gIGVuYWJsZUlucHV0KCkge1xyXG4gICAgdGhpcy5JbnB1dC5lbmFibGUoKTtcclxuICB9XHJcblxyXG4gIC8vIFBsYXllciB3aW5zXHJcbiAgd2luKCkge1xyXG4gICAgLy8gU2hvdyBmaW5hbCByb29tIHRleHQgKHdpbiB0ZXh0KVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvb21zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLnJvb21zW2ldLm5hbWUgPT09IHRoaXMuZW5kUm9vbSkge1xyXG4gICAgICAgIHRoaXMuRGlzcGxheS5hcHBlbmQoJzxwPkdhbWUgZW5kLjwvcD4nKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gRGlzYWJsZSBhbnkgbW9yZSB1c2VyIGlucHV0IGFmdGVyIHdpbm5pbmdcclxuICAgIHRoaXMuZGlzYWJsZUlucHV0KCk7XHJcbiAgfVxyXG5cclxuICAvLyBQbGF5ZXIgcmVzZXRzIGdhbWVcclxuICByZXNldEdhbWUoKSB7XHJcbiAgICAvLyBSZXNldHMgcGxheWVyIHdpdGggYmxhbmsgaW52ZW50b3J5IGFuZCBiYWNrIHRvIHN0YXJ0aW5nIHJvb21cclxuICAgIHRoaXMuUGxheWVyLmludmVudG9yeSA9IG5ldyBJbnZlbnRvcnkoKTtcclxuICAgIHRoaXMuUGxheWVyLmN1cnJlbnRSb29tID0gdGhpcy5zdGFydFJvb207XHJcbiAgICBjb25zdCByb29tID0gdGhpcy5nZXRSb29tKHRoaXMuc3RhcnRSb29tKTtcclxuXHJcbiAgICB0aGlzLkRpc3BsYXkuc2hvdyhyb29tLmdldFRleHQpO1xyXG4gICAgdGhpcy5JbnB1dC5lbmFibGUoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcclxuXHJcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2FtZTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcihkaXNhYmxlZCA9IGZhbHNlLCB2YWx1ZSA9ICcnLCBlbGVtZW50SWQgPSAnaW5wdXQnKSB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLmVsZW1lbnRJZCA9IGVsZW1lbnRJZDtcclxuICB9XHJcblxyXG4gIGVuYWJsZSgpIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dCcpLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBkaXNhYmxlKCkge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQnKS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBzZW5kKHZhbHVlKSB7XHJcbiAgICAvLyBOb3JtYWxpemUgaW5wdXQgdmFsdWVzIChpZiBkZXNpcmVkKVxyXG4gICAgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxufVxyXG5cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52ZW50b3J5IHtcclxuXHJcbiAgY29uc3RydWN0b3IoaXRlbXMgPSBbXSkge1xyXG4gICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xyXG4gIH1cclxuXHJcbiAgLy8gV2UgY2FuIHVzZSB0aGlzIHRvIGFkZCBzaW5nbGUgb3IgbXVsdGlwbGUgaXRlbXMsIGFzIGxvbmcgYXMgdGhlXHJcbiAgLy8gcGFzc2VkIHZhbHVlIGlzIGFuIGFycmF5XHJcbiAgYWRkSXRlbXMoaXRlbXMpIHtcclxuICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1zLmNvbmNhdChpdGVtcyk7XHJcbiAgICByZXR1cm4gdGhpcy5pdGVtcztcclxuICB9XHJcblxyXG4gIGRyb3BJdGVtKGl0ZW1OYW1lKSB7XHJcbiAgICBsZXQgbmV3SW52ZW50b3J5ID0gdGhpcy5pdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgcmV0dXJuIGl0ZW0ubmFtZSAhPT0gaXRlbU5hbWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLml0ZW1zID0gbmV3SW52ZW50b3J5O1xyXG4gICAgcmV0dXJuIHRoaXMuaXRlbXM7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBJbnZlbnRvcnkgZnJvbSAnLi9pbnZlbnRvcnknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZSA9ICcnLCBpbnZlbnRvcnkgPSBuZXcgSW52ZW50b3J5KCksIGN1cnJlbnRSb29tID0gJycsIHN0YXJ0Um9vbSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIGlmICh0aGlzLm5hbWUgPT09ICcnKSB7XHJcbiAgICAgIHRoaXMubmFtZSA9ICdwbGF5ZXInO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pbnZlbnRvcnkgPSBpbnZlbnRvcnk7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50Um9vbSA9PT0gJycpIHtcclxuICAgICAgdGhpcy5jdXJyZW50Um9vbSA9IHRoaXMuc3RhcnRSb29tO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdGFydFJvb20gPSBzdGFydFJvb207XHJcbiAgfVxyXG5cclxuICBlbnRlclJvb20ocm9vbSkge1xyXG4gICAgY29uc3Qgcm9vbVJlc3VsdCA9IHJvb20uZW50ZXIodGhpcy5pbnZlbnRvcnkuaXRlbXMpO1xyXG5cclxuICAgIGlmIChyb29tUmVzdWx0WzFdID09PSBmYWxzZSkge1xyXG4gICAgICAvLyBQbGF5ZXIgZGlkIG5vdCBoYXZlIHJlcXVpcmVkIGl0ZW1zIHRvIGVudGVyIHRoZSByb29tXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBFbnRlcmVkIHJvb20gc3VjY2Vzc2Z1bGx5XHJcbiAgICAgIHRoaXMuY3VycmVudFJvb20gPSByb29tLm5hbWU7XHJcbiAgICB9XHJcbiAgICAvLyBSZXR1cm4gcmVzdWx0cyB0ZXh0IGFuZCB3aGV0aGVyIG9yIG5vdCBwbGF5ZXIgc3VjY2Vzc2Z1bGx5IGVudGVyZWQgcm9vbVxyXG4gICAgcmV0dXJuIFtyb29tUmVzdWx0WzBdLCByb29tUmVzdWx0WzFdXTtcclxuICB9XHJcblxyXG4gIGdldEl0ZW0oaXRlbSkge1xyXG4gICAgdGhpcy5pbnZlbnRvcnkuYWRkSXRlbShpdGVtKTtcclxuICAgIHJldHVybiB0aGlzLmludmVudG9yeTtcclxuICB9XHJcblxyXG4gIGRyb3BJdGVtKGl0ZW0pIHtcclxuICAgIHRoaXMuaW52ZW50b3J5LmRyb3BJdGVtKGl0ZW0pO1xyXG4gICAgcmV0dXJuIHRoaXMuaW52ZW50b3J5O1xyXG4gIH1cclxufVxyXG4iLCIndXNlIHN0cmljdCc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb21wdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWUgPSAnJywga2V5d29yZHMgPSBbXSwgcmVzdWx0cyA9IHt9LCByZXF1aXJlbWVudHMgPSBbXSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIC8vIEtleXdvcmRzIHRoYXQgY2FuIHRyaWdnZXIgdGhlIHByb21wdCAobWFrZSBhbGwgbG93ZXItY2FzZSBieSBkZWZhdWx0KVxyXG4gICAgdGhpcy5rZXl3b3JkcyA9IGtleXdvcmRzLm1hcChmdW5jdGlvbiAodikgeyByZXR1cm4gdi50b0xvd2VyQ2FzZSgpO30pO1xyXG4gICAgLy8gUmVzdWx0cyB0aGF0IG9jY3VyIHdoZW4gdGhpcyBwcm9tcHQgaXMgc3VjY2Vzc2Z1bGx5IHRyaWdnZXJlZDtcclxuICAgIC8vIHRoZSByZXN1bHQga2V5cyBjb21wcmlzZSBvZiDigJxzdWNjZXNzVGV4dOKAnSAocmVxdWlyZWQpLCBcImZhaWxUZXh0XCIgKG9wdGlvbmFsKSxcclxuICAgIC8vIOKAnGl0ZW1zUmVxdWlyZWTigJ0gKG9wdGlvbmFsKSwgYW5kIOKAnHJvb21Ub0VudGVy4oCdIChvcHRpb25hbClcclxuICAgIHRoaXMucmVzdWx0cyA9IHJlc3VsdHM7XHJcbiAgICAvLyBBbnkgcHJlcmVxdWlzaXRlIGl0ZW1zIG5lZWRlZCB0byBkbyB0aGUgcHJvbXB0P1xyXG4gICAgdGhpcy5yZXF1aXJlbWVudHMgPSByZXF1aXJlbWVudHM7XHJcbiAgfVxyXG5cclxuICAvLyBDaGVjayBpZiBpbnB1dCBtZXNzYWdlIG1hdGNoZXMgYW55IHByb21wdCBrZXl3b3JkcyBhbmQgcmV0dXJuIHJlc3VsdHNcclxuICBtYXRjaEtleXdvcmRzKG1lc3NhZ2UsIGl0ZW1zID0gW10pIHtcclxuICAgIGxldCBmb3VuZEtleXdvcmQgPSBmYWxzZTtcclxuICAgIGxldCBtaXNzaW5nUmVxdWlyZW1lbnRzID0gW107XHJcblxyXG4gICAgLy8gSWYgd2UgaGF2ZSBhbnkgaXRlbSByZXF1aXJlbWVudHNcclxuICAgIGlmICh0aGlzLnJlcXVpcmVtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIC8vIENoZWNrIGFsbCB0aGUgcmVxdWlyZW1lbnRzIGFnYWluc3QgdGhlIGl0ZW1zIHBhc3NlZFxyXG4gICAgICB0aGlzLnJlcXVpcmVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXF1aXJlbWVudCkge1xyXG4gICAgICAgIGxldCBmb3VuZFJlcXVpcmVtZW50ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgIGlmIChpdGVtID09PSByZXF1aXJlbWVudCkge1xyXG4gICAgICAgICAgICBmb3VuZFJlcXVpcmVtZW50ID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBJZiBhIHJlcXVpcmVtZW50IGlzbid0IGZvdW5kIGFkZCB0aGF0IGEgbGlzdFxyXG4gICAgICAgIGlmICghZm91bmRSZXF1aXJlbWVudCkge1xyXG4gICAgICAgICAgbWlzc2luZ1JlcXVpcmVtZW50cy5wdXNoKHJlcXVpcmVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gT25jZSB3ZSBjaGVjayB0byBzZWUgaWYgdGhlIHBsYXllcidzIG1pc3NpbmcgYW55IGl0ZW1zLFxyXG4gICAgLy8gcGFyc2UgdGhlIGlucHV0IGZvciBtYXRjaGluZyBrZXl3b3JkcyB0byB0aGUgcHJvbXB0XHJcbiAgICB0aGlzLmtleXdvcmRzLmZvckVhY2goZnVuY3Rpb24gKGtleXdvcmQpIHtcclxuICAgICAgaWYgKG1lc3NhZ2UuaW5jbHVkZXMoa2V5d29yZC50b0xvd2VyQ2FzZSgpKSkge1xyXG4gICAgICAgIGZvdW5kS2V5d29yZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gSWYgYW55IGtleXdvcmRzIGhhdmUgYmVlbiBtYXRjaGVkIGZyb20gdGhlIHVzZXIgaW5wdXRcclxuICAgIGlmIChmb3VuZEtleXdvcmQpIHtcclxuICAgICAgLy8gSWYgdGhlcmUgYXJlIGFueSBtaXNzaW5nIGl0ZW0gcmVxdWlyZW1lbnRzXHJcbiAgICAgIGlmIChtaXNzaW5nUmVxdWlyZW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAvLyBQcm9tcHQgZmFpbHM7IHJldHVybiBtaXNzaW5nIGl0ZW1zIGFuZCBmYWlsVGV4dFxyXG4gICAgICAgIHJldHVybiB7J2ZhaWwnOiB7XHJcbiAgICAgICAgICAnbWlzc2luZyc6IG1pc3NpbmdSZXF1aXJlbWVudHMsXHJcbiAgICAgICAgICAnZmFpbFRleHQnOiB0aGlzLnJlc3VsdHMuZmFpbFRleHR9XHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICAvLyBQcm9tcHQgc3VjY2VlZHM7IHJldHVybiByZXN1bHRzIG9mIHRoZSBwcm9tcHRcclxuICAgICAgcmV0dXJuIHsnc3VjY2Vzcyc6IHRoaXMucmVzdWx0c307XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFByb21wdCBmcm9tICcuL3Byb21wdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb29tIHtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZSA9ICcnLCBnZXRUZXh0ID0gJycsIHByb21wdHMgPSBbXSwgcmVxdWlyZW1lbnRzID0gW10pIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmdldFRleHQgPSBnZXRUZXh0OyAvLyBUaGUgdGV4dCB0aGF0IGlzIGRpc3BsYXllZCB3aGVuIHRoZSByb29tIGlzIGVudGVyZWRcclxuICAgIHRoaXMucHJvbXB0cyA9IHByb21wdHM7IC8vIFdoYXQgYXJlIHRoZSBhY3Rpb25zIHRoYXQgd2UgY2FuIGRvIGluIHRoaXMgcm9vbT9cclxuICAgIHRoaXMucmVxdWlyZW1lbnRzID0gcmVxdWlyZW1lbnRzOyAvLyBBbnkgcmVxdWlyZW1lbnRzIChpdGVtcykgbmVlZGVkIHRvIGFjY2VzcyB0aGUgcm9vbVxyXG4gIH1cclxuXHJcbiAgLy8gQWRkIG5ldyBwcm9tcHQgLyBpbnRlcmFjdGlvbiB0byByb29tXHJcbiAgYWRkUHJvbXB0KG5hbWUsIGtleXdvcmRzLCByZXN1bHRzLCByZXF1aXJlbWVudHMpIHtcclxuICAgIGNvbnN0IHByb21wdCA9IG5ldyBQcm9tcHQobmFtZSwga2V5d29yZHMsIHJlc3VsdHMsIHJlcXVpcmVtZW50cyk7XHJcblxyXG4gICAgdGhpcy5wcm9tcHRzLnB1c2gocHJvbXB0KTtcclxuICAgIHJldHVybiB0aGlzLnByb21wdHM7XHJcbiAgfVxyXG5cclxuICAvLyBFbnRlciB0aGUgcm9vbVxyXG4gIGVudGVyKGl0ZW1zID0gW10pIHtcclxuICAgIGxldCByZXN1bHRUZXh0ID0gJyc7XHJcbiAgICBsZXQgbWV0QWxsUmVxdWlyZW1lbnRzID0gdHJ1ZTsgLy8gQ2FuIHdlIGVudGVyIHRoZSByb29tP1xyXG5cclxuICAgIC8vIFRoZSByb29tIGlzIG5vdCBhY2Nlc3NpYmxlIGJ5IGRlZmF1bHQgaWYgd2UgaGF2ZSBtb3JlIHRoYW4gb25lIHJlcXVpcmVtZW50IChpdGVtKVxyXG4gICAgaWYgKHRoaXMucmVxdWlyZW1lbnRzID4gMCkge1xyXG4gICAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgbWV0QWxsUmVxdWlyZW1lbnRzID0gZmFsc2U7XHJcbiAgICAgICAgLy8gQXBwZW5kIG1pc3NpbmcgcmVxdWlyZW1lbnQgbWVzc2FnZXNcclxuICAgICAgICB0aGlzLnJlcXVpcmVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXF1aXJlbWVudCkge1xyXG4gICAgICAgICAgcmVzdWx0VGV4dCArPSBgJHtyZXF1aXJlbWVudC5mYWlsVGV4dH0uIGA7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gQ2hlY2sgdGhlIHJvb20ncyByZXF1aXJlbWVudHMgYWdhaW5zdCBpdGVtcyB0byBzZWUgaWYgdGhleSdyZSBhbGwgZm91bmRcclxuICAgICAgICB0aGlzLnJlcXVpcmVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXF1aXJlbWVudCkge1xyXG4gICAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtID09PSByZXF1aXJlbWVudCkge1xyXG4gICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpZiAoZm91bmQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIG1ldEFsbFJlcXVpcmVtZW50cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyBSZXR1cm4gZmFpbCBtZXNzYWdlcyBmb3IgbWlzc2luZyByZXF1aXJlbWVudHNcclxuICAgICAgICAgICAgcmVzdWx0VGV4dCArPSByZXF1aXJlbWVudC5mYWlsVGV4dDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBJZiBhbGwgaXRlbSByZXF1aXJlbWVudHMgaGF2ZSBiZWVuIGZvdW5kLCByZXR1cm4gcm9vbSB0ZXh0XHJcbiAgICAgICAgaWYgKG1ldEFsbFJlcXVpcmVtZW50cyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgcmVzdWx0VGV4dCA9IHRoaXMuZ2V0VGV4dDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy8gTm8gaXRlbXMgcmVxdWlyZWQgdG8gZW50ZXIgdGhlIHJvb20sIHJldHVybiByb29tIHRleHRcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3VsdFRleHQgPSB0aGlzLmdldFRleHQ7XHJcbiAgICB9XHJcbiAgICAvLyBSZXR1cm4gcmVzdWx0aW5nIHRleHQgYW5kIHdoZXRoZXIgb3Igbm90IHJvb20gY291bGQgYmUgZW50ZXJlZFxyXG4gICAgcmV0dXJuIFtyZXN1bHRUZXh0LCBtZXRBbGxSZXF1aXJlbWVudHNdO1xyXG4gIH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==