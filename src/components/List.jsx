import React from 'react';
import './Menu.css';
import {NavLink} from 'react-router-dom';

const List = (props) =>{
    return(
        <li onClick={()=> props.setCurrentPageId(props.id)}><span style={{background: props.color}}></span> {props.title}</li>
    )
}

export default List;
