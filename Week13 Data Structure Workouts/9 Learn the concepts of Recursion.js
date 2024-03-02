//Fibonacci Number- to find the nth fibonacci number

function fibonacci(n){
    let fib=[0,1]
    for(let i=2;i<=n;i++){
        fib.push(fib[i-1]+fib[i-2])
    }
    return fib
}

function recursiveFibonacci(n){
    if(n<2) return 1
    return recursiveFibonacci(n-1)+recursiveFibonacci(n-2)
}

//Factorial of Number

function factorial(n){
    let ans=1
    for(let i=1;i<=n;i++){
        ans*=i
    }
    return ans
}

function recursiveFactorial(n){
    if(n==1) return 1
    return recursiveFactorial(n-1)*n
}

console.log(recursiveFactorial(5));

//Binary search

function binarySearch(array,target){
    let left=0, right=array.length-1
    while(left<=right){
        let mid= Math.floor( (left+right)/2   )
        if(target===array[mid]) return mid
        if(target<array[mid]){
            right=mid-1
        }else{
            left= mid+1
        }
    }
    return -1
}

console.log(binarySearch([1,2,3,4,5],5));

//recursive binary search

function recursiveBinarySearch(array, target, mid=Math.floor( array.length/2 )){

    if(mid === array[array.length-1] && array[array.length-1]!=target) return -1

    if(target==array[mid]){
        return mid
    }
    if(target<array[mid]){
        return recursiveBinarySearch(array, target, mid-1  )
    }else{
        return recursiveBinarySearch(array,target, mid+1)
    } 
}

console.log(recursiveBinarySearch([1,2,3,4,5],3));