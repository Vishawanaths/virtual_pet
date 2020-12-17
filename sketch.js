var database;
var dog, happydog;
var dogimg, happydogimg;
var foodS, foodStock;

function preload(){
  dogimg = loadImage("images/dogImg.png")
  happydogimg = loadImage("images/dogImg1.png")
}

function setup(){
	createCanvas(500,500);
  database = firebase.database();

  dog = createSprite(250,250,100,100)
  dog.addImage(dogimg)
  dog.scale = 0.5

  foodStock = database.ref("food")
  foodStock.on("value",readStock)
}


function draw(){  
  background(46, 139, 87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happydogimg)

    
  }

  drawSprites();
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  database.ref('/').update({
    food:x
  })
}



