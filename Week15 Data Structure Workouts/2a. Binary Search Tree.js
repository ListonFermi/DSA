class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.noOfNodes = 0;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(val) {
    const node = new Node(val);
    this.noOfNodes++;
    if (this.isEmpty()) {
      return (this.root = node);
    }

    let curr = this.root;
    while (curr) {
      if (val < curr.val) {
        if (curr.left) curr = curr.left;
        else return (curr.left = node);
      } else {
        if (curr.right) curr = curr.right;
        else return (curr.right = node);
      }
    }
  }

  contains(val, curr = this.root) {
    if (curr) {
      if (curr.val === val) return true
      let left = this.contains(val, curr.left);
      let right= this.contains(val, curr.right);

      if(!left && !right) return false
      else return true
    }     
  }

  postOrder(curr = this.root) {
    if (curr) {
      this.postOrder(curr.right);
      this.postOrder(curr.left);
      console.log(curr.val);
    }
  }

  preOrder(curr = this.root) {
    if (curr) {
      this.preOrder(curr.left);
      this.preOrder(curr.right);
      console.log(curr.val);
    }
  }

  inOrder(curr = this.root) {
    if (curr) {
      this.preOrder(curr.left);
      console.log(curr.val);
      this.preOrder(curr.right);
    }
  }

  delete(val, curr= this.root){
    if(curr.right == val && !curr.right.right && !curr.right.left){
      return curr.right =null
    }else if(curr.left == val && !curr.left.right && !curr.left.left){
      return curr.left =null
    }

    if(curr){
      this.delete(val, curr.right)
      this.delete(val, curr.left)
    }

  }

  display() {
    return console.log(this.root);
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(3);
tree.insert(15);
tree.insert(16);
tree.insert(12);
tree.insert(24);
tree.postOrder();
tree.preOrder();
tree.inOrder();
console.log(tree.contains(12));
console.log(tree.noOfNodes);
// tree.delete(16)