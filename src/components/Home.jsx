import React , {useState , useReducer} from 'react';
import './Home.css';
import Menu from './Menu.jsx';
import TodoBlock from './Todo-block.jsx';
import Reducer from './Reducer.jsx';



const Home = () =>{
    const [listState , setListState] = useState([
        {id:0 , title : 'Study' , color : "green" , info : [
            {id:0 , status : false , text : "Учить англ"},
            {id:1 , status : true , text : "не учить англ"},
        ]},
        {id:1 , title : 'Work' , color : "pink" , info : [
            {id:0 , status : true , text : "Пойти на работу"},
            {id:1 , status : true , text : "Вернутся из работы"},
        ]},
    ])
    const [state , dispach] = useReducer(Reducer , listState)
    
    return(
        <div className='conteiner'>
            <Menu listState = {state}/>
           
            <TodoBlock />

            {/* Надо сделать:
                1.useContext передовать функцию который будет менят todo block контент
                2.добавления новый list  */}
        </div>
    )
}

// #fef0ce
// #e6794d

export default Home;
