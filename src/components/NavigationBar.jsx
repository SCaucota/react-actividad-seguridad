import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { Navbar, Nav, Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

const NavigationBar = () => {
    const { user, isAuthenticated, loginWithRedirect, logout, isLoading } = useAuth0();

    if (isLoading) {
        return;
    }

    return (
        <Navbar className="p-4 d-flex justify-content-between" collapseOnSelect expand="md" bg="dark" variant="dark">
            <Navbar.Brand href="/">AppSecurity</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <div id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link className='fs-5' href="/">Inicio</Nav.Link>
                    <Nav.Link className='fs-5' href="/profile">Perfil</Nav.Link>
                </Nav>
            </div>
            <div className='d-flex'>
                <Nav.Link href='/profile'>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image style={{ width: '50px', height: '50px', marginRight: '12px' }} src={
                                user ? user.picture : 'https://res.cloudinary.com/dyktfxjer/image/upload/f_auto,q_auto/zonrzztz2fu7qfmzxzql'
                            } roundedCircle />
                        </Col>
                    </Row>
                </Nav.Link>
                <Navbar.Brand >
                    {!isAuthenticated ? (
                        <Button variant="light" onClick={() => loginWithRedirect()}>
                            Iniciar sesión
                        </Button>
                    ) : (
                        <Button
                            variant="danger"
                            onClick={() => logout({ returnTo: "http://localhost:3000/" })}
                        >
                            Cerrar sesión
                        </Button>
                    )}
                </Navbar.Brand>
            </div>
        </Navbar>
    );
};

export default NavigationBar;
