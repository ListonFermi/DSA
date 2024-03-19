/*
We can avoid collsions in two ways
1. Open hashing - Open to add more elements in same index
2. Closed hashing- Not adding more elements in same index

In open hashing this is the seperate chaining method:
*/

class HashTable {
  constructor(capacity) {
    this.capacity = capacity;
    this.array = new Array(capacity);
  }

  hash(key) {
    let index = 0;
    //Taking the sum of charCodes of all letters of the string
    for (let i in key) {
      index += key.charCodeAt(i);
    }
    return index = index % this.capacity; //making the index less than the capacity of the array
  }

  set(key, value) {
    const bucket = [key, value];
    const index = this.hash(key);

    if (Array.isArray(this.array[index])) {
      this.array[index].push(bucket);
    } else {
      this.array[index] = [bucket];
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.array[index].find( bucket=>bucket[0]===key )
    return console.log(bucket[1]);
  }
}

const table = new HashTable(50);
table.set("TN", "Tamil Nadu");
table.set("KL", "Kerala");
table.set("LK", "Ladak");
table.set("AP", "Andhra Pradesh");
table.set("TL", "Telungana");
table.set("KA", "Karnataka");
table.get("LK");
table.get("KL");
// console.log(table.array);
