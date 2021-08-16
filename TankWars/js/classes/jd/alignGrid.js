class AlignGrid
 {
   constructor(config)
   {
      this.config = config;
      if(!config.scene)
      {
        console.log("scene is missing");
        return;
      }
      if(!config.rows)
      {
        config.rows = 5;
      }
      if(!config.cols)
      {
        config.cols = 5;
      }
      if(!config.height)
      {
        config.height = game.config.height;
      }
      if(!config.width)
      {
        config.width = game.config.width;
      }

      this.scene = config.scene;


      this.cellWidth = config.width/config.cols;
      this.cellHeight = config.height/config.rows;

  }


  //show grid in the scene
  show()
  {
    this.graphics = this.scene.add.graphics();
    this.graphics.lineStyle(2, 0xff0000);

    for(var i = 0; i < this.config.width;i+=this.cellWidth)
    {
        this.graphics.moveTo(i,0);
        this.graphics.lineTo(i,this.config.height);
    }
    for(var i = 0; i < this.config.height;i+=this.cellHeight)
    {
        this.graphics.moveTo(0,i);
        this.graphics.lineTo(this.config.width,i);
    }

    this.graphics.strokePath();
  }

  //place the object
  placeAt(pX,pY,obj)
  {
    var posX = this.cellWidth*pX + this.cellWidth/2;
    var posY = this.cellHeight*pY + this.cellHeight/2;

    obj.x = posX;
    obj.y = posY;
  }

  //place the object at grid number
  placeAtIndex(index,obj)
  {
    var pY = Math.floor(index/this.config.cols);
    var pX = index - (pY * this.config.cols);

    this.placeAt(pX,pY,obj);

  }

  //show grid number
  showIndex()
  {
    this.show();
    var count = 0
    for (var i = 0; i < this.config.rows; i++)
    {
      for (var j = 0; j < this.config.cols; j++)
      {
          var indexText = this.scene.add.text(0,0,count,{color:'#ff0000'});
          indexText.setOrigin(0.5,0.5);
          this.placeAtIndex(count,indexText);
          count++;
      }
    }
  }

}
