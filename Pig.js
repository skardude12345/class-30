class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.transparency = 255;
  }

  display(){
    

    if(this.body.speed > 4){

      World.remove(world, this.body);

      push();

      this.transparency = this.transparency - 10;
      tint(255, this.transparency);
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);

      pop();

    } else {
      super.display();
    }

  }
};