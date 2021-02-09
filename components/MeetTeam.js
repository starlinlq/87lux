import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
function MeetTeam() {
  return (
    <Container className="team">
      <div className="team__circle"></div>
      <div className="team__circle"></div>
      <div className="team__circle"></div>
      <div className="team__circle"></div>
      <div className="team__circle"></div>
      <div className="team__circle"></div>
      <div className="team__circle"></div>
      <h1 className="team__title">Meet The Team</h1>
    </Container>
  );
}

export default MeetTeam;
