import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const OneMovie = (props) => {

    const { id } = useParams();

    useEffect(() => {
        axios.get("http://localhost:8000/api/movies/" + id)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }, [id]);

    return (
        <div>OneMovie</div>
    );
};

export default OneMovie;