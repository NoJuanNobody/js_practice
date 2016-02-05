function sherlockTwo(min,max){
	var count = 0;
	for(var i=min; i<=max; i++){
		console.log(i);
		if(Number.isInteger(Math.sqrt(i))){
			count++;
			
		}
	}
	console.log(count);
}

sherlockTwo(2,20);