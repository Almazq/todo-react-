import React , {useState , useReducer, useEffect} from 'react';
import './Home.css';
import Menu from './Menu.jsx';
import TodoBlock from './Todo-block.jsx';
import {reducer} from './Reducer.jsx';
import {initialState} from './Reducer.jsx';



export const stateContext = React.createContext({});

const Home = (props) =>{
    const [currentPageId , setCurrentPageId] = useState(0);
    const [statusSetLocalStorage , setStatusSetLocalStorage] = useState(false);
    const [localStorageState , setLocalStorageState] = useState(JSON.parse(localStorage.getItem('todo')) == null ? initialState : JSON.parse(localStorage.getItem('todo')));
    const [state , dispach] = useReducer(reducer , localStorageState);
    
    useEffect(()=>{
       localStorage.setItem("todo" , JSON.stringify(state))
    }, [state])
    return(
        <div className='conteiner' style={{background:props.isThemsDay ? "#fff" : "rgb(251 255 213)"}}>
            <stateContext.Provider value={{state , dispach}}>
                <Menu  setCurrentPageId= {setCurrentPageId} currentPageId = {currentPageId}/>
                <TodoBlock currentPageId = {currentPageId} />

            </stateContext.Provider>
        </div>
    )
}


export default Home;
