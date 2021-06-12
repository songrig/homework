//1
let a = +prompt()
let b = +prompt()
 a=a+b
b=a-b
a=a-b
console.log(a)
console.log(b)
//2
let num=prompt() 
let lnum=num%10

if(lnum===0){
    console.log(num)
}else if(num/10<1){
console.log(num)
}
else{

    num=(num-lnum) / 10

let n=10
let l=0

while((num/n)>=1){
n=n*10
l++
}
for(let i=0;i<=l;i++){
    lnum=lnum*10
}
num=lnum+num
    console.log(num)}
//3
let n1 = +prompt()
let n2 = +prompt()
let n3 = +prompt()
let n4 = +prompt()
let n5 = +prompt()
let sum = n1+n2+n3+n4+n5
console.log(sum/5)
//4
let m1 = prompt()
let m2 = prompt()
let m3 = prompt()
if(m1>m2&&m2>m3){
    console.log(m3+","+m2+","+m1)}
else if(m1>m2&&m3>m2){
    console.log(m2+","+m3+","+m1)}
else if(m1<m2&&m3>m2){
    console.log(m1+","+m2+","+m3)}
else if(m1>m2&&m3>m1){
    console.log(m2+","+m1+","+m3)}
else if(m1<m2&&m3<m1){
    console.log(m3+","+m1+","+m2)}
else if(m1<m3&&m3<m2){
    console.log(m1+","+m3+","+m2)}
//5
var n = +prompt()

var i = 0
var j = 0

if (n % 2 === 0 && !Math.floor(n / 10)){
i += 1
}
if (n % 3 === 0 && n % 10 === 1 ){
j += 1
}



 
