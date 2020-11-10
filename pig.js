class Pig{
    constructor(x,y){
        var pig_options ={
            'restitution': 0.8, 
            'friction': 0.3,
            'density': 1
        }
    
        this.body = Bodies.rectangle(x,y,50,50,pig_options);
        this.width = 50;
        this.height = 50;

        World.add(world,this.body);
    
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        stroke("red");
        strokeWeight(3);
        fill("blue");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
    pop();
    }
    
    }