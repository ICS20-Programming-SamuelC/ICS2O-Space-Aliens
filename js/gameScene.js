/* global Phaser */

// Copyright (c) 2022 Samuel Carlson All rights reserved
//
// Created by: Samuel Carlson
// Created on: June 2022
// This is the Menu Scene

//assigning the game scene background variable to null and assigning the ship image variable to null
class GameScene extends Phaser.Scene {

  //creating aliens and making them apaer randomly
  createAlien () {
    const alienXLocation = Math.floor(Math.random() * 1920) + 1
    let alienXVelocity = Math.floor(Math.random() * 50) + 1
    alienXVelocity *= Math.round(Math.random()) ? 1 : -1
    const anAlien = this.physics.add.sprite(alienXLocation, -100, 'alien')
    anAlien.body.velocity.y = 200
    anAlien.body.velocity.x = alienXVelocity
    this.alienGroup.add(anAlien)
  }
  
  constructor () {
    super({ key: 'gameScene' })

    this.background = null
    this.ship = null
    this.fireMissile = false
    this.score = 0
    this.scoreText = null
    this.scoreTextStyle = { font: '65px Arial', fill: '#ffffff', align: 'center'}

    this.gameOverText = null
    this.gameOverTextStyle = { font: '65px Arial', fill: '#ff0000', align: 'center'}
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#D74731')
  }

  //loading the artwork for the game scene
  preload () {
    console.log('Game Scene')

    //images
    this.load.image('starBackground', 'assets/starBackground.png')
    this.load.image('ship', 'assets/spaceShip.png')
    this.load.image('missile', 'assets/missile.png')
    this.load.image('alien', 'assets/alien.png')
    //setting the sound for the missiles and explosion
    this.load.audio('laser', 'assets/laser1.wav')
    this.load.audio('explosion', 'assets/barrelExploding.wav')
    this.load.audio('bomb', 'assets/bomb.wav')
  }

  //show the game scene images to the user and setting where the images should be on the screen
  create (data) {
    this.background = this.add.image(0, 0, 'starBackground').setScale(2.0)
    this.background.setOrigin(0, 0)

    this.scoreText = this.add.text(10, 10, 'Score: ' + this.score.toString(), this.scoreTextStyle)

    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, 'ship')

    //creating a group for the missile image
    this.missileGroup = this.physics.add.group()

    //creating a group for the alien image
    this.alienGroup = this.add.group()
    this.createAlien()

    //collisions between missiles and aliens so that aliens die when they are hit by missiles
    this.physics.add.collider(this.missileGroup, this.alienGroup, function (missileCollide, alienCollide) {
      alienCollide.destroy()
      missileCollide.destroy()
      this.sound.play('explosion')
      this.score = this.score + 1
      this.scoreText.setText('Score: ' + this.score.toString())
      this.createAlien()
      this.createAlien()
    }.bind(this))

      //code to lose the game when an alien collides with the ship
      this.physics.add.collider(this.ship, this.alienGroup, function (shipCollide, alienCollide) {
      this.sound.play('bomb')
      this.physics.pause()
      alienCollide.destroy()
      shipCollide.destroy()
      this.gameOverText = this.add.text(1920 / 2, 1080 / 2, 'Game Over!\nClick to play again.', this.gameOverTextStyle).setOrigin(0.5)
      this.gameOverText.setInteractive({ useHandCursor: true})
      this.gameOverText.on('pointerdown', () => this.scene.start('gameScene'))
    }.bind(this))
      this.alienGroup.children.each(function (item) {
      if ((item.x < 0) || (item.y < 0) || (item.y > 1080)) {
        item.x = 2000
        const alienYCoordinate = Math.floor(Math.random() * 1080) + 1
        item.y = alienYCoordinate
      }
    })
  }

  //checking user input 60 times per second and exacuting what they have clicked. If they have moved left or right are shot a missile
  update (time, delta) {

  this.alienGroup.children.each(function (item) {
    if (item.y > 1080) {
      item.y = -100
      const alienXCoordinate = Math.floor(Math.random() * 1080) + 1
      item.x = alienXCoordinate
    }
  })

    const keyLeftObj = this.input.keyboard.addKey('LEFT')
    const keyRightObj = this.input.keyboard.addKey('RIGHT')
    const keySpaceObj = this.input.keyboard.addKey('SPACE')

    if (keyLeftObj.isDown === true) {
      this.ship.x -= 15
      if (this.ship.x < 0) {
        this.ship.x = 0
      }
    }

    if (keyRightObj.isDown === true) {
      this.ship.x += 15
      if (this.ship.x > 1920) {
        this.ship.x = 1920
      }
    }

    if (keySpaceObj.isDown === true) {
      if (this.fireMissile === false) {
        //firing the missiles fro the space ship
        this.fireMissile = true
        const aNewMissile = this.physics.add.sprite(this.ship.x, this.ship.y, 'missile')
        this.missileGroup.add(aNewMissile)
        this.sound.play('laser')
      }
    }

    //code to reset bolean when the space bar is up
    if (keySpaceObj.isUp === true) {
      this.fireMissile = false
    }

    this.missileGroup.children.each(function (item) {
      item.y = item.y - 15
      if (item.y < 0) {
        item.destroy()
      }
    })
  }
}


export default GameScene
