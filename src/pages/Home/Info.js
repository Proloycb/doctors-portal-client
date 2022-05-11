import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard img={clock} bgClass="bg-gradient-to-r from-secondary to-primary" cardTitle="Opening Hours"/>
            <InfoCard img={marker} bgClass="bg-accent" cardTitle="Visit our location"/>
            <InfoCard img={phone} bgClass="bg-gradient-to-r from-primary to-secondary" cardTitle="Contact us now"/>
        </div>
    );
};

export default Info;