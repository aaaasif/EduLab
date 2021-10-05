import React from 'react';
import Header from '../Header/Header';
import './Banner.css'

const Banner = () => {
    return (
            <div>
                <Header></Header>
                <div className="d-flex justify-content-cente banner">
                    <div className="img  d-block">
                        <img className="w-50 rounded mx-auto" src="https://i.ibb.co/q9yJf9Z/Online-games-addiction-amico.png" alt="boss pic pai nai" />
                    </div>
                    <div>
                        <p className="text-center">Changing Expectations had the pleasure of hosting a student workshop at the Carver Museum. They learned coding skills that make it easy to educate their students on STEM skills. View News. Explore Resources. Browse Programs.</p>
                    </div>
                </div>
            </div>
    );
};

export default Banner;