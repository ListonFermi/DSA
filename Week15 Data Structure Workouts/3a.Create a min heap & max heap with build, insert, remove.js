class MaxHeap {
  constructor() {
    this.array = [];
  }

  insert(val) {
    let A= this.array
    A.push(val)
    let i= A.length-1
    while( A.length >1 && A[i] > A[this.parent(i)] ){
        [ A[i], A[this.parent(i)] ] = [ A[this.parent(i)], A[i] ]
        i= this.parent(i)
    }   


  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  child1(index) {
    return 2 * index + 1;
  }

  child2(index) {
    return 2 * index + 2;
  }
}

const heap = new MaxHeap();
heap.insert(10);
heap.insert(20);
heap.insert(30);
heap.insert(100);
heap.insert(50);
heap.insert(101);
heap.insert(51);
heap.insert(53);
console.log(heap.array);
