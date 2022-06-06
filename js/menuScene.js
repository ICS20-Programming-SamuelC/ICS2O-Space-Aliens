/* global Phaser */

// Copyright (c) 2022 Samuel Carlson All rights reserved
//
// Created by: Samuel Carlson
// Created on: June 2022
// This is the Menu Scene

class MenuScene extends Phaser.Scene {
  constructor () {
    super({ key: 'menuScene' })
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#D74731')
  }

  preload () {
    console.log('Menu Scene')
  }

  create (data) {
  }

  update (time, delta) {
  }
}

export default MenuScene
