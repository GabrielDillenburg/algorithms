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

      console.log(this.last === this.first)

      this.last = newNode

      console.log(this.first)
    }
    this.length++
    // console.log(JSON.stringify(myStack, null, 4))
    return newNode
  }

  dequeue () {
    if (!this.first) {
      return null
    }

    const holdingPointer = this.first
    this.last = this.first.next
    this.length--
    
    if (this.length === 0) {
      this.bottom = null
    }

    return this
  }

}

const myStack = new Queue()

myStack.enqueue('google')
myStack.enqueue('amazon')
myStack.enqueue('apple')
