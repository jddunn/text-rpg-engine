const game = require('./text-rpg-engine.min');

const path = require('path');
const fs = require('fs');

// Send user input to our game (on pressing 'Enter' in the form)
document.getElementById('input').addEventListener('keypress', function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    game.userSend(document.getElementById('input').value);
    document.getElementById('input').value = '';
  }
});

// Below code loads game data from static JSON file

let data = JSON.parse(fs.readFileSync(path.join(__dirname, './example.json')));

game.loadData(data);

game.init();

console.log(game);

// End

// Below code uses library API to programmatically build games
// // Add a room (by default will be beginning room since it was first added)
// const startRoom = game.addRoom('Beginning', 'This is the beginning room');
// // Add a second room (by default will be winning room since it was added last)
// const endRoom = game.addRoom('SecondRoom', 'You did it! You won!');
// // Or we could do this, to manually set which rooms to start / end
// // game.startRoom = 'Beginning'; // Set beginning room programatically
// // game.endRoom = 'SecondRoom'; // Set end room programatically

// // Add required item to room
// endRoom.requirements.push('accessKey');

// // Add room prompts
// startRoom.addPrompt(
//   // name of prompt (required)
//   'go right',
//   // keywords that will activate prompt (required)
//   ['go right', 'move right', 'open right', 'enter right', 'door right', 'right door'],
//   // results of prompt
//   {
//     // successful prompt result text (required)
//     'successText': 'You enter in the access code "14052" and successfully open the door.',
//     // failed prompt result text (optional; a default fail text is displayed when a prompt fails)
//     'failText': 'The door is locked with an access code!',
//     // room to enter as result of prompt (optional)
//     'roomToEnter': 'SecondRoom',
//     // items added to inventory after successful prompt result (optional)
//     'itemsGiven': 'trophy'
//   },
//   // required items to successfully do prompt (optional)
//   ['accessKey']
// );

// startRoom.addPrompt(
//   'look room',
//   ['look room', 'look at room', 'search room', 'examine room', 'look in'],
//   {
//     'successText': 'You see a room with a door to the right and a statue in the middle.'
//   }
// );

// startRoom.addPrompt(
//   'get statue',
//   ['get statue', 'pick up statue', 'take statue', 'pick statue'],
//   {
//     'successText': `You pick up the statue. It feels heavy in your hands, and there's something hanging off
//                     the bottom.`,
//     'itemsGiven': ['statue']
//   }
// );

// startRoom.addPrompt(
//   'rotate statue',
//   ['rotate statue', 'rotate the statue'],
//   {
//     'successText': 'You take the note from the bottom of the statue.',
//     'failText': 'You have no statue to look at!',
//     'itemsGiven': ['note']
//   },
//   ['statue']
// );

// startRoom.addPrompt(
//   'look note',
//   ['look at note', 'examine note', 'take note', 'get note', 'check note', 'read note', 'look note'],
//   {
//     'successText': 'You look at the note and find an access code: "14052."',
//     'failText': 'You have no note to look at!',
//     'itemsGiven': ['accessKey']
//   },
//   ['statue', 'note']
// );

// game.init();

// console.log(game);

// End
