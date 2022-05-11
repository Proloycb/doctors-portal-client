import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AppointmentComponents from './AppointmentComponents';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}/>
            <AppointmentComponents date={date} setDate={setDate}/>
        </div>
    );
};

export default Appointment;