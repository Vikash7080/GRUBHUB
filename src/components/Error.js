import {useRouteError} from "react-router-dom";



const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1> Oops! Page Not Found</h1>
            <h2> 404 Error</h2>
            <h3> Please check the URL</h3>
            <h4> Go back to the Home Page</h4>
        </div>
    );
};
export default Error;