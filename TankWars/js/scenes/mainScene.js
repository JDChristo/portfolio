class MainScene extends Phaser.Scene {
    constructor() {
        super('MainScene');
        this.bulletGroup;
        this.Space_Key;
    }
    preload()
    {
        //this.load.image("face","images/face.png");
        this.load.image("road","images/assets/roadw.jpg");
        this.load.image("playerTank","images/assets/blue2.png");
        this.load.image("enTank","images/assets/tank1.png");
        this.load.image("enShip","images/assets/enemyship.png");
        this.load.image("enJeep","images/assets/jeep2l.png");
        this.load.image("enCar","images/assets/car2.png");
        this.load.image("bullet","images/assets/bulet.png");
        this.load.image("box","images/assets/crateObj.png");
        this.load.image("heart","images/assets/heart.png");
    }
    create(data)
    {
        this.emitterAndController();

        this.road = new Road({
          scene : this,
          enemyDetail : [{num : 4,key : 'enCar',health : 1, size : 0.05, offset: 4},{num : 5,key: 'enJeep', health : 2, size : 0.07, offset:4} ,{num :3, key : 'enTank', health : 3, size: 0.1, offset:4}],
          boxDetail : [{x : game.config.width/4, y : game.config.height * 0.85, numRow : 3},{x : game.config.width/2  , y : game.config.height * 0.85, numRow : 3},{x :  3* game.config.width/4, y : game.config.height * 0.85, numRow : 3}]
        });
        this.road.x = game.config.width/2;


        this.grid(false);
        this.addEvents();

        this.sb = new ScoreBox({scene : this});
        this.alignGrid.placeAtIndex(11 , this.sb);
        /*this.sb.x = game.config.width/2;
        this.sb.y = 50;*/

        //Temporary variables
        this.enemySpeed = 0.075;
        this.directShift = true;
        this.timeShift = 20;
        this.timeSub = 0;
    }

    update(time)
    {
      var currentime = Math.abs(Math.floor((time + this.road.startTime)/1000));
      if (this.cursors.left.isDown)
      {
        this.road.movePlayer(7, -1);
      }
      else if (this.cursors.right.isDown)
      {
        this.road.movePlayer(7, 1);
      }


      if(((currentime-this.timeSub) % this.timeShift == 0) && currentime != 0 && this.directShift)
      {
        this.enemySpeed *= -1;
        this.directShift = false;
        this.timeShift = 40;
        this.timeSub = 20;
      }
      else if((currentime-this.timeSub) % this.timeShift != 0) {
        this.directShift = true;
      }


      if(!this.directShift)
      {
        this.road.moveEnemyY(0.5);
      } else {
        this.road.moveEnemyX(this.enemySpeed, currentime);
      }
    }

    addEvents(){
      this.cursors = this.input.keyboard.createCursorKeys();
    }

    grid(val)
    {
      this.alignGrid = new AlignGrid({rows : 15, cols: 15, scene:this});
      if(val == true)
      {
        this.alignGrid.showIndex();
      }
    }

    emitterAndController()
    {
      emitter = new Phaser.Events.EventEmitter();
      controller = new Controller();
    }
}
