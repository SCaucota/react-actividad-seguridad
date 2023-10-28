import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const NotFound = () => {
    return (
        <Container className='container mw-100 d-flex flex-column justify-content-center align-items-center' style={{ height: '84.5vh' }}>
            <Row className=" text-center border border-danger p-5 text-danger">
                <Col className="w-100" md={8}>
                    <h1>Error 404 - Página no encontrada</h1>
                    <p>La página que estás buscando no existe.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;