/*2) Faça um programa que identifique se em um determinado vetor, existem ou não valores repetidos.*/

function segunda(){
    var array = [1,2,3,4,5];
    /*var array = [1,2,3,4,5,5];*/
    var cont = 0;
    
    for(var i=0; i<array.length; i++){
        if(array[i] === array[i+1])
            cont++;
    }
    
    if(cont>=1)
        console.log("Existem valores repetidos");
    else
        console.log("Não existem valores repetidos");
    
}