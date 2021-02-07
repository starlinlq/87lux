import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const NavBar = () => {
  return (
    <div className="navBar">
      <Container className="navBar__container">
        <Row className="align-items-md-center justify-content-md-between navBar__row ">
          <Col className="navBar__col " md="auto" xs>
            <h1 className="logo">87LUX</h1>
          </Col>
          <Col className="navBar__col" md="auto" xs>
            {" "}
            <span className="title">Themes Apps Assets Contact Us</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar;
