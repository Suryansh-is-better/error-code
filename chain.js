class Chain{
    constructor(bodyA,bodyB) {
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.4,
            length:1
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
        }
        display() {
            console.log("high");
            var pointA = this.chain.bodyA.position
            var pointB = this.chain.bodyB.position
            strokeWeight(4)
            line(pointA.x,pointA.y,pointB.x,pointB.y);

        }
    }
   
