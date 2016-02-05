function growth(n){
	var height = 1;
	if(n !== 0){
		for(var i=0; i<n; i++){
			if(i%2===0){
				height = 2*height;
			}else{
				height+=1;
			}
		}
	}
console.log(height);
}
for(var i=0; i<10;i++){
	growth(i);
}
