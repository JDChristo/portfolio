class AudioManager
{
  constructor(config)
  {
    this.scene = config.scene;
    emitter.on(G.PLAY_SOUND, this.playSound,this);
    emitter.on(G.MUSIC_SOUND, this.musicChanged,this);
  }

  //maintain the volume changes
  musicChanged()
  {
      if(this.bground)
      {
        if(model.musicOn == true)
        {
          this.bground.play();
        }
        else {
          this.bground.stop();
        }
      }
  }

  //play sound when triggered
  playSound(key)
  {
    if(model.soundOn == true)
    {
      var sound = this.scene.sound.add(key);
      sound.play();
    }
  }

  //set bg music on loop set in the Scene
  setBackgroundAudio(key)
  {
    if(model.musicOn == true)
    {
      this.bground = this.scene.sound.add(key,{volume : .5, loop:true});
      this.bground.play();
    }
  }
}
