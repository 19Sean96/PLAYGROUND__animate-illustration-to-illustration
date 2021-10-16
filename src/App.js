import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import MorphSVG from './components/MorphSVG'
import MorphSVG2 from './components/MorphSVG-2';

function App() {
  const [toggled, toggle] = useState(false);

  return (
    <div className="App" onClick={e => toggle(!toggled)}>
      {/* <MorphSVG 
        defaultType="rotational"
        toggled={toggled}
        origins={[
          "25% 44%, 67% 12%",
          "50% 10%, 25% 80%"
        ]}
        duration={7}
        delay={0}
        gradient={[
          '#000000',
          '#234111'
        ]}
        index={0}
      /> */}
      <MorphSVG 
        defaultType="rotational"
        toggled={toggled}
        origins={[
          "505% 505%, 205% 90%",
          "100% 100%, 0% 0%"
        ]}
        duration={3}
        delay={.075}
        gradient={[
          "#fdfc47",
          "#24fe41"
        ]}
        index={1}
      />
    </div>
  );
}

export default App;
