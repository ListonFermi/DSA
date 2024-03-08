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
  }

  insert(val) {
    const node = new Node(val);
    let curr = this.root;

    if (!this.root) return (this.root = node);

    while (curr) {
      if (val < curr.val) {
        if (!curr.left) return (curr.left = node);
        else curr = curr.left;
      } else {
        if (!curr.right) return (curr.right = node);
        else curr = curr.right;
      }
    }
  } //Time: O(logn) no.of nodes or O(h) height of the bst | Space: O(n)

  /*delete(val, curr= this.root) {
    if(curr.right.val ===val && !curr.right)

    if(curr){
      this.delete(val,curr.left)
      this.delete(val,curr.right)
    }
  } */

  //DFS
  preOrder(curr = this.root) {
    if (curr) {
      console.log(curr.val);
      this.preOrder(curr.left);
      this.preOrder(curr.right);
      /**
       * Order changes for post order and inorder:-
       * post order: left, right and curr
       * inorder: left, curr, right 
       * */ 
    }
  } //Time: O(n) no.of nodes | Space: O(h) height of bst

  //BFS
  breadthFirstSearch() {
    if (!this.root) return;
    const queue = [this.root];
    let curr

    while (queue.length) {
      curr = queue.shift();
      console.log(curr.val);
      if(curr.left) queue.push(curr.left)
      if(curr.right) queue.push(curr.right)
    }
  } //Time: O(n) no.of nodes [If linkedlist is used for queue] | Space: O(w) width of the tree 

  min(curr= this.root){
    if(curr.left){
      return this.min(curr.left)
    }else{
      return curr.val
    }
    /**Same way you can find the rightmost leaf for the max value */
  } //Time: O(logn) no.of nodes or O(h) ht.of the tree  | Space: O(h)
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(20);
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(2);
console.log(bst.root);
// bst.preOrder();
// bst.breadthFirstSearch();
console.log(bst.min()); 
