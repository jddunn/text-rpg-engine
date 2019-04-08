export default class Display {

  constructor(html = '', elementId = 'display') {
    this.html = html;
    this.elementId = elementId;
  }

  show(html = null) {
    if (html === null) {
      document.getElementById(this.elementId).innerHTML = this.html;
    } else {
      document.getElementById(this.elementId).innerHTML = html;
      this.html = html;
    }
  }

  append(html) {
    document.getElementById(this.elementId).innerHTML += html;
  }
}
