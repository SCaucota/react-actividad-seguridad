import React, { useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Callback = () => {
    const { handleRedirectCallback } = useAuth0();
    const navigate = useNavigate();

    useEffect(() => {
        const processAuthentication = async () => {
            await handleRedirectCallback();
            navigate("/");
        };

        processAuthentication();
    }, [handleRedirectCallback, navigate]);

    return( <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }} >
                <Spinner animation="border" variant="dark" />
            </div>
    );
};

export default Callback;
