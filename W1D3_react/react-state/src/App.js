import './App.css';
import { useState } from 'react';

function App() {
  const ninja = {
    name: "Raphael",
    powerLevel: 100
  };

  // CREATE STATE FOR THIS COMPONENT
  const [num, setNum] = useState(11);
  const [ninjaObj, setNinjaObj] = useState(ninja);


  // increment function
  const incrementNum = () => {
    // this function changes the STATE
    setNum(num + 1);
    console.log(num); // ! we cannot see this change bc setState is async
  };

  // ninja level up
  const ninjaLevelUP = () => {
    setNinjaObj({ ...ninjaObj, powerLevel: ninjaObj.powerLevel + 1 });
  };

  return (
    <div className="container">
      <h1>state</h1>
      num is {num}
      <p>
        <button onClick={incrementNum}>increment</button>
      </p>

      <hr />
      {JSON.stringify(ninjaObj)}

      <p>Ninja's power is {ninjaObj.powerLevel}</p>
      <button onClick={ninjaLevelUP}>level up</button>

    </div>
  );
}

export default App;
