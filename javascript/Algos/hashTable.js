class HashTable {
  constructor (size) {
    this.data = new Array(size)
  }

  // get unique values
  _hash(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash
  }

  set (key, value) {
    const address = this._hash(key)

    if (!this.data[address]) {
      this.data[address] = []
    }

    this.data[address].push([key, value])
  }

  get (key) {
    const address = this._hash(key)
    const currentBucket = this.data[address]

    //in case of colision, this solution will return only the first value 
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key)
          return currentBucket[i][1]
      }
      return undefined
    }
  }

  keys () {
    const keyArray = []
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        //in case of colision, this solution will return only the first key 
        keyArray.push(this.data[i][0][0])
      }
    }
    return keyArray
  }
}

const myHashTable = new HashTable(50)
myHashTable.set('grapes', 1000)
myHashTable.set('grapes', 54)
console.log(myHashTable.get('grapes'))
//console.log(myHashTable.keys())