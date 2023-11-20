import React, { useState } from 'react';
import './Todo-block.css';
import '../fonts/Montserrat-Medium.ttf';
import '../fonts/Raleway-Medium.ttf';

import '../fonts/Oswald-Light.ttf';
import { stateContext } from './Home';
import svgPlus from '../assets/plus.svg'


const TodoBlock = (props) =>{
    const [inputValue , setInputValue] = useState('');
    const context = React.useContext(stateContext);
    const currentData = props.currentPageId < 3 ? context.state.todo.find(t => t.id == props.currentPageId) : context.state.todoList.find(t => t.id == props.currentPageId)
    
    const checkFc = (id)=>{
        context.dispach({
            type :'check-todoList' ,
            parentId: props.currentPageId,
            id: id
        })
    }
    const addTask = ()=>{
        setInputValue('');
        context.dispach({
            type :'add' ,
            parentId: props.currentPageId,
            newTaskText: inputValue
        })
    }
    return(
        <div className='todo-block'>
            <h2 className="todo-block__title">Todo</h2>
            <div className="todo-block__todos">
                {currentData.info.map(elem => <div className={elem.status ? 'todo-block__todo checked' :'todo-block__todo'} key={elem.id} style={{order: elem.status ? currentData.info.length : "0"}}>
                    <span className={elem.status ? 'todo-block__checkbox checked' : 'todo-block__checkbox'} onClick={()=> checkFc(elem.id)} ></span> {elem.text} 
                </div>)}
            </div>
            <div className={inputValue.length > 0  ? "todo-add active" : "todo-add"}>
                <input type="text" name="todo" className='todo-add__input' value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/> {/*  не забыть сделать привязку */} 
                    
                <div className={inputValue.length > 0  ? "todo-add__btn active" :"todo-add__btn"} onClick ={ addTask}>{/*  надо сделать что бы менял цвет при написании */}
                    <span>+</span>
                </div>

            </div>
           
        </div>
    )
}


export default TodoBlock;
