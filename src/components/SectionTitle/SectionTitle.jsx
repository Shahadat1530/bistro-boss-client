import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='mx-auto my-8 md:w-4/12 text-center'>
            <p className='text-yellow-600 mb-2'>--- {subHeading} ---</p>
            <h4 className='text-3xl uppercase border-y-4 py-4'>{heading}</h4>
        </div>
    );
};

export default SectionTitle;