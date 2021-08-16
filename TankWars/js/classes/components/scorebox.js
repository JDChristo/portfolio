class ScoreBox extends Phaser.GameObjects.Container
{
	constructor(config)
	{
		//set scene
		super(config.scene);
		this.scene = config.scene;

		//set text
		this.text1 = this.scene.add.text(0,0,"SCORE : 0", {fontFamily: 'Fredoka One' ,fill : "#141518"});
		this.text1.setOrigin(0.5,0.5);
		this.add(this.text1);

		//adding this to container
		this.scene.add.existing(this);

		//trigger change
		emitter.on(G.SCORE_UPDATED, this.scoreUpdated,this);

	}

	//Update Score
	scoreUpdated()
	{
		this.text1.setText(" SCORE : " + model.score);
	}
}
