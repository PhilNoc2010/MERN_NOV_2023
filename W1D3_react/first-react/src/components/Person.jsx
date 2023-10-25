import React from 'react';

const Person = (props) => {
    console.log(props);
    return (
        <fieldset>
            <legend>Person.jsx</legend>
            hello {props.personObj.name}
        </fieldset>
    );
};

export default Person;