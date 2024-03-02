function quickSort(a) {
  if (a.length < 2) {
    return a;
  }
  let pivot = a[a.length - 1],
    left = [],
    right = [];
  for (let i = 0; i < a.length-1; i++) {
    if (a[i] < pivot) {
      left.push(a[i]);
    } else {
      right.push(a[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

let a=[-2,6,20,8,10]
console.log(quickSort(a));