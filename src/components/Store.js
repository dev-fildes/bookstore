import React from 'react';
import Navigation from "./Navigation";
import PromotionBar from "./PromotionBar";
import Footer from "./subcomponents/Footer";

export const Store = () => {
    return (
        <div className={'container'}>
            <div className="main">
                <Navigation/>

                <div className="rightSide">
                    <PromotionBar/>

        <div className={'store'}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-xs-6">
                        <div className="list mb-2">
                            <div className="list-header">
                            </div>
                            <div className="list-content" style={{margin:0}}>
                                <h2>Enigma</h2>
                                <span className="list-meta">
                    	<span className="list-meta-item"><i className="fa fa-clock-o"></i> 2020</span>
                    	<i className="fa fa-star"></i> $9.99
                    </span>
                                <p>The Abyss is where the mages who defied God were sealed away. Hundreds of years later
                                    the seal has weakened and someone emerges with no recollection of who they are or
                                    how they got there.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xs-6">
                        <div className="list mb-2">
                            <div className="list-header">
                            </div>
                            <div className="list-content" style={{margin:0}}>
                                <h2>Horrors Behind Heroics</h2>
                                <span className="list-meta">
                    	<span className="list-meta-item"><i className="fa fa-clock-o"></i> 2021</span>
                    	<i className="fa fa-star"></i> $6.99
                    </span>
                                <p>Everyone knows that an Adventurer has a lot of stories to share. The really famous
                                    ones
                                    have books written about them and their heroic feats. However, everyone seems to
                                    forget that those
                                    heroic sacrifices weren't so heroic at the time. A tale of the horrors one
                                    Adventurer endured and how nobody seems to remember
                                    books tend to leave the horrors out of heroics.</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>

                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Store;