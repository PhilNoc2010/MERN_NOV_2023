import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Hero = (props) => {

    // create state var to hold the hero here
    const [hero, setHero] = useState(null);

    const navigate = useNavigate();

    // extract the url variable
    const { heroId } = useParams();
    console.log(heroId);

    useEffect(() => {
        axios.get("https://akabab.github.io/superhero-api/api/id/" + heroId + ".json")
            .then(res => {
                console.log(res.data);
                setHero(res.data);
            })
            .catch(err => {
                console.log("❌❌❌❌", err);
                navigate("/error");
            });
    }, []);

    return (
        <fieldset>
            <legend>Hero.jsx</legend>
            {/* {JSON.stringify(hero)} */}

            {
                hero ? (
                    <div>
                        <h2>{hero.name}</h2>
                        <img src={hero.images.sm} alt={hero.name} />
                    </div>
                ) : <h2>Loading...</h2>
            }

        </fieldset>
    );
};

export default Hero;