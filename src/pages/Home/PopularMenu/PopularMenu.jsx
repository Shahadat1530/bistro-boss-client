import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popularItems = menu.filter(item => item.category === 'popular');

    return (
        <div className='my-10'>
            <SectionTitle
                subHeading={'Popular Items'}
                heading={'From Our Menu'}
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-7'>
                {
                    popularItems.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='text-center my-7'>
                <button className="btn btn-outline border-0 border-b-4">View Full Menu</button>
            </div>
        </div>
    );
};

export default PopularMenu;