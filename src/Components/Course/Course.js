import React from 'react';

const Course = (props) => {
    console.log(props.course);
    const {photo, name, role, price, discription} = props.course;
    return (
        <div className="col-md-4">
                <div className="h-100">
                    <img src={photo} className="card-img-top w-25 p-3" alt="..."/>
               </div>
                    <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <small>{role}</small>
                    <p>{price}TK</p>
                    <p className="card-text">{discription}</p>
                    <button className='btn btn-primary'>see more</button>
                </div>
        </div>
    );
};

export default Course;