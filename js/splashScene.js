/* global Phaser */

// Copyright (c) 2022 Samuel Carlson All rights reserved
//
// Created by: Samuel Carlson
// Created on: June 2022
// This is the Splash Scene

class SplashScene extends Phaser.Scene {
  constructor () {
    super({ key: 'splashScene' })
  }

  init (data) {
    // set background to green
    this.cameras.main.setBackgroundColor('#31D751')
  }

  // adding the image for the splash scene
  preload () {
    console.log('Splash Scene')
    this.load.image('splashSceneBackground', './assets/splashSceneImage.png')
  }
  
  // asigning the splash scene image to a variable
  create (data) {
    this.splashSceneBackgroundImage = this.add.sprite(0, 0, 'splashSceneBackground')
    this.splashSceneBackgroundImage.x = 1920 / 2
    this.splashSceneBackgroundImage.y = 1080 / 2
  }

  // making the splash scene image stay on the screen for 6 seconds
  update (time, delta) {
    if (time > 6000) {
    this.scene.switch('titleScene')
    }
  }    
}

export default SplashScene
