/*
We can avoid collsions in two ways
1. Open hashing - Open to add more elements in same index
2. Closed hashing- Not adding more elements in same index

In closed hashing there are 3 methods: 
1. Linear probing
2. Quadratic probing
3. Double hashing

In closed hashing this is the Linear probing:
:
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
      index = index % this.capacity; //making the index less than the capacity of the array
      if(!this.array[index]) return index  //if the array postition is emtpy return the index
      
      for(let i=index;i<this.capacity;i++){
        if(!this.array[index]) return index
      }
      return console.log('Failed to hash');
    }
  
    set(key, value) {
        const index= this.hash(key)
        const bucket= [key,value]

        return this.array[index] = bucket
    }
  
    get(key) {
      const index = this.hash(key);
      return console.log(this.array[index]);
    }
  }
  
  const table = new HashTable(50);
  table.set("TN", "Tamil Nadu");
  table.set("KL", "Kerala");
  table.set("LK", "Ladak");
  table.set("AP", "Andhra Pradesh");
  table.set("TL", "Telungana");
  table.set("KA", "Karnataka");
  console.log(table.array);