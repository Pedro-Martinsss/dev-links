function toggleMode() {
  const html = document.documentElement

  /*if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }*/
  const imagem = document.querySelector("#profile img")

  html.classList.toggle("light")

  if (html.classList.contains("light")) {
    imagem.setAttribute("src", "./assets/avatar-light.png")
    imagem.setAttribute("alt", "foto do Mayk Brito de oculos escuro")
  } else {
    imagem.setAttribute("src", "./assets/avatar.png")
    imagem.setAttribute("alt", "Foto de Mayk Brito com oculos")
  }
}
