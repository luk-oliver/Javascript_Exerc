var agora = new Date()
var mes = agora.getMonth()
var data = agora.getDate() 
var ano = agora.getFullYear()
var hora = agora.getHours()
var minutos = agora.getMinutes()
console.log(`Agora são exatamente ${hora} horas e ${minutos} minutos e a data é ${data} de ${mes} de ${ano}`)
if (hora > 6 || hora < 12) {
    console.log ('Bom Dia')
}else if (hora >= 12 || hora < 18) {
    console.log('Boa Tarde')
}else {
    console.log('Boa Noite')
}   