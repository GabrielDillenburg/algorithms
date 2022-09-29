function intersection (collection1, collection2) {
  const arrayIntersection = []
  // const len1 = collection1.length
  // const len2 = collection2.length
  // const biggerLength = len1 > len2 ? len1 : len2
  // const bigCollection = collection1.length === biggerLength ? collection1 : collection2
  // const smallCollection = collection1.length < biggerLength ? collection1 : collection2

  const map = {}
  for (let i = 0; i < collection1.length; i++) {
    const value = collection1[i]
    if (!map[value]) {
      map[value] = true
    }
  }

  for (let i = 0; i < collection2.length; i++) {
    const value = collection2[i]
    if (map[value]) {
      arrayIntersection.push(value)
    }
  }
  return arrayIntersection
}

const collection2 = [1, 0, 7]
const collection1 = [1, 3, 5, 7]

console.log('inter', intersection(collection1, collection2))
