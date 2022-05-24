import React from 'react';
import {NavLink} from "react-router-dom";
import {FaHome} from "react-icons/fa";
import {FaUserCircle} from "react-icons/fa";
import {FaStore} from "react-icons/fa";

export const Navigation = (props) => {
    return(
        <div className="leftSide">
            <div className="thirdItem">
                <div className={'index-sidenav-contents'}>
                    <NavLink className="nav-link" to="/" title={'Home'}><FaHome className={'fonticon'}/></NavLink>
                    <NavLink className="nav-link" to="/about" title={'About'}><FaUserCircle className={'fonticon'}/></NavLink>
                    <NavLink className="nav-link" to="/about" title={'Store'}><FaStore className={'fonticon'}/></NavLink>
                </div>
            </div>
        </div>
    )
}
export default Navigation;