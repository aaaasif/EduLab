import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='error-pic '>
            <img className='rounded mx-auto d-block w-25' src="https://i.ibb.co/bbdrzQG/404-Error-Page-not-Found-with-people-connecting-a-plug-amico.png" alt="pic khuje pacchi na" />
            <h3 className='text-center text-primary'>Please search a valid name</h3>
        </div>

    );
};

export default NotFound;