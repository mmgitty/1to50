var num_array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
var current_num = 1;
var next_num = 26;
var score = {
	microsec: 0,
	millisec: 0,
	sec: 0,
};
var best_score = {
	microsec: 0,
	millisec: 0,
	sec: 0,
};

var gameMenu = {
	start: function() {
		var button = '<div id="start-button" onclick="startGame()">' +
			'Click to Start' + '</div>';
		document.getElementById('game-container').innerHTML = button;
	}
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

function newBoard() {
	clearInterval();
	shuffle(num_array);
	var output = '';
	var score = setInterval(function() {

	}, 10);
	for (var i = 0; i < 25; i++) {
		output += '<div id="tile" onclick="clickTile(this)">' + num_array[i] +'</div>';
	}
	document.getElementById('game-container').innerHTML = output;
}

function clickTile(tile) {
	if (tile.innerHTML == current_num) {
		if (current_num <= 25) {
			$(tile).fadeOut(160, function() {
				$(tile).text(next_num).fadeIn(160);
				current_num++;
				next_num++;
			});
		} else {
			$(tile).fadeOut(160, function() {
				$(tile).text("").fadeIn(160);
				current_num++;
			});
		}
	} else {
		// $(tile).effect("shake", {distance: 1});
	}
}

function startGame() {
	var counter = 3;
	var timer = setInterval(function() {
		var output = '<div id="timer">' + counter + '</div>';
		counter--;
		if (counter < 0) {
			newBoard();
			clearInterval(timer);
		} else {
			document.getElementById('game-container').innerHTML = output;
		}
	}, 1000);
}

gameMenu.start();