import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

const Themes = () => {
  return (
    <div className="themes">
      {" "}
      <Container className="themes__container">
        <div className="themes__rectangle">
          <div className="themes__title">
            {" "}
            <p>LASTEST PROJECTS</p>
          </div>
        </div>
        <Row className="themes__row ">
          <Col className="themes__col">
            <img src="/tab1.png" className="themes-img" />
          </Col>
          <Col className="themes__col">
            <img src="/tab2.png" className="themes-img" />
          </Col>
          <Col className="themes__col">
            <img src="/tab1.png" className="themes-img" />
          </Col>
        </Row>
        <div className="themes__buttons">
          <button>View Themes</button>
          <button>View apps</button>
        </div>
      </Container>
    </div>
  );
};

export default Themes;
