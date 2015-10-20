var countBs = function (str) {
	var count = 0;
	for (var i = 0; i < str.length; i++ ) {
		if (str[i] == 'B') count ++;
	}
	return count;
};


var countChar = function (str, letter) {
	var count = 0;
	for (var i = 0; i < str.length; i++ ) {
		if (str[i] == letter) count ++;
	}
	return count;
};


console.log(countBs('BupucepetaBau'));
console.log(countChar('BupucepetaBau', 'u'));