import React from 'react';
import './Todo-block.css';
import '../fonts/Montserrat-Medium.ttf';
import '../fonts/Oswald-Light.ttf';
import { stateContext } from './Home';


const TodoBlock = (props) =>{
    const context = React.useContext(stateContext);
    const currentData = props.currentPageId < 3 ? context.state.todo.find(t => t.id == props.currentPageId) : context.state.todoList.find(t => t.id == props.currentPageId)
    console.log(currentData)
    return(
        <div className='todo-block'>
            {currentData.info.map(elem => <div className='todo-block__todo' key={elem.id}>
                <input type="checkbox" name={elem.id}/> {elem.text} 
            </div>)}
        </div>
    )
}


export default TodoBlock;
