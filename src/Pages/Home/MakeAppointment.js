import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} 
        className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-120px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 text-white'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl'>Make an Appointment Today</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque autem atque consequatur ad unde error accusantium facilis commodi eos numquam, esse consequuntur optio animi necessitatibus quidem qui beatae nam dolore totam, minima alias, maxime quibusdam cumque aperiam. Nisi, delectus sapiente!</p>
                <PrimaryButton>Get Started</PrimaryButton>G
            </div>
        </section>
    );
};

export default MakeAppointment;