import React from 'react';

const Display = (props) => {
    return (
        <fieldset>
            <legend>Display</legend>
            {
                props.people.map((person, i) => {
                    return <div key={i} style={{backgroundColor: person.color}}>
                        <h3>{person.name}</h3>
                        <p>height: {person.height} ft</p>
                    </div>
                })
            }
        </fieldset>
    );
};

export default Display;