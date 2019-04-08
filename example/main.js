const game = require('./text-rpg-engine');

const newRoom = game.addRoom('Beginning', 'This is the beginning room');
const newRoom2 = game.addRoom('SecondRoom', 'You did it! You won!');

newRoom2.requirements = ['note'];

newRoom.addPrompt('look', ['look room', 'look at room', 'search room', 'examine room'],
  {
    'successText': 'You see a room with a door to the right and a statue in the middle.'
  }
);

newRoom.addPrompt('go right', ['go right', 'move right', 'open right'],
  {
    'successText': 'You enter in the access code "14052" and successfully open the door.',
    'failText': 'The door is locked with an access code!',
    'roomToEnter': 'SecondRoom'
  }, 
  ['accessKey']
);

newRoom.addPrompt('get statue', ['get statue', 'pick up statue', 'take statue', 'pick statue up'], 
  {
    'successText': `You pick up the statue. It feels heavy in your hands, and there's something hanging off
                    the bottom.`,
    'itemsGiven': ['statue']
  }
);

newRoom.addPrompt('look statue', ['rotate statue', 'examine statue', 'look statue', 'check statue', 'look at statue'], 
  {
    'successText': 'You take the note from the bottom of the statue.',
    'failText': 'You have no statue to look at!',
    'itemsGiven': ['note']
  },
  ['statue']
);

newRoom.addPrompt('look', ['look at note', 'examine note', 'take note'],
  {
    'successText': 'You look at the note and find an access code: "14052."',
    'failText': 'You have no note to look at!',
    'itemsGiven': ['accessKey']
  },
  ['statue', 'note']
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
