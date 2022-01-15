function calcular(){
    var cal = window.document.getElementById('txtcal')
    let tab = window.document.getElementById('seltab')
if(cal.value.length == 0) {
      window.alert('Por favor, Digite de número!!')
   
}else{ 
     let n = Number(cal.value)
     let c = 1
     tab.innerHTML = ''
      while (c <= 10){
        let item = window.document.createElement('option')
        item.text = `${n} X ${c} = ${n*c}`
        tab.value = `tab${c}`
        tab.appendChild(item)
        c++
      }
    }

}