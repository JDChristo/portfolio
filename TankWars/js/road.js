class Road extends Phaser.GameObjects.Container
{
  constructor(config)
	{
		super(config.scene);
		this.scene = config.scene;

    if(config.enemyDetail)
    {
      this.enemyDetail = config.enemyDetail;
    }


    if(config.boxDetail)
    {
      this.boxDetail = config.boxDetail;
    }
    else {
      this.boxDetail = [{x : game.config.width / 2, y : game.config.height * 0.85, numRow : 3}];
    }

    this.back = this.scene.add.image(0,0,"road");
		this.add(this.back);
		this.scene.add.existing(this);

    Align.scaleToGameW(this.back, 0.9);
	  this.setSize(this.back.displayWidth, game.config.height);

    this.player = this.scene.add.sprite(game.config.width/2,game.config.height * 0.95, "playerTank");
    Align.scaleToGameW(this.player, 0.1);

    if(config.playerHealth)
    {
      this.player.health = config.playerHealth;
    }
    else {
      this.player.health = 3;
    }

    this.heartArray = [];
    for(var i = 1 ; i <= this.player.health; i++)
    {
      var heart = this.scene.add.sprite( 0, 30 ,"heart");
      Align.scaleToGameW(heart, 0.07);
      heart.x += heart.displayWidth * i;
      this.heartArray.push(heart);
    }

    this.back.setInteractive();
		this.back.on('pointerdown',this.shootBullet, this);

    this.addEnemy(this.enemyDetail);
    this.addObjects(this.boxDetail);

    this.plBulletGroup = new BulletGroup(this.scene, 1);
    this.emBulletGroup = new BulletGroup(this.scene, 2);

    this.enemyCount = 0;
  }

  addEnemy(nCol)
  {
    this.enemyArray = [];
    this.hSpace = this.displayWidth / 8; //horizontal Space
    this.vSpcae = this.displayHeight / 10;// Verticaal Space

    for(var row = nCol.length- 1; row >=0 ; row--)
    {
      if(!nCol[row].size)
      {
        nCol[row].size = 0.1;
      }
      if(!nCol[row].offset)
      {
        nCol[row].offset = 4;
      }
      var y = 0 + (this.vSpcae * (nCol.length - row));
      var x = 0 + game.config.width/2;
      var count = Math.floor(nCol[row].num/2);
      //placing enemy in position
     if(nCol[row].num % 2 == 0)
      {
        for(var i = -count ; i < count; i++)
        {
          var enemy = this.scene.add.sprite( x - (this.hSpace * ( i + 0.5)), y ,nCol[row].key);
          Align.scaleToGameW(enemy, nCol[row].size);
          enemy.angle = 180;
          enemy.offset = nCol[row].offset;
          enemy.name = nCol[row].key;
          enemy.health = enemy.totalHealth = nCol[row].health;
          this.enemyArray.push(enemy);
        }
      }
      else
      {
        for(var i = - count -1; i < count ; i++)
        {
          var enemy = this.scene.add.sprite( x - (this.hSpace * (i + 1)), y ,nCol[row].key);
          Align.scaleToGameW(enemy, nCol[row].size);
          enemy.angle = 180;
          enemy.offset = nCol[row].offset;
          enemy.name = nCol[row].key;
          enemy.health = enemy.totalHealth = nCol[row].health;
          this.enemyArray.push(enemy);
        }
      }
    }
    this.sTime = new Date();
    this.startTime = (model.startTime - this.sTime.getTime());
  }

  addObjects(nCol)
  {
    this.boxGroup = [];
    var count = 0;
    //this.boxDetail = [{x : 230, y : 420 ,num : 2}];
    while(count < nCol.length)
    {
      var y = nCol[count].y;
      for (var i = nCol[count].numRow; i > 0; i--)
        {
          var k = Math.floor(i/2);
          var y = nCol[count].y + (this.vSpcae/2.5 * (i - nCol[count].numRow));
          if(i % 2 == 0)
          {
            for (var j = -k; j < k; j++)
            {
              var box = this.scene.add.sprite(nCol[count].x + (this.hSpace/2 * j), y ,"box");
              box.x += box.width/2;
              this.boxGroup.push(box);
            }
          }
          else {
            for (var j = -k ; j <= k; j++)
            {
              var box = this.scene.add.sprite(nCol[count].x  + (this.hSpace/2 * j), y ,"box");
              this.boxGroup.push(box);
            }
          }

        }
      count++;
    }
  }

    checkBorderContainer(obj, direction)
    {
      if((obj.x >= game.config.width - obj.width/2) && direction == 1)
      {
        return false;
      }
      else if((obj.x <=0 + obj.width/2) && direction == -1)
      {
        return false;
      }
      return true

    }

    movePlayer(speed, direction)
    {
      if(this.checkBorderContainer(this.player, direction) == true)
      {
        this.player.x += (speed * direction);
      }

    }

    moveEnemyX(speed, time)
    {
        this.enemyArray.forEach((enemy, index) => {
            enemy.x+= (speed);
            if(enemy.y == this.player.y)
            {
              this.scene.scene.start('GameOverScene');
            }
        });
        if(time % 3 == 0)
        {
          var enemyAt = Math.floor(Math.random() * this.enemyArray.length);
          if(this.enemyArray[enemyAt].visible)
          {
            this.emBulletGroup.fireBullet(this.enemyArray[enemyAt].x, this.enemyArray[enemyAt].y, 300, 1, this.player.y+10, "enemyBullet");
          }
        }
        this.checkCollision();
    }

    moveEnemyY(speed)
    {
        this.enemyArray.forEach((enemy, index) => {
            enemy.y+= speed;
            if(enemy.y == this.player.y)
            {
              this.scene.scene.start('GameOverScene');
            }
        });
        this.checkCollision();
    }

    checkCollision()
    {
      this.emBulletGroup.getChildren().forEach((bullet) => {
        if(bullet.visible)
        {
          if(Collision.checkCustomPosCollide(bullet, this.player ,this.player.x , this.player.y+20,4))
          {
            bullet.setActive(false);
        		bullet.setVisible(false);
            this.player.health -= 1;
            this.heartArray.pop().destroy();
            if(this.player.health <= 0)
            {
              this.scene.scene.start('GameOverScene');
            }
          }
        }
      });

      this.plBulletGroup.getChildren().forEach((bullet) => {
        if(bullet.visible)
        {
          this.enemyArray.forEach((enemy) => {
            if(enemy.visible)
            {
              if(Collision.checkCustomPosCollide(bullet, enemy ,enemy.x, enemy.y-20,enemy.offset))
              {
                bullet.setActive(false);
          		  bullet.setVisible(false);
                if(enemy.health == 1)
                {
                  emitter.emit(G.UP_POINTS,enemy.totalHealth);
                  enemy.setActive(false);
          		    enemy.setVisible(false);
                  this.enemyCount++;
                }
                else {
                  enemy.health -= 1;
                }
              }
            }
          });
          this.boxGroup.forEach((box) => {
            if(box.visible)
            {
                if(Collision.checkCustomPosCollide(bullet, box ,box.x , box.y,2))
                {
                    bullet.setActive(false);
              		  bullet.setVisible(false);
                    box.setActive(false);
              		  box.setVisible(false);
                }
              }
            });
        }

      });
      this.boxGroup.forEach((box) => {
        if(box.visible)
        {
        this.emBulletGroup.getChildren().forEach((bullet) => {
          if(bullet.visible)
          {
            if(Collision.checkCustomPosCollide(bullet, box ,box.x , box.y,2))
            {
                bullet.setActive(false);
          		  bullet.setVisible(false);
                box.setActive(false);
          		  box.setVisible(false);
            }
          }
        });
        }
      });
      if(this.enemyCount == this.enemyArray.length)
      {
        this.checkActiveEnemy()
      }
    }

    checkActiveEnemy()
    {
      if(this.enemyCount == this.enemyArray.length)
      {
        /*this.addEnemy([{num : 4,key : 'enCar',health : 1, size : 0.05, offset: 4},{num : 5,key: 'enJeep', health : 1, size : 0.07, offset:4} ,{num :3, key : 'enTank', health : 2, size: 0.1, offset:4}]);
        this.addObjects([{x : game.config.width/4, y : game.config.height * 0.85, numRow : 3},{x : game.config.width/2  , y : game.config.height * 0.85, numRow : 3},{x :  3* game.config.width/4, y : game.config.height * 0.85, numRow : 3}]);
        this.enemyCount = 0;*/
        this.boxGroup.forEach((box) => {
          box.destroy();
          });
        this.enemyArray.forEach((enemy) => {
          enemy.destroy();
          });
          this.emBulletGroup.getChildren().forEach((bullet) => {
            bullet.setActive(false);
            bullet.setVisible(false);
          });
          this.plBulletGroup.getChildren().forEach((bullet) => {
            bullet.setActive(false);
            bullet.setVisible(false);
          });
        this.addEnemy([{num : 4,key : 'enCar',health : 1, size : 0.05, offset: 4},{num : 5,key: 'enJeep', health : 2, size : 0.07, offset:4} ,{num :3, key : 'enTank', health : 3, size: 0.1, offset:4}]);
        this.addObjects([{x : game.config.width/4, y : game.config.height * 0.85, numRow : 3},{x : game.config.width/2  , y : game.config.height * 0.85, numRow : 3},{x :  3* game.config.width/4, y : game.config.height * 0.85, numRow : 3}]);
        this.enemyCount = 0;
      }
    }


    shootBullet()
    {
      this.plBulletGroup.fireBullet(this.player.x, this.player.y, 800 ,-1, this.back.height, "playerBullet");
    }

}
