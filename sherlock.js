function sherlock(n){
	// while constraints have not been met, increment counter
	var bool = [];
	var newArray = 0;
	function boolCount(newArray, bool){
		if(boolean === true){
			newArray[0]++;
		}else{
			newArray[1]++;
		}
		return newArray;
	}
	for (var i=0; i<n;i++){
		bool.push(true);
	}
	// console.log(bool);
	var count = 1;
	// console.log(bool);
	while(count <= 8){
		for(var j=0;j<bool.length;j++){
			if(count % Math.pow(2,(j)) === 0){
				bool[j] = !bool[j];
			}
		}
		console.log(bool);
		bool.filter(boolCount(newArray, boolean));
		
		count++;
	}
}
sherlock(4);