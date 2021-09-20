var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d'); 
c.fillStyle = 'white';
c.fillRect(550,100,450,450); // fillrect(x,y,width,height)

// line
c.beginPath();
c.moveTo(700,100);
c.lineTo(700,550);
// c.lineTo(70,100);
c.strokeStyle = 'red';
c.stroke();

c.beginPath();
c.moveTo(550,100);
c.lineTo(550,550);
c.strokeStyle = 'red';
c.stroke();

c.beginPath();
c.moveTo(850,100);
c.lineTo(850,550);
c.strokeStyle = 'red';
c.stroke();

c.beginPath();
c.moveTo(1000,100);
c.lineTo(1000,550);
c.strokeStyle = 'red';
c.stroke();

c.beginPath();
c.moveTo(1000,250);
c.lineTo(550,250);
c.strokeStyle = 'red';
c.stroke();

c.beginPath();
c.moveTo(1000,400);
c.lineTo(550,400);
c.strokeStyle = 'red';
c.stroke();

c.beginPath();
c.moveTo(1000,550);
c.lineTo(550,550);
c.strokeStyle = 'red';
c.stroke();

c.beginPath();
c.moveTo(1000,100);
c.lineTo(550,100);
c.strokeStyle = 'red';
c.stroke();


canvas.addEventListener('mousemove',function(moved){
    console.log(moved);
});

