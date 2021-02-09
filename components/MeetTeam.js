import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
function MeetTeam() {
  return (
    <Container className="team">
      <div className="team__circle">
        <img src="/pic1.png" className="img" alt="team1" />
      </div>
      <div className="team__circle">
        <img src="/pic2.png" className="img" alt="team2" />
      </div>
      <div className="team__circle">
        <img src="/pic3.png" className="img" alt="team3" />
      </div>
      <div className="team__circle">
        <img src="/pic4.png" className="img" alt="team4" />
      </div>
      <div className="team__circle">
        <img src="/pic5.png" className="img" alt="team5" />
      </div>
      <div className="team__circle">
        <img src="/pic6.png" className="img" alt="team6" />
      </div>
      <div className="team__circle">
        <img src="/pic7.png" className="img" alt="team7" />
      </div>
      <h1 className="team__title">Meet The Team</h1>
    </Container>
  );
}

export default MeetTeam;
