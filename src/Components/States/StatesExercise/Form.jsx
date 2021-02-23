'use strict';

import { useState } from 'react';
import Login from './Login'
import Logout from './Logout'

const Form = () => {

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    let button;

    const saveValues = e => {
        e.preventDefault();
        console.log(user, pass);

        if (isLoggedIn) {
            return button = <Logout onClick={() => setIsLoggedIn(c => !c)} />
        } else {
            return button = <Login onClick={() => setIsLoggedIn(c => !c)} />
        }
    }

    return (
        <>
            <form onSubmit={saveValues}>
                <input id='username' type="text" placeholder='username' value={user} onChange={e => setUser(e.target.value)} />
                <input id='password' type="password" placeholder='password' value={pass} onChange={e => setPass(e.target.value)} />
                <button type='submit'>Save</button>
                {button}
            </form>
            <hr />
        </>
    )
}

export default Form;