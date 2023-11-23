import React from 'react';
import './Menu.css';
import deleteImg from '../assets/delete.svg'
const List = (props) =>{
    return(
        <li className={props.currentPageId == props.id ? 'list active' : 'list'}> <div className="list-row" onClick={()=> props.setCurrentPageId(props.id)} ></div><span style={{background: props.color}}></span> {props.title} <div className='delete-list' onClick={()=> props.deleteList(props.id)}><img src={deleteImg} /></div></li>
    )
}

export default List;
