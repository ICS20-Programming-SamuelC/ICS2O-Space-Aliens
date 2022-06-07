/* global Phaser */

// Copyright (c) 2022 Samuel Carlson All rights reserved
//
// Created by: Samuel Carlson
// Created on: June 2022
// This is the Menu Scene

class GameScene extends Phaser.Scene {
  constructor () {
    super({ key: 'gameScene' })
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#D74731')
  }

  preload () {
    console.log('Game Scene')
  }

  create (data) {
  }

  update (time, delta) {
  }
}

export default GameScene
