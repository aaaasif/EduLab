import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faClock, faEye } from '@fortawesome/free-solid-svg-icons'
import './course.css'
import Rating from 'react-rating';


const Course = (props) => {
    console.log(props.course);
    const {photo, name, role, price, enrolledBy, duration, views, rating} = props.course;
    const user = <FontAwesomeIcon icon={faUser} />
    const clock = <FontAwesomeIcon icon={faClock} />
    const eye = <FontAwesomeIcon icon={faEye} />
    return (
        <div className="col-md-4 display-course ">
                <div >
                    <img src={photo} className="card-img-top w-50 rounded mx-auto d-block" alt="..."/>
               </div>
                    <div className="card-body">
                    <h5 className="card-title text-center">{name}</h5>
                    <div className="d-flex justify-content-evenly m-2">
                    <p >{price}TK</p>
                    <small>{eye} {views}</small> <br />
                    </div>
                    <Rating
                    initialRating={rating}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly className="rating"></Rating>
                    <div className="d-flex justify-content-around">
                    <p>{user} {enrolledBy} Students Enrolled</p>
                    <small>{clock}{duration}</small>
                    </div>
                    <p className="card-text text-center">{role}</p>
                    <button className='btn btn-primary mx-auto d-block'>see more</button>
                </div>
        </div>
    );
};

export default Course;