function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('ERRO!!! Verifique os dados e digite novamente')
    }else{
       var fsex = window.document.getElementsByName('radsexo')[ 0]
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = window.document.createElement('img')
       img.setAttribute('id', 'foto')

       if (fsex[0]){

             genero = 'Homem'
            
             if (idade >= 0 || idade < 10){
                 img.setAttribute ('src' , 'menino.png')
                  // criança
             }else if(  idade < 21){
               img.setAttribute('src', 'adlhomem.png')
                //adolescente
             }else if( idade < 50){
                 img.setAttribute('src', 'homem.png')
                //adulto
            }else{
                img.setAttribute('src', 'idoso.png')
                //idoso
            }
            
        }else if (fsex[1]) {
           genero = 'Mulher'
           if (idade >= 0 || idade < 10){
               img.setAttribute('src' , 'menina.png')
             // criança

        }else if( idade < 21){
            img.setAttribute('src' , 'adlmulher.png')
            //adolescente
        }else if( idade < 50){
            img.setAttribute('src' , 'mulher.png')
            //adulto
        }else{
            img.setAttribute('src' , 'idosa.png')

            //idoso
        }
        }
        res.style.textAlign = 'center'
        res.innerHTML = (`Detectamos ${genero} com ${idade} anos.`)
        res.appendChild(img)
    }
}