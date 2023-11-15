import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Update = (props) => {

    const navigate = useNavigate();
    const { id } = useParams();

    const [errors, setErrors] = useState([]);
    const [inputObject, setInputObject] = useState({
        title: "",
        content: "",
        isImportant: false
    });

    const handleInputs = (e) => {
        // console.log("hi", e.target.name)
        setInputObject({
            ...inputObject,
            [e.target.name]: e.target.name === "isImportant" ? e.target.checked : e.target.value
        });
    };

    useEffect(() => {
        axios.get("http://localhost:8000/api/notes/" + id)
            .then(res => {
                console.log(res.data);
                setInputObject(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    // UPDATE form submission
    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(inputObject)

        axios.patch(`http://localhost:8000/api/notes/${id}`, inputObject)
            .then(res => {
                console.log(res.data);
                navigate("/");
            })
            .catch(err => {
                console.log(err);
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message);
                }
                // Set Errors
                setErrors(errorArr);
            });
    };

    return (
        <>
            {/* <div>{JSON.stringify(inputObject)}</div> */}

            <form onSubmit={submitHandler}>
                <div >
                    Title:
                    <input name='title' onChange={handleInputs} value={inputObject.title} />
                </div>
                <div>
                    content:
                    <textarea name="content" col="10" rows="3" onChange={handleInputs} value={inputObject.content}></textarea>
                </div>
                <div>
                    important:
                    <input name="isImportant" type='checkbox' onChange={handleInputs} checked={inputObject.isImportant} />
                </div>
                {errors.map((err, index) => <p key={index}>{err}</p>)}

                <p></p>
                <button>UPDATE</button>
            </form>
        </>
    );
};

export default Update;