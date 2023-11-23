import React , {useState , useReducer} from 'react';
import './Home.css';
import Menu from './Menu.jsx';
import TodoBlock from './Todo-block.jsx';
import {reducer} from './Reducer.jsx';
import {initialState} from './Reducer.jsx';



export const stateContext = React.createContext({});

const Home = (props) =>{
    const [currentPageId , setCurrentPageId] = useState(0)
    const [state , dispach] = useReducer(reducer , initialState);
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
