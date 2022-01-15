function fatorial(n){
   let fat = 1
   for( let c = n;  c > 1;  c--){
       fat *= c
   }
   return fat
}
console.log (fatorial(5))

function fatorial(d){
    if(d == 0){
        return 1
       
    }
     return d*fatorial(d-1)
}
console.log(fatorial(6))