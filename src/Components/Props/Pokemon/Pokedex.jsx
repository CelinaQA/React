'use strict';

import Entries from './Entries';
import Pokemon from './Pokemon.json';
import { Table } from 'reactstrap';
import { useState } from 'react'

const Pokedex = () => {

    return (
        <>
            <Table hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    {Pokemon.map((pokemon, i) => (
                        <Entries
                            key={i}
                            name={pokemon.name}
                            website={pokemon.url}
                        />
                    ))}
                </tbody>
            </Table>
        </>
    );

}

export default Pokedex; 