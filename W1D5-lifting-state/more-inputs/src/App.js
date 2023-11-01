import './App.css';
import { useState } from 'react';
import Display from './components/Display';
import Form from './components/Form';

function App() {

  const [people, setPeople] = useState([
    {
      name: "Mario",
      height: 7,
      color: "red",
      havePowerUp: true
    },
    {
      name: "Luigi",
      height: 8,
      color: "green",
      havePowerUp: false
    },
    {
      name: "Princess Peach",
      height: 6,
      color: "pink",
      havePowerUp: true
    },
  ]);

  // change powerUp status
  const changeStatus = (idx) => {
    const copyPeople = [...people];
    // console.log(copyPeople[idx].havePowerUp);
    // if (copyPeople[idx].havePowerUp === true) {
    //   copyPeople[idx].havePowerUp = false
    // } else {
    //   copyPeople[idx].havePowerUp = true
    // }
    copyPeople[idx].havePowerUp = !copyPeople[idx].havePowerUp;
    setPeople(copyPeople);
  };


  const deletePerson = (deleteIdx) => {
    // console.log("hello delete", deleteIdx)
    const filteredPeople = people.filter((element, idx) => {
      return idx !== deleteIdx;
    });
    console.log(filteredPeople);
    setPeople(filteredPeople);
  };

  // function to add to state
  const addPersonToPeople = (newPersonObj) => {
    console.log(newPersonObj);

    // update state
    setPeople([...people, newPersonObj]);
  };

  return (
    <fieldset className="App">
      <legend>App.js</legend>
      <h1>Lifting State 🏋️‍♂️</h1>
      {JSON.stringify(people)}
      <hr />
      <Form addPersonToPeople={addPersonToPeople} />
      <Display
        people={people}
        deletePerson={deletePerson}
        changeStatus={changeStatus}
      />
    </fieldset>
  );
}

export default App;
