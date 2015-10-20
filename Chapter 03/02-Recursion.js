var isEven = function (num) {
	if (num < 0 ) num *= -1;
	if (num == 0) return true;
	return (num == 1 ) ? false : isEven(num-2);
};


console.log(isEven(-522));
console.log(isEven(-1));