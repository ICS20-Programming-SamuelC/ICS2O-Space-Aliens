/* global Phaser */

//Copyright (c) 2022 Samuel carlson All rights reserved
//
//Created by: Samuel Carlson
//Created on: June 2022
//This is thePhaser3 configuration file

import SplashScene from './splashScene.js'
import TitleScene from './titleScene.js'
import MenuScene from './menuScene.js'
import GameScene from './gameScene.js'

// Our game scenes
const splashScene = new SplashScene()
const titleScene = new TitleScene()
const menuScene = new MenuScene()
const gameScene = new GameScene()

//* Configuration settings for game scene */
const config = {
  type: Phaser.AUTO,
  // The width and the height of the screen in pixels
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade',
    arcade: {
      // set to false
      debug: false
    }
  },
  // set background color to pink
  backgroundColor: 0xD73178,
  scale: {
    mode: Phaser.Scale.FIT,
    // we place it in the middle of the page.
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}
 
const game = new Phaser.Game(config)
//console.log(game)

// load scenes
// NOTE: remember any "key" is global and CAN NOT be reused!
game.scene.add('splashScene', splashScene)
game.scene.add('titleScene', titleScene)
game.scene.add('menuScene', menuScene)
game.scene.add('gameScene', gameScene)

// start title
game.scene.start('splashScene')