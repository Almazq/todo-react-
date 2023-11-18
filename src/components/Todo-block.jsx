import React, { useState } from 'react';
import './Todo-block.css';
import '../fonts/Montserrat-Medium.ttf';
import '../fonts/Raleway-Medium.ttf';

import '../fonts/Oswald-Light.ttf';
import { stateContext } from './Home';


const TodoBlock = (props) =>{
    const context = React.useContext(stateContext);
    const currentData = props.currentPageId < 3 ? context.state.todo.find(t => t.id == props.currentPageId) : context.state.todoList.find(t => t.id == props.currentPageId)
    
    const checkFc = (id)=>{
        context.dispach({
            type :'check-todoList' ,
            parentId: props.currentPageId,
            id: id
        })
    }
    console.log(currentData.info)
    return(
        <div className='todo-block'>
            <h2 className="todo-block__title">Todo</h2>
            <div className="todo-block__todos">
                {currentData.info.map(elem => <div className={elem.status ? 'todo-block__todo checked' :'todo-block__todo'} key={elem.id}>
                    <span className={elem.status ? 'todo-block__checkbox checked' : 'todo-block__checkbox'} onClick={()=> checkFc(elem.id)} ></span> {elem.text} 
                </div>)}
            </div>
           
        </div>
    )
}


export default TodoBlock;
