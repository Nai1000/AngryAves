class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 8
        }
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1, 200, 20);
        image(this.sling2, 172, 10)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if(pointA.x<200){
                strokeWeight(6);
            stroke(47,22,8);
            line(pointA.x-17, pointA.y+7, pointB.x, pointB.y);
            line(pointA.x-17, pointA.y+7, pointB.x+50, pointB.y+7);
            image(this.sling3, pointA.x-16, pointA.y-8, 10, 30);
            }
            else{
                strokeWeight(3);
                line(pointA.x-17, pointA.y+7, pointB.x, pointB.y);
                line(pointA.x-17, pointA.y+7, pointB.x+50, pointB.y+7);
                image(this.sling3, pointA.x-16, pointA.y-8, 10, 30);
            }
        }
    }   
}