
class Node {
  constructor (value) {
    this.value = value
    this.right = null
    this.left = null
  }
}

class BinarySearchTree {
  constructor () {
    this.root = null
  }

  dataTraversed = []

  insert (value) {
    const newNode = new Node (value)

    if (!this.root) {
      this.root = newNode
      return this
    } else {
      let currentNode = this.root
      while (true) {
        if (value < currentNode.value) {

          if (!currentNode.left) {
            currentNode.left = newNode
            return this
          }
          currentNode = currentNode.left
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode
            return this
          }
          currentNode = currentNode.right
        }
      }
    }
  }

  helper(root, res) {
    console.log('root1>>>>>', root)

    if (root) {
      if (root.left) {
        this.helper(root.left, res);
      }
      
      res.push(root.value);
  
      if (root.right) {
        this.helper(root.right, res);
      }
    }
    console.log('root2>>>>>', root)
  }

  inOrderTraversal (root) {
    //console.log(root)
    let res = [];
    this.helper(root, res);
    return res;
  }
}

const tree5 = new Node(8);
tree5.left = new Node(6);
tree5.right = new Node(9);
tree5.left.left = new Node(5);
tree5.left.right = new Node(7);
tree5.right.right = new Node(10);

const binary = new BinarySearchTree()
console.log(binary.inOrderTraversal(tree5));

