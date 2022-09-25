class LinkedList {
  constructor (value) {
    this.head = {
      value: value,
      next: null
    },
    this.tail = this.head,
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value,
      next: null
    }
    this.head.next = newNode
    this.tail = newNode
    this.length++
  }

  prepend (value) {
    const newNode = {
      value,
      next: null
    }
    newNode.next = this.head
    this.head = newNode
    this.length++
  }

  // 'prepend --> 10 --> 30 ---> null
  // 'prepend --> 10 --> 99 --> 30 ---> null


  insert (index, value) {
    const newNode = {
      value,
      next: null
    }

    if (index >= this.length) {
      return this.append(value)
    }

    if (index == 0) {
      return this.prepend(value)
    }
    
    const leader = this.traverseToIndex(index-1)
    const holdingPointer = leader.next 
    leader.next = newNode
    newNode.next = holdingPointer
    this.length++
    return this.printList()
  }

  traverseToIndex (index) {
    let counter = 0
    let currentNode = this.head

    while (counter !== index) {
      currentNode = currentNode.next
      counter++
    }
    return currentNode
  }

  remove (index) {
    if (index < 0 || index > this.length) {
      throw new Error('Index doesn`t exist')
    }
    const leader = this.traverseToIndex(index-1)
    const oldNext = this.traverseToIndex(index+1)
    leader.next = oldNext
    this.length--
    return this.printList()
  }

  printList () {
    const array = []
    let currentNode = this.head
    while (currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array
  }
}


const myLinkedList = new LinkedList(10)
myLinkedList.append(20)
myLinkedList.append(30)
myLinkedList.prepend('prepend')
console.log(myLinkedList.insert(2, 99))
console.log(myLinkedList.remove(3))

