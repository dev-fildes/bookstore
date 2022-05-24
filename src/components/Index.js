import React from 'react';
import {Outlet} from "react-router-dom";
import '../stylesheet/Index.css';
import Navigation from './Navigation';
import PromotionBar from "./PromotionBar";
import Footer from './subcomponents/Footer';

export const Index = (props) => {
    return (
        <div className={'container'}>
            <div className="main">
                <Navigation/>

                <div className="rightSide">
                    <PromotionBar/>
                    <Outlet />
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default Index;