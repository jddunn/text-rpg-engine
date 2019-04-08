const game = require('./text-rpg-engine');

const newRoom = game.addRoom('Beginning', 'This is the beginning room');

newRoom.addPrompt('look', ['look', 'examine'],
  {
    'text': 'You see a room with a door to the left and a statue in the middle.'
  }
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
