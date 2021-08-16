class  BulletGroup extends Phaser.Physics.Arcade.Group
{
	constructor(scene, maxBullet)
  {
		super(scene.physics.world, scene);

		this.createMultiple({
			classType: Bullet,
			frameQuantity: maxBullet,
			active: false,
			visible: false,
			key: 'bullet'
		})
	}

	fireBullet(x,y,speed,direction,maxY,tag)
	{
		const bullet = this.getFirstDead(false);
		if(bullet)
		{
			this.b = bullet.fire(x,y,speed,direction, maxY, tag);
		}
		return this.b;
	}
}
