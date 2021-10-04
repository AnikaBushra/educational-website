import React from 'react';
import './Service.css';

const Service = (props) => {
    const { course, image, price } = props.servic;
    return (
        <div className="col-md-3">
            <div className="service">
                <img className="img-fluid image" src={image} alt="" />
                <h3>{course}</h3>
                <p>Price:${price}</p>
            </div>
        </div>
    );
};

export default Service;