class MaxHeap {
  constructor() {
    this.array = [];
  }

  insert(val) {
    let A = this.array;
    A.push(val);
    let i = A.length - 1;
    while (A.length > 1 && A[i] > A[this.parent(i)]) {
      [A[i], A[this.parent(i)]] = [A[this.parent(i)], A[i]];
      i = this.parent(i);
    }
  }

  extractMax() {
    let A = this.array;
    A[0] = A.pop();
    let i = 0;

    while (i < A.length) {
      let C =
        A[this.child1(i)] > A[this.child2(i)] ? this.child1(i) : this.child2(i);
      if (A[i] < A[C]) {
        [A[i], A[C]] = [A[C], A[i]];
        i= C
      } else {
        break;
      }
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
heap.extractMax();
console.log(heap.array);

class MinHeap {
  constructor() {
    this.array = [];
  }

  insert(val) {
    let A = this.array;
    A.push(val);
    let i = A.length - 1;
    while (A.length > 1 && A[i] < A[this.parent(i)]) {
      [A[i], A[this.parent(i)]] = [A[this.parent(i)], A[i]];
      i = this.parent(i);
    }
  }

  extractMin() {
    const A = this.array;
    A[0] = A.pop();
    let i = 0;
    while (i < A.length) {
      let C =
        A[this.child1(i)] < A[this.child2(i)] ? this.child1(i) : this.child2(i);
      if (A[i] > A[C]) {
        [A[i], A[C]] = [A[C], A[i]];
        i = C;
      } else {
        break;
      }
    }
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  child1(i) {
    return 2 * i + 1;
  }

  child2(i) {
    return 2 * i + 2;
  }
}

// let minHeap = new MinHeap();
// minHeap.insert(100);
// minHeap.insert(9);
// minHeap.insert(50);
// minHeap.insert(25);
// minHeap.insert(35);
// minHeap.insert(7);
// minHeap.extractMin()
// minHeap.extractMin()
// console.log(minHeap.array);

class PriorityQueue {
  constructor() {
    this.array = [];
  }

  enqueue(val, priority) {
    let bucket = [val, priority];
    let A = this.array;
    A.push(bucket);
    console.log(A);
    let i = A.length - 1;
    while (A.length > 1 && A[i][1] < A[this.parent(i)][1]) {
      [A[i], A[this.parent(i)]] = [A[this.parent(i)], A[i]];
      i= this.parent(i)
      if(this.parent(i)<0) break
    }
  }

  dequeue(){

  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }
}

// let priorityQueue = new PriorityQueue();
// priorityQueue.enqueue(10, 3);
// priorityQueue.enqueue(15, 5);
// priorityQueue.enqueue(8, 2);
// priorityQueue.enqueue(8, 6);
// priorityQueue.enqueue(8, 4);
// priorityQueue.enqueue(9, 1);
// console.log(priorityQueue.array);