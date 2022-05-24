import React from 'react';
import '../stylesheet/Index.css';
import Navigation from './Navigation';
import PromotionBar from "./PromotionBar";
import Home from './Home';
import Footer from './subcomponents/Footer';

export const Index = () => {
    return (
        <div className={'container'}>
            <div className="main">
                <Navigation/>

                <div className="rightSide">
                    <PromotionBar/>
                    <Home/>
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default Index;