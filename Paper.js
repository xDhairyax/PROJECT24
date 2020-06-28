class Paper{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.5,
            friction:0.5,
            density:0.8
        }
        this.body=Bodies.circle(x,y,30,options);
        this.radius=30;
       
        World.add(world,this.body);
        this.image=loadImage("paper.png");
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        fill("purple");
        ellipse(0,0,30,30);
        pop();
      }
};
