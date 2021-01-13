class Slingshot{

    constructor(bodyA,pointB){
        var option={
            bodyA:bird.body,
            pointB:pointB,
            length:10,
            stiffness:0.04
        }
        this.pointB=pointB;
       this.sling=constraint.create(option);
       World.add(world,this.sling);
    
    }
     fly(){
         this.sling.bodyA=null;
     }



    display(){
if(this.sling.bodyA){
        var pointA=this.sling.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }}
}