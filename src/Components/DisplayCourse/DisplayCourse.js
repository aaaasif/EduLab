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

    return (
        <div className="course-container">
            <h2>Our courses</h2>
            <div className="search-box">
                <input type="text" className='p-2' placeholder="Enter Your Course Name" />
                <button className="btn- btn-danger p-2">search</button>
            </div>
            <div className='row'>
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


// {
//     courses.map(course =><Course 
//         key={course.key}
//         course={course}></Course>)
// }

// courses.map(course => <div className="col-md-4">
//                          <div className="cart">
                             
//                          </div>
//                     </div>)