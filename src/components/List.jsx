import React from 'react';
import './Menu.css';
import {NavLink} from 'react-router-dom';

const List = (props) =>{
    return(
        <li><NavLink to={'/list?' + props.title }><span style={{background: props.color}}></span> {props.title}</NavLink></li>
    )
}

export default List;
