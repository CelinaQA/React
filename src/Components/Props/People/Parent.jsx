'use strict';

import Child from './Child';

const peopleArray = require('./People.json');

const Parent = () => {

    return (
        <Child arrProp={peopleArray} />
    )

}

export default Parent;