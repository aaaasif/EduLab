import React from 'react';
import DisplayCourse from '../DisplayCourse/DisplayCourse';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <DisplayCourse></DisplayCourse>
            <Footer></Footer>
        </div>
    );
};

export default Home;