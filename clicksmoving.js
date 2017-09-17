verticalSpeedInPixels = 2;
horizontalSpeedInPixels = 2;
timeBetweenMovesInMs = 15;
playTimeInSec = 20;
directionChangeTimeInMs = 2000;

function addPoints(){
	points = parseInt(document.getElementById('points').innerHTML);
	points += 10;
	document.getElementById('points').innerHTML = points;
}

function flashGreen(){
	document.getElementById('target').style.backgroundColor = '#33cc33';
}
function prepareNewDirectionMinusZeroJeden(){
	var verticalMove = parseInt(Math.round(Math.random() * 2) - 1)*verticalSpeedInPixels;
	var horizontalMove = parseInt(Math.round(Math.random() * 2) - 1)*horizontalSpeedInPixels;
	return [verticalMove,horizontalMove];
}
function timer(){
	timerid = setInterval(subSeconds,1000);
	function subSeconds(){
		seconds = parseInt(document.getElementById('seconds').innerHTML);
		if (seconds == 0) {
			stopGame();
		} else {
			seconds--;
			document.getElementById('seconds').innerHTML = seconds;
		}
		
	}
}

function prepareNewDirection(){
	var horizontalMove = (Math.floor(Math.random() + 0.5)*2-1)*3;
	var verticalMove = (Math.floor(Math.random() + 0.5)*2-1)*3;
	return [verticalMove,horizontalMove];

}

function animateButton() {
	target = document.getElementById('target');
	document.getElementById('start').disabled = true;
	document.getElementById('stop').disabled = false;
	points = parseInt(document.getElementById('points').innerHTML);
	centerVert = Math.floor((window.innerHeight)/2) - 100;
	centerHor = Math.floor((window.innerWidth)/2) - 100;
	target.style.top = centerVert + 'px';
	target.style.left = centerHor + 'px';
	target.style.visibility = "visible";
	moveInterval = null;
	changeDirectionInterval = setInterval(changeDirection,directionChangeTimeInMs);
	var verticalLocation = parseInt(target.style.top);
	var horizontalLocation = parseInt(target.style.left);
	function changeDirection(){
		newDirection = prepareNewDirection();
		if (moveInterval){
			clearInterval(moveInterval);
		}
		moveInterval = setInterval(move,timeBetweenMovesInMs);
	}
		function move(){
			//console.log(target.style.top);
			//console.log(target.style.left);
			//console.log(newDirection);
			if (verticalLocation < 0 || verticalLocation > window.innerHeight-170) {
				newDirection[0] = -newDirection[0];
			}
			if (horizontalLocation < 0 || horizontalLocation > window.innerWidth-170) {
				newDirection[1] = -newDirection[1];
			}
			verticalLocation += newDirection[0];
			//console.log(verticalLocation);
			horizontalLocation += newDirection[1];
			//console.log(horizontalLocation);
			target.style.top = verticalLocation + 'px';
			target.style.left = horizontalLocation + 'px';
		}
} 
function stopGame(){
	clearInterval(changeDirectionInterval);
	clearInterval(moveInterval);
	clearInterval(timerid);
	target.style.visibility = "hidden";
	target.style.top = centerVert + 'px';
	target.style.left = centerHor + 'px';
	verticalLocation = centerVert;
	horizontalLocation = centerHor;
	document.getElementById('seconds').innerHTML = playTimeInSec;
	document.getElementById('start').disabled = false;
	document.getElementById('stop').disabled = true;
	alert('Your Score: ' + document.getElementById('points').innerHTML 
		+ '! Congratulations!');
	document.getElementById('points').innerHTML = 0;
}
