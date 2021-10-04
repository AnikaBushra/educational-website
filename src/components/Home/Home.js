import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./Fakedata.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    const serviceSlice = services.slice(0, 4);
    console.log(serviceSlice);
    return (
        <div>
            <div className="home row text-white">
                <div className="col-md-6">
                    <h1 className="fs-1 text-danger
                pt-2 back">The awesome, fun and effective way to learn a language!!</h1>
                </div>
                <div>
                </div>
            </div>
            <div>
                <h2 className="text-danger my-3">Our services</h2>
                <div className="row ms-2">
                    {
                        serviceSlice.map(servic => <Service servic={servic} ></Service>)
                    }
                </div>
            </div>

        </div>

    );
};

export default Home;