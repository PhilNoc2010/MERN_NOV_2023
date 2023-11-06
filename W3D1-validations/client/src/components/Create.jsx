import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = (props) => {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [releaseYear, setReleaseYear] = useState(1900);
    const [seen, setSeen] = useState(false);
    //Create an array to store errors from the API
    const [errors, setErrors] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("cool");
        const tempObjectToSendToDB = {
            title,
            image,
            releaseYear,
            seen
        };

        axios.post("http://localhost:8000/api/movies", tempObjectToSendToDB)
            .then(res => {
                console.log("✅✅✅✅✅", res.data);
                navigate("/");
            })
            .catch(err => {
                console.log("❌❌❌❌", err);
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message);
                }
                // Set Errors
                setErrors(errorArr);
            }
            );
    };

    return (
        <div>
            <div>
                {JSON.stringify(title)} <br />
                {JSON.stringify(image)} <br />
                {JSON.stringify(releaseYear)} <br />
                {JSON.stringify(seen)} <br />
                errors: {JSON.stringify(errors)}
            </div>
            <form onSubmit={submitHandler}>
                {errors.map((err, index) => <p style={{ color: "red" }} key={index}>{err}</p>)}
                <div>
                    title:
                    <input value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div>
                    image:
                    <input value={image} onChange={e => setImage(e.target.value)} />
                </div>
                <div>
                    release year:
                    <input type="number" value={releaseYear} onChange={e => setReleaseYear(e.target.value)} />
                </div>
                <div>
                    have you seen this?:
                    <input type="checkbox" checked={seen} onChange={e => setSeen(e.target.checked)} />
                </div>

                <p></p>
                <button>submit</button>
            </form>
        </div>
    );
};

export default Create;