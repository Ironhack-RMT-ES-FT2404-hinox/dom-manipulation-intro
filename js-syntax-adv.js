console.log("probando")


// map
// filter = array
// sort o reduce

let numbers = [ 47, 29, 1, 3, 30]

numbers.map((eachNum) => {
  return eachNum * 10
}).filter((eachNum) => {
  return eachNum > 100
}).sort((numA, numB) => {
  return numA - numB
}).forEach((eachNum) => {
  console.log("elementos en orden", eachNum)
})
// .reduce((acc, num) => {
//   return acc + num
// }, 0)

//* ejemplo de funciones reducidad a una linea
//* la norma es: si la funcion solo tiene una linea, se puede escribir todo en la misma linea, se remueven las llaves, y la palabra return queda implicita (no hace falta)

// const saludar = (persona) => {
// return `Hola ${persona}`
// }
const saludar = (persona) => `Hola ${persona}`


numbers
.map((eachNum) => eachNum * 10)
.filter((eachNum) => eachNum > 100)
.sort((numA, numB) => numA - numB)
.forEach((eachNum) => console.log("elementos en orden", eachNum))

// .reduce((acc, num) => {
//   return acc + num
// }, 0)

// console.log(result)


//* ejemplo de lo mismo de arriba con variables para entenderlo mejor

let resultMap = numbers.map((eachNum) => {
  return eachNum * 10
})
let resultFilter = resultMap.filter((eachNum) => {
  return eachNum > 100
})
let resultSort = resultFilter.sort((numA, numB) => {
  return numA - numB
})
resultSort.forEach((eachNum) => {
  console.log("elementos en orden", eachNum)
})