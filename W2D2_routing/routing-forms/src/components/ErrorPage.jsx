import { Link } from "react-router-dom";

const ErrorPage = () => {

    return (
        <>
            <h1>404 not found try again</h1>
            <Link to="/hero/form">go back to hero page</Link>
        </>
    );
};

export default ErrorPage;