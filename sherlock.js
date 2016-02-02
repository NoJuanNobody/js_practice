function sherlock(n){
	// while constraints have not been met, increment counter
	var bool = [];
	var boolCounts = {};
	boolCounts.five = 0;
	boolCounts.three= 0;
	for (var i=0; i<n;i++){
		bool.push(true);
	}
	
	var count = 1;
	console.log(bool);
	while(count <= 100){
		for(var j=0;j<bool.length;j++){
			if(bool[j] ===true){
				boolCounts.five++;
			}else{
				boolCounts.three++;
			}
			
			if(count % Math.pow(2,(j)) === 0){
				bool[j] = !bool[j];

			}
		}
		console.log(boolCounts);
		if (boolCounts.five % 3 === 0 && boolCounts.three % 5 ===0){
			console.log('DING DING DING');
		}
		boolCounts.three = 0;
		boolCounts.five = 0;
		console.log(bool);

		
		count++;
	}
}
sherlock(5);