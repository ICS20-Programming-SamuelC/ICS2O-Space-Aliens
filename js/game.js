/* global Phaser */

//The size of the screen and the background color
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  backgroundColor: 0x5f6e7a
}

//Showing that my game is using the phaser library
const game = new Phaser.Game(config)
console.log(game)