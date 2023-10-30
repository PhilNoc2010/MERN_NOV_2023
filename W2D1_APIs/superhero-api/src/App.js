import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [heroes, setHeroes] = useState([]);

  // vanilla JS fetch
  const fetchHeroes = () => {
    fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then(serverResponse => {
        console.log(serverResponse);
        return serverResponse.json();
      })
      .then(actualServerRes => {
        console.log(actualServerRes);
        setHeroes(actualServerRes);
      })
      .catch(err => console.log(err));
  };

  // using axios
  const axiosHeroes = () => {
    axios.get("https://akabab.github.io/superhero-api/api/all.json")
      .then(res => {
        // ! axios wraps the res in it's own .data key
        console.log(res.data);
        setHeroes(res.data); // we know from the prev console log that this IS an array
      })
      .catch(err => console.log("❌❌❌❌❌❌❌", err));
  };

  return (
    <div className="App">
      <h1>superheroes 🦸🦸‍♂️🦹🦹‍♂️</h1>
      <button onClick={fetchHeroes}>fetch heroes</button> |
      <button onClick={axiosHeroes}>axios heroes</button> |

      <hr />
      {/* {JSON.stringify(heroes)} */}

      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>name</th>
            <th>full name</th>
            <th>publisher</th>
          </tr>
        </thead>
        <tbody>
          {
            heroes.map((hero) => {
              return (
                <tr key={hero.id}>
                  <td> <img src={hero.images.sm} alt={hero.name} width="80px" /></td>
                  <td>{hero.name}</td>
                  <td>{hero.biography.fullName ? hero.biography.fullName : "UNKNOWN"}</td>
                  <td>{hero.biography.publisher}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
