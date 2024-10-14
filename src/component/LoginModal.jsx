import React, { useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import { PersonFill, LockFill } from 'react-bootstrap-icons';

const LoginModal = ({ show, handleClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Replace with your API endpoint
      const response = await fetch(
        "https://api-demo-4gqb.onrender.com/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

      if (!response.ok) {
        throw new Error("Wrong Password");
      }

      const data = await response.json();
      console.log("Login successful:", data);
      // Handle successful login (e.g., store token, redirect, etc.)

      handleClose(); // Close the modal after successful login
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleLogin}>
          <Form.Group
            className="mb-3 d-flex align-items-center"
            controlId="formBasicEmail"
          >
            <Form.Label className="me-2">
              <PersonFill />
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Account"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group
            className="mb-3 d-flex align-items-center"
            controlId="formBasicPassword"
          >
            <Form.Label className="me-2">
              <LockFill />
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
{/* 
         <Form.Text className="text-muted">
            <a href="#forgot-password">Forgot Password?</a>
          </Form.Text>
           */}
        </Form>
      </Modal.Body>
      <Modal.Footer className="d-flex align-items-center">
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleLogin} disabled={loading}>
          {loading ? "Loading..." : "Login"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;