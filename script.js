function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  //Pegar tag imagem e substituir  imagem
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Mayke de Óculos escuros")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
  //Se tiver light mode, adicionar a imagem light
  //Se tiver em light mode, manter a imagem
}
