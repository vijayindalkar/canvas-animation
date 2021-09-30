function myFunction() {
    const canvas = document.querySelector('canvas');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


var c = canvas.getContext("2d");
var sectionSize = canvas/3;
var x = null;
var player = 1;





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


function addPlayingPiece (mouse) {
	var xCordinate;
	var yCordinate;
  
	for (var x = 0;x < 3;x++) {
	  for (var y = 0;y < 3;y++) {
		xCordinate = x * sectionSize;
		yCordinate = y * sectionSize;
  
		if (
			mouse.x >= xCordinate && mouse.x <= xCordinate + sectionSize &&
			mouse.y >= yCordinate && mouse.y <= yCordinate + sectionSize
		  ) {
			
		  if (player === 1) {
			drawX(xCordinate, yCordinate);
		  } else {
			drawO(xCordinate, yCordinate);
		  }
		}
	  }
	}
  }

  function drawO (xCordinate, yCordinate) {
	var halfSectionSize = (0.5 * sectionSize);
	var centerX = xCordinate + halfSectionSize;
	var centerY = yCordinate + halfSectionSize;
	var radius = (sectionSize - 100) / 2;
	var startAngle = 0 * Math.PI; 
	var endAngle = 2 * Math.PI;
  
	context.lineWidth = 10;
	context.strokeStyle = "#01bBC2";
	context.beginPath();
	context.arc(centerX, centerY, radius, startAngle, endAngle);
	context.stroke();
  }
  
  function drawX (xCordinate, yCordinate) {
	context.strokeStyle = "#f1be32";
  
	context.beginPath();
	
	var offset = 50;
	context.moveTo(xCordinate + offset, yCordinate + offset);
	context.lineTo(xCordinate + sectionSize - offset, yCordinate + sectionSize - offset);
  
	context.moveTo(xCordinate + offset, yCordinate + sectionSize - offset);
	context.lineTo(xCordinate + sectionSize - offset, yCordinate + offset);
  
	context.stroke();
  }


  function getCanvasMousePosition (event) {
	var rect = canvas.getBoundingClientRect();
  
	return {	
	  x: event.clientX - rect.left,
	  y: event.clientY - rect.top
	}
  }


canvas.addEventListener('mouseup', function (event) {  
	var canvasMousePosition = getCanvasMousePosition(event);
	addPlayingPiece(canvasMousePosition);
  });
