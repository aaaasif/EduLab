import React, { useEffect, useState } from 'react';
import "./AllCourses.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

const AllCourses = () => {
    const QuoteLeft = <FontAwesomeIcon icon={faQuoteLeft} />
    const QuoteRight = <FontAwesomeIcon icon={faQuoteRight} />

    const [allCourses, setAllCourses] =useState([]); 

    useEffect(()=>{
        fetch(`./FakeDb.json`)
        .then(res => res.json())
        .then(data => setAllCourses(data));
    }, [])
    // console.log(allCourses);
    return (
        <div className='container'>
            <br /> <br />
            <h1 className="text-center m-5">Transform your life through education</h1>
            <p className='p-3 text-center'>{QuoteLeft} Learners around the world are launching new careers, advancing in their fields, and enriching their lives. {QuoteRight}</p>
            <div className="text-center">
                <div className="row">
                    {
                        allCourses.map(allcrs=> <div className="col-md-4 ">
                            <div className="service ">
                                <div className="cart">
                                    <img className='w-50 cart-img' src={allcrs.photo} alt="" />
                                </div>
                                <div>
                                    <h2>{allcrs.name}</h2>
                                    <h4>Price: {allcrs.price} Tk Only.</h4>
                                    <h4><strong>{allcrs.role}</strong></h4>
                                    <small>{allcrs.discription}</small> <br />
                                    <button className="btn btn-outline-dark m-2">Buy Now</button>
                                </div>  
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllCourses;