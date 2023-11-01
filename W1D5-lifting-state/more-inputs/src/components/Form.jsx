import { useState } from 'react';

const Form = (props) => {

    const [name, setName] = useState("");
    const [height, setHeight] = useState(1);
    const [color, setColor] = useState("");

    const createPerson = (e) => {
        e.preventDefault();

        const newPerson = {
            name,
            height,
            color,
            havePowerUp: false
        };

        console.log(newPerson);
        props.addPersonToPeople(newPerson);
    };

    return (
        <fieldset>
            <legend>Form</legend>

            <div>
                {JSON.stringify(name)} <br />
                {JSON.stringify(height)} <br />
                {JSON.stringify(color)}
            </div>

            <form onSubmit={createPerson}>
                <div>
                    name:
                    <input value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    height:
                    <input type='number' value={height} onChange={e => setHeight(e.target.value)} />
                </div>
                <div>
                    color:
                    <input value={color} onChange={e => setColor(e.target.value)} />
                </div>

                <button>add to party list 🥳</button>
            </form>

        </fieldset>
    );
};

export default Form;