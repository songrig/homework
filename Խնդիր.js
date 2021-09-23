function subset(arr) {
let res =[];
let tmpArr =[];
for (let i = 0; i < arr.length; i++) {
if (i< (arr.length-1)) {
for (let j = i+1; j < arr.length; j++) {
tmpArr.unshift(arr[i]);
tmpArr.unshift(arr[j]);
resoult.push(tmpArr);
tmpArr=[];
}
}
}
console.log(res)
}


