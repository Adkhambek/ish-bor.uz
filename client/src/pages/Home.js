import React from 'react';
import Banner from "../components/Banner";
import City from "../components/City";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <Header/>
                <Banner/>
                <City/>
            <Footer/>
        </>
    );
};

export default Home;
