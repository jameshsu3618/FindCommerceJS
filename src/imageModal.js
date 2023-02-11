import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import CheckoutFlow from "./checkoutFlow";

const ImageModal = ({ imageUrl }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <img
        class="img img-1"
        onClick={() => setShow(true)}
        src={imageUrl}
        alt="click to open modal"
        style={{ cursor: "pointer" }}
      />
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Body>
            <CheckoutFlow handleCompleted={()=>setShow(false)}/>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ImageModal;