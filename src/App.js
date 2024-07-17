import "./App.css";
import { useState } from "react";

function App() {
const [colors, setColors ] = useState('') 
  return (
    <div>
      <div id="trafficTop">
        <img src="traffic-light-solid-icon.jpg" />
      </div>
      <div id="container">
        <div id="light-red">
          <img className={colors === 'red' ? 'light-red-selected' : 'light-red'} onClick={() => colors === 'red' ? setColors('') : setColors('red')}
           src="trafficlight-red.png" alt=""/>
        </div>
        <div id="light-green">
          <img className={colors === 'green' ? 'light-green-selected' : 'light-green'} onClick={() => colors === 'green' ? setColors('') : setColors('green')}
          src="trafficlight-green.png" alt="" />
        </div>
        <div id="light-yellow">
        <img className={colors === 'yellow' ? 'light-yellow-selected' : 'light-yellow'} onClick={() => colors === 'yellow' ? setColors('') : setColors('yellow')}
          src="trafficlight-yellow.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
