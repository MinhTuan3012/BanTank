class tank1{
  constructor(x, y, group){
    this.sprite = group.create(x, y, 'tankDown1');
    //tuong tac vat ly
    TankOnline.game.physics.arcade.enable(this.sprite);
    this.sprite.anchor.set(0.5,0.5);
    this.direction = new Phaser.Point(0,1);
    this.lastShorTime = TankOnline.game.time.now;
    this.sprite.body.collideWorldBounds = true;
    this.sprite.health = 5;
  }

  update(direction1){
    if(direction1.x < 0){
      this.sprite.body.velocity.x = -250;
      this.sprite.loadTexture('tankLeft1');
      this.direction = new Phaser.Point(-1,0);
    }
    else if (direction1.x > 0){
      this.sprite.body.velocity.x = 250;
      this.sprite.loadTexture('tankRight1');
      this.direction = new Phaser.Point(1,0);
    }
    else{
      this.sprite.body.velocity.x = 0;
    }

    if(direction1.y < 0){
      this.sprite.body.velocity.y = -250;
      this.sprite.loadTexture('tankUp1');
      this.direction = new Phaser.Point(0,-1);
    }
    else if (direction1.y > 0){
      this.sprite.body.velocity.y = 250;
      this.sprite.loadTexture('tankDown1');
      this.direction = new Phaser.Point(0,1);
    }
    else{
      this.sprite.body.velocity.y = 0;
    }
  }

  fire(){
    if(TankOnline.game.time.now - this.lastShorTime > 200){
      this.lastShorTime = TankOnline.game.time.now;
      new Bullet(this);
    }
  }
}
