class HashTable {
  constructor(size) {
    this.arr = new Array(size);
    this.size = size;
  }

  hash(key) {
    let index = 0;
    for (let i = 0; i < key.length; i++) {
      index += key.charCodeAt(i);
    }
    return index % this.size;
  }

  set(key, val) {
    const bucket = [key, val];
    const index = this.hash(key);
    this.arr[index] = bucket;
  }

  get(key) {
    const index = this.hash(key);
    console.log(this.arr[index][1]);
  }
}

const table = new HashTable(5);
table.set("name", "Kiran");
table.set("age", 21);
console.log(table.arr);