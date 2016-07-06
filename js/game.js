var num_array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
var current_num = 1;
var next_num = 26;
var best_score =  Number.MAX_SAFE_INTEGER;

// Game Start Menu
var gameMenu = {
	start: function() {
		var button = '<div id="start-button" onclick="startGame()">' +
			'Click to Start' + '</div>';
		$('.game-container').html(button);
	}
}

// Game Over Menu
var gameOver = {
	start: function() {
		var output = '<div id="game-over">Your Time is<br />' +
			'<strong>' + $('.score-container').text() + '</strong><br /></div>' +
			'<div id="restart-button" onclick="restartGame()">' +
			'Restart' + '</div>';
		$('.game-container').html(output);
	}
}

// Function for shuffling number tiles.
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

// Function for creating game borad.
function newBoard() {
	shuffle(num_array);
	var output = '';
	// var score = setInterval(10);
	for (var i = 0; i < 25; i++) {
		output += '<div id="tile" onclick="clickTile(this)">' + num_array[i] +'</div>';
	}
	$('.game-container').html(output);
}

// Function that handles tile clicking events.
function clickTile(tile) {
	if (tile.innerHTML == current_num) {
		if (current_num <= 25) {
			$(tile).fadeOut(90, function() {
				$(tile).text(next_num).fadeIn(90);
				current_num++;
				next_num++;
			});
		} else {
			$(tile).fadeOut(90, function() {
				$(tile).text("").fadeIn(90);
				current_num++;
			});
			if (current_num == 50) {
				// load game over screen and reset all variables.
				endGame();
			}
		}
	} else {
		// add a possible penalty for clicking a wrong tile.
	}
}

// Reseting game.
function gameReset() {
	current_num = 1;
	next_num = 26;
}

// starting game.
function startGame() {
	scoreReset();
	var counter = 3;
	var output = '<div id="timer">' + counter + '</div>';
	$('.game-container').html(output);
	var timer = setInterval(function() {
		counter--;
		if (counter <= 0) {
			newBoard();
			scoreStart();
			clearInterval(timer);
		} else {
			$('#timer').html(counter);
		}
	}, 1000);
}

function newGame() {
	scoreStop();
	scoreReset();
	gameReset();
	gameMenu.start();
}

// re-starting game.
function restartGame() {
	scoreStop();
	scoreReset();
	gameReset();
	startGame();
}

// end game.
function endGame() {
	scoreStop();
	gameOver.start();
	updateBest();
	gameReset();
}

// function for updating best time.
function updateBest() {
	if (parseFloat($('.score-container').text()) < best_score) {
		best_score = parseFloat($('.score-container').text());
		$('.best-container').html($('.score-container').text());
	}
}

gameMenu.start();