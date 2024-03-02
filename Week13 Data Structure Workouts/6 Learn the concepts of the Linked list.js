//Construction of doubly linked list 
//Convert array to a linked list
//Add a node at the end and beginning
//Delete node with the value specified
//Insert a node after & before a node with x data

class Node{
    constructor(val){
        this.val=val
        this.next= null
        this.previous= null
    }
}

class LinkedList{

    constructor(){
        this.head= null
        this.tail= null
        this.size=0
    }

    prepend(val){
        let node=new Node(val)
        if(this.size){
            this.head.previous=node
            node.next= this.head
        }else{
            this.tail = node
        }
        this.head=node
        this.size++
    }

    append(val){
        let node= new Node(val)
        if(this.size){
            this.tail.next=node
            node.previous= this.tail
        }else{
            this.head = node
        }
        this.tail= node
        this.size++
    }

    display(){
        let print='', curr=this.head
        while(curr){
            print+=curr.val+' '
            curr=curr.next
        }
        return console.log(print);
    }

    displayReverse(){
        let print='', curr=this.tail
        while(curr){
            print+=curr.val+' '
            curr=curr.previous
        }
        return console.log(print);
    }

    arrayToList(arr){
        let a=arr
        while(a.length){
            this.prepend(a.pop())
        }
    }

    deleteWithValue(val){
        let curr= this.head
        for(let i=0;i<this.size;i++){
            if(curr.val===val && i==0){
                this.head.next.previous=null
                this.head= this.head.next
                return this.size--
            }else if(curr.val===val && i==this.size-1){
                this.tail.previous.next=null
                this.tail= this.tail.previous
                return this.size--
            }else if(curr.val===val){
                curr.next.previous =curr.previous
                curr.previous.next= curr.next
                return this.size--
            }
            curr= curr.next
        }
    }

    insertBeforeAndAfter(xVal,valToBeInserted){
        let curr= this.head
        for(let i=0;i<this.size;i++){
            if(xVal===curr.val && i===0){
                this.prepend(valToBeInserted)

            }else if(xVal===curr.val && i===this.size-1){
                this.append(valToBeInserted)
            }else if(xVal===curr.val){

            }
        }
    }

    removeDuplicates(){
    }


   
}


let list =new LinkedList()
// list.prepend(10)
// list.prepend(10)
// list.append(20)
// // list.append(30)
// // list.display()
// // console.log(list.head);
// list.arrayToList([1,2,3,4,5])
// list.display()
// list.deleteWithValue(4)
// list.display()
// list.displayReverse()
list.arrayToList([1,2,3,4,5,6,7,8,9])
list.display()
list.displayReverse()