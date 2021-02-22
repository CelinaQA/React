'use strict';

const Child = ({ name }) => {

    console.log(name);

    return (
        <p>This is the {name} component</p>
    )

}

// const Child = (props) => {

//     console.log(props.name);

//     return (
//         <p>This is the {props.name} component</p>
//     )

// }

export default Child;