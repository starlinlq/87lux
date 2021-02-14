import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

const Platforms = () => {
  return (
    <Container className="platforms">
      <span className="platforms__title">PLATFORMS</span>
      <Row className="justify-content-md-center platforms__row">
        <Col md="auto" xs>
          <Image
            src="/shopify.svg"
            alt="shopify"
            width={160}
            height={110}
            quality={100}
          />
        </Col>
        <Col md="auto" xs>
          <Image
            src="/wordpress.svg"
            alt="wordpress"
            width={160}
            height={110}
            quality={100}
          />
        </Col>
        <Col md="auto" xs>
          <Image
            src="/bigcommerce.svg"
            alt="big-commerce"
            width={160}
            height={110}
            quality={100}
          />
        </Col>
        <Col md="auto" xs>
          <Image
            src="/wix.svg"
            alt="wix"
            width={150}
            height={110}
            quality={100}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Platforms;
