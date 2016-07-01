var WIDTH = 500;
var HEIGTH = 500;
var num_array = [];
var next_num = 26;

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
		output += '<div id="tile_'+i+'">' + num_array[i] +'</div>';
	}
	document.getElementById('game-container').innerHTML = output;
}

newBoard();

