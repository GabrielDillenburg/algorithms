function intersection (collection1, collection2) {
  const arrayIntersection = []
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
