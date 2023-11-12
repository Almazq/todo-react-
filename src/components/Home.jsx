import React from 'react';
import './Home.css';
import Menu from './Menu.jsx';
import {Route , Routes} from 'react-router-dom';


const Home = () =>{
    return(
        <div className='conteiner'>
            <Menu />
            {/*  <Routes>
                    <Route path="/Profile/:userId" element={<ProfileConteiner />}/>
                </Routes> */}
            <div className="working-block"></div>
        </div>
    )
}

// #fef0ce
// #e6794d

export default Home;
