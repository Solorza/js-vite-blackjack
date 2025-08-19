import _ from 'underscore';

/**
 * Esta funcion crea un nuevo deck de cartas
 * @param {Array<string>} tiposDeCarta Ejemplos : ['C','D','H','S'];
 * @param {Array<string>} tiposEspeciales Ejemplos : ['A','J','Q','K'];
 * @returns {Array<string>} retorna el nuevo deck construido 
 */

export const crearDeck = ( tiposDeCarta , tiposEspeciales) => {

    if(!tiposDeCarta || tiposDeCarta.length === 0)  throw new Error('tiposDeCarta es obligatorio');

    if(!tiposEspeciales || tiposDeCarta.length === 0)  throw new Error('tiposEspeciales es obligatorio');
    
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    deck = _.shuffle( deck );

    return deck;
}