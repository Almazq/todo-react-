import React, { useState } from 'react';
import './Todo-block.css';
import '../fonts/Montserrat-Medium.ttf';
import '../fonts/Raleway-Medium.ttf';

import '../fonts/Oswald-Light.ttf';
import { stateContext } from './Home';
import svgDelete from '../assets/delete.svg'


const TodoBlock = (props) =>{
    const [inputValue , setInputValue] = useState('');
    const [showSctickyAdd , setShowSctickyAdd] = useState(false);

    const context = React.useContext(stateContext);
    const currentData = props.currentPageId < 3 ? context.state.todo.find(t => t.id == props.currentPageId) : context.state.todoList.find(t => t.id == props.currentPageId)
    const checkFc = (id)=>{
        
        context.dispach({
            type : props.currentPageId > 2 ?  'check-todoList' : 'check-todo',
            parentId: props.currentPageId,
            id: id
        })
    }
    const addTask = ()=>{
        if(inputValue.length > 0){
            setInputValue('');
            context.dispach({
                type : props.currentPageId > 2 ? 'add-todoList' : 'add-todo',
                parentId: props.currentPageId,
                newTaskText: inputValue
            })
        }
        
        
    }
    const deleteTask = (id)=>{
        context.dispach({
            type : props.currentPageId > 2 ? 'delete-todoList' :  'delete-todo',
            parentId: props.currentPageId,
            id: id
        })
    }
    return(
        <div className='todo-block'>
            <h2 className="todo-block__title">Todo</h2>
            <div className="todo-block__todos">
                {currentData.info.map(elem => <div className={elem.status ? 'todo-block__todo checked' :'todo-block__todo'} key={elem.id} style={{order: elem.status ? currentData.info.length : "0"}}>
                    <span className={elem.status ? 'todo-block__checkbox checked' : 'todo-block__checkbox'} onClick={()=> checkFc(elem.id)} ></span> <div className="task-text">{elem.text} </div>
                    <div className="delete-task" onClick={()=> deleteTask(elem.id)}><img src={svgDelete} alt="delete"/></div>
                </div>)}
            </div>
            <div className={ showSctickyAdd ? "sticky-add active" : "sticky-add" }>
                <div className="sticly-add__conteiner">
                    <textarea name="sticky-task" cols="30" rows="5" className='sticky-add__textarea' maxlength="320"></textarea>
                    <button className='sticly-add__button'></button>
                </div>
            </div>
            {props.currentPageId === 2 ? 
            
            <div className="sticky-add-btn" onClick={()=> setShowSctickyAdd(!showSctickyAdd)}>
                <span >+</span>
            </div>
            : 
            <div className={inputValue.length > 0  ? "todo-add active" : "todo-add"}>
                <input type="text" name="todo" className='todo-add__input' value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
                    
                <div className={inputValue.length > 0  ? "todo-add__btn active" :"todo-add__btn"} onClick ={ addTask}>
                    <span>+</span>
                </div>

            </div>
            }
           
        </div>
    )
}


export default TodoBlock;
