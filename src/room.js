import Prompt from './prompt';

export default class Room {

  constructor(name = '', getText = '', prompts = [], requirements = []) {
    this.name = name;
    this.getText = getText; // The text that is displayed when the room is entered
    this.prompts = prompts; // What are the actions that we can do in this room?
    this.requirements = requirements; // Any requirements (items) needed to access the room
  }

  addPrompt(name, keywords, resultTexts) {
    const prompt = new Prompt(name, keywords, resultTexts);
    this.prompts.push(prompt);
    return this.prompts;
  }

  enter(items = []) {
    let resultText = '';
    let metAllRequirements = true; // Can we enter the room?
    // The room is not accessible by default
    if (this.requirements > 0) {
      if (items.length === 0) {
        metAllRequirements = false;
        // Return missing requirement messages
        this.requirements.forEach(function (requirement) {
          resultText += `${requirement.failText}. `;
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
            resultText += requirement.failText;  
          }
        });
        if (metAllRequirements === true) {
          resultText = this.getText;
        }
      }
    } else {
      resultText = this.getText;
    }
    // Return text with resultTexts and whether or not room could be entered
    return [resultText, metAllRequirements];
  }

  doAction(value) {
    // For now let's only do one action at a time
    let resultText = {};
    if (this.prompts.length === 0) {
      resultText['text'] = "There doesn't seem to be any actions you can do in this room.";
    }
    Object.values(this.prompts).forEach(function(key, val) { 
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
}
