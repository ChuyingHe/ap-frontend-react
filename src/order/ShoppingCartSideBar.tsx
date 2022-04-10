// TODO: OffCanvas
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

function ShoppingCartSideBar({
  name,
  ...props
}: { name: string } & any) {
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement={'end'}
        name={'Shopping Cart'}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the
          elements you have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ShoppingCartSideBar;
