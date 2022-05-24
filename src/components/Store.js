import React from 'react';
import Navigation from "./Navigation";
import PromotionBar from "./PromotionBar";
import Footer from "./subcomponents/Footer";
import BookList from "./subcomponents/BookList";

export const About = () => {
    return (
        <div className={'container'}>
            <div className="main">
                <Navigation/>

                <div className="rightSide">
                    <PromotionBar/>
                    <div className={'index-breakpoint'}></div>
                    <div className="secondItem">
                        <BookList/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default About;