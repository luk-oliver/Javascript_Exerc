function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()

msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`

if (hora >= 0 && hora < 12) {
  //Bom Dia!!!
  img.src = 'fotomanha.png'
  document.body.style.background = '#d9d9e2'

} else if (hora <= 18) {
  img.src = 'fototarde.png'
  document.body.style.background = '#6c5655'
 // Boa Tarde!!
} else {
  img.src = 'fotonoite.png'
  document.body.style.background = '#091426'

  // Boa Noite!!!

}
}

