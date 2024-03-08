function stringReverseRecursive(str, revStr='', i=0){
    if(i===str.length) return revStr

    revStr += str[str.length-1-i]
    i++
    
    return stringReverseRecursive(str, revStr, i)
}

console.log(stringReverseRecursive('hello'));