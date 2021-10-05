import React from 'react';
import "./Home.css"
import DisplayCourse from '../DisplayCourse/DisplayCourse';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className='home'>
            <Banner></Banner>
            <DisplayCourse></DisplayCourse>
            <Footer></Footer>
        </div>
    );
};

export default Home;