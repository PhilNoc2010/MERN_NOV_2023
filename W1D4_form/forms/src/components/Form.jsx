import { useState } from 'react';

const Form = (props) => {

    // CREATE STATE VARS for this component / for the inputs
    const [animal, setAnimal] = useState("");
    const [zoo, setZoo] = useState(["🦛", "🐄", "🦆"]);

    // form submit function
    const createAnimal = (e) => {
        e.preventDefault();
        console.log(animal);
        setZoo([...zoo, animal]);
        // reset state
        setAnimal("");
    };

    const checkAnimalName = (theValue) => {
        console.log("hello", theValue);
        setAnimal(theValue);
        // check the length
        if (theValue.length >= 5) {
            console.log("🎈🎈🎈🎈🎈🎈", theValue.length)
        }

    };

    return (
        <fieldset>
            <legend>Form.jsx</legend>
            animal: {JSON.stringify(animal)} <br />
            zoo: {JSON.stringify(zoo)} <br />

            <p>
                input is: {animal}
            </p>

            <form onSubmit={createAnimal}>
                <div>
                    enter animal emoji:
                    <input onChange={(e) => checkAnimalName(e.target.value)} value={animal} />
                    {/* <input onChange={checkAnimalName} value={animal} /> */}
                    {/* check if the input has enough letters */}
                    {animal.length >= 5 ? <p style={{ backgroundColor: "red" }}>this is cool!</p> : <p>"please put some more letters"</p>}
                </div>

                <button>create</button>
            </form>

            <hr />
            {
                zoo.map((elem, i) => {
                    return (
                        <div key={i}>
                            <span>
                                {elem}
                            </span>
                        </div>
                    );
                })
            }
        </fieldset>
    );
};

export default Form;