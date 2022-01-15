let num = [5, 4, 2, 8, 6, 3, 1, 10, 15, 16]
 num [3] = 9 //inclui mais um conteúdo ao elemento

num.push(0) // inclui mais um conteúdo sempre no final do elemento

//num.sort() // este comando ordena os numeros de ordem crescente
console.log(num)

console.log(`o vetor têm ${num.length} posições`) // este é para saber a quantidade das posições dentro do elemento
//console.log(`o valor do vetor é ${num[0]}`) // informa onde está o valor do índice ou do vetor pedido.


 let pos = num.indexOf(10)
console.log(`o valor pedido está na posição ${pos}`) // informa em qual (índice ou chave) esta´ o valor pedido

