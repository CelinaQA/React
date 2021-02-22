'use strict';

import ComponentWithProps from "./ComponentWithProps";

const PropWithDiffTypes = () => {
    // number
    const val = 10;

    // boolean
    const bool = true;

    // String
    const str = 'some text';

    // Object
    const obj = {
        key1: `value`,
        list: [`1`, 2, `3`],
        year: 2021
    }

    // Array
    const arr = [`grape`, `banana`, `apple`]

    // Function
    const someFunction = () => (`A string from a function!`);

    return (
        <ComponentWithProps
            numberProp={val}
            boolProp={bool}
            strProp={str}
            objProp={obj}
            arrProp={arr}
            funcProp={someFunction}
        />
    )
}

export default PropWithDiffTypes;