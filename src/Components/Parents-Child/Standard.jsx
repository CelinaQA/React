'use strict';

import Footer from './Footer';
import Main from './Main';
import MyHeader from './MyHeader';
import Navigation from './Navigation';

const Standard = () => {

    return (
        <>
            <MyHeader />
            <Navigation />
            <Main></Main>
            <Footer />
        </>
    )
}

export default Standard;