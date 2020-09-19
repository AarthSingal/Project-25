class Paper {
    constructor(x,y,radius){
        var paper_options = {
            restitution : 0.3,
            friction : 0.5,
            density : 0.2
        }
        this.paper  = Bodies.circle(x,y,radius,paper_options);
        this.radius = radius;
        this.image = loadImage("images/paper.png")

        World.add(world,this.paper);

    }

    display(){
        
        
        
        //fill("lightBlue");
        imageMode(CENTER);
        image(this.image,this.paper.position.x,this.paper.position.y,this.radius);
        
        

       

        
    }
}