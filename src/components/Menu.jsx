import React from 'react';
import './Menu.css';
import '../fonts/Montserrat-Medium.ttf';
import '../fonts/Oswald-Light.ttf';

import {NavLink} from 'react-router-dom';
import imgArrow from '../assets/arrow.svg';
import imgMenu from '../assets/menu.svg';
import imgSticker from '../assets/sticker.svg';
import List from './List';


const Menu = (props) =>{
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
                        {props.listState.map(elem => <List color = {elem.color} title= {elem.title} />)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

// #fef0ce
// #e6794d

export default Menu;
