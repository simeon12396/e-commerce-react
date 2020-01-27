import React from 'react';

import '../scss/mainLayout.scss';

import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = (props) => {

    return (
        <div className="main-layout">
            <Header />
                {props.children}
            <Footer />
        </div>
    );
};

export default MainLayout;
