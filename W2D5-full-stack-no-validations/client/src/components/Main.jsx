import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Main = (props) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/movies")
            .then(res => {
                console.log(res.data);
                setMovies(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <p>
                {/* {JSON.stringify(movies)} */}
            </p>
            {
                movies.map((oneMovie) => {
                    return (
                        <div key={oneMovie._id}>
                            <Link to={"/movies/" + oneMovie._id}>
                                <h3>{oneMovie.title}</h3>
                            </Link>
                            <img src={oneMovie.image} width="150px" alt="" />
                            <p>released: {oneMovie.releaseYear}</p>
                            <p>have you seen this? {oneMovie.seen ? "yes" : "no"}</p>
                            <hr />
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Main;