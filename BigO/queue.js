class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor () {
    this.first = null
    this.last = null 
    this.length = 0
  }

  peek () {
    return this.first
  }

  enqueue (value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.first = newNode   
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    this.length++
    return newNode
  }

  dequeue () {
    if (!this.first) {
      return null
    }
    if (this.length === 0) {
      this.last = null
    }
    const holdingPointer = this.first //if is necessary use this reference after dequeue
    this.first = this.first.next
    this.length--
    return this
  }
}

const myStack = new Queue()

myStack.enqueue('google')
myStack.enqueue('amazon')
myStack.enqueue('apple')
myStack.dequeue()
console.log(JSON.stringify(myStack))
