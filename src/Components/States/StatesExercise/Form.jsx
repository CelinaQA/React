'use strict';

import { useState } from 'react';

const Form = () => {

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    return (
        <>
            <form>
                <input id='username' type="text" placeholder='username' value={user} onChange={e => setUser(e.target.value)} />
                <input id='password' type="text" placeholder='password' value={pass} onChange={e => setPass(e.target.value)} />
                <button type='button'>Save</button>
            </form>
            <hr />
            <p>Your username is: {user}</p>
            <p>Your password is: {pass}</p>
        </>
    )
}

export default Form;