import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-10 my-20'>
            <SectionTitle
                subHeading={'Check It Out'}
                heading={'Featured Item'}
            ></SectionTitle>
            <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-50 pb-20 pt-12 px-36 gap-10'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div>
                    <p>June 01, 2025</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae perferendis quia rem quae quis quasi nam modi ratione impedit maiores ex voluptates nulla dolores voluptas, facilis cumque explicabo animi nobis necessitatibus alias suscipit. Praesentium ratione, deserunt nulla tempore dicta sed, blanditiis iste nam ipsum distinctio eos omnis odit alias veritatis.</p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;