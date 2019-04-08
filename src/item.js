export default class Item {
   
  constructor(name = '', getText = '', prompts = []) {
    this.name = name;
    this.getText = getText; // Text displayed when item is gotten
    this.prompts = prompts; // Item interactions
  }

  get() {
    return this.getText;
  }

  doAction(value) {
    // For now let's only do one action at a time
    let result = {};
    if (this.prompts.length === 0) {
      result['text'] = "There doesn't seem to be any actions at all you can do with this item.";
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
