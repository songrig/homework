//1
function getNewList(N1,N2,step){
    let list=[]
    N1<=N2
    for(let i=0;i=Math.ceil((N2-N1)/step);i++){
          list.push(N1); N1=N1+step
    }
   return list
}


//2
function findMaxEl(list){
    let res =0
    for(let i=0;i <list.length;i++){
       if(list[i]>res){
            res=list[i]
       } 
    }return res 
}
//3
function listReverse(list){
  
  let result =[]
   
     for(let i=0;i<list.length;i++){
   
    	 result.unshift(list[i])
   
    }
 return result

}

//4
function getMultiply(list){
    let New =[]
    for(let i=0;i<list.length-1;i++){
        New.push(list[i]*list[i+1])
        }
    return New
}

//5

function getNewList(list,n){
    let result=[]
    for(let i=0;i<list.length;i++){
        if(list[i]!==n){
            result.push(list[i])
        }
    }
   if(result.length==list.length){
         result.push(n)
}
    return result
}