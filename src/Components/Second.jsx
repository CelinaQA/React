'use strict';

const Second = () => {

    // how to incorporate HTML and JS in one - JSX
    const name = `Celina`;
    const date = new Date();
    const firstName = `Celina`;
    const lastName = `Basa`;

    return (
        <>
            <h1>{name}</h1>
            <p>This was created on: {date.toLocaleDateString()}</p>
            <p>{firstName} {lastName}</p>
            <p>{`${firstName} ${lastName}`}</p>
        </>
    )
}

export default Second;