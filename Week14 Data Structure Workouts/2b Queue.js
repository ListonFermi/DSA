class Queue{
    constructor(){
        this.items= {}
        this.start=0
        this.end= 0
    }

    enqueue(val){
        this.items[this.end++]= val
    }

    dequeue(){
        delete this.items[this.start++]
    }

    display(){
        console.log(this.items);
    }

    size(){
        console.log(this.end-this.start);
    }
}

let queue= new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.display()
queue.dequeue()
queue.dequeue()
queue.display()
queue.size()





