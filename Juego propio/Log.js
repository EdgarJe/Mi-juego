class Log {
    constructor(x,y,width,height){
        var options ={
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/log1.png")
        World.add(world,this.body);
    }
    display(){

        var pos = this.body.position;
        rectMode(CENTER);
        image(this.image, width/2,height/2,this.width,this.height);
    }
}