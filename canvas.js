p = 10;


var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");
function drawBoard(){
    for (var x = 0; x <= 300; x += 100) {
        c.moveTo(x + p, p);
        c.lineTo(x + p, 300 + p);
    }
    
    for (var x = 0; x <= 300; x += 100) {
        c.moveTo(p, x + p);
        c.lineTo(300 + p, x + 10);
    }
    c.strokeStyle = "black";
    c.stroke();
}

canvas.addEventListener('mousemove',function(moved){
    console.log(moved);
});
drawBoard();    
