function uniqueInOrder (iterable){
	var strToArray =[];
	if (typeof(iterable)=='string'){
		for (i = 0; i < iterable.length; i++) {
			strToArray[i] = iterable.charAt(i);
		}
		iterable = strToArray;    
	}
	
	var change = false;
	while(change){}
	for (i = 0; i < iterable.length; i++) {
		if(iterable[i]==iterable[i+1]){
			iterable.splice(i,1);
			i--;
			change=true}
			else {change = false};
		}
		return iterable;
	}
	console.log(uniqueInOrder('AAAAABBBBCCCCCDDDD'));
	