import React from 'react';

const ServiceDetails = (props) => {
    const { course, details, image, price } = props.service;
    return (
        <div className="col-md-4 card my-4">
            <img style={{ height: '50%' }} src={image} alt="" />
            <h3>{course}</h3>
            <h4>Price:${price}</h4>
            <p>{details}</p>

        </div>
    );
};

export default ServiceDetails;