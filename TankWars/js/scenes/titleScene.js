class TitleScene extends Phaser.Scene {
    constructor() {
        super('TitleScene');
    }
    preload()
    {
      this.load.image("title","images/title2.png");
      this.load.image("button1", "images/buttons/1/start.png");
      this.load.image("road","images/assets/roadw.jpg");
      this.load.image("textImg","images/assets/text.png");

    }
    create() {
        this.alignTGrid = new AlignGrid({rows: 11, cols:11, scene:this});
        //this.alignTGrid.showIndex();

        this.back = this.add.image(game.config.width/2,0,"road");
        Align.scaleToGameW(this.back, 0.9);

        this.textImg = this.add.image(0,0,"textImg");
        this.alignTGrid.placeAtIndex(71,this.textImg);
        this.textImg.angle = -5;
        Align.scaleToGameW(this.textImg, 0.4);

        emitter = new Phaser.Events.EventEmitter();
        controller = new Controller();

        var title = this.add.image(0,0,'title');
        this.alignTGrid.placeAtIndex(27,title);
        Align.scaleToGameW(title, .4);

        var startButton = new UIButton({scene : this, key :'button1',event:'start_Game'});
        startButton.angle = 10;
        this.alignTGrid.placeAtIndex(93,startButton);

        emitter.on('start_Game', this.startGame, this);
        this.startTime = new Date();
        model.startTime = this.startTime.getTime();
    }

    startGame()
    {
      this.scene.start('MainScene');
    }

    update() {}
}
