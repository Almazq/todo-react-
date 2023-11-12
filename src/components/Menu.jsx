import React from 'react';
import './Menu.css';
import '../fonts/Montserrat-Medium.ttf';
import '../fonts/Oswald-Light.ttf';

import {NavLink} from 'react-router-dom';
import imgArrow from '../assets/arrow.svg';
import imgMenu from '../assets/menu.svg';
import imgSticker from '../assets/sticker.svg';


const Menu = () =>{
    return(
        <div className='menu-block'>
            <div className="menu-block-row">
                <h2>Menu</h2>
                <div className="task-block">
                    <ul>
                        <li><NavLink to='/Upcoming'><img src={imgArrow} /> Upcoming</NavLink></li>
                        <li><NavLink to='/Today'><img src={imgMenu} /> Today</NavLink></li>
                        <li><NavLink to='/StickyWall'><img src={imgSticker} /> Sticky Wall</NavLink></li>
                    </ul>
                </div>
               
                <div className="list-block">
                    <p className="lists-title">lists</p>
                    <ul>
                        <li><NavLink to='/list?Work'><span></span> Work</NavLink></li>
                        <li><NavLink to='/list?Study'><span></span> Study</NavLink></li>
                        {/* что надо сделать :
                                1.Создать state для хранения list параметры title , color , link , object
                                2.настройт router

                        
                        */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

// #fef0ce
// #e6794d

export default Menu;
