/*1) Faça um programa que descubra a quantidade de vogais de uma determinada string.*/

function primeira(){
    var string = document.getElementById("palavra").value;
    var tam = string.length;
    var cont = 0;
    
    for(var i=0; i<tam; i++){
        if(string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u')
            cont++;
    }
    console.log(cont);
}