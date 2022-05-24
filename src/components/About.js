import React from 'react';
import Navigation from "./Navigation";
import PromotionBar from "./PromotionBar";
import HomeText from "./subcomponents/HomeText";
import Footer from "./subcomponents/Footer";

export const About = () => {
    return (
        <div className={'container'}>
            <div className="main">
                <Navigation/>

                <div className="rightSide">
                    <PromotionBar/>
                    <div className={'index-breakpoint'}></div>
                    <div className="secondItem">
                        <HomeText/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default About;