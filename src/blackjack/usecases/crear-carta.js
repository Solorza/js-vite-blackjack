
/**
 * Inserta un elemento HTML 
 * @param {String} carta 
 * @param {HTMLElement} divCarta elemento html para mostrar las cartas
 */

export const crearCarta = ( carta, divCarta ) => {

    if( !carta ) throw new Error('La carta es un argumento obligatorio')

    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
    imgCarta.classList.add("carta");
    divCarta.append(imgCarta);

};
