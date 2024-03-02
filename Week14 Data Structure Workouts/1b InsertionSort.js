function insertionSort(a) {
    for(let i=1;i<a.length;i++){
        let NTI= a[i], j= i-1
        while( j>=0 && NTI<a[j] ){
            a[j+1]=a[j]
            a[j]=NTI
            j--
        }
    }
    return a
}

let a = [10, 6, 8, 20, -2];
console.log(insertionSort(a));
