function onload(){
    localStorage.getItem('valueText');
    var pc = parseFloat(localStorage.getItem('valueNumberPc'));
    var head = parseFloat(localStorage.getItem('valueNumberHead'));
    var teclado = parseFloat(localStorage.getItem('valueNumberTeclado'));
    $("#txt_tecl").val(teclado);
    $("#txt_comp").val(pc);
    $("#txt_head").val(head);  
    calculo();
}
function calculo(){
    var teclado = $("#txt_tecl").val();
    var pc = $("#txt_comp").val();
    var head = $("#txt_head").val(); 
    var somador = 0;
    
    teclado=teclado*250;
    pc=pc*15999;
    head=head*1399;
    somador=teclado+pc+head;
    somador;
    localStorage.setItem('valueTotal', somador);
}