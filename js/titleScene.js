/* global Phaser */

// Copyright (c) 2022 Samuel Carlson All rights reserved
//
// Created by: Samuel Carlson
// Created on: June 2022
// This is the Title Scene

class TitleScene extends Phaser.Scene {
  constructor () {
    super({ key: 'titleScene' })
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Title Scene')
  }

  create (data) {
  }

  update (time, delta) {
  }
}

export default TitleScene
