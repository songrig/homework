3//
function sumofdigits(sum){
    if(sum%10==sum){
       return sum
    }
return sumofdigits((sum-sum%10)/10+sum%10)
}
 
1//
let i = 0
function DontUseUnshift(array) {
    if(array.length<=1){
    return []
    }
        if(i == array.length -1) {
            array.pop()
            return array
       } else {
               array[i] = array[i+1]
               i++
              return DontUseUnshift(array)
              }
}

2//
function flattenList(arr) {
  return arr.reduce(
    (acc, el) =>
      Array.isArray(el) ? acc.concat(flattenList(el)) : acc.concat(el),
    [],
  );
}