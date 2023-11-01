import React from 'react';

const Display = (props) => {

    // const deleteHandler = (idx) => {
    //     // console.log("delete", idx);
    //     props.deletePerson(idx);
    // };

    // checkbox
    const changePowerUpStatus = (i) => {
        console.log(i);
        props.changeStatus(i);
    };

    return (
        <fieldset>
            <legend>Display</legend>
            {
                props.people.map((person, i) => {
                    return <div key={i} style={{ backgroundColor: person.color }}>
                        <h3>{person.name} - {person.havePowerUp ? "⭐" : "❌"}</h3>
                        <p>height: {person.height} ft</p>
                        <p>
                            has a powerUp?
                            <input
                                type="checkbox"
                                checked={person.havePowerUp}
                                onChange={() => changePowerUpStatus(i)}
                            />
                        </p>
                        <button onClick={() => props.deletePerson(i)}>delete</button>
                    </div>;
                })
            }
        </fieldset>
    );
};

export default Display;