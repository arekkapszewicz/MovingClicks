function addPoints(){
	points = parseInt(document.getElementById('points').innerHTML);
	points += 10;
	document.getElementById('points').innerHTML = points;
}

function prepareNewLocation(){
	var height = window.innerHeight - 150;
	var width = window.innerWidth - 150;
	var newHeight = Math.floor(Math.random() * height);
	var newWidth = Math.floor(Math.random() * width);
	return [newHeight,newWidth];

}
function timer(){
	timerid = setInterval(subSeconds,1000);
	function subSeconds(){
		seconds = parseInt(document.getElementById('seconds').innerHTML);
		console.log(seconds);
		if (seconds == 0) {
			clearInterval(timerid);
			stopGame();
		} else {
			seconds--;
			document.getElementById('seconds').innerHTML = seconds;
		}
		
	}
}

function animateButton() {
	button = document.getElementById('firstButton');
	points = parseInt(document.getElementById('points').innerHTML);
	button.style.visibility = "visible";
	animationid = setInterval(move,1050);
	function move(){
		var newLocation = prepareNewLocation();
		button.style.top = newLocation[0] + 'px';
		button.style.left = newLocation[1] + 'px';
	}
	
} 
function stopGame(){
	button.style.visibility = "hidden";
	clearInterval(animationid);
	clearInterval(timerid);
	button.style.top = '100px';
	button.style.left = '100px';
	document.getElementById('seconds').innerHTML = 15;
	alert('Your Score: ' + document.getElementById('points').innerHTML 
		+ '! Congratulations!');
}
