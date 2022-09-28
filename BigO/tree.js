class Node {
  constructor (value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor () {
    this.root = null
  }

  insert (value) {
    const newNode = new Node(value)
    if (this.root === null) {
      this.root = newNode
      return this
    } else {
      let currentNode = this.root
      while (true) {
        if (value < currentNode.value) {
          //left
          if (!currentNode.left) {
            currentNode.left = newNode
            return this
          }
          currentNode = currentNode.left
        } else {
          //right
          if (!currentNode.right) {
            currentNode.right = newNode
            return this
          }
          currentNode = currentNode.right
        }
      }
    }
  }

  lookup (value) {
    let currentNode = this.root
    if (!currentNode) {
      return false 
    }
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left
      } else if (value > currentNode.value) {
        currentNode = currentNode.right
      } else if ( value === currentNode.value) {
        return currentNode
      }
    }
    return false
  }

  remove (value) {
    let currentNode = this.root
    if (!currentNode) {
      return false
    }
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left
        console.log(currentNode)

      } else if (value > currentNode.value) {
        currentNode = currentNode.right
      } else if ( value === currentNode.value) {
        const holdingPointer = currentNode
        console.log(holdingPointer)

        currentNode = currentNode.right
      } else if (!currentNode.right) {
        console.log(holdingPointer)
        const leaf = currentNode
        holdingPointer.right = leaf
        return this
      }
    }
  }
}



const MyBinaryTree = new BinarySearchTree()
MyBinaryTree.insert(50)
MyBinaryTree.insert(100)
MyBinaryTree.insert(150)
MyBinaryTree.remove(50)
console.log(JSON.stringify(MyBinaryTree))
