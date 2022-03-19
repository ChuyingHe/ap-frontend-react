import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

function LandingPage() {
    return ( <>
        <Container>
            <Row>
                <Col>
                    <div className="font-roboto-medium">
                        The title of the landing page
                    </div>
                </Col>
            </Row>
        </Container>
    </> );
}

export default LandingPage;