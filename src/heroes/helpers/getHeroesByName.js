import { heroes } from "../data/heroes";



export const getHeroesByName = ( name = '' ) => {

    name = name.toLowerCase().trim(); // Para eliminar espacios en blanco

    if( name.length === 0 ) return [];

    return heroes.filter( hero => hero.superhero.toLowerCase().includes( name ) );
};