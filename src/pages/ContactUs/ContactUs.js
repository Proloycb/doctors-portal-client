import React from 'react';
import appointment from '../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='my-24'>
            <div className="hero min-h-screen">
                <div>
                    <h4 className='text-xl text-center text-primary font-bold'>Contact Us</h4>
                    <h2 className='text-3xl text-white'>Stay connected with us</h2>
                    <div>
                        <div className="card-body">
                            <div className="form-control">
                                <input type="text" placeholder="Email Address" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Subject" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <textarea placeholder="Your message" className="input input-bordered" />
                            </div>
                            <div className="mt-6 text-center">
                                <button className="btn btn-primary text-white">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;