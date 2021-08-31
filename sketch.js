const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof,ball1,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4, rope5;
var bob1,bob2,bob3,bob4,bob5;

//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
	rope1=new rope(bob1,roof,-80,0);
	rope2=new rope(bob2,roof,-80,0);
	rope3=new rope(bob3,roof,-80,0);
	rope4=new rope(bob4,roof,-80,0);
	rope5=new rope(bob5,roof,-80,0);


	var ball_options = {
		// bounce off
		restitution: 0.8
	  }
	  
	  // setup ball
	  ball1 = Bodies.circle(200,50,10,ball_options);
	  World.add(world,ball1);
	
	//setup ball2
	  ball2 = Bodies.circle(350,10,12,ball_options);
	  World.add(world,ball2);
	
	  //setup ball3
	  ball3 = Bodies.circle(350,10,12,ball_options);
	  World.add(world,ball3);
	  //setup ball4
	  ball4 = Bodies.circle(350,10,12,ball_options);
	  World.add(world,ball4);
	  //setup ball5
	  ball5 = Bodies.circle(350,10,12,ball_options);
	  World.add(world,ball5);

	// conditions of ball1
	con = Matter.Constraint.create({
		pointA:{x:200,y:20},
		bodyB:ball1,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  });

	World.add(world,con);


// conditions of ball2
	con2 = Matter.Constraint.create({
	  bodyA:ball1,
	  pointA:{x:0,y:0},
	  bodyB:ball2,
	  pointB:{x:0,y:0},
	  length:100,
	  stiffness:0.1
	});

  World.add(world,con2);
	

// position of rectangle
rectMode(CENTER);

// size of ball
ellipseMode(RADIUS);

	
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);


  //call display() to show ropes here
// make changes in between push and pop
//push();
//display()
//{
	var pointA=this.rope.bodyA.position;
	var pointB=this.rope.bodyB.position;
	
rope1(con.pointA.x,con.pointA.y,ball1.position.x,ball1.position.y);
rope2(ball.position.x,ball.position.y,ball2.position.x,ball2.position.y);
strokeWeight(2);
stroke(255);

//pop();

//}
  
  //create ellipse shape for multiple bobs here
// draw ball and ball2
ellipse(ball1.position.x,ball1.position.y,10);
ellipse(ball2.position.x,ball2.position.y,12);
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
// define right key 
function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      // to apply force to ball
      Matter.Body.applyForce(ball1,{x:0,y:0},{x:0.05,y:0});
    }
}