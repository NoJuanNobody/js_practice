function growth(n){
	var height = 1;
	if(n === 0){
		height = 1;
	}else if(n % 2 === 0){
		height = Math.pow(2,(n/2))+(n/2);
	}else{
		n--;
		height = Math.pow(2,(n/2))+(n/2+1);
	}
	console.log(height);
}
growth(1);
growth(2);
growth(3);
// I need to create some sort of loop