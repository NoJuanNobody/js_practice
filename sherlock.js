function sherlock(n){
	// while constraints have not been met, increment counter
	var bool = [];
	var boolCounts = {};
	boolCounts.five = n;
	boolCounts.three= 0;
	boolCounts.roll = 0;
	for (var i=0; i<n;i++){
		bool.push(true);
	}
	
	var count = 1;
	// console.log(bool);
	while( boolCounts.roll < 3 ){
		if (boolCounts.five % 3 === 0 && boolCounts.three % 5 ===0){
			// console.log('DING DING DING');
			boolCounts.roll = 4;
			// console.log('role changed');
			
		}
		if(boolCounts.roll < 3){
			for(var j=0;j<bool.length;j++){
				if(count % Math.pow(2,(j)) === 0){
					bool[j] = !bool[j];
					if(bool[j] ===true){
						boolCounts.five++;
						boolCounts.three--;
					}else{
						boolCounts.three++;
						boolCounts.five--;
					}
					if( (bool.length-1) == j ){
						boolCounts.roll++;
						// console.log('role incremented');
						// console.log(bool[bool.length-1]);
					}
				}
			}
		}
		// console.log(boolCounts);
	
		count++;
	}
	if(boolCounts.roll == 3){
		console.log(-1);
	}
	if(boolCounts.roll == 4){
		var boolRes = bool.map(function(b, i){
			if(b){
				return 5;
			}else{
				return 3;
			}
		});
		console.log(eval(boolRes.join("")));
	}
	
}
sherlock(4);