function sherlock(n){
	// while constraints have not been met, increment counter
	var bool = {
		
		five: n,
		three:0,
		roll:0,
		j:0
	};
	function digitChange(object,count){
		for(var j=0;j<bool.digits.length;j++){
			if(count % Math.pow(2,(j)) === 0){
				bool.digits[j] = !bool.digits[j];
				if(bool.digits[j] ===true){
					bool.five++;
					bool.three--;
				}else{
					bool.three++;
					bool.five--;
				}
				if( (bool.digits.length-1) == j ){
					bool.roll++;
					console.log('role incremented');
					// console.log(bool[bool.length-1]);
				}
			}
		}
	}

	
	
	bool.digits = Array.apply(null, new Array(n)).map(function(){return true});

	var count = 1;
	
	while( bool.roll < 3 ){
		if (bool.five % 3 === 0 && bool.three % 5 ===0){
						bool.roll = 4;
		}
		if(bool.roll < 3){
			
			digitChange(bool, count);
		}
		// console.log(bool);
	
		count++;
	}
	if(bool.roll == 3){
		console.log(-1);
	}
	if(bool.roll == 4){
		bool.res = bool.digits.map(function(b, i){
			if(b){
				return 5;
			}else{
				return 3;
			}
		});
		console.log(eval(bool.res.reverse().join("")));
	}
	
}
sherlock(8);