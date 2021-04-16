var tgroup, collidergroup, obgroup;

var player, panimation, pidle, pjump, pdeath;

var tutorial, gamestate = true;
var GOimg;

var levelState = 1


// Bug 1: Random borders appear     Maybe solved: windowWidth, windowHeight

// kronovi-  --- Dyso
//LuizMelo --- Gyo
// edermunizz -- Forest Bg

function setup() {
  

  tgroup = createGroup()
  collidergroup = createGroup()
  obgroup = createGroup()

  tutorial = new lvl1()

  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(200); 
  
  if(levelState == 1){
    tutorial.play()
    tutorial.end()
  }else{
    tutorial = null
  }
  

  drawSprites();
  
}

function mousePressed(){
  sprite = createSprite(random(0, 200), random(0, 200), 50, 50)
}