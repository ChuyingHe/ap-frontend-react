import React, { Component, useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function APHeader() {
  return (
    <div style={{margin: "auto", padding: "10px", textAlign: "center"}}>
      <Nav.Link as={Link} to="/home">
        <h1>🧼</h1>
      </Nav.Link>
    </div>
  );
  
}

export default APHeader;
