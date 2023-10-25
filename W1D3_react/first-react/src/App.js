import './App.css';
import AnotherComponent from "./components/AnotherComponent";
import Person from './components/Person';

function App() {
  const x = 3;
  const message = "hello";
  const animals = ['🦁', '🦒', '🦓', '🐊'];

  const person = {
    name: "Bob",
    favFood: "🍝",
    age: 45
  };

  return (
    <fieldset>
      <legend>App.js</legend>
      <h1>{message} {x}</h1>

      <p>another p tag</p>
      {/* <AnotherComponent num={100}/> */}
      <AnotherComponent num={9001} animals={animals} />
      <Person personObj={person} name="John"/>
    </fieldset>
  );
}

export default App;
