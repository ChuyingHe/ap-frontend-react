import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import './_LandingPage.scss';

function LandingPage() {
  return (
      <Container fluid className="font-josefinSans-medium">
        <Row>
          <Col className="landingpage-col-full">
            <h1 className="landingpage-title">
              This is our landingpage
            </h1>
            {/* <Image
              fluid
              src="/images/nadia-clabassi-JWCGHZcNXB4-unsplash.jpeg"
            ></Image> */}
          </Col>
        </Row>
      </Container>
  );
}

export default LandingPage;
