

function isDollarDeleteEqual (collection) {

  const getFinalString  = (str) => {
    const dolarChar = '$'
    const dolarIndex = str.indexOf(dolarChar)
    const strLen = str.length

    return str.includes(dolarChar) ? str.slice(dolarIndex, strLen) : str
  }


  const a = () => {
    for (let i = 0; i < collection.length -1; i++) {
    let el = collection[i]
    const finalStr = getFinalString(el)
    el = finalStr
  }}

  for (let i = 0; i < collection.length -1; i++) {
    let el = collection[i]
    
  }

}




const input = ["f$st", "st"]
isDollarDeleteEqual(input);