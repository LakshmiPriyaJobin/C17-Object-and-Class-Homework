var box1
var box2
function setup() 
{
  createCanvas(400, 400);
box1 = new Box(200,200,50,60,2);
box2 = new Box(200,200,50,60,2);


}

function draw() 
{
  background('turquoise');

  box1.display();
  box1.moveUp();
 
  box2.display();
  box2.moveDown();
}

