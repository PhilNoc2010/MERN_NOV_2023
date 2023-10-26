import './App.css';
import Form from './components/Form';
import { useState } from 'react';

function App() {

  const [carList, setCarList] = useState(
    [
      { carModel: "Nissan", hp: 100, color: "red" },
      { carModel: "Audi", hp: 335, color: "blue" }
    ]
  );

  return (
    <fieldset className="App">
      <legend>App.js</legend>
      <Form carList={carList} />
    </fieldset>
  );
}

export default App;
