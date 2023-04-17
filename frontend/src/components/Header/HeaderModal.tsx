import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

const HeaderModal = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleModalShow = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <Button
        variant="warning"
        onClick={handleModalShow}
        size="sm"
      >
        Feedback
      </Button>
      <Modal
        show={showModal}
        onHide={handleModalClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Feeback</Modal.Title>
        </Modal.Header>
        <Modal.Body as="h6">
          This take-home exercise is finished. The hardest thing
          to do was that I wanted to come up with an idea of
          custom fetch function as well as custom data format. I
          commented one thing in formatDate that I wanted to use
          but did not after all because believe me or not the api
          was not giving me things I wanted to get and I was
          short on time so decided not to use it. I did not make
          the translation, testing and theme toggler (was not
          asked to do) because I did not want to exceed the time
          limit.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default HeaderModal;
