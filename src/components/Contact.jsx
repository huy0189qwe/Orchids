// src/components/Contact.jsx
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const Contact = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="text-center mt-4">
      <h2>Contact Us</h2>
      <Button variant="primary" onClick={handleShow}>
        Show Contact Info
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Email: namvlpse173028@fpt.edu.vn</p>
          <p>Phone: +123 456 789</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Contact;