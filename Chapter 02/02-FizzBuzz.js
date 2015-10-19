var fb;
for (var i = 0; i < 100; i++ ){
	fb = '';
	if( (i%3) == 0 ) fb = 'Fizz';
	if ( (i%5) == 0 ) fb += 'Buzz';
	if ( !fb ) fb = i;
	console.log(fb);
}