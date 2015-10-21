var deepEqual = function (obj1, obj2) {
	var valid = false;
	if ( typeof(obj1) == 'object') {
		for (var prop in obj1){
			valid = deepEqual(obj1[prop], obj2[prop]);
		}
	}
	if (obj1 === obj2) valid = true;

	return valid;
};



var a = {
	name:'Rodrigo',
	role: 'Programmer'
};

var b = {
	name:'Rodrigo',
	role: 'Programmer'
};

var c = {
	name:'Rodrigo',
	role: 'Tester'
};

var d = {};

console.log(deepEqual(a, b));
console.log(deepEqual(a, c));
console.log(deepEqual(b, d));