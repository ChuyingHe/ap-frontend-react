import React, { useState, ChangeEvent } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { LoginStatus } from "../types/LoginModel";

const LoginControl: React.FC<LoginStatus> = (props) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");

  const handleValidation = (event: Event) => {
    console.log(event);
    let formIsValid = true;

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError("Email Not Valid");
      return false;
    } else {
      setemailError("");
      formIsValid = true;
    }

    if (!password.match(/^[a-zA-Z]{8,22}$/)) {
      formIsValid = false;
      setpasswordError(
        "Only Letters and length must best min 8 Chracters and Max 22 Chracters"
      );
      return false;
    } else {
      setpasswordError("");
      formIsValid = true;
    }

    return formIsValid;
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("on changed");
  };

  const loginSubmit = (event: Event) => {
    console.log("login info submitted!", event);

    event.preventDefault();

    handleValidation(event);

    const requestURL = process.env.REACT_APP_STRAPI_LOCAL + "/api/auth/local";

    // props.setLogin(false);
  };

  return (
    <Modal show={props.login}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Login Sie sich!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          id="loginform"
          onSubmit={(e) => loginSubmit(e.currentTarget.value)}
        >
          {/* EMAIL */}
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              id="loginformEmail"
              name="loginformEmail"
              placeholder="Enter email"
              aria-describedby="emailHelp"
              onChange={(event) => setEmail(event.target.value)}
              //  onChange={(event)=>onChange(event)}
            />
            <Form.Text
              id="loginformEmailHelp"
              className="text-danger form-text"
            >
              {emailError}
            </Form.Text>
          </Form.Group>

          {/* PASSWORD */}
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              id="loginformPW"
              name="loginformPW"
              placeholder="Password"
              aria-describedby="passworderror"
              onChange={(event) => setPassword(event.target.value)}
            />
            <Form.Text id="loginformPWError" className="text-danger form-text">
              {passwordError}
            </Form.Text>
          </Form.Group>

          {/* TODO: CHECKBOX: DATA */}
          <Form.Check
            type="checkbox"
            id="loginformCBData"
            label="Feel free to use my data for all the purpose!"
          />

          {/* TODO: CHECKBOX: SUBSCRIPTION */}
          <Form.Check
            type="checkbox"
            id="loginformCBSub"
            label="Subscribe to the news about new product, seasonal discounts and more!"
          />

          <Button type="submit" className="btn btn-primary">
            Login
          </Button>
        </Form>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
};

export default LoginControl;