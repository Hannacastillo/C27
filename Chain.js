class Chain{

 constructor(body1,body2){
    var options={

        bodyA:body1,
        bodyB:body2
      
      }
      
     this.chain=Matter.Constraint.create(options);
      World.add(myworld,this.chain)

 }  
 
 display(){
 strokeWeight(4)
 line(this.chain.bodyA.position.x, this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)    

 }

}