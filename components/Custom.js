import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
const Custom = () => {
  return (
    <Container className="custom">
      <Row className="custom__row-title">
        <Col>
          {" "}
          <h1 className="title">Need A Custom Solution?</h1>
        </Col>
      </Row>
      <Row className="custom__row-theme">
        <Col className="custom__col-theme">
          <ul>
            <li>
              <span>01</span> Install Theme
            </li>
            <li>02 Landing Page</li>
            <li>03 Build Online Store</li>
            <li>04 Custom Theme</li>
            <li>05 Custom WebSite</li>
            <li>06 Custom App</li>
            <li>07 Marketing Assets</li>
          </ul>
        </Col>
        <Col className="custom__col-tabs">
          <div className="custom__tabs">
            <div className="tab">
              <span>Install Theme</span>
            </div>
          </div>
          <div className="custom__themes">
            <div className="theme-1">
              <p>
                Having trouble with installing any of our themes? Well we can
                help you by installing the theme for you!
              </p>
            </div>
            <div className="theme-2">
              <img src="/girl3.png" />
            </div>
            <div className="theme-3">
              <img src="/girl2.png" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Custom;
