class Player {
    constructor(x,y,width,height){
        var options ={
            'restitution':0.8,
            'friction':1.0,
            'density':0.1,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/character.png")
        //this.animation = loadAnimation(charJumping);
        World.add(world,this.body);
    }
    display(){

        var pos = this.body.position;
        rectMode(CENTER);
        image(this.image, width/2,height/2,this.width,this.height);
    }
}