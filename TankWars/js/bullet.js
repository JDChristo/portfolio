class Bullet extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y) {
		super(scene, x, y, 'bullet');
	}

	fire(x,y,speed,direction,maxY, tag){
		this.body.reset(x,y);
		this.setActive(true);
		this.setVisible(true);
		this.maxY = maxY;
		this.setVelocityY(speed * direction);
		this.tag = tag;

		return this;
	}

	preUpdate(time, delta)
	{
		super.preUpdate(time,delta);

		if(this.y <= 0 || this.y >= this.maxY)
		{
			this.setActive(false);
			this.setVisible(false);
		}
	}
}
