/*Learn the concepts of String. Complete at least three sample workouts.
Eg: Write a function to replace each alphabet in the given string with another
alphabet occurring at the n-th position from each of them.
*/

function replaceWithNthNumber(str,n){   
    let a='abcdefghijklmnopqrstuvwxyz'.split('')
    str=str.split('')
    for(let i in str ){
        let alphabetPos = a.indexOf(str[i])

        replacedPos= (alphabetPos+n >26)? (alphabetPos+n-26): (alphabetPos+n)
        str[i] = a[replacedPos]
    }
    return str.join('')
}

let str= 'hello', n=3
console.log(replaceWithNthNumber(str,n));