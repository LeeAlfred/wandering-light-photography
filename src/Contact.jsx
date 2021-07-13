import React, { useEffect, useState} from "react";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function Contact (){

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (<div className="contact">
<Button variant="outline-secondary" onClick={handleShow}>
        Contact
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>How To Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>You can see more of my photos and get in touch via my <a href="https://instagram.com/wandering_light_photography?utm_medium=copy_link" target="_blank">my instagram Page</a></p></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
    );
}


export default Contact;