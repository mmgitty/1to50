var WIDTH = 500;
var HEIGTH = 500;
var num_array = [];
var current_num = 1;
var next_num = 26;
var gameMenu = {
	start: function() {
		var button = '<div id="start-button" onclick="startGame()">' +
			'Click to Start' + '</div>';
		document.getElementById('game-container').innerHTML = button;
	}
}

function countDown() {
	var timer = duration;
}

function startGame() {
	newBoard();
}

function init() {
	for (var i = 1; i <= 25; i++) {
		num_array.push(i);
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
	init();
	shuffle(num_array);
	tiles_flipped = 0;
	var output = '';
    // memory_array.memory_tile_shuffle();
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
			$(tile).fadeOut(150, function() {
				$(tile).text("").fadeIn(160);
				current_num++;
			});
		}
	} else {
		// $(tile).effect("shake", {distance: 1});
	}
}

gameMenu.start();
// newBoard();

