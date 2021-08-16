class Collision
{
	//detect Collision


	static checkCollide(obj1, obj2)
	{
		var distX = Math.abs(obj1.x - obj2.x);
		var distY = Math.abs(obj1.y - obj2.y);

		if(distX < obj1.width/2)
		{
			if(distY<obj1.height/2)
			{
				return true;
			}
		}
		return false;
	}

	static checkCustomPosCollide(obj1, obj2 ,obj2X, obj2Y, offset)
	{
		var distX = Math.abs(obj1.x - obj2X);
		var distY = Math.abs(obj1.y - obj2Y);

		if(distX < (obj2.width/offset + 2))
		{
			if(distY<obj2.height/2)
			{
				return true;
			}
		}
		return false;
	}

	static checkCollideTag(mainObj, obj2, tag)
	{
		if(checkCollide(mainObj, obj2) && obj2.tag == tag)
		{
			return true;
		}
		return false;
	}

	static checkCollideTagLayer(mainObj, obj2, tag, layer)
	{
		if(checkCollide(mainObj, obj2, tag) && obj2.layer == layer)
		{
			return true;
		}
		return false;
	}

	static checkCollideLayer(mainObj, obj2, layer)
	{
		if(checkCollide(mainObj, obj2) && obj2.layer == layer)
		{
			return true;
		}
		return false;
	}

}
