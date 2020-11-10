class Bird{
    constructor(x,y){
        var bird_options ={
            'restitution': 0.5, 
            'friction': 1,
            'density': 1.5
        }
    
        this.body = Bodies.rectangle(x,y,50,50,bird_options);
        this.width = 50;
        this.height = 50;
    
        World.add(world,this.body);
    
    }
    display(){
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        stroke("blue");
        strokeWeight(3);
        fill("green");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
    pop();
    }
    
    }