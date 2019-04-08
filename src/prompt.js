export default class Prompt {
   
  constructor(name = '', keywords = [], results = {}, requirements = []) {
    this.name = name;
    // Keywords that can trigger the prompt (make all lower-case by default)
    this.keywords = keywords.map(function(v) { return v.toLowerCase();}); 
    // Results that occur when this prompt is successfully triggered; 
    // the result keys comprise of “successText” (required), "failText" (optional),
    // “itemsRequired” (optional), // and “roomToEnter"” 
    this.results = results; 
    // Any pre-requistie items needed to do the prompt?
    this.requirements = requirements; 
  }

  // Check if input message matches any prompt keywords
  matchKeywords(message, items = []) {
    let foundKeyword = false;
    if (this.requirements.length > 0) {
      let missingRequirements = [];
      this.requirements.forEach(function(requirement) {
        let foundRequirement = false;
        items.forEach(function(item) {
          if (item === requirement) {
            foundRequirement = true;
          }
        });
        if (!foundRequirement) {
          missingRequirements.push(requirement);
        }
      });
      if (missingRequirements.length > 0) {
        return {'fail': missingRequirements};
      }
    }
    this.keywords.forEach(function(keyword) {
      if (message.includes(keyword.toLowerCase())) {
        foundKeyword = true;
      }
    });
    if (foundKeyword) {
      return {'success': this.results};
    }
    return null;
  }
}
