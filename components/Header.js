import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Platforms } from "./";
const Header = () => {
  return (
    <section className="section">
      <Container className="header" fluid="lg">
        <Row className="header__row">
          <Col className="header__col-1">
            <h1 className="header__title">
              We Give Your Business an Edge Over Your Competitors!
            </h1>
            <p className="header__description">
              Everything you need for your business: Themes, Apps, Assets and
              More..
            </p>
            <input className="input" placeholder="Enter your email address" />
            <button className="button">Get Started</button>
          </Col>
          <Col className="header__col-2">
            <div className="polygon"></div>
            <div className="eclipe-1"></div>
            <div className="video">
              <img src="/header.png" className="img" alt="header" />
            </div>
            <div className="eclipe-2"></div>
          </Col>
        </Row>
      </Container>

      <Platforms />
    </section>
  );
};

export default Header;
