'use strict';

import { useState } from 'react';

const Car = () => {

    const [brand, setBrand] = useState("BMW");
    const [model, setModel] = useState("M4");
    const [colour, setColour] = useState("Blue");
    const [year, setYear] = useState(2020);

    return (
        <>
            <p>Brand: {brand}</p>
            <p>Model: {model}</p>
            <p>Colour: {colour}</p>
            <p>Year: {year}</p>

            <form>
                <input type="text" placeholder='Brand' value={brand} onChange={e => setBrand(e.target.value)} />
                <input type="text" placeholder='Model' value={model} onChange={e => setModel(e.target.value)} />
                <input type="text" placeholder='Colour' value={colour} onChange={e => setColour(e.target.value)} />
                <input type="text" placeholder='Year' value={year} onChange={e => setYear(e.target.value)} />
            </form>
        </>
    )
}

export default Car;