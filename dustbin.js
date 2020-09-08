class Dustbin {
   
    constructor(x,y){


        this.y = y
        this.x = x
        this.width = 200
        this.height = 100
        this.thickness = 20  
        
    
        

        this.leftbody = Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.thickness,this.width+50,{isStatic:true})
        this.bottombody = Bodies.rectangle(this.x,this.y,this.thickness,this.width,{isStatic:true});
        this.rightbody = Bodies.rectangle(this.x+this.width/2, this.y-this.height/2, this.thickness, this.width, {isStatic:true});
        World.add(world,this.rightbody);
        World.add(world,this.bottombody);
        World.add(world,this.leftbody)
        this.bottombody = loadImage("dustbingreen.png")
        
    }

    display(){
 
        var lpos = this.leftbody.position
        var rpos = this.rightbody.position
        var bpos = this.bottombody.position
          
        push()
        fill("white")
        stroke("white")
        rect(lpos.x,lpos.y,this.thickness,this.width+50);
        pop()
        
        
        push()
        translate(rpos.x,rpos.y);
        fill("white")
        stroke("white")
        rect(0,0,this.thickness,this.width+50)
        pop()
        
        
        
       //push()
      // translate(this.bottombody.position.x,this.bottombody.position.y);
      // fill("red")
     //  strokeWeight(3)
     //  stroke("green")
     //  rect(bpos.x,this.bottombody.position.y,this.width+20,this.thickness);
     //pop()

        image(this.bottombody,this.x-100,this.y-190,200,200)




    }



















}