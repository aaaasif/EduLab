import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import "./About.css"

const About = () => {
    return (
        <div className="container">
            <Header></Header>
            <div className="d-flex justify-content-center">
              <img className='w-50' src="https://i.ibb.co/zP62Yt9/Questions-pana.png" alt="" />
                <div className='about-text mx-auto'>
                    <h1>About Us</h1>
                    <p>We are a team of like-minded, passionate and innovative individuals with 10+ years of experience in the field of software. We are on a mission to help you deliver the world’s best possible user experience....</p>
                    <button className="btn btn-success">Read More</button>
                </div>
            </div>
            <div className="about-team d-flex justify-content-around">
                <div>
                    <h1>About Our Teachers</h1>
                    <p>All the trainers are Senior Software Developer and Associate Professor holding PhD in Computer Engineering with over 20 years of teaching experience.
                    Experienced Software Developer equipped with a diverse and promising skill-set. Proficient in various platforms, languages, and database systems.
                    We use student-centered, personalized way of teaching. My lessons are well organized and adapted to your needs.</p>
                </div>
                <div>
                    <h1>About Our Support Team</h1>
                    <p>All the trainers are Senior Software Developer and Associate Professor holding PhD in Computer Engineering with over 20 years of teaching experience.
                    Experienced Software Developer equipped with a diverse and promising skill-set. Proficient in various platforms, languages, and database systems.
                    We use student-centered, personalized way of teaching. My lessons are well organized and adapted to your needs.</p>
                </div>
            </div>
            <div className="about-text">
                <h1>Our Privacy policy</h1>
                <p>Take a minute and read the site's Privacy Policy, as well as the Kids' Privacy Policy for additional information. There is a link to the company's privacy policy on the catalog request page, so you can review exactly how your personal information will be used before sending in your request.</p>
            </div>
            <Footer></Footer>
        </div>
       
    );
};

export default About;