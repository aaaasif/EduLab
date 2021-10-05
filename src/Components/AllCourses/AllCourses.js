import React, { useEffect, useState } from 'react';
import "./AllCourses.css"

const AllCourses = () => {

    const [allTeams, setAllTeams] =useState([]); 

    useEffect(()=>{
        fetch(`./FakeDb.json`)
        .then(res => res.json())
        .then(data => setAllTeams(data));
    }, [])
    console.log(allTeams);
    return (
        <div className='all-course text-center'>
            <h1>sob course paben ekhane</h1>
            <input type="text"className="p-2" placeholder="enter your course name" />
            <button className="btn btn-danger p-2"> search</button>
        </div>
    );
};

export default AllCourses;