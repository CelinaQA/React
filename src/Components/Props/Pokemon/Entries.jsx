'use strict';

const Individual = (props) => {

    console.log(`number: ${props.key}`);

    return (
        <>
            <tr>
                <th scope="row">{props.key}</th>
                <td>{props.name}</td>
                <td><a href={props.website}>Click for more info</a></td>
            </tr>
        </>
    )
}

export default Individual;