import React from 'react';
import './Menu.css';

const List = (props) =>{
    return(
        <li onClick={()=> props.setCurrentPageId(props.id)} className={props.currentPageId == props.id ? 'list active' : 'list'}><span style={{background: props.color}}></span> {props.title}</li>
    )
}

export default List;
