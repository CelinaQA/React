'use strict';

import Entries from './Entries';
import Pokemon from './Pokemon.json';

const Pokedex = () => {

    return (
        <>
            {Pokemon.map((pokemon, i) => (
                <Entries
                    key={i}
                    name={pokemon.name}
                    website={pokemon.url}
                />
            ))}
        </>
    );

}

export default Pokedex; 