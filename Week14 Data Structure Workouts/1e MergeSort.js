function mergeSort(a){

    if(a.length<2) return a
    
    const m= Math.floor(a.length/2)
    const leftArr= a.slice(0,m)
    const rightArr= a.slice(m)
    
    return merge(mergeSort(leftArr), mergeSort(rightArr) )
}

function merge(leftArr, rightArr){
    const sortedArr=[]
    while(leftArr.length && rightArr.length){
        if(leftArr[0]<rightArr[0]){
            sortedArr.push(leftArr.shift())
        }else{
            sortedArr.push(rightArr.shift())
        }
    }
    return [ ...sortedArr, ...leftArr, ...rightArr]
}

let a=[-2,6,20,8,10]
console.log(mergeSort(a));