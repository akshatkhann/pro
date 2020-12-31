class Chain{

    constructor(bodya,pointb){
    
    var option={
    bodyA:bodya,
    pointB:pointb,
    stiffness:0.04,
    length:10
    
    
    
    }
       
    this.pointb=pointb
    this.chain=Constraint.create(option)
    World.add(world,this.chain)
    
    
    }
    
    display(){
     if(this.chain.bodyA){
    
        var pointa=this.chain.bodyA.position
        var pointb=this.pointb
        strokeWeight(4)
        line(pointa.x,pointa.y,pointb.x,pointb.y)
        
    
    
     }   
    
    
    }
    
    fly(){
    
    this.chain.bodyA=null
    
    
    
    
    
    
    }
    
    
    
    
    }