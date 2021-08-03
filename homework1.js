//2
function findLongestWord(str) {
  
  let arr = str.split(" ")
  let longestWord = arr[0]
  for (let i=0; i< arr.length; i++){ 
    
    if(arr[i].length > longestWord.length){
      
      longestWord = arr[i]
    }
  }
  return longestWord
  
}
//5
function subset(arr) {
	let result =[];
	let tmpArr =[];
	for (let i = 0; i < arr.length; i++) {
		if (i< (arr.length-1)) {
		for (let j = i+1; j < arr.length; j++) {
		tmpArr.push(arr[i]);
		tmpArr.push(arr[j]);
		result.push(tmpArr);
		tmpArr=[];
	}
	}
}

//4
function repeating(str) {
    let str2 = "";
    for(let i=0; i<(str.length-2); i+=3) {
        str2 = str2+str.substring(i+1,i+3)+str.charAt(i);
    }
    return str2;
}
console.log(result);
}