class Box {
  constructor(x, y) {
    var options = {
        isStatic:true
    }
    this.x=x;
		this.y=y;
		this.width=200;
		this.height=20;
		//this.wallThickness=20;
		
		this.image=loadImage("d.png")
		this.body=Bodies.rectangle(this.x, this.y, this.width, this.height, options);
		//this.left=Bodies.rectangle(this.x-this.width/2, this.y-this.height/2, this.wallThickness, this.height, options)
		
		

		//this.right=Bodies.rectangle(this.x+this.width/2, this.y-this.height/2, this.wallThickness, this.height, options);
		
		World.add(world, this.body)
	    //World.add(world, this.left)
	//World.add(world, this.right);

	}
	display()
	{
			var posBottom=this.body.position;
			/*
			var posLeft=this.left.position;
			var posRight=this.right.position;

			

			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			//strokeWeight(4);
			//angleMode(RADIANS)
			fill(255)
			//rotate(this.angle)
			rect(0,0,this.wallThickness, this.height);
			pop();

			push();
			translate(posRight.x, posRight.y);
			rectMode(CENTER);
			//strokeWeight(4);
			//angleMode(RADIANS)
			fill(255);
		//	rotate(-1*this.angle)
			rect(0,0,this.wallThickness, this.height);
			pop();
*/
			push();
			translate(posBottom.x, posBottom.y);
			rectMode(CENTER)
			//strokeWeight(4);
			//angleMode(RADIANS)
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-100,this.width, 200)
			rect(0,0,this.width, this.height);
			pop();
			
	}

}
