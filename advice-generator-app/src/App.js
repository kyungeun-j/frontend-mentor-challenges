import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import btnImg from './images/icon-dice.svg';
import desktopPattern from './images/pattern-divider-desktop.svg';
import mobilePattern from './images/pattern-divider-mobile.svg';


function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [apiData, setApiData] = useState({
    id:'', advice:''
  });

  const getApiData = async() => {
    return await axios.get('https://api.adviceslip.com/advice')
      .then(res => {
        setApiData({
          id: res.data.slip.id,
          advice: res.data.slip.advice
        });
      });
  }
  
  useEffect(() => {
    getApiData();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
  }, []);

  return (
    <div className="App">
      <main>
        <section>
          <h1>ADVICE # { apiData.id }</h1>
          <div>"{ apiData.advice }"</div>
          <img src={ windowWidth > 599 ? desktopPattern : mobilePattern }></img>
        </section>
        <span onClick={ () => getApiData() }>
          <img src={ btnImg }></img>
        </span>
      </main>
    </div>
  );
}

export default App;
