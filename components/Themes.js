import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

const Themes = () => {
  return (
    <div className="themes">
      {" "}
      <Container>
        <div className="themes__rectangle">
          <div className="themes__title">
            {" "}
            <p>LASTEST PROJECTS</p>
          </div>
        </div>
        <Row className="themes__row ">
          <Col className="themes__col">
            <Image
              src="/dashboard.png"
              alt="shopify"
              layout="fill"
              quality={100}
            />
          </Col>
          <Col className="themes__col">
            <Image
              src="/website.png"
              alt="shopify"
              layout="fill"
              quality={100}
            />
          </Col>
          <Col className="themes__col">
            <Image
              src="/website2.jpg"
              alt="shopify"
              layout="fill"
              quality={100}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Themes;
