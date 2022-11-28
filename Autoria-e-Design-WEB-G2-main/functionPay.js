function onload(){
    var total = parseFloat(localStorage.getItem('valueTotal'));
    var formatado = total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    
    document.querySelector('#txt_total').textContent = formatado; 
    document.querySelector('#txt_total2').textContent = formatado;
}