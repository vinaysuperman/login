//Landing page

import React from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import Cards from '../Cards/Cards';
import Carousels from '../Carousels/Carousels';
import Gap from '../Gap/Gap';
import About from '../About/About';
import Company from '../Company/Company';

const LandingPage = (props) => {
    return (
        <>
            <Navigation />
            <Carousels />
            <Gap />
            <Company />
            <Gap />
            <Cards />
            <Gap />
            <About />
            <Gap />
            <Footer />
        </>
    )
}
export default LandingPage;
