import Prompt from './prompt';

export default class Room {

  constructor(name = '', getText = '', prompts = [], requirements = []) {
    this.name = name;
    this.getText = getText; // The text that is displayed when the room is entered
    this.prompts = prompts; // What are the actions that we can do in this room?
    this.requirements = requirements; // Any requirements (items) needed to access the room
  }

  addPrompt(name, keywords, results) {
    const prompt = new Prompt(name, keywords, results);
    this.prompts.push(prompt);
    return this.prompts;
  }

  enter(items = []) {
    let result = '';
    let metAllRequirements = true; // Can we enter the room?
    // The room is not accessible by default
    if (this.requirements > 0) {
      if (items.length === 0) {
        metAllRequirements = false;
        // Return missing requirement messages
        this.requirements.forEach(function (requirement) {
          result += `${requirement.failText}. `;
        });
      } else {
        // Check the room's requirements for matching items
        this.requirements.forEach(function (requirement) {
          let found = false;
          this.items.forEach(function (item) {
            if (item === requirement) {
              found = true;
            }
          });
          if (found === false) {
            metAllRequirements = false;
            // Return fail messages for missing requirements
            result += requirement.failText;  
          }
        });
        if (metAllRequirements === true) {
          result = this.getText;
        }
      }
    } else {
      result = this.getText;
    }
    // Return text with results and whether or not room could be entered
    return [result, metAllRequirements];
  }

  doAction(value) {
    // For now let's only do one action at a time
    let result = {};
    if (this.prompts.length === 0) {
      result['text'] = "There doesn't seem to be any actions you can do in this room.";
    }
    Object.values(this.prompts).forEach(function(key, val) { 
      if (value === key) {
        result['text'] = val.resultText; // Successful action returning resulting text
        if (val.resultItems !== null) {
          result['items'] = val.resultItems; // Successful action resulting in new items
        }
        if (val.resultRoom !== null) {
          result['result'] = val.resultRoom; // Successful action resulting in a new room
        }
      }
    });
    return result;
  }
}
