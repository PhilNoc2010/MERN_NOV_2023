import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ShowOne = (props) => {
    const { id } = useParams();

    const [inputObject, setInputObject] = useState({
        title: "",
        content: "",
        isImportant: false
    });

    useEffect(() => {
        axios.get("http://localhost:8000/api/notes/" + id)
            .then(res => {
                console.log(res.data);
                setInputObject(res.data);
            })
            .catch(err => console.log(err));
    }, []);
    return (
        <div>
            {/* {JSON.stringify(inputObject)} */}
            <h2>{inputObject.title}</h2>
            <span>is this important?</span>
            {inputObject.isImportant ? "💥" : "no"}
        </div>
    );
};

export default ShowOne;