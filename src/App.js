import React from 'react';
import {
    Outlet,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import PromotionBar from "./components/PromotionBar";
import Carousel from "./components/subcomponents/Carousel";
import Footer from "./components/subcomponents/Footer";

export const App = () => {
    return (
        <div className={'container'}>
            <div className="main">
                <Navigation/>

                <div className="rightSide">
                    <PromotionBar/>
                    <Carousel/>

                    <div className={'index-breakpoint'}></div>
                    <div className="secondItem">
                        <Outlet />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default App;
