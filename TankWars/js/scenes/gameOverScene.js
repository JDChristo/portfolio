class GameOverScene extends Phaser.Scene {
    constructor() {
        super('GameOverScene');
    }
    preload()
    {
      this.load.image("title","images/title.png");
      this.load.image("button", "images/buttons/1/retry.png");
      this.load.image("road","images/assets/roadw.jpg");
    }
    create() {
        this.alignGMGrid = new AlignGrid({rows: 11, cols:11, scene:this});
        //this.alignGMGrid.showIndex();
        this.back = this.add.image(game.config.width/2,0,"road");
        Align.scaleToGameW(this.back, 0.9);

        var title = this.add.image(0,0,'title');
        this.alignGMGrid.placeAtIndex(38,title);
        Align.scaleToGameW(title, .4);

        var startButton = new UIButton({scene : this, key :'button',text:'Retry',event:'start_Game'});
        this.alignGMGrid.placeAtIndex(82,startButton);
        //Align.scaleToGameW(startButton, 1);

        emitter.on('start_Game', this.startGame, this);
    }

    startGame()
    {
      this.scene.start('MainScene');
    }

    update() {}
}
