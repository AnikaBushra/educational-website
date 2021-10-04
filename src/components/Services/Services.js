import React, { useEffect, useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./Fakedata.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div className="mt-2">
            <h2 className=" text-danger">More About Our Services</h2>
            <div className="row mx-1">
                {
                    services.map(service => <ServiceDetails service={service} key={service.course}></ServiceDetails>)
                }
            </div>
        </div>
    );
};

export default Services;