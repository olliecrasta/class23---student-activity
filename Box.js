class Box {
  
    constructor(x,y,width,height){


        var box_options ={
            restitution: 0.8,
            friction: 0.8,
            density : 0.001
        }
        this.box = Bodies.rectangle(x,y,width,height, box_options);
        World.add(world,this.box);

        this.width = width;
        this.height = height;
    }

    display(){

        var pos = this.box.position;
    
        push();
        rectMode(CENTER);
        translate(pos.x,pos.y)
        fill("yellow")
        rect(0,0,this.width, this.height);
        pop();
    }




}