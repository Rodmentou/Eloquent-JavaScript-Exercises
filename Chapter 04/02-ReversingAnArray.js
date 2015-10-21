var reverseArray = function (array) {
	var newArray = [];
	var size = array.length;
	for (var i = 0; i < size; i++ ){
		newArray[size-i-1] = array[i];
	};
	return newArray;
}

var reverseArrayInPlace = function (array) {
	var size = array.length;
	var temp;
	for (var i = 0; i < size/2; i++){
		temp = array[i];
		array[i] = array[size-i-1];
		array[size-i-1] = temp;
	}
	console.log(array);
}

var hello = ['H', 'e', 'l', 'l', 'o'];
console.log( reverseArray(hello) );
reverseArrayInPlace(hello);