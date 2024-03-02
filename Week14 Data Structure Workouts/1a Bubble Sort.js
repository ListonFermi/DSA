function bubbleSort(a){
    let swapped, temp
    do{
        swapped=false
        for(let i=0;i<a.length-1;i++){
            if(a[i]>a[i+1]){
                temp= a[i]
                a[i]= a[i+1]
                a[i+1]= temp
                swapped= true
            }
        }

    }while(swapped)
    return a
}

let a=[5,4,6,8,7,9]
console.log(bubbleSort(a));