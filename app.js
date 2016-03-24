// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = Math.floor((Math.random()*100)+ 150);
};
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

        if(this.x <= 500){
        this.x += this.speed *dt;
    }else{
        this.x = -2
    }
    
    if(player.x >= this.x - 30 && player.x <= this.x + 30){
        if(player.y >= this.y - 30 && player.y <= this.y + 30){
        this.reset();
    }
        
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 400;
}

Object.prototype.reset = function(){
    player.x = 200;
    player.y = 400
}

Object.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite),this.x,this.y);
}

//el render method
Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

//el handle input method
Player.prototype.handleInput = function(e){
    this.ctlKey = e;
}

//el update method
Player.prototype.update = function(){

    if(this.ctlKey === 'left' && this.x > 0){ 
        this.x = this.x - 50;
   
    }else if(this.ctlKey === 'right' && this.x != 400){
        this.x = this.x + 50;
  
    }else if(this.ctlKey === 'up'){
        this.y = this.y - 50;

    }else if (this.ctlKey === 'down' && this.y != 400){
        this.y = this.y + 50;
    }
    this.ctlKey = null;
    
    if(this.y < 0){
        this.reset();
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
(function setEnemies(){
    allEnemies.push(new Enemy(-2, 50));
    allEnemies.push(new Enemy(-2, 100));
    allEnemies.push(new Enemy(-2,150));
    allEnemies.push(new Enemy(-2,200));
}());

// Place the player object in a variable called player

var player = new Player;

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
