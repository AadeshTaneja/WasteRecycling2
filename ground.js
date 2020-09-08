class Ground{

    constructor(x,y){

        var options={
			isStatic:true			
			}
        
        this.width=1600;
        this.height=20;
        this.body = Bodies.rectangle(x,y,1600,5,options);
        World.add(world,this.body);

    }
    display(){

        var Pos=this.body.position;
        
        push()
        translate(Pos.x,Pos.y);
        rectMode(CENTER)
        fill("grey")
        strokeWeight(3)
        stroke("black")
        rect(0,0,this.width,this.height)
        pop()

  











    }

























}