function onload(){
    localStorage.setItem('valueNumberPc', "0");
    localStorage.setItem('valueNumberHead', "0");
    localStorage.setItem('valueNumberTeclado', "0");
}
function chamada(valor){
    console.log(valor);
    if(valor=="todos"){
        document.getElementById("div_pc").style.display = "";
        document.getElementById("div_teclado").style.display = "";
        document.getElementById("div_r7").style.display = "";
    }else if(valor=="comp"){
        document.getElementById("div_pc").style.display = "";
        document.getElementById("div_teclado").style.display = "none";
        document.getElementById("div_r7").style.display = "none";
    } else if(valor=="tecl"){
        document.getElementById("div_pc").style.display = "none";
        document.getElementById("div_r7").style.display = "none";
        document.getElementById("div_teclado").style.display = "";
    }else if(valor=="head"){
        document.getElementById("div_pc").style.display = "none";
        document.getElementById("div_teclado").style.display = "none";
        document.getElementById("div_r7").style.display = "";
    }
}
var contH = 0;
var contN = 0;
var contT = 0;
function contador(value){
    if(value=="notebook"){
        contN= contN+1;
        console.log(contN);        
        localStorage.setItem('valueNumberPc', contN);
        alert(contN + " Computador Adicionado ao carrinho!");    
    }else if(value=="headset"){
        contH = contH+1;
        console.log(contH);       
        localStorage.setItem('valueNumberHead', contH);
        alert(contH + " Headset  Adicionado ao carrinho!");  
    } else if(value=="teclado"){
        contT = contT+1;
        console.log(contT);
        localStorage.setItem('valueNumberTeclado', contT);
        alert(contT + " Teclado Adicionado ao carrinho!");  
    }
    
} 