class rope{
	constructor(body1,body2, pointA, pointB) {
		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.pointA, y:this.pointB}
		};

		this.pointA=pointA
		this.pointB=pointB
		
		World.add(world, this.body);
}

	//create rope constraint here

	



    //create display() here 
	display() {
		var pos = this.body.position;
		var angle = this.body.angle;
	
		push();
		translate(pos.x, pos.y);
		rotate(angle);
		imageMode(CENTER);
		image(this.image, 0, 0, this.width, this.height);
	
		pop();
	  }
	
}
