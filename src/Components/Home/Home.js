import React from 'react';
import Banner from '../Banner/Banner';
import DisplayCourse from '../DisplayCourse/DisplayCourse';
import Footer from '../Footer/Footer';
// import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            {/* <Header></Header> */}
            <Banner></Banner>
            <DisplayCourse></DisplayCourse>
            <Footer></Footer>
        </div>
    );
};

export default Home;