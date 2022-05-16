import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AppointmentComponents = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const formateDate = format(date, 'PP');
    const { data: services, isLoading, refetch} = useQuery(['available', formateDate], () => fetch(`https://dry-earth-19840.herokuapp.com/available?date=${formateDate}`)
        .then(res => res.json())
    )
    if(isLoading){
        return <Loading/>
    }
    // useEffect(() => {
    //     fetch(`https://dry-earth-19840.herokuapp.com/available?date=${formateDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [formateDate]);

    return (
        <div>
            <h4 className='text-xl text-secondary text-center'>Available Appointments on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    />)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}
            />}
        </div>
    );
};

export default AppointmentComponents;