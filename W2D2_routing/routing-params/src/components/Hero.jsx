import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Hero = (props) => {

    // grab the variable form the URL 
    const { heroNumber } = useParams();
    console.log(heroNumber);

    useEffect(() => {
        axios.get(`https://akabab.github.io/superhero-api/api/id/${heroNumber}.json`)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }, []);


    return (
        <fieldset>
            <legend>Hero.jsx</legend>
            <h3>HEROES 🦸‍♂️🦸‍♀️🦹🦹‍♀️</h3>
        </fieldset>
    );
};

export default Hero;