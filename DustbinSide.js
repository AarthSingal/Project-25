class DustbinSide {
    constructor(x,y,width,height){
        var DustbinSide_options = {
            isStatic : true ,
            restitution: 0.8,
            density: 1.0,
            friction: 1.0
        }
        this.DustbinSide  = Bodies.rectangle(x,y,width,height,DustbinSide_options);
        this.width = width;
        this.height = height;
        
        World.add(world,this.DustbinSide);

    }

    display(){
        
        fill("white");
        rectMode(CENTER);
        rect(this.DustbinSide.position.x,this.DustbinSide.position.y,this.width,this.height);
       
    }
}