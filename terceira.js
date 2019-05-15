/*3) Crie uma função que descubra se um valor é positivo ou negativo (considere o valor zero como positivo).*/

function terceira(){
    var num = document.getElementById("numero").value;
    var int_num = Number(num);
    
    if(int_num >= 0)
        alert("Numero positivo!");
    else
        alert("Numero negativo!");
}


