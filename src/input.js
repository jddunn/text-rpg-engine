export default class Input {

  constructor(disabled = false, value = '', elementId = 'input') {
    this.disabled = disabled;
    this.value = value;
    this.elementId = elementId;
  }

  enable() {
    this.disabled = false;
    document.getElementById('input').disabled = false;
  }

  disable() {
    this.disabled = true;
    document.getElementById('input').disabled = true;
  }

  send(value) {
    // Normalize input values (if desired)
    value = value.toLowerCase();
    this.value = value;
  }
}

