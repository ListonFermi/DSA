function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target === array[mid]) return mid;
    else if (target < array[mid]) right = mid - 1;
    else left = mid + 1;
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 1));

function binarySearchRecursive(a, t, l = 0, r = a.length - 1) {
  if (l > r) return -1;

  m = Math.floor((l + r) / 2);

  if (t === a[m]) return m;
  else if (t < a[m]) return binarySearchRecursive(a, t, l, m - 1);
  else if (t > a[m]) return binarySearchRecursive(a, t, m + 1, r);
}

console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6, 7], 8));
