/**
 * Módulo para implementar funções matemáticas.
 */

/**
 * Realiza a soma do dobro do valor de cada número par em um vetor de números.
 * A função deve ser implementada utilizando a abordagem funcional com o modelo map/reduce.
 * @param {Array} numeros vetor com os números desejados
 */
function somaDobroNumerosParesFuncional(numeros){
    return numeros
        .filter(num => num % 2 === 0)
        .map(num => num * 2)
        .reduce((soma, num) => soma + num, 0);
}

/**
 * Realiza a soma do dobro do valor de cada número par em um vetor de números.
 * A função deve ser implementada utilizando a abordagem estruturada (procedural) convencional.
 * @param {Array} numeros vetor com os números desejados
 */
function somaDobroNumerosParesProcedural(numeros){
    let soma = 0;
    for(let i = 0; i < numeros.length; i++) {
        if(numeros[i] % 2 === 0) {
            soma += numeros[i] * 2;
        }
    }
    return soma;  
}

export { somaDobroNumerosParesFuncional, somaDobroNumerosParesProcedural };
