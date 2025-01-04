import React, { useState } from 'react';
import Cover from '../../Shared/Cover/Cover';
import coverImg from '../../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const drinkItems = menu.filter(item => item.category === 'drinks');
    const pizzaItems = menu.filter(item => item.category === 'pizza');
    const dessertItems = menu.filter(item => item.category === 'dessert');
    const soupItems = menu.filter(item => item.category === 'soup');
    const saladItems = menu.filter(item => item.category === 'salad');

    return (
        <div>
            <Cover img={coverImg} title={'order food'}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={saladItems}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizzaItems}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soupItems}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessertItems}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinkItems}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;