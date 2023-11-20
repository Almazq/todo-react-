import React  from 'react';
import './Menu.css';
import '../fonts/Montserrat-Medium.ttf';
import '../fonts/Oswald-Light.ttf';
import imgArrow from '../assets/arrow.svg';
import imgMenu from '../assets/menu.svg';
import imgSticker from '../assets/sticker.svg';
import List from './List';
import {stateContext} from './Home';

const Menu = (props) =>{
    const context = React.useContext(stateContext);
    return(
        <div className='menu-block'>
            <div className="menu-block-row">
                <h2>Menu</h2>
                <div className="task-block">
                    <ul>
                        <li onClick={()=> props.setCurrentPageId(0)}><img src={imgArrow} /> Upcoming</li>
                        <li onClick={()=> props.setCurrentPageId(1)}><img src={imgMenu} /> Today</li>
                        <li onClick={()=> props.setCurrentPageId(2)}><img src={imgSticker} /> Sticky Wall</li>
                    </ul>
                </div>
               
                <div className="list-block">
                    <p className="lists-title">lists</p>
                    <ul>
                        {context.state.todoList.map(elem => <List id={elem.id} currentPageId = {props.currentPageId} color = {elem.color} title= {elem.title} setCurrentPageId={props.setCurrentPageId}/>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

// #fef0ce
// #e6794d

export default Menu;
