import React from 'react';
import Weapon from './Weapon';

const Ninja = (props) => {

    const { ninja } = props;

    return <fieldset>
        <legend>Ninja.jsx</legend>
        <h2>Ninja</h2>
        <p>name: {ninja.name}</p>

        <Weapon />
    </fieldset>;
};

export default Ninja;