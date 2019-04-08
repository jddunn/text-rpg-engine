export default class Prompt {
   
  constructor(name = '', keywords = [], results = {}) {
    this.name = name;
    // Keywords that can trigger the prompt (make all lower-case by default)
    this.keywords = keywords.map(function(v) { return v.toLowerCase();}); 
    // Results that occur when this prompt is successfully triggered; 
    // the result keys comprise of “text” (required), “items” (optional),
    // and “room (optional)” 
    this.results = results; 
  }

  // Check if input message matches any prompt keywords
  matchKeywords(message) {
    let found = false;
    this.keywords.forEach(function(keyword) {
      if (message.includes(keyword.toLowerCase())) {
        found = true;
      }
    });
    if (found) {
      return this.results;
    }
    return null;
  }
}
