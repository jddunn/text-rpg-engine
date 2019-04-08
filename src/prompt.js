export default class Prompt {
   
  constructor(name = '', keywords = [], results = {}, requirements = []) {
    this.name = name;
    // Keywords that can trigger the prompt (make all lower-case by default)
    this.keywords = keywords.map(function(v) { return v.toLowerCase();}); 
    // Results that occur when this prompt is successfully triggered; 
    // the result keys comprise of “successText” (required), "failText" (optional),
    // “itemsRequired” (optional), // and “roomToEnter"” 
    this.results = results; 
    // Any prerequisite items needed to do the prompt?
    this.requirements = requirements; 
  }

  // Check if input message matches any prompt keywords
  matchKeywords(message, items = []) {
    let foundKeyword = false;
    let missingRequirements = [];
    // If we have any item requirements
    if (this.requirements.length > 0) {
      // Check all the requirements against the items passed
      this.requirements.forEach(function(requirement) {
        let foundRequirement = false;
        items.forEach(function(item) {
          if (item === requirement) {
            foundRequirement = true;
          }
        });
        // If a requirement isn't found add that a list
        if (!foundRequirement) {
          missingRequirements.push(requirement);
        }
      });
    }
    // Return fail message with missing item requirements
    // If we have all our item requirements, check the user's message
    // to see if we find any matching keywords
    this.keywords.forEach(function(keyword) {
      if (message.includes(keyword.toLowerCase())) {
        foundKeyword = true;
      }
    });
    // Keywords have been matched from the user input, so return results of prompt
    if (foundKeyword) {
      if (missingRequirements.length > 0) {
        return {'fail': {
          'missing': missingRequirements,
          'failText': this.results.failText}
        };
      }
      return {'success': this.results};
    }
    return null;
  }
}
