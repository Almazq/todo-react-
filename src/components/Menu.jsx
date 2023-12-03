import React, { useState }  from 'react';
import './Menu.css';
import '../fonts/Montserrat-Medium.ttf';
import '../fonts/Oswald-Light.ttf';
import imgArrow from '../assets/arrow.svg';
import imgMenu from '../assets/menu.svg';
import imgSticker from '../assets/sticker.svg';
import List from './List';
import {stateContext} from './Home';

const Menu = (props) =>{
    const [stateAddBlock , setStateAddBlock] = useState(true);
    const [valueInput , setValueInput] = useState('');

    const [choiceColorBlock , setChoiceColorBlock] = useState(false);
    const [choiceColor , setChoiceColor] = useState('green');


    const context = React.useContext(stateContext);
    const showChoiceBlock = ()=>{
        setChoiceColorBlock(!choiceColorBlock)
    }
    const inputChange = (e)=>{
        if(valueInput.length < 15) setValueInput(e.target.value);
    }
    const addList = ()=>{
        if(valueInput.length > 0 ){
            context.dispach({
                type : 'add-list',
                title: valueInput,
                color: choiceColor
            })
            setValueInput('');
            setChoiceColor('green');
            setStateAddBlock(true)
        }
        
    }
    const showInputBlock = ()=>{
        if(context.state.todoList.length < 4){
            setStateAddBlock(false)
        }else{
            alert("limit 4")
        }
    }
    const deleteList = (id)=>{
        context.dispach({
            type : 'delete-list',
            id: id,
        })
        if(props.currentPageId == id){
            props.setCurrentPageId(0);
        }
    }
    return(
        <div className='menu-block'>
            <div className="menu-block-row">
                <h2>Menu</h2>
                <div className="task-block">
                    <ul>
                        <li onClick={()=> props.setCurrentPageId(0)} className={props.currentPageId == 0 ? 'menuItem active' : 'menuItem'}><img src={imgArrow} /> Upcoming</li>
                        <li onClick={()=> props.setCurrentPageId(1)} className={props.currentPageId == 1 ? 'menuItem active' : 'menuItem'}><img src={imgMenu} /> Today</li>
                        <li onClick={()=> props.setCurrentPageId(2)} className={props.currentPageId == 2 ? 'menuItem active' : 'menuItem'}><img src={imgSticker} /> Sticky Wall</li>
                    </ul>
                </div>
               
                <div className="list-block">
                    <p className="lists-title">lists</p>
                    <ul>
                        {context.state.todoList.map(elem => <List id={elem.id} currentPageId = {props.currentPageId} color = {elem.color} title= {elem.title} setCurrentPageId={props.setCurrentPageId} deleteList={deleteList}/>)}
                    </ul>
                    <div className={stateAddBlock ?  "list-block__add" : "list-block__add active" } >
                        {
                            stateAddBlock ?  
                                <div className="list-block__add-btn" onClick={showInputBlock}>
                                    <span>+</span> Add list
                                </div> 
                            :
                                <div className="list-block__add-input" >
                                    <div className='list-colors' onClick={showChoiceBlock} style={{borderRadius: choiceColorBlock ? '0px 0px 5px 5px ' : "5px" }}>
                                        <div className={choiceColorBlock ? "item-colors active" : "item-colors"}>
                                            <span style={{background:'red'}} onClick={()=> setChoiceColor('red')}></span>
                                            <span style={{background:'purple'}}  onClick={()=> setChoiceColor('purple')}></span>
                                            <span style={{background:'pink'}} onClick={()=> setChoiceColor('pink')}></span>
                                            <span style={{background:'blue'}} onClick={()=> setChoiceColor('blue')}></span>
                                            <span style={{background:'green'}} onClick={()=> setChoiceColor('green')}></span>
                                        </div>
                                        <div className='list-colors__choice-color' style={{background: choiceColor}} ></div>

                                    </div>
                                    <input type="text" className='list-block__input' placeholder='Name' value={valueInput} onChange={ (e)=> inputChange(e)}/>
                                    <div className="list-add-btn" onClick={addList}>+</div>
                                </div>
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

// #fef0ce
// #e6794d

export default Menu;
