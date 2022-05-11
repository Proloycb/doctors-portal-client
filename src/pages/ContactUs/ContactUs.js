import React from 'react';
import appointment from '../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='my-24'>
            <div class="hero min-h-screen">
                <div>
                    <h4 className='text-xl text-center text-primary font-bold'>Contact Us</h4>
                    <h2 className='text-3xl text-white'>Stay connected with us</h2>
                    <div>
                        <div class="card-body">
                            <div class="form-control">
                                <input type="text" placeholder="Email Address" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <input type="text" placeholder="Subject" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <textarea placeholder="Your message" class="input input-bordered" />
                            </div>
                            <div class="mt-6 text-center">
                                <button class="btn btn-primary text-white">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;