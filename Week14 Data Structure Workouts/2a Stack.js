class Stack{
    constructor(capacity){
        this.stack=[]
        this.capacity = capacity
    }

    push(val){
        if(this.stack.length < this.capacity){
            this.stack.push(val)
        }else{
            console.log('stak overflow');
        }
    }

    pop(){
        if(this.stack.length>0){
            this.stack.pop()
        }else{
            console.log('stack underflow');
        }
    }

    display(){
        console.log(this.stack);
    }
}

let stack= new Stack(5)
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(40)
stack.push(40)
stack.display()
stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.display()