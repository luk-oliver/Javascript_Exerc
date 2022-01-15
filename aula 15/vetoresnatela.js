let valores = [8, 1, 7, 4, 2, 9]
console.log(valores)
valores [6] = 3  // incluiu  o valor 3 na posição 6
// valores.sort() // coloca o numeros em ordem

 for(let pos= 0; pos < valores.length; pos++) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
 
for (let pos in valores) { // este comando é a forma simplificada, tem a mesma função que o comando 'for' tradicional
  console.log (`No indíce ${pos} temos o valor ${valores[pos]}`)
}