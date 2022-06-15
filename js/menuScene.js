/* global Phaser */

// Copyright (c) 2022 Samuel Carlson All rights reserved
//
// Created by: Samuel Carlson
// Created on: June 2022
// This is the Menu Scene

//creating variable that can hold the image for the background of the menu scene and the variable for the button
class MenuScene extends Phaser.Scene {
  constructor () {
    super({ key: 'menuScene' })

    this.menuSceneBackgroundImage = null
    this.startButton = null
    this.gameOverTextStyle = { font: '35px Arial', fill: '#ff0000', align: 'center'}
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#D74731')
  }

  //loading the image for the menu scene and the button
  preload () {
    console.log('Menu Scene')
    this.load.image('menuSceneBackground', 'assets/aliens_screen_image2.jpg')
    this.load.image('startButton', 'assets/start.png')
  }

  //getting the image and the start button and centering them on the screen
  create (data) {
    this.menuSceneBackgroundImage = this.add.sprite(0, 0, 'menuSceneBackground')
    this.menuSceneBackgroundImage.x = 1920 / 2
    this.menuSceneBackgroundImage.y = 1080 / 2

    this.startButton = this.add.sprite(1920 / 2, (1080 / 2) + 100, 'startButton')
    //making the button interactive so that when you press on it it start the game
    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on('pointerdown', () => this.clickButton())

    this.add.text(1920 / 2, 1080 / 12, 'Shoot the aliens. Use the arrows to move right and left. Use the space bar to shoot. You die when you get hit by the aliens.', this.gameOverTextStyle).setOrigin(0.5)
  }

  //code for the clickButton function
  update (time, delta) {
  }

  clickButton () {
    this.scene.start('gameScene')
  }
}

export default MenuScene
