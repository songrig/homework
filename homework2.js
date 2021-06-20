



//2
let num = +prompt()
let num1 = +prompt()
let i = 2
if(num>=8){
while(i<=num/4){
    i=i*2
    l = i*2
}
while(l<=num1/2){
    console.log(l)
    l=l*2
}
}
else if(num<=2){
num=2
let l = 2
while(l<=num1/2){
console.log(l)
l=l*2
}
}
else if(num<=4){
num=4
let l = 4
while(l<=num1/2){
console.log(l)
l=l*2
}
}else {
num=8
let l = 8
while(l<=num1/2){
console.log(l)
l=l*2
}
}


//4
 
let num = prompt()
let num1 = ""
for(let i=num.length-1;i>=0;i--){
num1=num1+num[i]
}
console.log(num1)

//1

let num = +prompt()
let lnum = num%10
let n = 1
let l = 0
let k=0
if(lnum===9){k=1}
while(num/n>=1){
n=n*10
l++
}
for(let i=0;i<=l;i++){
num=(num-lnum)/10
lnum=num%10
if(lnum===9){
k++
}else{
}}
console.log(k)
 
