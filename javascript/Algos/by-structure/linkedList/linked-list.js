class Node {
  constructor(element) {
    this.element = element;
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // add an element to the end of the list
  add(element) {

    let current;
    const newNode = new Node(element)

    if (this.head === null) {
      this.head = newNode;
    } else {
      current = this.head;

      while(current.next) {
        current = current.next
      }

      current.next = newNode
    }

    this.size++
  }
}

const list = new LinkedList()
list.add(5)
console.log(list)