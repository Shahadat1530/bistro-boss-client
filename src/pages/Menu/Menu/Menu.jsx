import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';

const Menu = () => {
    const [menu] = useMenu();
    const offeredItems = menu.filter(item => item.category === 'offered');
    const pizzaItems = menu.filter(item => item.category === 'pizza');
    const dessertItems = menu.filter(item => item.category === 'dessert');
    const soupItems = menu.filter(item => item.category === 'soup');
    const saladItems = menu.filter(item => item.category === 'salad');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
                img={menuImg} title={'our menu'}
            ></Cover>
            <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"}></SectionTitle>
            {/* offered items */}
            <MenuCategory items={offeredItems}></MenuCategory>
            {/* dessert items */}
            <MenuCategory
                items={dessertItems} title={'dessert'} img={dessertImg}
            ></MenuCategory>
            {/* pizza items */}
            <MenuCategory
                items={pizzaItems} title={'pizza'} img={pizzaImg}
            ></MenuCategory>
            {/* salad items */}
            <MenuCategory
                items={saladItems} title={'salad'} img={saladImg}
            ></MenuCategory>
            {/* soup items */}
            <MenuCategory
                items={soupItems} title={'soup'} img={soupImg}
            ></MenuCategory>
        </div>
    );
};

export default Menu;