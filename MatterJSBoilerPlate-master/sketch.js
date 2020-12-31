
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	tree1=new Tree(1000,430,345,345);
ground1=new Ground(500,600,1400,3)
boy=new Boy(350,560,100,150)
stone=new Stone(320,525,20)
chain=new Chain(stone.body,{x:320,y:525})
mango=new Mango(1000,300,30)
mango1=new Mango(1050,360,30)
mango2=new Mango(1000,360,30)
mango3=new Mango(970,380,30)
mango4=new Mango(970,400,30)
mango5=new Mango(1020,380,30)
mango6=new Mango(1120,400,30)

}



function draw() {
  rectMode(CENTER);
  background(255);
stone.display()
  boy.display()
  tree1.display()
 ground1.display()
 stone.display()
chain.display()
mango.display()
mango1.display()
mango2.display()
mango3.display()
mango4.display()
mango5.display()
mango6.display()
dedectcollision(mango,stone)
dedectcollision(mango2,stone)
dedectcollision(mango3,stone)
dedectcollision(mango4,stone)
dedectcollision(mango5,stone)
dedectcollision(mango6,stone)
dedectcollision(mango1,stone)


}





function mouseDragged(){

	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
	
	
	
	}
	function mouseReleased(){
	
	chain.fly()
	
	
	
	
	
	
	
	}
	function dedectcollision(mango,stone){
mangoBodyPosition=mango.body.position
		
stoneBodyPosition=stone.body.position

	
	
		
		
		var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
		
		
		if(distance<=mango.radius+stone.radius){

			Matter.Body.setStatic(mango.body,false)
		
		
		}
		
		
		
		}
		
		