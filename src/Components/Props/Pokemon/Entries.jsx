'use strict';

const Individual = (props) => {

    return (
        <>
            <p >I am {props.name}</p>
            <a href={props.website}>Link to their website</a>
        </>
    )
}

export default Individual;