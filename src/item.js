export default class Item {
   
  constructor(name = '', getText = '') {
    this.name = name;
    this.getText = getText; // Text displayed when item is gotten
  }

  get() {
    return this.getText;
  }
}
