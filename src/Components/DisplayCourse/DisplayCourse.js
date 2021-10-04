import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './DisplayCourse.css'

const DisplayCourse = () => {
    const [courses, setCourses] = useState([]);
    useEffect( ()=>{
        fetch(`./FakeDb.json`)
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])
    const handleOnChange = (search) => {
        console.log(search.target);
    }

    return (
        <div className="course-container ">
            <h2 className="text-center">Our courses</h2>
            <div className="search-box p-3 m-3">
                <input onChange={handleOnChange} type="text" className='search-box p-2 m-3' placeholder="Enter Your Course Name" />
                <button className="button btn- btn-danger p-2">search</button>
            </div>
            <div className='row d-flex justify-content-evenly m-2'>
                {
                        courses.map(course =><Course
                            key={course.key}
                            course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default DisplayCourse;