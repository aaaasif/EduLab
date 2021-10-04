import React from 'react';
import './course.css'

const Course = (props) => {
    console.log(props.course);
    const {photo, name, role, price, enrolledBy, duration, views} = props.course;
    return (
        <div className="col-md-4 display-course ">
                <div >
                    <img src={photo} className="card-img-top w-50" alt="..."/>
               </div>
                    <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>{price}TK</p>
                    <small>{views}</small>
                    <div className="d-flex justify-content-around">
                    <small>{duration}</small>
                    <p>{enrolledBy} Students Enrolled</p>
                    </div>
                    <p className="card-text">{role}</p>
                    <button className='btn btn-primary'>see more</button>
                </div>
        </div>
    );
};

export default Course;