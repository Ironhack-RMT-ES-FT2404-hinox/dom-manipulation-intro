console.log("aprendiendo DOM")


console.log(document)

// web scrapping
// analizar y buscar cosas en la pagina

// querySelector => buscar algo dentro de una sección de la pagina
const mainTitleNode = document.querySelector("h1") // el primer h1 que consiga
console.log(mainTitleNode)
console.log(mainTitleNode.innerText) // el texto interno del nodo

//h1 es un nodo
const secondTitleNode = document.querySelector("#second-title")
console.log(secondTitleNode)
console.log(secondTitleNode.innerText)
console.log(secondTitleNode.innerHTML)
console.log(secondTitleNode.id)
console.log(secondTitleNode.className)

const secondTitleSpanNode = document.querySelector("#second-title span")
console.log(secondTitleSpanNode)

// querySelectorAll busca TODO los nodos que cumplan una condicion
const parrafoNodeList = document.querySelectorAll(".some-text")
console.log(parrafoNodeList)

// Listas de nodos NO son arrays, pero se comportan como arrays y tienen formas de acceso y metodos similares

parrafoNodeList.forEach((eachNode) => {
  console.log(eachNode.innerText)
})
// tambien podemos hacer bucle tradicional for


// podemos acceder a elementos de DOM y sus propiedades sin almacenarlos en variables:
document.querySelectorAll(".some-text").forEach((eachNode) => {
  console.log(eachNode.innerText)
})

const cardNodeList = document.querySelectorAll(".card")

console.log(cardNodeList[1].innerHTML) // podemos acceder con notación de corchetes

cardNodeList.forEach((eachCardNode) => {
  console.log(eachCardNode)
  // busquedas anidadas en otros nodos
  const parrafoCardNode = eachCardNode.querySelector("p")
  console.log(parrafoCardNode.innerText)
})


// Manipulacion de DOM

const thirdTitleNode = document.querySelector("#third-title")
// console.log(thirdTitleNode.innerText)

// thirdTitleNode.innerText = "Modificando el titulo"

// Eventos => interacciones del usuario que van a causar cambios en el DOM

// addEventListener tienen dos argumentos:
// 1. El tipo de evento
// 2. la funcion a ejecutar cuando eso ocurra
thirdTitleNode.addEventListener("mouseenter", () => {
  console.log("patata")
  thirdTitleNode.innerText = "Modificando el titulo"
})

thirdTitleNode.addEventListener("mouseleave", () => {
  thirdTitleNode.innerText = "Aprendiendo a manipular el DOM"
})

thirdTitleNode.addEventListener("click", (event) => {
  console.log(event) // TODA LA INFORMACIÓN DEL EVENTO OCURRIDO
  thirdTitleNode.innerText = "Clickando sobre el titulo"
})


const buttonNode = document.querySelector("#count button")
console.log(buttonNode)

buttonNode.addEventListener("click", () => {
  console.log("clickando")

  const countNode = document.querySelector("#count h2 span")
  console.log(countNode)
  
  countNode.innerText = Number(countNode.innerText) + 1
  // countNode.innerText++
})


const deleteBtnNode = document.querySelector("#delete-btn")
console.log(deleteBtnNode)

deleteBtnNode.addEventListener("click", () => {

  console.log("intentando borrar")
  // hacer desaparecer el boton
  // deleteBtnNode.remove()

  // thirdTitleNode.remove()
  document.querySelector("body").remove() // se borra toda la pagina

})


const addBtnNode = document.querySelector("#add-form button")
console.log(addBtnNode)

addBtnNode.addEventListener("click", () => {
  console.log("intentando agregar")

  //1. tenemos que extraer el valor que escriba el usuario en el input
  const inputNode = document.querySelector("#name")
  console.log(inputNode.value) // los inputs NO tienen innerText

  //2. tenemos crear un nuevo elemento de li que tendra el texto que escriba el usuario
  const liNode = document.createElement("li") // creamos un elemento que no existia
  liNode.innerText = inputNode.value
  console.log(liNode)


  //3. agregar el li a el ul
  const ulNode = document.querySelector("#add-list")
  ulNode.append(liNode) // a la lista le añado el li. Siempre se añade al final

})


// modificar id y classes (para aplicar estilos)

const finalThoughtsNode = document.querySelector("#final-thoughts")

finalThoughtsNode.addEventListener("click", () => {

  console.log(finalThoughtsNode.id)
  finalThoughtsNode.id = "nuevo-id"

  // finalThoughtsNode.className = "blue-container" // esto reemplaza cualquier clase anterior con esta nueva

  // agregar una nueva clase
  // finalThoughtsNode.classList.add("blue-container")
  // remover una clase
  // finalThoughtsNode.classList.remove("final-card")
  // toggle => si está, remuevela, si no está añadela
  finalThoughtsNode.classList.toggle("blue-container")
  // saber si una clase esta incluida
  console.log( finalThoughtsNode.classList.contains("blue-container") )

})


// modificar directamente los estilos

const eventTitleNode = document.querySelector("#event-title")
eventTitleNode.addEventListener("mouseenter", () => {
  
  // eventTitleNode.innerText = "otro texto"
  console.log(eventTitleNode.style) // incluye TODOS los estilos del elemento

  eventTitleNode.style.color = "red"
  eventTitleNode.style.padding = "20px"
  eventTitleNode.style.backgroundColor = "darkgray"
  eventTitleNode.style.border = "dotted 3px blue"
  eventTitleNode.style.backgroundImage = 'url("https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/800px-SpongeBob_SquarePants_character.svg.png")'

  eventTitleNode.innerHTML = "Nuevo titulo <span>con otros span adentro</span>"


})


const lastBtnNode = document.querySelector("#styles-btn")


let isDarkMode = false;
lastBtnNode.addEventListener("click", () => {
  
  const bodyNode = document.querySelector("body")
  if (isDarkMode === false) {
    bodyNode.style.backgroundColor = "rgb(25,25,25)"
    bodyNode.style.color = "white"
    isDarkMode = true
  } else {
    bodyNode.style.backgroundColor = "white"
    bodyNode.style.color = "black"
    isDarkMode = false
  }


})