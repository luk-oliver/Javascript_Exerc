var num = window.document.querySelector('input#fnum')
var lista = window.document.querySelector('Select#flista')
var res = window.document.querySelector('div#res')
var valores = []

function isnumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){

       return true //é um booleano

    }else{
        
       return false

    }

}

function inlista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{

        return false
    }
}

function adicionar(){
   if(isnumero(num.value) && !inlista(num.value, valores)){
      valores.push(Number(num.value)) // para add valores a lista
      var item = document.createElement('option')
      item.text = `valor ${num.value} adicionado`
      lista.appendChild(item)
      res.innerHTML = ''

    }else{
     window.alert('valor inválido ou ja encontrado em lista')

     }
     num.value = '' // este comando limpa quando for add novos número
     num.focus()   // este comando deixa o cursor permanente no adicionar
}
function finalizar(){
    if(lista.length == 0){
        window.alert('adiciona valores antes de finalizar')
    }else{
        var tot = valores.length // informa a quantidade de número na lista
        var maior = valores[0] // vai informar o maior valor da lista
        var menor = valores[0] // vai informar o menor valor da lista
        var soma = 0
        let media = 0
        for(var pos in valores){
            soma += valores[pos]
               
         if(valores[pos] > maior)
                 maior = valores[pos]

         if(valores[pos] < menor)
                 menor = valores[pos]
            
             }
             media = soma/tot 
           res.innerHTML = ''
           res.innerHTML += `<p> Ao todo, temos ${tot} número cadastrado.<p/>`
           res.innerHTML += `<p> Maior valor informado é o número ${maior}.<p/>`
           res.innerHTML += `<p> Menor valor informado é o número ${menor}.<p/>`
           res.innerHTML += `<p> A soma de todos os valores temos ${soma}.<p/>`
           res.innerHTML += `<p> A média dos valores é ${media}.<p/>`
        
           

    }
}