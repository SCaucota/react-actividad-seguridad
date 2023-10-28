import React from "react";
import Spinner from 'react-bootstrap/Spinner';
import { Container, Card, Image } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

const UserProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (!isAuthenticated) {
    return <p>Debes iniciar sesión para ver tu perfil.</p>;
  }

  if (isLoading) {
    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }} >
            <Spinner animation="border" variant="dark" />
        </div>
    )
}

  return (
    <Container className="mw-100 text-center d-flex justify-content-center align-items-center" style={{ height: '84.5vh', backgroundImage: 'url("https://res.cloudinary.com/dyktfxjer/image/upload/f_auto,q_auto/vxgl235wekcs4lmn6b9m")',
    backgroundSize: 'cover' }}>
      <Card style={{ width: "18rem", margin: "0 auto" }}>
        <Card.Body>
          <Image className="mb-4" src={user.picture} roundedCircle fluid alt="User profile" />
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>Email: {user.email}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UserProfile;
