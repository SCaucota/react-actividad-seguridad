import React from "react";
import Spinner from 'react-bootstrap/Spinner';
import { Container, Row, Col } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

const HomePage = () => {

    const { user, isLoading } = useAuth0();

    if (isLoading) {
        return (
            <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }} >
                <Spinner animation="border" variant="dark" />
            </div>
        )
    }

    return (
        <Container 
            className='container mw-100 d-flex flex-column justify-content-center align-items-center' 
            style={{ height: '84.5vh', backgroundImage: 'url("https://res.cloudinary.com/dyktfxjer/image/upload/f_auto,q_auto/w2jz8maxuah0niq6k5fl")',
            backgroundSize: 'cover' }}
            >
            <Row className="justify-content-center text-center bg-light py-5 border border-dark">
                <Col className="w-100 px-5" md={8}>
                    <h1>Bienvenido a AppSecurity</h1>
                    <p>
                        Este sitio está diseñado únicamente como demsotración del uso de Auth0 con React.
                    </p>
                    <p>
                        {user && (
                            <div> {user.name} ({user.email}) </div>
                        )}
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;
