/**
 * @name getRandomColorSequence
 * @description Devuelve una secuencia aleatoria de ciertos colores con cierta longitud
 * 
 * @param {string[]} colors - Array de colores a ser utilizados en la secuencia
 * @param {number} length - Longitud de la secuencia
 * @returns {String[]} - Secuencia aleatoria de colores disponibles en {colors}, con longitud {length}
 *
 * @example
 *  getRandomColorSequence(["red", "blue", "green"], 4) // returns ['blue', 'red', 'red', 'green']
 */

function getRandomColorSequence(length) {
    const colorSequence = [];
    
    for (let i = 0; i < length; i++) {
        const parteRoja = Math.floor(Math.random() * 256);
        const parteVerde = Math.floor(Math.random() * 256);
        const parteAzul = Math.floor(Math.random() * 256);
        colorSequence.push(`rgb(${parteRoja}, ${parteVerde}, ${parteAzul})`);
    }
    
    return colorSequence;
}

// Ejemplo de uso
console.log(getRandomColorSequence(4));