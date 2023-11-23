import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter} from 'react-router-dom';

function App() {
  const [isThemsDay, setIsThemsDay] = useState(true)
  const thems = {
    day:{object:"#e6794d" , background:"#ffecbf"},
    night:{object:"#B2dbd5" , background: '#1c2c58'}
  }
  return (
    <div className="App" style={{background: isThemsDay ? thems.day.background : thems.night.background}}>
      <span className='sonAndMoon' onClick={()=> setIsThemsDay(!isThemsDay)} style={{background: isThemsDay ? thems.day.object : thems.night.object , boxShadow: isThemsDay ?  "0px 0px 25px #e6794d" : "0px 0px 25px #FFF"}}></span>
      <BrowserRouter>
        <Home isThemsDay={isThemsDay}/> 
      </BrowserRouter>
    </div>
  );
}

export default App;
