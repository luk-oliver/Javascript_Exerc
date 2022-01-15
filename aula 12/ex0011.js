var idade = 15
console.log(`voce tem ${idade} anos`)
if (idade < 16){
    console.log('não vota')
}else if(idade < 18 || idade >= 65) {
     console.log('voto facultativo')
}else {
    console.log ('voto obrigatório')
} 