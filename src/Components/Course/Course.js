import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faClock } from '@fortawesome/free-solid-svg-icons'
import './course.css'
import Rating from 'react-rating';


const Course = (props) => {
    console.log(props.course);
    const {photo, name, role, price, enrolledBy, duration, views, rating} = props.course;
    const user = <FontAwesomeIcon icon={faUser} />
    const clock = <FontAwesomeIcon icon={faClock} />
    return (
        <div className="col-md-4 display-course ">
                <div >
                    <img src={photo} className="card-img-top w-50" alt="..."/>
               </div>
                    <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>{price}TK</p>
                    <small>{views}</small>
                    <p>{rating}</p>
                    <Rating 
                    emptySymbol="fa fa-star-o fa-2x"
                    fullSymbol="fa fa-star fa-2x"
                    readonly></Rating>
                    <div className="d-flex justify-content-around">
                    <small>{clock}{duration}</small>
                    <p>{user} {enrolledBy} Students Enrolled</p>
                    </div>
                    <p className="card-text">{role}</p>
                    <button className='btn btn-primary'>see more</button>
                </div>
        </div>
    );
};

export default Course;