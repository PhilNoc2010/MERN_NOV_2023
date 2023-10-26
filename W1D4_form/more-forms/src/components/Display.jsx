import React from 'react';

const Display = (props) => {

    const { carList } = props;

    return (
        <fieldset>
            <legend>Display.jsx</legend>
            {/* {JSON.stringify(carList)} */}
            {
                carList.map((car, i) => {
                    return <div key={i} style={{color: car.color}}>
                        model: {car.carModel} <br />
                        HP: {car.hp}
                    </div>
                })
            }
        </fieldset>
    );
};

export default Display;