class TreeNode {
  constructor(val) {
    this.val = val;
    this.children = [];
  }
}

class KaryTree {
  constructor(val) {
    this.root = null;
    this.k = val;
  }

  insert(val) {
    const node = new TreeNode(val);
    if (!this.root) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(parent, newNode) {
    if (parent.children.length < this.k) {
      parent.children.push(newNode);
    } else {
      for (let child of parent.children) {
        this.insertNode(child, newNode);
      }
    }
  }

  preOrder(curr = this.root) {
    if (curr) {
      console.log(curr.val);
      for (let child of curr.children) {
        this.preOrder(child);
      }
    }
  }

  breadthFirstSearch() {
    if (!this.root) return;
    const queue = [this.root];

    while (queue.length) {
      const curr = queue.shift();
      console.log(curr.val);
      
      for (let child of curr.children) {
        queue.push(child);
      }
    }
  }
}

const kary = new KaryTree(3);
kary.insert(10);
kary.insert(20);
kary.insert(30);
kary.insert(40);
kary.insert(50);
// kary.preOrder();
kary.breadthFirstSearch()
