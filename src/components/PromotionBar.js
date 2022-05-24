import React from 'react';
import {FaTrophy} from "react-icons/fa";
import {FaPlus} from "react-icons/fa";

export const PromotionBar = () => {
    return (
        <div className="menuItem">
            <div className={'promotionbar-container'}>
                <div className={'promotionbar-bestseller'}>
                    <FaTrophy className={'promotion-icon'}/>
                    <span className={'bestseller-text'}><b>Best Seller</b> — Enigma</span>
                </div>
                <div className={'promotionbar-break'}>
                </div>
                    <div className={'promotionbar-newest'}>
                        <FaPlus className={'promotion-icon'}/>
                        <span className={'bestseller-text'}><b>Newest Release</b> — Horrors Behind Heroics</span>
                    </div>
            </div>
        </div>
    )
}
export default PromotionBar;