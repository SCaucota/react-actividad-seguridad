import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Container className='container mw-100 d-flex flex-column justify-content-center align-items-center' 
    style={{ height: '84.5vh'}}>
      <Card style={{ width: '20rem', margin: '0 auto', height: '12rem' }}>
        <Card.Body className='d-flex, flex-column text-center'>
          <Card.Title className='fs-3'>Iniciar Sesión</Card.Title>
          <Card.Text className='fs-5'>
            Haz clic en el botón de abajo para iniciar sesión o registrarte.
          </Card.Text>
          <Button variant="dark" onClick={() => loginWithRedirect()}>Iniciar Sesión</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LoginPage;