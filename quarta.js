/*4) Utilizando o conceito de recursão, faça um algoritmo que some os dígitos de 1 até n, por exemplo:

Exemplo 1:
Digite um numero: 5
1 + 2 + 3 + 4 + 5 = 15

Exemplo 2:
Digite um numero: 7
1 + 2 + 3 + 4 + 5 + 6 + 7 = 28*/

function quarta(n){
    var sum = 0;
    
    if (n === 0) 
        return 0;
    else 
        sum = n + quarta(n - 1);

    return sum;
}
console.log(quarta(5));
console.log(quarta(7));
