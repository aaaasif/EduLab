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
    const sixCourse = courses.filter(course => course.key >= 7);
    // console.log(sixCourse);

    return (
        <div className="course-container ">
            <h2 className="text-center">Our Popular Courses</h2>
            
            <div className='row d-flex justify-content-evenly m-2'>
                {
                        sixCourse.map(course =><Course
                            key={course.key}
                            course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default DisplayCourse;