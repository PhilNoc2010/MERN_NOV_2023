import { useState } from 'react';
import Display from './Display';
import Car from './Car';

const Form = (props) => {

    const [carModel, setCarModel] = useState("");
    const [hp, setHp] = useState(100);
    const [color, setColor] = useState("#fafafa");

    const [carList, setCarList] = useState(props.carList);

    const submitHandler = (e) => {
        e.preventDefault();

        const carObj = {
            carModel,
            hp,
            color
        };

        // add the carObj to the array state
        setCarList([...carList, carObj]);
        setCarModel("");
        setHp(100);
        setColor("#fafafa");

    };

    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <div>
                <u>state variables:</u> <br />
                carList: {JSON.stringify(carList)} <br />
                carModel: {JSON.stringify(carModel)} <br />
                hp: {JSON.stringify(hp)} <br />
                color: {JSON.stringify(color)} <br />
            </div>

            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor='model'>car model: </label>
                    <input id="model" type="text" onChange={(e) => setCarModel(e.target.value)} value={carModel} />
                </div>
                <div>
                    <label>hp: </label>
                    <input type="number" onChange={(e) => setHp(e.target.value)} value={hp} />
                </div>
                <div>
                    <label>color: </label>
                    <input type="color" onChange={(e) => setColor(e.target.value)} value={color} />
                </div>

                <p></p>
                <button>create car</button>
            </form >

            <hr />
            {/* <Display carList={carList} /> */}

            {
                carList.map((carObject, i) => {
                    return <Car key={i} carObject={carObject}/>;
                })
            }

        </fieldset>
    );
};

export default Form;