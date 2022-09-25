// inner loop to find the first one O(nˆ2)
function firstRecurringCharacter (input) {
  for (let i = 0; i < input.length; i++) {
      for (let j = i + 1; j < input.length; j++) {
      if (input[i] == input[j]) {
        return i
      }
    }
  }
  return input[i]
}

// try now with O(n) - hash tables
function firstRecurringCharacter2 (input) {
  const map = {}
  for (let i=0; i < input.length; i++) {
    console.log(map)
    if (map[input[i]]) {
      return input[i]
    } else {
      map[input[i]] = true
    }
  }
  return undefined
}

const collection = [1,2,3,4,5,6]
console.log(firstRecurringCharacter2(collection))




class HashTable {
  constructor (size) {
    this.data = new Array(size)
  }

  _hash(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash
  }

  set (key, value) {
    let address = this._hash(key)
    if (!this.data[address]) {
      this.data[address] = []
    }

    this.data[address].push([key, value])
  }

  get (key) {
    const address = this._hash(key)
    const currentBucket = this.data[address]
    
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1]
        }
      }
    }
    return undefined
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
myHashTable.set('apples', 54)
console.log(myHashTable.keys())

