'use strict';

import ArrayItem from "./ArrayItem";

const ComponentWithProps = (props) => {

    const {
        numberProp,
        boolProp,
        strProp,
        objProp,
        arrProp,
        funcProp
    } = props;

    const valsFromArray = arrProp.map((item) => (<li>{item}</li>));

    // print an object
    const objectPropsDisplay = [];
    for (let [k, v] of Object.defineProperties(objProp)) {
        objectPropsDisplay.push(<li key={k}>Value: {v}</li>);
    };

    return (
        <>
            <p>Value of number prop: {numberProp}</p>
            <p>Value of boolean prop: {`${boolProp}`}</p>
            <p>Value of string prop: {strProp}</p>
            <p>Value of object prop: {objProp.year}</p>
            {/* <p>Value of array prop: {valsFromArray}</p> */}
            <p>Value of array prop:</p>
            {
                arrProp.map((item, i) => (
                    <ArrayItem key={i} item={item} />
                ))
            }
            <p>Value of function prop: {funcProp()}</p>
            {/* <p>{objectPropsDisplay}</p> */}

        </>
    )

}

export default ComponentWithProps;