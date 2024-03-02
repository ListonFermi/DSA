class HashTable{
    constructor(capacity) {
        this.table= new Array(capacity)
        this.capacity= capacity
    }

    hash(key){
        let index=0
        for(let i=0;i<key.length;i++){
            index+=key.charCodeAt(i)
        }
        return index%this.capacity
    }

    set(key,val){
        this.table[this.hash(key)]= val
    }

    get(key){
        console.log(this.table[this.hash(key)]);
    }

    remove(key){
        this.table[this.hash(key)]
    }

    display(){
        console.log(this.table);
    }
}

let hashTable= new HashTable(5)
hashTable.set('in','India')
hashTable.set('pk','Pakistan')
console.log(hashTable.hash('sl'));
console.log(hashTable.hash('bd'));
console.log('l'.charCodeAt(0));
hashTable.set('sl','Sri Lanka')
hashTable.set('bd','Bangladesh')
hashTable.display()