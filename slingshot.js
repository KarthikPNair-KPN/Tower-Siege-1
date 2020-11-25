/*class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);  

        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
       
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
        
        stroke(70,225,199);
            strokeWeight(8);
            line(pointA.x-200, pointA.y-200, pointB.x, pointB.y);
         
         
        }
    }    
}*/

class SlingShot{
    constructor(bodyA, pointB){
        var options1 = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.slingSho = Constraint.create(options1);
        World.add(world, this.slingSho);
    }
    fly(){
        this.slingSho.bodyA = null;
    }
    /*attach(body){
        this.slingSho.bodyA = body;   
    }*/
    display(){
        if(this.slingSho.bodyA !== null){
        var pointA = this.slingSho.bodyA.position;
        var pointB = this.slingSho.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }   
}




