function selectionSort(a){
    let temp
    for(let i=0;i<a.length;i++){
        for(let j=i+1;j<a.length;j++){
            if(a[i]>a[j]){
                temp = a[i]
                a[i]=a[j]
                a[j]= temp
            }
        }
    }
    return a
}

let a=[-2,6,20,8,10]
console.log(selectionSort(a));