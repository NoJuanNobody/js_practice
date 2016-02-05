function digit(n){
	// split number into an array
	// iterate through array and compare each digit divisible by element in array
	var digits = n.toString().split("").map(function(e){
		return n % eval(e) ===0;
	}).reduce(function(total,e,i){
		if(e){total++;}
		return total;
	});
	console.log(digits);
}
console.log("first test");
// digit(33);
console.log("second test");
// this is a quicker solution. no need to create booleans
// does not quite work....solution is iterating too many times????
function digitsTwo(n){
	var digits = n.toString().split("").reduce(function(total,e){
		console.log(total);
		if(n%eval(e) === 0){
			total++;
		}
		return total
	});
	console.log(digits);
}
digitsTwo(33);