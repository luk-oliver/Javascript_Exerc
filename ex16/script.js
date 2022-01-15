function contar() {
  var Ini = window.document.getElementById('txtin')
  var fim = window.document.getElementById('txtfi')
  var pas = window.document.getElementById('txtpa')
  var res = window.document.getElementById('res')

  if (Ini.value.length == 0 || fim.value.length == 0 || pas.value.lenght == 0) {
    res.innerHTML = 'impossível contar!'
   //window.alert(' [ERRO] faltam dados!')

}else{
   res.innerHTML = 'Contando <br>'
   let i = Number(Ini.value)
   let f = Number(fim.value)
   let p = Number(pas.value)
  if ( p <= 0) {
     window.alert('Passo invalido! considerando passo 1')
     p = 1
   }

    if (i < f){
          //contagem progressiva
         for(let c = i; c <= f; c += p) {
         res.innerHTML += `${c} \u{1F449}`

         }
      }else {
         // contagem regressiva
         for(let c = i;  c >= f;  c -= p){
         res.innerHTML += `${c} \u{1F449}`

         }

        }
    res.innerHTML += `\u{1F3C1}`
  }


}

 