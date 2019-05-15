/*2) Faça um programa que identifique se em um determinado vetor, existem ou não valores repetidos.*/

function segunda() {

    var array = [1, 0, 2, 8, 3, 7]
    var repetido = false

    for (var i = 0; i < array.length; i++) {
        for (var k = 0; k < array.length; k++) {

            if (i !== k) {
                if (array[i] === array[k]) {
                    repetido = true
                    break
                }
            }

        }

        if (repetido)
            break
    }

    repetido ? console.log("Existem valores repetidos") : console.log("Não existem valores repetidos")

}