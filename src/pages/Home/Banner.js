import React from 'react';
import chair from '../../assets/images/chair.png';
import bgChair from '../../assets/images/bg.png';
import PrimaryButton from '../Shared/PrimaryButton';
const Banner = () => {
    return (
        <section style={{
            background: `url(${bgChair})`,
            backgroundSize: 'cover'
        }}>
            <div className="hero min-h-screen">
                <div className="hero-over"></div>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;