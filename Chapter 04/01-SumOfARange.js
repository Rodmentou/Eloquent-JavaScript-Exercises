var range = function (start, end, step) {
	if (!step) var step = 1;
	var numbers = [];
	for (var i = 0; i <= (end - start)/step; i++)
		numbers[i] = start + step;
	return numbers;
};

var sum = function (numbers) {
	var result = 0;
	for (var i = 0; i <= numbers.length; i++){
		console.log(numbers[i]);
		result += i;
	};
		
	return result;
};


console.log(sum( range(1,10) ));
console.log(sum( range(1,10,2) ));
console.log(sum( range(5,2,-1) )); //not working