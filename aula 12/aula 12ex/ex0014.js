
var agora = new Date()
var ano = agora.getFullYear()
var mes = agora.getMonth()
var dia = agora.getDay()
var hora = agora.getHours()
var minutos = agora.getMinutes()

if(hora > 6 && hora < 12){
console.log ('Bom dia')

}else if(hora >= 12 && hora < 18 ){
console.log( 'Boa tarde')
}else{
    console.log('Boa Noite')
}

console.log(`hoje é dia ${dia} do mês ${mes} de ${ano}`)
console.log(`são ${hora} horas e ${minutos} minutos`)