
var widthoftable = 300;
var heightoftable = 300;


var canvas = document.querySelector('canvas');
var c = canvas.getContext("2d");
function drawBoard(){
    for (var x = 0; x <= widthoftable; x += 100) {
        c.moveTo(x + 10, 10);
        c.lineTo(x + 10, heightoftable + 10);
    }
    
    for (var x = 0; x <= heightoftable; x += 100) {
        c.moveTo(10, x + 10);
        c.lineTo(widthoftable + 10, x + 10);
    }
    c.strokeStyle = "black";
    c.stroke();
}

canvas.addEventListener('mousemove',function(moved){
    console.log(moved);
});
drawBoard();    
