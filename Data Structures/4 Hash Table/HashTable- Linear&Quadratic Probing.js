class HashTable {
  constructor(capacity) {
    this.array = new Array(capacity);
    this.capacity = capacity;
  }

  hash(key) {
    let index = 0;
    for (let i = 0; i < key.length; i++) {
      index += key.charCodeAt(i);
    }
    index %= this.capacity;
    return this.quadraticProbing(index); //call linear or quadratic probing method
  }

  linearProbing(index) {
    let start = index, i = 0;
    while (start < this.capacity) {
      index += i;
      if (this.array[index] === undefined) return index;
      start++;
      i++;
    }
    return -1;
  }

  quadraticProbing(index) {
    let start = index, i = 0;
    while (start < this.capacity) {
      index += i*i;
      if (this.array[index] === undefined) return index;
      start++;
      i++;
    }
    return -1;
  }

  set(key, value) {
    const index = this.hash(key);

    if (index === -1) return console.log("failed to hash");
    this.array[index] = [key, value];
  }

  get(key){
    let index = 0;
    for (let i = 0; i < key.length; i++) {
      index += key.charCodeAt(i);
    }
    index %= this.capacity;
    //get method for quadratic probing:
    let start = index, i = 0;
    while (start < this.capacity) {
      index += i*i;
      if (this.array[index][0] === key) break;
      start++;
      i++;
    }
    return console.log(this.array[index][1]);
  }
}

const table = new HashTable(50);
table.set("TN", "Tamil Nadu");
table.set("NT", "Delhi NCT");
table.get("NT")
console.log(table.array);
