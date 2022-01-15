var agora = new Date()
var diasem = agora.getDay() 
 switch(diasem) {     // switch quer dizer chaves
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-feira, dia de Trabalhar')
        break
    case 2:
        console.log('Terça-feira')
        break
    case 3:
        console.log('Quarta-feira')
        break
    case 4:
        console.log('Quinta-feira')
        break
    case 5:
        console.log('Sexta-feira, sextouuuu!!!!!!')
        break
    case 6:
        console.log('Sabbat: dia Sagrado do Eterno')
        break
    default:
        console.log('[erro] dia inválido!!!')
        break                      
}