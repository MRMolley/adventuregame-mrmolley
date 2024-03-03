
const { uuid } = require('uuid');
const { v1 } = require('selection-sort-mrmolley');
const { v2 } = require('ascending-order-mrmolley');

// adventureGame.js
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let player = {
    name: '',
    health: 100,
    inventory: []
};

function startGame() {
    rl.question('What is your name? ', answer => {
        player.name = answer;
        console.log(`Welcome, ${player.name}! Let's begin the adventure.`);
        // Start game logic here
    });
}

// Define game logic functions

startGame();


module.exports = { startGame };
