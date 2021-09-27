function resizeCanvas() {
    const canvas = document.querySelector('canvas');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


var c = canvas.getContext("2d");
var x = null;
let boxAreas = []

function checkorientation(){
	if(canvas.width > canvas.height){
		x = canvas.height/3;
	}
	else{
		x =canvas.width/3;
	}
}


function drawBoard(){
	checkorientation();
	let maxBoxSide = x		
	let xOffset = canvas.width/2 - maxBoxSide * 1.5
	let yOffset = canvas.height/2 - maxBoxSide * 1.5
	
	for(let i=0; i<4; i++) {
		c.moveTo(xOffset, yOffset + maxBoxSide * i);
		c.lineTo(xOffset + maxBoxSide * 3, yOffset + maxBoxSide * i);
		c.moveTo(xOffset + maxBoxSide * i, yOffset);    
		c.lineTo(xOffset + maxBoxSide * i, yOffset + maxBoxSide * 3);
	c.strokeStyle = "black";
	c.stroke();
	}
}
drawBoard();

  }
