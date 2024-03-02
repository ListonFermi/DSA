/*
Learn about Linear Search & Binary Search. Complete at least 3 sample workouts in each of them.
*/

// Leetcode Ques No : 704 

let nums=[1,2,3,4,5]
search(nums,4)

var search = function(nums, target) {
    let left=0, right= nums.length-1
    while(left<=right){
        let midIndex= Math.floor( (left+right)/2  )
        let midValue= nums[ midIndex   ]

        if(target==midValue)
            return midIndex


        if(target < midValue){
            right= midIndex-1
        }else{
            left= midIndex+1
        }
    }

    return -1
};

console.log();