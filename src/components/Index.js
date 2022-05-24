import React from 'react';
import '../stylesheet/Index.css';
import Navigation from './Navigation';
import PromotionBar from "./PromotionBar";
import Carousel from "./subcomponents/Carousel";
import HomeText from "./subcomponents/HomeText";
import Footer from './subcomponents/Footer';


export const Index = (props) => {
    return (
        <div className={'container'}>
            <div className="main">
                <Navigation/>

                <div className="rightSide">
                    <PromotionBar/>
                    <Carousel/>

                    <div className={'index-breakpoint'}></div>
                    <div className="secondItem">
                        <HomeText/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default Index;