var dog,sadDog,happyDog, database,firebase,data;
var foodS,foodStock;
var addFood,feed;
var foodObj;
var FeedTime,lastFed;




function preload(){
sadDog=loadImage("Dog.png");
happyDog=loadImage("happy dog.png");
}

function setup() {
  database=firebase.database();
  createCanvas(1000,400);

  foodObj = new Food();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed = createButton("feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);


  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

}

function draw() {
  background(46,139,87);
  foodObj.display();

  // to read fedtime value from the database 
  //feedTime = database.ref('FeedTime');
  //feedTime.on("value",function(data){
  //lastFed = data.val();
  

  fill("red");
  textSize(25);
  if(lastFed>=12){
    //show time in PM format when lastFed is greater than 12
  }
  else if(lastFed==0){
    text("Last Feed  : 12 AM",350,30);
  }
  else{
   //show time in AM format when lastFed is less than 12
  }


  
  
 
  //write code to display text lastFed time here

 
  drawSprites();
}

//function to read food Stock
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);

}

//function to update food stock and last fed time
  function feedDog(){
    dog.addImage(happyDog);
  var food_stock_val = foodObj.getFoodStock();
  if(food_stock_val <= 0){
    foodObj.updateFoodStock(food_stock_val *0);

  }
  else{
    foodObj.updateFoodStock(food_stock_val -1);

  }
  }

//function to add food in stock
function addFoods(){
  foodS++;
  //database.ref('/').update({
    Food:foodS
  //})
}
