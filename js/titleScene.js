/* global Phaser */

// Copyright (c) 2022 Samuel Carlson All rights reserved
//
// Created by: Samuel Carlson
// Created on: June 2022
// This is the Title Scene

//adding the title scene image and adding taxt so that people can see the title of the game
class TitleScene extends Phaser.Scene {
  constructor () {
    super({ key: 'titleScene' })

    //setting variables for the title scene background, title scene text and the text size
    this.titleSceneBackgroundImage = null
    this.titleSceneText = null
    this.titleSceneTextStyle = { font: '200px Times', fill: '#fde4b9', align: 'center' }
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#D74731')
  }

  //getting the title scene image from the assets folder
  preload () {
    console.log('Title Scene')
    this.load.image('titleSceneBackground', 'assets/aliens_screen_image.jpg')
  }

  //setting the size of the title scene image and centering the text and setting the size of the text and writing the text
  create (data) {
    this.titleSceneBackgroundImage = this.add.sprite(0, 0, 'titleSceneBackground').setScale(2.75)
    this.titleSceneBackgroundImage.x = 1920 / 2
    this.titleSceneBackgroundImage.y = 1080 / 2

    this.titleSceneText = this.add.text(1920 / 2, (1080 / 2) + 350, 'Space Aliens', this.titleSceneTextStyle).setOrigin(0.5)
  }

  update (time, delta) {
  }
}

export default TitleScene
