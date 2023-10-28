import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const LogoutPage = () => {

    return (
        <Container className='container mw-100 d-flex flex-column justify-content-center align-items-center' style={{ height: '84.5vh' }}>
            <Row className=" text-center border border-success p-5 text-success">
                <Col className="w-100" md={8}>
                    <h1>Haz Cerrado Sesión<noscript></noscript></h1>
                    <p>
                        La sesión ha sido cerrada correctamente.
                    </p>
                    <h5>¡Nos vemos la próxima!</h5>
                </Col>
            </Row>
        </Container>
    );
};

export default LogoutPage;
