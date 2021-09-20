var canvas  = document.querySelector('canvas')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas);

var c = canvas.getContext('2d');

function Circle(x,y,dx,dy,radius){
this.x = x;
this.y = y;
this.radius = radius;
this.dx = dx;
this.dy = dy;

this.draw = function(){
    c.beginPath();
    c.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
    c.strokeStyle = "blue";
    c.stroke();
    }

this.update = function(){
    if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
        this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0){
        this.dy = -this.dy;
    }
    this.x +=this.dx;
    this.y +=this.dy;
    this.draw();

    }
}

var circleArray = [];
for(var i = 0;i<circleArray.length;i++){
    let x = Math.random() * innerWidth;
    let y = Math.random() * innerHeight;      //position of circle
    let dx = (Math.random()- 0.5) * 7;       //speed to move circle from its position i.e here 300
    let dy = (Math.random())- 0.5 * 7;
    let radius = 30;
    circleArray.push(new Circle(x,y,dx,dy,radius));
    
}


var circle = new Circle(200,200,3,3,30)


function animate(){
    requestAnimationFrame(animate);    // this creates the loop (requestAnimationFrame calls animate function again therefore it create loops)    
    c.clearRect(0,0,innerWidth,innerHeight);
    circle.update();
    
    // c.beginPath();
    // c.arc(x,y,radius,0,Math.PI * 2,false);
    // c.strokeStyle = "blue";
    // c.stroke();

    
    // x += dx;
    // if(x + radius > innerWidth || x -radius < 0){
    //     dx = -dx;
    // }
    // if (y + radius > innerHeight || y - radius < 0){
    //     dy = -dy;
    // }
    // x +=dx;
    // y +=dy;
}
animate();
