export default class Prompt {

  constructor(name = '', keywords = [], results = {}, requirements = []) {
    this.name = name;
    // Keywords that can trigger the prompt (make all lower-case by default)
    this.keywords = keywords.map(function (v) { return v.toLowerCase();});
    // Results that occur when this prompt is successfully triggered;
    // the result keys comprise of “successText” (required), "failText" (optional),
    // “itemsRequired” (optional), and “roomToEnter” (optional)
    this.results = results;
    // Any prerequisite items needed to do the prompt?
    this.requirements = requirements;
  }

  // Check if input message matches any prompt keywords and return results
  matchKeywords(message, items = []) {
    let foundKeyword = false;
    let missingRequirements = [];

    // If we have any item requirements
    if (this.requirements.length > 0) {
      // Check all the requirements against the items passed
      this.requirements.forEach(function (requirement) {
        let foundRequirement = false;

        items.forEach(function (item) {
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
    // Once we check to see if the player's missing any items,
    // parse the input for matching keywords to the prompt
    this.keywords.forEach(function (keyword) {
      if (message.includes(keyword.toLowerCase())) {
        foundKeyword = true;
      }
    });
    // If any keywords have been matched from the user input
    if (foundKeyword) {
      // If there are any missing item requirements
      if (missingRequirements.length > 0) {
        // Prompt fails; return missing items and failText
        return {'fail': {
          'missing': missingRequirements,
          'failText': this.results.failText}
        };
      }
      // Prompt succeeds; return results of the prompt
      return {'success': this.results};
    }
    return null;
  }
}
