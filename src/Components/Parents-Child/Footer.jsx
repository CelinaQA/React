'use strict';


const Footer = () => {

    const name = `Celina`;
    const date = new Date();

    return (
        <footer>
            <p> {name} {date.toLocaleTimeString()} </p>
        </footer>
    )
}

export default Footer;