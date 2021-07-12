\\4
function getUniqe(list){
    let result=[];
    for(let i=0;i<list.length;i++){
        let isIncluded=false;
        for(let j=i+1;j<list.length;j++){
            if(list[i]===list[j]){
               isIncluded=true;
               break;
            }
        
        }if(!isIncluded){
           result.push(list[i]);
        }
    }
    return result;
    
}

\\1
function old (list){
    let resodd = []
    let reseven = []
    for(let i = 0;i<list.length;i++){
        if(list[i]%2===0){
            resodd.push(list[i])
        }else{reseven.push(list[i])}

    }return resodd
    return reseven
}
 \\5
function oldStr(str,letter1,letter2){
    let newstr=''
    for(let i = 0;i<str.length;i++){
        if(str[i]===letter1){
            newstr+=letter2
        }
            else{
                newstr+=str[i]
            }
    }return newstr;
}