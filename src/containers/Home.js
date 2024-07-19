import React from 'react';
import '../assets/css/Home.css';
import { Container, Row, Col } from 'react-bootstrap';
import PrincipalData from '../components/PrincipalData';
import SecondaryData from '../components/SecondaryData';

export default function Home() {

  return (
    <div className='home-page'>
      <Container>
        <Row>
          <Col>
            <PrincipalData></PrincipalData>
          </Col>
          <Col>
            <SecondaryData></SecondaryData>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
