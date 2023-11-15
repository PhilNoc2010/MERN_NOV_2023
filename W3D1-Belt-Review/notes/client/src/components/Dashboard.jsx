import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const noteDiv = {
    backgroundColor: "lightyellow",
    outline: "1px solid black",
    padding: "10px",
    width: "80%",
    marginBottom: "10px",
};

const Dashboard = (props) => {

    const navigate = useNavigate();
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/notes")
            .then(res => {
                console.log(res.data);
                setNotes(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    const goToEditPage = (id) => {
        navigate(`/notes/${id}/edit`);
    };

    // DELETE
    const deleteMe = (delete_id) => {
        console.log(delete_id);
        axios.delete("http://localhost:8000/api/notes/" + delete_id)
            .then(res => {
                console.log(res.data);
                const filteredNotes = notes.filter((eachElement) => {
                    return eachElement._id !== delete_id;
                });
                setNotes(filteredNotes);
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            {/* {JSON.stringify(notes)} */}

            {
                notes.map((noteObject) => {
                    return (
                        <div style={noteDiv} key={noteObject._id}>

                            <h2>
                                <Link to={"/notes/" + noteObject._id}>

                                    <span>{noteObject.isImportant ? "📌" : ""}</span>{noteObject.title}
                                </Link>
                            </h2>
                            <p>{noteObject.content}</p>
                            <p>{noteObject.createdAt}</p>
                            <button onClick={() => goToEditPage(noteObject._id)}>Edit</button>
                            <button onClick={() => navigate(`/notes/${noteObject._id}/edit`)}>Edit</button>
                            <button onClick={() => deleteMe(noteObject._id)}>Delete</button>
                        </div>
                    );
                })
            }

        </div>
    );
};

export default Dashboard;