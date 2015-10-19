var board = '';
var size = 8;

for (var i = 0; i < size; i++ ) {
	for (var j = 0; j < size; j++ ) {
		if ((i%2)==0){
			board += (j%2 == 0) ? ' ' : '#';
		} else {
			board += (j%2 == 0) ? '#' : ' ';
		}
	}
	board += '\n';
}
console.log(board);