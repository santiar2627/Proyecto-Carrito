import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Login from './components/Login';

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">

      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Carrito Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Registros</Nav.Link>
            <NavDropdown title="Opciones" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cuenta</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Configuracion
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Registros</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Cerrar sesion 
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Accion</th>
          <th>Fecha</th>
          <th>Hora</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Hacia Adelante</td>
          <td>09/11/2022</td>
          <td>18:15</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Hacia Atras</td>
          <td>10/11/2022</td>
          <td>6:05</td>
        </tr>
        <tr>
        <td>3</td>
          <td>Hacia Adelante</td>
          <td>08/11/2022</td>
          <td>15:05</td>
        </tr>
      </tbody>
    </Table>

      <Button variant="primary" onClick={handleShow}>
        Iniciar sesion
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Login/>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
