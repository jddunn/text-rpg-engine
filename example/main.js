const game = require('./text-rpg-engine');

const newRoom = game.addRoom('Beginning', 'This is the beginning room');

newRoom.addPrompt('look', ['look', 'examine'],
  {
    'successText': 'You see a room with a door to the right and a statue in the middle.'
  }
);

newRoom.addPrompt('go right', ['go left', 'move right'],
  {
    'successText': 'You enter in the access code "14052" and successfully open the door..',
    'failText': 'The door is locked with an access code!',
    'roomToEnter': 'SecondRoom',
    'itemsRequired': 'note'
  }, 
  ['note']
);

newRoom.addPrompt('get statue', ['get statue', 'pick up statue', 'take statue', 'pick statue up'], 
  {
    'successText': 'You pick up the statue. It feels heavy in your hands.',
    'itemsGiven': 'statue'
  }
);

newRoom.addPrompt('look', ['look at note', 'examine note', 'take note'],
  {
    'successText': 'You look at the note and find an access code: "14052."',
    'failText': 'You have no note to look at!',
    'itemsGiven': 'note'
  },
  ['statue']
);

game.init();

console.log(game);

// Send user input to our game (on pressing 'Enter' in the form)
document.getElementById('input').addEventListener('keypress', function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    game.userSend(document.getElementById('input').value);
    document.getElementById('input').value = '';
  }
});
