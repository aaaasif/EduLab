import React, { useEffect, useState } from 'react';
import "./AllCourses.css"

const AllCourses = () => {

    const [allCourses, setAllCourses] =useState([]); 

    useEffect(()=>{
        fetch(`./FakeDb.json`)
        .then(res => res.json())
        .then(data => setAllCourses(data));
    }, [])
    // console.log(allCourses);
    return (
        <div className='container text-center'>
            <h1>sob course paben ekhane</h1>
            <div className="search-box">
                <input type="text"className="p-2" placeholder="enter your course name" />
                <button className="btn btn-danger p-2"> search</button>
            </div>
            <div className="">
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