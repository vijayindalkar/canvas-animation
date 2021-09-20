var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d'); 
c.fillStyle = 'blue';
c.fillRect(100,100,100,100); // fillrect(x,y,width,height)
c.fillStyle = 'black'
c.fillRect(400,100,100,100);
c.fillStyle = 'red';
c.fillRect(300,300,100,100);
console.log(canvas);

// line
c.beginPath();
c.moveTo(20,20);
c.lineTo(20,100);
c.lineTo(70,100);
c.strokeStyle = 'red';
c.stroke();


for(let i = 0; i<100 ; i++){
let x = Math.random() * window.innerWidth;
let y = Math.random() * window.innerHeight; 
c.beginPath();
c.arc(x,y,30,120,50,true);  
c.strokeStyle = 'blue'; 
c.stroke();
}