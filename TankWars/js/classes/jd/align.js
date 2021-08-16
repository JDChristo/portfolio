class Align
{
	//scale to percent
	static scaleToGameW(obj,per)
	{
		obj.displayWidth = game.config.width * per;
		obj.scaleY=obj.scaleX;
	}

	//align to center
	static center(obj)
	{
		obj.x = game.config.width / 2;
		obj.y = game.config.height / 2;
	}

	//align to horizpntal center only
	static centerH(obj)
	{
		obj.x = game.config.width / 2;
	}

	//align to vertical center only
	static centerV(obj)
	{
		obj.y = game.config.height / 2;
	}
}
