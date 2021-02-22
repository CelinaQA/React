'use strict';

import ArrayItem from "./ArrayItem";

const Child = (props) => {

    const { arrProp } = props;

    return (
        <>
            {
                arrProp.map((item, i) => (
                    <ArrayItem key={i} name={item.name} />
                ))
            }
        </>
    )
}

export default Child;