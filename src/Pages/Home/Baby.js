import React from 'react';
import baby from '../../assets/images/treatment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Baby = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img src={baby} className="max-w-sm rounded-lg shadow-2xl" />
                <div className='w-1/2 ml-20'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rem maxime deserunt amet sed quidem possimus nisi accusamus nostrum officia?</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Baby;